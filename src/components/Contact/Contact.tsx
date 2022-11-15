import './contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import { BsTelegram, BsWhatsapp } from 'react-icons/bs';
import Form from '../Form/Form';
import { contactCardsAnimation, titleAnimation } from '../../animation/animation';

const Contact = () => {
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
    <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ amount: 0.3, once: true }}>
      <motion.h5 variants={titleAnimation}>Get In Touch</motion.h5>
      <motion.h2 variants={titleAnimation}>Contact Me</motion.h2>
      <div className="container contact__container">
        <div className="contact__options">
          {
            contacts.map(({
              icon, title, link, text,
            }, id) => (
              <motion.article key={Math.random()} className="contact__option" custom={id} variants={contactCardsAnimation}>
                {icon}
                <h4>{title}</h4>
                <h5>{text}</h5>
                <a className="contact__option_link" href={link} target="_blank" rel="noreferrer">Send a message</a>
              </motion.article>
            ))
          }
        </div>
        <Form />
      </div>
    </motion.section>
  );
};

export default Contact;
