import Script from "next/script";
import Link from "next/link";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ContactForm = ({ data }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7hk5dfa",
        "template_vebsjcb",
        form.current,
        "DH5QXV_AG3gc3L3wd"
      )
      .then(
        (result) => {
          e.target.reset();
          toast.success("Thanks for your message");
          // after successful
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry, We couldn't send your message");
        }
      );

    // Email.send({
    //   Host: "smtp.elasticemail.com",
    //   Username: "anisur.rahman@intelli.global",
    //   Password: "2597486C56508E185A07F608105A6853404E",
    //   To: ["kawser.shovon@intelli.global", "info@byslglobal.com"],
    //   From: "anisur.rahman@intelli.global",
    //   Subject: `Message From BYSL Website `,
    //   Body: `<div>
    //   <b>Full Name:</b> <br> ${name} <br><br>
    //   <b>Email: </b> <br> ${email} <br><br>
    //   <b>Message: </b> <br> ${message} <br><br>
    //   </div>`,
    // }).then((message) => {
    //   if (message == "OK") {
    //     toast.success("Thanks for your message");
    //     console.log(message);

    //     // after successful
    //     setName("");
    //     setEmail("");
    //     setMessage("");
    //   }
    // });
  };

  const InputTitle = ({ title }) => (
    <p className="text-sm text-gray-700 font-medium ml-1 mb-2.5">{title}</p>
  );

  return (
    <div className="py-10 xl:py-16 flex flex-col lg:flex-row gap-6">
      <Script src="https://smtpjs.com/v3/smtp.js" />
      <ToastContainer theme="dark" />
      <div className="lg:w-2/5 lg:pt-10">
        <TechnologiesSectionTitle start={true}>
          <TextGradient text="CONTACT US" />
        </TechnologiesSectionTitle>
        <p className="my-4 lg:my-6 xl:mb-11 text-sm lg:text-base text-gray-600 text-center lg:text-start">
          If you have any questions to ask or an idea to communicate, please
          feel free to share with us.
        </p>
        <div className="flex justify-center lg:justify-start gap-6 md:gap-4 lg:gap-6">
          {data.map(({ id, icon, link }) => (
            <Link key={id} passHref href={link}>
              <a
                dangerouslySetInnerHTML={{ __html: icon }}
                target="_blank"
                className="opacity-60"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="lg:w-3/5 xs:bg-white rounded-lg lg:rounded-2xl 2xl:rounded-[20px] xs:p-4 sm:p-6 lg:p-8 2xl:px-14 2xl:py-10">
        <form ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-6 w-full">
            <div className="w-full">
              <InputTitle title="Enter name" />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                name="name"
                type="text"
                placeholder="Full Name"
                className="bg-blue-400 w-full p-3.5 rounded-lg text-gray-400 focus:outline-blue-800/10 border border-gray-200/30 sm:border-none"
              />
            </div>
            <div className="w-full">
              <InputTitle title="Enter email" />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-blue-400 w-full p-3.5 rounded-lg text-gray-400 focus:outline-blue-800/10  border border-gray-200/30 sm:border-none"
              />
            </div>
          </div>
          <div className="w-full my-6 lg:mb-16">
            <InputTitle title="Enter message" />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              name="message"
              rows="5"
              placeholder="Type message...."
              className="bg-blue-400 w-full p-3.5 rounded-lg text-gray-400 focus:outline-blue-800/10 border border-gray-200/30 sm:border-none resize-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="gradient-btn w-max h-max uppercase text-center rounded xl:rounded-md text-white text-sm font-semibold py-2 md:py-2.5 px-8 md:px-8 lg:px-16 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700"
            >
              send message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
