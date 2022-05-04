import ContactForm from "./ContactForm";
import styles from "./Footer.module.css";
import { Instagram, Youtube, Twitter } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.formWrapper}>
        <ContactForm />
      </div>
      <div className={styles.socialWrapper}>
        <h2>Follow me on Social Media</h2>
        <ul className={styles.socialList}>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram color="#405DE6" /> Instagram
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
              <Youtube color="#FF0000" /> Youtube
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <Twitter color="#1DA1F2" /> Twitter
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.copyrightWrapper}>
        <p> &copy; McCrackenDev 2022</p>
      </div>
    </footer>
  );
};

export default Footer;
