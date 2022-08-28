import { useState } from "react";

import Modal from "./Modal";
import OverviewCard from "./OverviewCard";
import { getPath } from "../../utils/paths";
import { SectionTitleType, TechnologiesSectionTitle } from "./SharedTextgroups";

const Overview4Items = (props) => {
  const { data, children, large, type } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  const webPath = getPath("/technologies/web");
  const aiMlPath = getPath("/technologies/ai-ml");
  const cyberPath = getPath("/technologies/cyber-security");
  const bigDataPath = getPath("/technologies/bigdata");
  const itesPath = getPath("/divisions/ites");
  const digitalCommercePath = getPath("/divisions/digital-commerce");
  const investmentsPath = getPath("/investments");

  // modal state
  const handleOpen = (id) => {
    setIsOpen(true);
    setModalData(data[id]);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${webPath ? "pt-10 xl:pt-16" : "py-10 xl:py-16"} ${
        (aiMlPath && "!pt-0") ||
        (cyberPath && "!pt-0") ||
        (itesPath && "!pt-0") ||
        (digitalCommercePath && "!py-0") ||
        (bigDataPath && "!py-10") ||
        (investmentsPath && "!py-10")
      }`}
    >
      {type && <SectionTitleType title={type} />}
      {children && (
        <TechnologiesSectionTitle>{children}</TechnologiesSectionTitle>
      )}
      <div
        className={`grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6 ${
          webPath && "!mt-6"
        } ${children && "mt-10"}`}
      >
        <OverviewCard data={data} large={large} handleOpen={handleOpen} />
      </div>
      <div className="md:hidden">
        {isOpen && modalData.subTitle && (
          <Modal data={modalData} handleClose={handleClose} isOpen={isOpen} />
        )}
      </div>
    </div>
  );
};

export default Overview4Items;
