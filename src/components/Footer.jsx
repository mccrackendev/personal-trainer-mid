import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer>
      <div>
        <ContactForm />
      </div>
      <div>
        <ul>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Youtube</a>
          </li>
          <li>
            <a href="/">Twitter</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
