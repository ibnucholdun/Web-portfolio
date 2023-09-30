import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Todo List"
          des="A simple web tool that allows users to record, manage, and organize the tasks or jobs they need to complete."
          listItem={["Reactjs", "Bootstrap", "Redux"]}
          link="https://todo-list-app-ic.netlify.app/"
        />
        <ArchiveCard
          title="Movie Apps with TMDBApi"
          des="Movie App is a website that uses the services of The Movie Database (TMDB) API to access and display information about movies and television shows."
          listItem={["Javascript", "Bootstrap"]}
          link="https://ic-movies-app.netlify.app/"
        />
        <ArchiveCard
          title="Calculator BMI"
          des="BMI Calculator is a simple website used to calculate a person's Body Mass Index (BMI)."
          listItem={["Javascript"]}
          link="https://ic-bmi-calculator.netlify.app/"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Bookshelf App with Local torage"
                des="Bookshelf app is a website designed to help users organize and manage their book collection."
                listItem={["Javascript"]}
                link="https://ic-bookshelf-apps.netlify.app/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
