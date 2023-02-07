import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./Firebase";
import Footer from "./Footer";
import "./waitlist.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    try {
      const docRef = addDoc(collection(db, "waitlist"), {
        name: name,
        email: email,
      });

      alert("You have Successfully joined our waitlist ", docRef.id);
    } catch (e) {
      alert.error("Error joining waitlist: ", e);
    }

    setName("");
    setEmail("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h1>Waitlist</h1>
        <label>Name</label>
        <input
          type="text"
          defaultValue={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          defaultValue={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <label>Message</label>
      <textarea placeholder="Message"></textarea> */}
        <button type="submit">Submit</button>
      </form>
      <Footer />
    </>
  );
}
export default Contact;
