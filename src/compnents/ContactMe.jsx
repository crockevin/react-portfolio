import { useState, useRef } from "react"
import emailjs from '@emailjs/browser'
export default function ContactMe() {
  const [email, setEmail] = useState(""); // store email from form
  const [validEmail, setValidEmail] = useState(false); // state set to true or false, disable button if true
  const [name, setName] = useState('') // store name from form
  const [message, setMessage] = useState('') //stores message from form
  const handleEmailChange = (e) => {// sets email on change
    setEmail(e.target.value);
    setValidEmail(validateEmail(e.target.value)); // check to see if email is valid based on regex
  }
  const handleNameChange = (e) => { // sets name on change
    setName(e.target.value)
  }
  const handleMessageChange = (e) => { // sets message on change
    setMessage(e.target.value)
  }
  const validateEmail = (input) => {
    const regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;// email regex
    return regex.test(input); // test if email follows the regex
  }
  const form = useRef() //gets current values from form
  const sendEmail = (e) => { // sends email based on form info
    e.preventDefault()
    const serviceId = 'service_wr1312s'
    const templateId = 'template_by3g3sw'
    const publicKey = 'Us6LEU5YkgzPskkch'
    emailjs.sendForm(serviceId, templateId, form.current, publicKey)
      .then((result) => {
        console.log(result.text)
        setEmail('') // resets values to cleasr form without reload
        setName('')
        setMessage('')
      })
      .catch((error) => {
        console.log(error.text);
      })
  }
  return (
    <div className="form-box">
      <form ref={form} onSubmit={sendEmail} className="email-form">
        <label>
          Name:
          <br />
          <input type="text" name="from_name" value={name} onChange={handleNameChange} />{/*store name on change */}
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" value={email} name="from_email" onChange={handleEmailChange} />{/*store email on change */}
          <br />
        </label>
        <label>
          Message:
          <br />
          <textarea rows={4} value={message} name="message" onChange={handleMessageChange} />{/*store message on change */}
        </label>
        <br />
        {!validEmail &&
          <p id="validEmail">Email not valied</p>}
        <button type="submit" disabled={!validEmail}>
          Send Email
        </button>
      </form>
    </div>
  )
}
