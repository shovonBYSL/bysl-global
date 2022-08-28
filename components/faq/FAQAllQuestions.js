import { faqQuestionsData } from "../../public/data/faqData";

const FAQAllQuestions = ({data}) => {
  return (
    <div className="pb-10 xl:pb-16 lg:w-5/6 mx-auto flex flex-col gap-6 lg:gap-10">
      {data.map(({ id, question, answer }) => {
        return (
          <div key={id}>
            <p className="text-cyan-900 font-semibold mb-6">{question}</p>
            <p className="text-gray-300">{answer}</p>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAllQuestions;
