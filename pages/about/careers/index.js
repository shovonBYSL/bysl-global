import BasicLayout from "../../../layouts/BasicLayout";
import CareersBanner from "../../../components/careers/CareersBanner";
import CareersCompanyInfo from "../../../components/careers/CareersCompanyInfo";
import CareerWhyBYSL from "../../../components/careers/CareerWhyBYSL";
import CareerJobCirculars from "../../../components/careers/CareerJobCirculars";

// API endpoint
import { API } from "../../../api";

const Careers = ({ careersData, departmentsData, positionsData }) => {
  return (
    <BasicLayout title="Careers" noMargin={true}>
      <div className="box">
        {/* banner section  */}
        <CareersBanner />

        {/* job circulars section  */}
        <CareerJobCirculars
          careersData={careersData}
          departmentsData={departmentsData}
          positionsData={positionsData}
        />

        {/* company info section  */}
        <CareersCompanyInfo />
      </div>

      {/* why BYSL section  */}
      <CareerWhyBYSL />
    </BasicLayout>
  );
};

export async function getServerSideProps() {
  const allJobs = await fetch(`${API}/job-posts/`);
  const departments = await fetch(`${API}/job-posts/departments/`);
  const positions = await fetch(`${API}/job-posts/position-types/`);

  const careersData = await allJobs.json();
  const departmentsData = await departments.json();
  const positionsData = await positions.json();

  return {
    props: {
      careersData,
      departmentsData,
      positionsData,
    },
  };
}

export default Careers;
