import { useState } from "react";
export default function ContactMe() {
  const [email, setEmail] = useState(""); // store email from form
  const [validEmail, setValidEmail] = useState(false); // state set to true or false, disable button if true
  const handleEmailChange = (e) => {// sets email on change
    setEmail(e.target.value);
    setValidEmail(validateEmail(e.target.value)); // check to see if email is valid based on regex
  };
  const validateEmail = (input) => {
    const regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;// email regex
    return regex.test(input); // test if email follows the regex
  };
  return (
    <div className="form-box">
      <form className="email-form">
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" value={email} onChange={handleEmailChange} />{/*store email on change */}
          <br />
        </label>
        <label>
          Message:
          <br />
          <textarea rows={4}/>
        </label>
        <br />
        {!validEmail &&
        <p id="validEmail">Email not valied</p>}
        <button type="submit" disabled={!validEmail}>
          Send Email
        </button>
      </form>
    </div>
  );
}
