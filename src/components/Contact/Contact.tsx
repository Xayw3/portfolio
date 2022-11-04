import './contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Contact = () => {
  const form = useRef<null | HTMLFormElement>(null);

  const sendEmail = (e: HTMLFormElement | any) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKey}`);
    }

    e.target.reset();
  };

  const contacts = [
    {
      icon: <MdOutlineEmail className="contact__option_icon" />,
      title: 'Email',
      text: 'edgars.kapilinskis@gmail.com',
      link: 'mailto:edgars.kapilinskis@gmail.com',
    },
    {
      icon: <BsTelegram className="contact__option_icon" />,
      title: 'Telegram',
      text: '@EKapilinskis',
      link: 'https://t.me/EKapilinskis',
    },
    {
      icon: <BsWhatsapp className="contact__option_icon" />,
      title: 'WhatsApp',
      text: '+371 20 40 90 70',
      link: 'https://wa.me/+37120409070',
    },
  ];

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {
            contacts.map(({
              icon, title, link, text,
            }) => (
              <article key={Math.random()} className="contact__option">
                {icon}
                <h4>{title}</h4>
                <h5>{text}</h5>
                <a className="contact__option_link" href={link} target="_blank" rel="noreferrer">Send a message</a>
              </article>
            ))
          }
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input className="contact__input" type="text" name="name" placeholder="Your Full Name" required />
          <input className="contact__input" type="email" name="email" placeholder="Your Email" required />
          <textarea className="contact__input" rows={7} name="message" placeholder="Your Message" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
