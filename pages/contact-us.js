import CompanyLocations from "../components/contact_us/CompanyLocations";
import ContactForm from "../components/contact_us/ContactForm";
// import ContactUsFAQ from "../components/contact_us/ContactUsFAQ";
import CommonLayout from "../layouts/CommonLayout";
import { companyAddress } from "../public/data/contactUsData";

const ContactUs = ({ companyAddress }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout title="Contact Us">
      {/* contact form section  */}
      <ContactForm />

      {/* company address section  */}
      <CompanyLocations data={companyAddress} />

      {/* company address section  */}
      {/* <ContactUsFAQ /> */}
    </CommonLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      companyAddress,
    },
  };
}

export default ContactUs;
