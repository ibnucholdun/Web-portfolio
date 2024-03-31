import SectionTitle from "./SectionTitle";
import { dataProjects } from "@/utils/data";
import CardProject from "./CardProject";
import { useState } from "react";

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        {dataProjects?.slice(0, 3).map((project) => (
          <CardProject key={project.id} project={project} />
        ))}

        {showMore &&
          dataProjects
            ?.slice(3)
            .map((project) => (
              <CardProject key={project.id} project={project} />
            ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300">
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default Projects;
