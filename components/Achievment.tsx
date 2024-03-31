import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import AchievmentCard from "./AchievmentCard";
import { dataAchievments } from "@/utils/data";
import { motion } from "framer-motion";

type Props = {};

const Achievment = (props: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="achievment"
      className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some of the achievements obtained" titleNo="05" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {dataAchievments?.slice(0, 3).map((item, i) => (
          <AchievmentCard
            key={item.id}
            title={item.title}
            image={item.image as string}
            link={item.link}
          />
        ))}

        {showMore &&
          dataAchievments?.slice(3).map((item, i) => (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}>
                <AchievmentCard
                  key={item.id}
                  title={item.title}
                  image={item.image as string}
                  link={item.link}
                />
              </motion.div>
            </>
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

export default Achievment;
