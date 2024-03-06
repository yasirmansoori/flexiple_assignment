import Content from "./Components/Main/Content";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import styles from "./Styles/app.module.css";
const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
