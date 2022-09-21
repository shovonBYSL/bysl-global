import SolutionsLayout from "../../layouts/SolutionsLayout";
import EducationSolutionsBanner from "../../components/solutions/education/EducationSolutionsBanner";
import EducationSolutions from "../../components/solutions/education/EducationSolutions";
import EducationProblems from "../../components/solutions/education/EducationProblems";
import SolutionsOverviewFull from "../../components/solutions/SolutionsOverviewFull";
import { solutionsResourcesData } from "../../public/data/solutions/blogData";
import {
  educationOverviewData,
  educationProblemsAndSolutionsData,
} from "../../public/data/solutions/educationSolutionData";

const Education = ({
  banner,
  overviewData,
  solutionsResources,
  problemsAndSolutionsData,
}) => {
  return (
    // this component is wrapped in a layout which contains some of the common components in maximum pages
    <SolutionsLayout
      title="Education"
      data={solutionsResources}
      noMargin={true}
    >
      {/* banner section  */}
      <EducationSolutionsBanner banner={banner} />

      {/* overview section  */}
      <SolutionsOverviewFull data={overviewData} />
      <div className="box">
        {/* problems section  */}
        <EducationProblems data={problemsAndSolutionsData} />

        {/* solutions section  */}
        <EducationSolutions data={problemsAndSolutionsData} />
      </div>
    </SolutionsLayout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      banner: "/images/banners/education_solutions_banner.png",
      solutionsResources: solutionsResourcesData,
      overviewData: educationOverviewData,
      problemsAndSolutionsData: educationProblemsAndSolutionsData,
    },
  };
}

export default Education;
