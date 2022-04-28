const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Your name: <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Your email: <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          message: <textarea name="message" />
        </label>
      </p>
      <div data-netlify-recaptcha="true"></div>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};

export default ContactForm;
