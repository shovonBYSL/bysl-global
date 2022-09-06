import ResourceBlogLayout from "./ResourceBlogLayout";
import {
  SectionTitleType,
  TechnologiesSectionTitle,
} from "../SharedTextgroups";

const BlogSlider = ({ data }) => {
  return (
    <div className="py-6 xl:py-10">
      <SectionTitleType title="Resources" />
      <TechnologiesSectionTitle>
        Business insights: Latest highlights
      </TechnologiesSectionTitle>
      <div className="mt-5 lg:mt-10 card-slider service-blog-slider relative">
        <div className="sm:hidden">
          <ResourceBlogLayout size={1} data={data} />
        </div>
        <div className="hidden sm:block lg:hidden">
          <ResourceBlogLayout size={2} data={data} />
        </div>
        <div className="hidden lg:block xl:hidden">
          <ResourceBlogLayout size={3} data={data} />
        </div>
        <div className="hidden xl:block">
          <ResourceBlogLayout size={4} data={data} />
        </div>
      </div>
    </div>
  );
};

export default BlogSlider;
