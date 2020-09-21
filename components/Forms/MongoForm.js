import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import fetch from 'isomorphic-unfetch';
import * as gtag from '../../utils/gtag';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (values.note.length > 150) {
    errors.note = 'Must be 150 characters or less';
  }

  return errors;
};

const MongoForm = ({ showForm, setShowForm }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      note: ''
    },
    validate,
    onSubmit: async (values) => {
      const res = await fetch('/api/Mcontacts', {
        // NOTE: Used to need this I think?
        // const res = await fetch('https://mimasmusic.com/api/Mcontacts', {
        method: 'post',
        body: JSON.stringify(values)
      })
        .then(() => {
          setShowForm(false);
        })
        .then(() => {
          const alert = fetch('/api/twilioAlert', {
            method: 'post',
            body: JSON.stringify(values)
          })
        })
        .then(() => {
          gtag.event({
            action: 'submit_form',
            category: 'Contact',
            label: 'MongoForm',
            value: 'Submit'
          })
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <div className={FormStyles.wrapper}>
      <div className={FormStyles.container}>
        <h2>Care to share?</h2>
        <form
          onSubmit={formik.handleSubmit}
          className={FormStyles.form}>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div><p className={FormStyles.errors}>{formik.errors.firstName}</p></div>
          ) : null}
          <input
            className={FormStyles.input}
            id="firstName"
            name="firstName"
            placeholder="First name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div><p className={FormStyles.errors}>{formik.errors.lastName}</p></div>
          ) : null}
          <input
            className={FormStyles.input}
            id="lastName"
            name="lastName"
            placeholder="Last name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.email && formik.errors.email ? (
            <div><p className={FormStyles.errors}>{formik.errors.email}</p></div>
          ) : null}
          <input
            className={FormStyles.input}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <input
            className={FormStyles.input}
            id="phone"
            name="phone"
            placeholder="Phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.note ? (
            <div><p className={FormStyles.errors}>{formik.errors.note}</p></div>
          ) : null}
          <textarea
            className={FormStyles.input}
            id="note"
            name="note"
            placeholder="Say hello..."
            type="text"
            onChange={formik.handleChange}
            value={formik.values.note}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default MongoForm;
