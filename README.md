Certainly! Based on the details you've provided and the structure of your project, here's a comprehensive `README.md` file tailored for your DriveIO car rental platform:

---

# 🚗 DriveIO – Peer-to-Peer Car Rental Platform

DriveIO is a full-stack car rental solution where users can sign up as owners to list their vehicles or as customers to book them. Built with Next.js, Node.js, MySQL, and Firebase, it offers a seamless booking experience with PayPal integration for secure payments.

## 🔧 Tech Stack

* **Frontend**: Next.js, React, CSS Modules
* **Backend**: Node.js, Express.js (via Next.js API routes)
* **Database**: MySQL
* **Authentication**: Firebase Authentication
* **Payments**: PayPal
* **Styling**: Tailwind CSS
* **Deployment**: Vercel (Frontend), Render (Backend)

## 📦 Features

* **Role-Based Access**: Users can register as either vehicle owners or customers.
* **Car Listings**: Owners can add, edit, and manage their vehicle listings.
* **Booking System**: Customers can browse available cars, select rental dates, and make bookings.
* **Payment Integration**: Secure payments processed through PayPal.
* **Booking Management**: Users can view and manage their bookings.
* **Responsive Design**: Optimized for both desktop and mobile devices.

## 🚀 Getting Started

### Prerequisites

* Node.js (v14 or later)
* MySQL Server
* Firebase Project
* PayPal Developer Account

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/GSL006/DriveIO.git
   cd DriveIO
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_paypal_client_id
   ```

4. **Configure MySQL Database:**

   * Create a database named `Car_Rental`.
   * Import the provided SQL schema to set up the necessary tables.

5. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 🛠️ Project Structure

* `pages/`: Contains the Next.js pages.
* `components/`: Reusable React components.
* `styles/`: CSS modules for styling components.
* `lib/`: Utility functions and API helpers.
* `public/`: Static assets like images and icons.
* `firebase.js`: Firebase configuration and initialization.

## 📄 Database Schema

### Customers Table

* `customer_id` (INT, Primary Key)
* `customer_name` (VARCHAR)
* `customer_email` (VARCHAR)
* `phone` (VARCHAR)

### Cars Table

* `reg_num` (VARCHAR, Primary Key)
* `name` (VARCHAR)
* `price` (DECIMAL)
* `category` (VARCHAR)
* `rating` (DECIMAL)
* `transmission` (VARCHAR)

### Booking Table

* `booking_id` (INT, Primary Key, Auto Increment)
* `reg_num` (VARCHAR, Foreign Key to Cars)
* `customer_id` (INT, Foreign Key to Customers)
* `start_date` (DATE)
* `end_date` (DATE)
* `total_price` (DECIMAL)
* `status` (ENUM: 'On Going', 'Finished', 'Cancelled')

### Payments Table

* `payment_id` (INT, Primary Key, Auto Increment)
* `booking_id` (INT, Foreign Key to Booking)
* `payment_date` (DATE)
* `payment_method` (ENUM: 'credit\_card', 'debit\_card', 'paypal')
* `status` (ENUM: 'pending', 'completed', 'failed')
* `amount_left` (DECIMAL)

## 💳 Payment Integration

* Integrated with PayPal for secure payment processing.
* Ensure that the PayPal client ID is correctly set in the `.env.local` file.
* For testing purposes, you can use PayPal's sandbox environment.

## 🧪 Testing

* To test the payment integration, use PayPal's sandbox accounts.
* Remember to comment out or remove any test buttons in the payment component before deploying to production.

## 📌 Notes

* Ensure that the Firebase project is properly configured with the correct authentication methods enabled.
* Regularly back up your MySQL database to prevent data loss.
* Monitor the application for any errors or issues and refer to the browser's console or server logs for debugging.
