import React, { useRef } from "react";
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";
import emailjs from 'emailjs-com';
import LOGO from '../assets/1.png';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log('Attempting to send email...');
    console.log('Form data:', {
      name: form.current.your_name.value,
      email: form.current.your_email.value,
      message: form.current.message.value,
    });

    emailjs.sendForm('service_8pw9a0b', 'template_btjrz0n', form.current, 'N4nCsg5FWkrwyVW4S')
      .then(
        (result) => {
          console.log('Email sent successfully!', result.text);
          alert('Email Sent!');
          e.target.reset();
        },
        (error) => {
          console.error('Email failed to send...', error.text);
          alert('Failed to send email. Please try again later.');
        }
      );
  };

  const clearForm = () => {
    form.current.reset(); // Clear the form inputs
  };

  return (
    <section id="contact" className="py-10 px-3 text-white bg-gray-900">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div className="mt-16 flex md:flex-row flex-col gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto shadow-lg">
          <form className="flex flex-col flex-1 gap-5" ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Your Name"
              name="your_name"
              className="p-2 rounded bg-gray-700 text-white text-lg"
              required
            />
            <input
              type="email"
              placeholder="Your Email Address"
              name="your_email"
              className="p-2 rounded bg-gray-700 text-white text-lg"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={10}
              className="p-2 rounded bg-gray-700 text-white text-lg"
              name="message"
              required
            ></textarea>
            <div className="flex gap-4">
              <button type="submit" className="btn-primary w-fit bg-cyan-600 text-white text-xl p-2 rounded hover:bg-cyan-700 transition duration-300">
                Send Message
              </button>
              <button 
                type="button" 
                onClick={clearForm} 
                className="w-fit bg-red-600 text-white text-xl p-2 rounded hover:bg-red-700 transition duration-300"
              >
                Clear
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-7 justify-center p-5 bg-gray-700 rounded-lg shadow-inner">
            <div>
              <div className="text-center sm:mt-[3px] lg:mt-[-60px]">
                <h1>Contact Details</h1>
              </div>
              <div className="text-opacity-20 text-blue-800 flex justify-center pt-3">
                <hr className="opacity-20 w-[200px]" />
              </div>
              <div className="flex gap-3 justify-center pt-5">
                <div>
                  <img src={LOGO} alt="Logo" className="w-[170px] h-[170px] rounded-full shadow-lg " />
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-bold text-cyan-300">Methsara Dissanayake</h1>
              </div>
            </div>
            <div className="flex items-center gap-3">
  <FaEnvelope className="text-cyan-600 text-2xl" />
  <a href="mailto:methsara.official@gmail.com" className="text-[16px] cursor-pointer">
    methsara.official@gmail.com
  </a>
</div>
            <div className="flex items-center gap-3 mt-[-30px]">
              <FaPhone className="text-cyan-600 text-2xl" />
              <span className="text-[16px]">+94 713 600 779</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
