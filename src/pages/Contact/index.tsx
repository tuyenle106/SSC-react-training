import React from "react";
import ContactForm from "../../components/layouts/components/ContactForm";

const ContactPage = () => {
  return (
    <section className="py-8 bg-gradient-to-r from-[#f5f7fa] to-[#e4ecf7]">
      <div className="max-w-xl mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center text-[#6c3bff] mb-10">
          Contact Me
        </h2>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactPage;
