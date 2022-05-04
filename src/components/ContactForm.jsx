import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form
      className={styles.contactForm}
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <h2>Contact Me</h2>
      <p className={styles.hidden}>
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <p className={styles.inputWrapper}>
        <label>
          Your name:
          <br />
          <input className={styles.input} type="text" name="name" />
        </label>
      </p>
      <p className={styles.inputWrapper}>
        <label>
          Your email: <br />
          <input className={styles.input} type="email" name="email" />
        </label>
      </p>
      <p className={styles.inputWrapper}>
        <label>
          message:
          <br />
          <textarea
            className={styles.textArea}
            name="message"
            rows="10"
            cols="25"
          />
        </label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p className={styles.formButtonWrapper}>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
