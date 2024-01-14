import { useState } from "react";
export default function ContactMe() {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(validateEmail(e.target.value));
  };
  const validateEmail = (input) => {
    const regex = /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/;
    return regex.test(input);
  };
  return (
    <div className="form-box">
      <form action="mailto:crochedengren@gmail.com" className="email-form">
        <label>
          Name:
          <br />
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <br />
          <input type="email" value={email} onChange={handleEmailChange} />
          <br />
        </label>
        <label>
          Message:
          <br />
          <textarea rows={4}/>
        </label>
        <br />
        <button type="submit" disabled={!validEmail}>
          Send Email
        </button>
      </form>
    </div>
  );
}
