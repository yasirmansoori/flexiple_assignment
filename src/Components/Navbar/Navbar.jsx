import { useState, useEffect } from "react";
import logo from "../../Images/logo.png";
import styles from "./navbar.module.css";

export default function Navbar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage =
        (scrollPosition / (documentHeight - windowHeight)) * 100;
      setWidth(scrollPercentage);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className={styles.nav}>
          <img src={logo} alt="" className="img-fluid" width={50} />
        </div>
      </div>
      <div
        className={`${styles.scroll} fixed-top`}
        style={{ width: `${width}%` }}
      ></div>
    </>
  );
}
