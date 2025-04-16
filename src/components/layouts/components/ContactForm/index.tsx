import React from "react";
import { IoSend } from "react-icons/io5";
const ContactForm = () => {
  return (
    <>
      <form
        className="bg-[#fdfdfd] shadow-xl rounded-lg p-8 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Cảm ơn bạn đã liên hệ!");
          e.currentTarget.reset();
        }}
      >
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-[#555]">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c3bff]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-[#555]">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6c3bff]"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mb-2 font-medium text-[#555]"
          >
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Type your message..."
            rows={5}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#6c3bff]"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#6c3bff] hover:bg-[#5432cc] text-white font-medium py-3 rounded-lg transition duration-300 flex items-center justify-center space-x-2"
        >
          <span>Send Message</span>
          <IoSend />
        </button>
      </form>
    </>
  );
};

export default ContactForm;
