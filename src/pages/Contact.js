// import React, { useState } from 'react';

// import { validateEmail } from '../utils/helpers';

// function Contact() {
//   const [formState, setFormState] = useState({ name: '', email: '', message: '' });

//   const [errorMessage, setErrorMessage] = useState('');
//   const { name, email, message } = formState;

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!errorMessage) {
//       console.log('Submit Form', formState);
//     }
//   };

//   const handleChange = (e) => {
//     if (e.target.name === 'email') {
//       const isValid = validateEmail(e.target.value);
//       if (!isValid) {
//         setErrorMessage('Your email is invalid.');
//       } else {
//         setErrorMessage('');
//       }
//     } else {
//       if (!e.target.value.length) {
//         setErrorMessage(`${e.target.name} is required.`);
//       } else {
//         setErrorMessage('');
//       }
//     }
//     if (!errorMessage) {
//       setFormState({ ...formState, [e.target.name]: e.target.value });
//       console.log('Handle Form', formState);
//     }
//   };

//   return (
//     <section className='flex justify-content-center'>
//       <h1 className='padding 10px' data-testid="h1tag">Contact me</h1>
//       <form action="https://getform.io/f/453fda5e-a346-49ab-92c1-46ccee019df2" method="POST" id="contact-form" onSubmit={handleSubmit}>
//         <div className='flex-row justify-content-center, padding 10px'>
//           <label htmlFor="name">Name:</label>
//           <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
//         </div>
//         <div className='flex-row justify-content-center, padding 10px'>
//           <label htmlFor="email">Email address:</label>
//           <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
//         </div>
//         <div className='flex-row justify-content-center, padding 10px' >
//           <label htmlFor="message">Message:</label>
//           <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
//         </div>
//         {errorMessage && (
//           <div>
//             <p className="error-text">{errorMessage}</p>
//           </div>
//         )}
//         <button data-testid="button" type="submit">Submit</button>
//       </form>
//     </section>
//   );
// }

// export default Contact;


import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/453fda5e-a346-49ab-92c1-46ccee019df2",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: "",
          message: ""
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="App">
      {/* <a
        target="_blank"
        href="https://getform.io?ref=codeSandboxVue"
        className="mt-3 d-flex"
      >
        Contact Me!
      </a> */}
      <h4>Contact Me</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" required="required">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            name="email"
            value={query.email}
            onChange={handleChange()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            required="required"
            name="name"
            value={query.name}
            onChange={handleChange()}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            placeholder="Enter your message"
            required="required"
            name="message"
            value={query.message}
            onChange={handleChange()}
          />
        </div>
        <div className="form-group mt-3">
          {formStatus ? (
            <div className="alert alert-success">
              Your message has been sent.
            </div>
          ) : (
            ""
          )}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}