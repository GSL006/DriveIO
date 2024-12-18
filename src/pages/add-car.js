import AddCar from '../components/AddCar';
import Navbar from '../components/Navbar-car';
import Footer from '../components/Footer';
import styles from '../styles/AddCarMain.module.css'

const AddCarPage = () => {
  return (
    <div className={styles.addback}>
      <Navbar />
      <AddCar />
      <Footer />
    </div>
  );
};

export default AddCarPage;