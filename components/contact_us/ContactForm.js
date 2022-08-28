import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import emailjs from "@emailjs/browser";

import { socialIcons } from "../../public/data/contactUsData";
import {
  TechnologiesSectionTitle,
  TextGradient,
} from "../shared/SharedTextgroups";

const ContactForm = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // submitting the message
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
        },
        (error) => {
          console.log(error.text);
          toast.error("Sorry, We couldn't send your message");
        }
      );
  };

  const InputTitle = ({ title }) => (
    <p className="text-sm text-gray-700 font-medium ml-1 mb-2.5">{title}</p>
  );

  return (
    <div className="py-10 xl:py-16 flex flex-col lg:flex-row gap-6">
      <ToastContainer theme="dark" />
      <div className="lg:w-2/5 lg:pt-10">
        <TechnologiesSectionTitle start={true}>
          <TextGradient text="CONTACT US" />
        </TechnologiesSectionTitle>
        <p className="my-4 lg:my-6 xl:mb-11 text-sm text-gray-600 text-center lg:text-start">
          If you have any questions, please feel free to drop me a line. If you
          don't get an answer immediately, I might just be travelling through
          the middle of nowhere. I'll get back to you as soon as I can. That's a
          promise!
        </p>
        <div className="flex justify-center lg:justify-start gap-6 md:gap-4 lg:gap-6">
          {socialIcons.map(({ id, img, link }) => (
            <Link key={id} passHref href={link}>
              <a className="opacity-70">
                <Image src={img} height={20} width={20} alt="" />
              </a>
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
                required
                name="name"
                type="text"
                placeholder="Full Name"
                className="bg-blue-400 font-medium w-full p-3.5 rounded-lg text-gray-500 focus:outline-blue-800/10 border border-gray-200/30 sm:border-none"
              />
            </div>
            <div className="w-full">
              <InputTitle title="Enter email" />
              <input
                required
                name="email"
                type="email"
                placeholder="Your Email"
                className="bg-blue-400 font-medium w-full p-3.5 rounded-lg text-gray-500 focus:outline-blue-800/10  border border-gray-200/30 sm:border-none"
              />
            </div>
          </div>
          <div className="w-full my-6 lg:mb-16">
            <InputTitle title="Enter message" />
            <textarea
              required
              name="message"
              rows="5"
              placeholder="Type message...."
              className="bg-blue-400 font-medium w-full p-3.5 rounded-lg text-gray-500 focus:outline-blue-800/10 border border-gray-200/30 sm:border-none resize-none"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-max h-max uppercase text-center rounded xl:rounded-md text-white text-sm font-semibold py-2 md:py-2.5 px-8 md:px-8 lg:px-16 hover:cursor-pointer bg-gradient-to-r hover:from-blue-600 hover:to-blue-800  from-blue-900 to-blue-700"
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
