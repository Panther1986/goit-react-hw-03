import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import css from "./Contact.module.css";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <>
      <p>
        <IoPerson /> {name}
      </p>
      <p>
        <FaPhoneAlt /> {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};

export default Contact;
