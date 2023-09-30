import {
  animacareImg,
  serrlaImg,
  katalogRestoImg,
  tokopediaPlayCloneImg,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6 p-2 ">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://my-animacare.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={animacareImg}
                alt="animacareImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">AnimaCare</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Animacare is an online veterinary service that helps in keeping
              and caring for pets. It features{" "}
              <span className="text-textGreen">
                veterinary consultations with doctors
              </span>
              , <span className="text-textGreen">searching articles </span>about
              pets, <span className="text-textGreen">sharing pet stories</span>,
              and
              <span className="text-textGreen"> shopping for pet needs</span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark xs:flex-wrap xs:justify-start">
              <li>Javascript</li>
              <li>Bootstrap</li>
              <li>ExpressJs</li>
              <li>MongoDb</li>
              <li>Crisp</li>
              <li>Netlify</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ibnucholdun/AnimaCare"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/gzCyNc1rxUA?si=oDJqMu1mTkvlcWAC"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://my-animacare.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://serrla-academy.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={serrlaImg}
                alt="serrlaImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Serrla Academy</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Serrla Academy is a website engaged in arts and culture education.
              Serrla helps students{" "}
              <span className="text-textGreen">
                learn art through reading materials
              </span>
              ,{" "}
              <span className="text-textGreen">
                interactive learning videos
              </span>
              , <span className="text-textGreen">quizzes</span> and{" "}
              <span className="text-textGreen">art events</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark xs:flex-wrap xs:justify-start">
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>Redux</li>
              <li>Bootstrap</li>
              <li>MySQL</li>
              <li>ExpressJs</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/orgs/FEBE-18-SERRLA/repositories"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://youtu.be/tAsLP_EyRJ8?si=DqVZO7j0a3_jSrHE"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://serrla-academy.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://ic-resto.netlify.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={katalogRestoImg}
                alt="katalogRestoImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Resto Catalog</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              Resto Catalog is a website to display a{" "}
              <span className="text-textGreen">
                list of food and beverage menus offered by a restaurant{" "}
              </span>{" "}
              in indonesia and can{" "}
              <span className="text-textGreen">comment </span>
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark xs:flex-wrap xs:justify-start">
              <li>Javascript</li>
              <li>Webpack</li>
              <li>IndexDB</li>
              <li>Jasmine</li>
              <li>Karma</li>
              <li>Netlify</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ibnucholdun/Menjadi-Front-end-Web-Developer-Expert"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://ic-resto.netlify.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}

        {/* ============ project Four Start here ============== */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://final-project-gg-3.vercel.app/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-full object-contain"
                src={tokopediaPlayCloneImg}
                alt="tokopediaPlayCloneImg"
              />
              <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-6 justify-between items-end text-right z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Tokopedia Play Clone</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md xl:-mr-16">
              Tokopedia Play Clone is a video streaming platform website owned
              by Tokopedia with features{" "}
              <span className="text-textGreen">List of videos</span> that can be
              played,
              <span className="text-textGreen"> Search</span> feature,{" "}
              <span className="text-textGreen">Comment</span> feature
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark xs:flex-wrap xs:justify-start">
              <li>Javascript</li>
              <li>ReactJs</li>
              <li>ChakraUI</li>
              <li>ExpressJs</li>
              <li>MongoDB</li>
              <li>Vercel</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="https://github.com/ibnucholdun/final-project-GG3.0"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://final-project-gg-3.vercel.app/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Four End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
