import React, { useEffect, useState  } from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


export default function Contact() {
  // const [message, setMessage] = useState(false);

  const [values, setValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const serviceID = process.env.REACT_APP_serviceID;
  const templateID = process.env.REACT_APP_templateID;
  const publicKey = process.env.REACT_APP_publicKey;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.send(serviceID, templateID, values, publicKey)
    .then(response => {
      console.log('SUCCESS!', response);
      setValues({
        fullName: '',
        email: '',
        message: ''
      });
      // setMessage(true);
      setStatus('SUCCESS');
    }, error => {
      console.log('FAILED...', error);
    });
  };

  useEffect(() => {
    if(status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
      }, 10000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value
    }))
  }



  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="https://media.giphy.com/media/ZgTR3UQ9XAWDvqy9jv/giphy.gif" alt="" />
      </div>
      <div className="right">
      {status && renderAlert()}
        <h2>Contact Me.</h2>
        <div className="div"
        style={{diplay:"flex"}}
        >
          <a 
          style={{textDecoration:"none"}}
          href='https://www.linkedin.com/in/jesthine-disla/'><LinkedInIcon></LinkedInIcon></a>
                {"               "}
          <a 
          style={{textDecoration:"none"}}
          href='https://github.com/JDVasquez26'><GitHubIcon ></GitHubIcon></a>
        </div>
        
        <form onSubmit={handleSubmit}>
        <input type="text" value={values.fullName}  name="fullName" placeholder="Full Name" onChange={handleChange}/>
          <input type="text" value={values.email} name="email" placeholder="Email" onChange={handleChange}/>
          <textarea value={values.message}  name="message" placeholder="Message" onChange={handleChange} ></textarea>
          <button type="submit">Send</button>
          {/* {message && <span>Thanks, I'll reply ASAP :)</span>} */}
        </form>
      </div>
    </div>
  );
}

const renderAlert = () => (
  <span>Thanks, I'll reply ASAP :)</span>
)