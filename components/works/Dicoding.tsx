import { motion } from "framer-motion";
import Link from "next/link";
import { TiArrowForward } from "react-icons/ti";

const Dicoding = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Frontend Web and Backend Developer
        <Link
          href={"https://www.dicoding.com/"}
          target="_blank"
          className="text-textGreen tracking-wide underline"
        >
          @Dicoding
        </Link>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2022 - Aug 2022
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, progressive web applications {`(PWA)`},
          responsive all device and accessibility
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Work with a variety of different languages, platforms, and frameworks
          such as JavaScript, Webpack, Bootstrap, Firebase, Crisp, ExpressJs,
          HapiJs, MongoDB, Netlify and Heroku
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Communicate with multi-disciplinary teams of designers, frontend and
          backend on a daily basis
        </li>
      </ul>
    </motion.div>
  );
};

export default Dicoding;
