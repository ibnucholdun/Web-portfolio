import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Skilvul from "./works/Skilvul";
import Dicoding from "./works/Dicoding";
import Upwork from "./works/Upwork";

const Experience = () => {
  const [workDicoding, setWorkDicoding] = useState(false);
  const [workSkilvul, setWorkSkilvul] = useState(false);
  const [workUpwork, setWorkUpwork] = useState(true);

  const handleDicoding = () => {
    setWorkDicoding(true);
    setWorkSkilvul(false);
    setWorkUpwork(false);
  };

  const handleSkilvul = () => {
    setWorkDicoding(false);
    setWorkSkilvul(true);
    setWorkUpwork(false);
  };

  const handleUpwork = () => {
    setWorkDicoding(false);
    setWorkSkilvul(false);
    setWorkUpwork(true);
  };

  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleUpwork}
            className={`${
              workUpwork
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Upwork
          </li>
          <li
            onClick={handleSkilvul}
            className={`${
              workSkilvul
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Skilvul
          </li>
          <li
            onClick={handleDicoding}
            className={`${
              workDicoding
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark"
            } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Dicoding
          </li>
        </ul>
        {workSkilvul && <Skilvul />}
        {workDicoding && <Dicoding />}
        {workUpwork && <Upwork />}
      </div>
    </section>
  );
};

export default Experience;
