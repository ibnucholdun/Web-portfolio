import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
import Link from "next/link";
const Upwork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Freelance Fullstack Developer
        <Link
          href={"https://www.upwork.com/freelancers/~012f396b600d1b970f"}
          className="text-textGreen tracking-wide underline"
          target="_blank"
        >
          @Upwork
        </Link>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Nov 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Successfully delivered 4 projects with 100% Job Success Score and
          earned $1K+ in revenue
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Specialized in building responsive web apps using React, Next.js,
          Tailwind CSS, and TypeScript
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with international clients to develop landing pages, SaaS
          dashboards, and e-commerce interfaces
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented best practices in UI/UX, code quality, and performance
          optimization
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicated clearly with clients, ensuring satisfaction, on-time
          delivery, and repeat business
        </li>
      </ul>
    </motion.div>
  );
};

export default Upwork;
