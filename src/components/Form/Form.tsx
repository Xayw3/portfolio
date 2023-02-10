import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { formAnimation } from '../../animation/animation';

const serviceId = process.env.REACT_APP_SERVICE_ID;
const templateId = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

const Form = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .email('Invalid email adress')
        .required('Email is required'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs.send(`${serviceId}`, `${templateId}`, values, `${publicKey}`);

      resetForm();
    },
  });

  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ amount: 0.7, once: true }}>
      <motion.form className="contact__form" onSubmit={formik.handleSubmit} variants={formAnimation}>
        <div className="contact__wrapper">
          <input
            className={`
              ${formik.values.name.length > 0 ? 'contact__input active' : 'contact__input'} 
              ${formik.touched.name && formik.errors.name ? 'error' : 'correct'}
            `}
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            name="name"
            required
          />
          <span
            style={{ borderColor: `${formik.touched.name && formik.errors.name ? '#fa1616' : '#00dfc4'}` }}
            className={formik.touched.name && formik.errors.name ? 'contact__label error' : 'contact__label'}
          >
            {formik.touched.name && formik.errors.name ? formik.errors.name : 'Your Full Name'}
          </span>
        </div>
        <div className="contact__wrapper">
          <input
            className={`
              ${formik.values.email.length > 0 ? 'contact__input active' : 'contact__input'} 
              ${formik.touched.email && formik.errors.email ? 'error' : 'correct'}
            `}
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            required
          />
          <span
            style={{ borderColor: `${formik.touched.email && formik.errors.email ? '#fa1616' : '#00dfc4'}` }}
            className={formik.touched.email && formik.errors.email ? 'contact__label error' : 'contact__label'}
          >
            {formik.touched.email && formik.errors.email ? formik.errors.email : 'Your Email'}
          </span>
        </div>
        <div className="contact__wrapper">
          <textarea
            className={`
              ${formik.values.message.length > 0 ? 'contact__input active' : 'contact__input'} 
              ${formik.touched.message && formik.errors.message ? 'error' : 'correct'}
            `}
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            rows={7}
            name="message"
            required
          />
          <span
            style={{ borderColor: `${formik.touched.message && formik.errors.message ? '#fa1616' : '#00dfc4'}` }}
            className={formik.touched.message && formik.errors.message ? 'contact__label error' : 'contact__label'}
          >
            {formik.touched.message && formik.errors.message ? formik.errors.message : 'Your Message'}
          </span>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </motion.form>
    </motion.div>
  );
};

export default Form;
