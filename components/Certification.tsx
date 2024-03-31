import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";
import { dataCertificate } from "@/utils/data";

type Props = {};

const Certification = (props: Props) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="certification"
      className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle
        title="Some of the certifications obtained"
        titleNo="04"
        classname="justify-end"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {dataCertificate?.slice(0, 6).map((item, i) => (
          <CertificateCard key={i} title={item.title} link={item.link} />
        ))}

        {showMore &&
          dataCertificate?.slice(6).map((item, i) => (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 * i }}>
                <CertificateCard key={i} title={item.title} link={item.link} />
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

export default Certification;
