import CommonLayout from "../layouts/CommonLayout";
import FAQBanner from "../components/faq/FAQBanner";
import FAQAllQuestions from "../components/faq/FAQAllQuestions";
import IconCardGroup4 from "../components/shared/IconCardGroup4";
import { faqCategoriesData, faqQuestionsData } from "../public/data/faqData";

const FAQ = ({ faqCategories, faqQuestions }) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <CommonLayout title="FAQ" noMargin={true}>
      {/* banner section  */}
      <FAQBanner />
      <div className="box">
        {/* categories section  */}
        <IconCardGroup4
          data={faqCategories}
          padding={true}
          title="Here you can find categories for common asked question."
        />

        {/* questions section  */}
        <FAQAllQuestions data={faqQuestions} />
      </div>
    </CommonLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      faqCategories: faqCategoriesData,
      faqQuestions: faqQuestionsData,
    },
  };
}

export default FAQ;
