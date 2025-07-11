import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ucr6e9c",              // ✅ Your Service ID
        "template_ljukyfb",              // ✅ Replace with actual template ID
        form.current,
        "b-dKfCcBjDa_4toyu"         // ✅ Your EmailJS public key (not private key)
      )
      .then(
        (result) => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="bg-gray-900 text-white px-6 md:px-20 py-20 border-t border-blue-500">
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12 drop-shadow-lg">
        📬 Contact Support
      </h2>

      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-xl border border-blue-500 shadow-xl p-8 space-y-6">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-md text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-md text-white"
        />
        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 bg-transparent border border-blue-500 rounded-md text-white"
        />
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-green-500 to-green-400 text-black font-bold py-3 rounded-md shadow-md hover:scale-105 transition-transform"
        >
          🚀 Send Message
        </button>
      </form>
    </section>
  );
}
