import { useState } from "react";
import { Accordion, AccordionBody } from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";

import { TextGradient } from "../shared/SharedTextgroups";
import { contactUsFAQData } from "../../public/data/contactUsData";

const ContactUsFAQ = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="py-10 xl:py-16 flex flex-col md:flex-row 2xl:gap-32">
      <div className="md:w-2/5">
        <p className="lg:text-xl 3xl:text-2xl text-center text-gray-300 md:text-start font-semibold">
          FAQ
        </p>
        <p className="break-words text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-semibold text-gray-800 mt-4 text-center md:text-start">
          Frequently asked <TextGradient text="Questions." />
        </p>
      </div>
      <div className="md:w-3/5 mt-10 md:mt-0">
        {contactUsFAQData.map(({ id, question, answer }) => {
          return (
            <div key={id} className="mt-6 md:mt-7 first:mt-0">
              <Accordion open={open === id} onClick={() => handleOpen(id)}>
                <div className="flex justify-between cursor-pointer">
                  <p className="text-[#282938] xl:text-xl font-medium">
                    {question}
                  </p>
                  <AiOutlinePlus
                    className={`text-gray-800 text-xs md:text-sm xl:text-base ${
                      open === id && "rotate-45 transition duration-150"
                    }`}
                  />
                </div>
                <AccordionBody>
                  <p className="text-gray-500">{answer}</p>
                </AccordionBody>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactUsFAQ;
