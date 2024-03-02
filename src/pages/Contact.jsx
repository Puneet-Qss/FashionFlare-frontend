import React, { useState } from "react";
import contactImage from "../assets/images/contact-image.jpg";

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your form submission logic here
  };

  return (
    <div className=" ">
      <div className="flex justify-center items-center gap-20">
        <form onSubmit={handleSubmit} className="w-80">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            placeholder="Enter Your Full Name"
            name="name"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4"
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>

        <div>
          <img src={contactImage} alt="contact" className="w-80 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
