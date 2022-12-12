import { useState } from "react";

const ContactCard = ({ contact }) => {

  const [show, setShow] = useState(false);

  return (
    <div className="layout">

      <div className="card">
        <div>
          <img
            src={contact.picture.large}
            alt="https://via.placeholder.com/400"
          />
        </div>

        <div className="pad">

          <div> {contact.name.first} {contact.name.last} </div>

          <small>{contact.email}</small>

          <div> {contact.phone} </div>

          {show && <div>{contact.dob.age}</div>}
          
          <div>
            <button onClick={() => setShow(!show)}>Age</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default ContactCard;
