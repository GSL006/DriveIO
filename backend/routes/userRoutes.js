const express = require('express');
const router = express.Router();
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Charizard@123',
    database: 'Car_Rental'
});
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database.');
});

router.post('/register', async (req, res) => {
    console.log('Received data:', req.body);

    const { userType, fname, lname, email, password, phone, address, licenseNumber, aadhar } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log('Hashed password:', hashedPassword);

        const query = userType === 'customer' ?
            `INSERT INTO Customers (fname, lname, customer_email, customer_h_password, phone_number, c_addr, DL, Adhaar_num)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)` :
            `INSERT INTO Owners (fname, lname, owner_email, owner_h_password, phone_number, o_addr, DL, Adhaar_num)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

        const values = userType === 'customer' ?
            [fname, lname, email, hashedPassword, phone, address, licenseNumber, aadhar] :
            [fname, lname, email, hashedPassword, phone, address, licenseNumber, aadhar]; // Removed regNumber

        console.log('Executing query with values:', values);

        db.query(query, values, (err, result) => {
            if (err) {
                console.error('Database error code:', err.code);
                console.error('Database error message:', err.sqlMessage);
                return res.status(500).json({ message: err.sqlMessage });
            }
            res.status(201).send(`${userType} registered successfully`);
        });
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).send('Internal server error');
    }
});

module.exports = router; 
