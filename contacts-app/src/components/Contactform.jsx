import React, { useState } from "react";
import "./Contactform.css";

function Contactform() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [contactArray, setContactArray] = useState([]);
  const handleSubmit = (e) => {
    setContactArray([...contactArray, { name, email, phone, street, city, state, zip }]);
    e.preventDefault();
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1>Contact Form</h1>
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
        <div>
          <label label htmlFor="email">
            E-mail:
          </label>
          <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input type="text" id="street" name="street" value={street} onChange={(e) => setStreet(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" value={state} onChange={(e) => setState(e.target.value)}></input>
        </div>
        <div>
          <label htmlFor="zip">Zip:</label>
          <input type="number" id="zip" name="zip" value={zip} onChange={(e) => setZip(e.target.value)}></input>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <div>
          {contactArray.map((contact, i) => {
            return (
              <div>
                <div key={i} className="userList">
                  <h2 className="contact">{contact.name}</h2>
                  <h2 className="contact">
                    {contact.city}, {contact.state}
                  </h2>
                  <button>Show All Info</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Contactform;
