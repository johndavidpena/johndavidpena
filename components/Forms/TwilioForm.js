import MainStyles from '../../stylesheets/Main.module.css';
import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import fetch from 'isomorphic-unfetch';
import Router from 'next/router';

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

  if (!values.phone) {
    errors.phone = 'Required';
  }

  // TODO: Add phone as required
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid email address';
  // }

  return errors;
};

const TwilioForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      // email: '',
      phone: '',
      // address: '',
      // city: '',
      // state: ''
    },
    validate,
    onSubmit: async (values) => {
      const res = await fetch('/api/twilioMessages', {
        method: 'post',
        body: JSON.stringify(values)
      })
        .then(() => {
          console.log('Submitted');
          Router.push('/thankyou');
        })
        .catch(error => {
          console.log(error);
        });
    }
  });

  return (
    <div className={MainStyles.wrapper}>
      <div className={FormStyles.container}>
        <h1>Twilio</h1>
        <form onSubmit={formik.handleSubmit}
          className={FormStyles.form}>
          {formik.touched.firstName && formik.errors.firstName ? (
            <div><p>{formik.errors.firstName}</p></div>
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
            <div><p>{formik.errors.lastName}</p></div>
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

          {/* <input
            className={FormStyles.input}
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          /> */}
          {formik.touched.phone && formik.errors.phone ? (
            <div><p>{formik.errors.phone}</p></div>
          ) : null}
          <input
            className={FormStyles.input}
            id="phone"
            name="phone"
            placeholder="Phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {/* <input
            className={FormStyles.input}
            id="address"
            name="address"
            placeholder="Address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
          <input
            className={FormStyles.input}
            id="city"
            name="city"
            placeholder="City"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />

          <select
            id="state"
            name="state"
            value={formik.values.state}
            onChange={formik.handleChange}>
            <option value="State">State</option><option value="Alabama">Alabama</option><option value="Alaska">Alaska</option><option value="Arizona">Arizona</option><option value="Arkansas">Arkansas</option><option value="California">California</option><option value="Colorado">Colorado</option><option value="Connecticut">Connecticut</option><option value="Delaware">Delaware</option><option value="District of Columbia">District of Columbia</option><option value="Florida">Florida</option><option value="Georgia">Georgia</option><option value="Guam">Guam</option><option value="Hawaii">Hawaii</option><option value="Idaho">Idaho</option><option value="Illinois">Illinois</option><option value="Indiana">Indiana</option><option value="Iowa">Iowa</option><option value="Kansas">Kansas</option><option value="Kentucky">Kentucky</option><option value="Louisiana">Louisiana</option><option value="Maine">Maine</option><option value="Maryland">Maryland</option><option value="Massachusetts">Massachusetts</option><option value="Michigan">Michigan</option><option value="Minnesota">Minnesota</option><option value="Mississippi">Mississippi</option><option value="Missouri">Missouri</option><option value="Montana">Montana</option><option value="Nebraska">Nebraska</option><option value="Nevada">Nevada</option><option value="New Hampshire">New Hampshire</option><option value="New Jersey">New Jersey</option><option value="New Mexico">New Mexico</option><option value="New York">New York</option><option value="North Carolina">North Carolina</option><option value="North Dakota">North Dakota</option><option value="Northern Marianas Islands">Northern Marianas Islands</option><option value="Ohio">Ohio</option><option value="Oklahoma">Oklahoma</option><option value="Oregon">Oregon</option><option value="Pennsylvania">Pennsylvania</option><option value="Puerto Rico">Puerto Rico</option><option value="Rhode Island">Rhode Island</option><option value="South Carolina">South Carolina</option><option value="South Dakota">South Dakota</option><option value="Tennessee">Tennessee</option><option value="Texas">Texas</option><option value="Utah">Utah</option><option value="Vermont">Vermont</option><option value="Virginia">Virginia</option><option value="Virgin Islands">Virgin Islands</option><option value="Washington">Washington</option><option value="West Virginia">West Virginia</option><option value="Wisconsin">Wisconsin</option><option value="Wyoming">Wyoming</option>
          </select> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default TwilioForm;
