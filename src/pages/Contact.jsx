import React, { useRef } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6sbjhds", // 🔁 Replace with your actual EmailJS service ID
        "template_cmgp9a9", // 🔁 Replace with your actual EmailJS template ID
        form.current,
        "AuuiQAXPgWMXLUGCh", // 🔁 Replace with your actual EmailJS public key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert("❌ Failed to send message. Please try again.");
        },
      );
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-gray-50 to-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Info */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Let's{" "}
            <span className="text-blue-600">Discuss Your Legal Needs</span>
          </h2>

          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Whether you need legal consultation, company registration, GST
            services, trademark registration, compliance assistance, or legal
            documentation, our experts are ready to help you every step of the
            way.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-sm">
            <div className="flex items-start gap-3">
              <Phone className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Call Us</p>
                <p>+91 9928182744</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Email Us</p>
                <p>helplegalquick@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Working Hours</p>
                <p>Monday – Saturday: 10:00 AM – 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="text-indigo-600 mt-1" />
              <div>
                <p className="font-semibold">Office Address</p>
                <p>Jaipur, Rajasthan, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white shadow-xl rounded-xl p-8 md:p-10">
          <h3 className="text-2xl font-bold text-blue-700 mb-4">
            Book a Free Consultation
          </h3>

          <p className="text-gray-600 text-sm mb-6">
            Fill out the form below and one of our legal experts will contact
            you shortly.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="first_name"
                type="text"
                required
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                name="last_name"
                type="text"
                required
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <input
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            />

            <textarea
              name="message"
              rows="4"
              required
              placeholder="Your message..."
              className="border border-gray-300 p-3 rounded w-full focus:ring-2 focus:ring-indigo-400 outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 px-6 rounded font-semibold text-sm tracking-wide hover:bg-blue-600 transform hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
