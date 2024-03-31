import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
import { TbBrandGithub } from "react-icons/tb";

type Props = {
  project: {
    id: number;
    title: string;
    image: any;
    link: string;
    github: string;
    youtube: string;
    description: string;
    techStack: string[];
  };
  key: number;
};

const CardProject: React.FC<Props> = ({ project, key }) => {
  return (
    <div
      className={`flex flex-col gap-6 p-2 ${
        project.id % 2 === 0 ? "xl:flex-row-reverse" : "xl:flex-row"
      }`}
      key={key}>
      <Link
        className="w-full xl:w-1/2 h-auto relative group"
        href={project.link}
        target="_blank">
        <div>
          <Image
            className="w-full h-full object-contain"
            src={project.image}
            alt={project.title}
            width={500}
            height={500}
          />
          <div className="absolute w-full h-full bg-textGreen/10 rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
        </div>
      </Link>
      <div
        className={`w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right z-10 ${
          project.id % 2 === 0 ? "" : "xl:-ml-16"
        }`}>
        <div>
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            Featured Project
          </p>
          <h3 className="text-2xl font-bold">{project.title}</h3>
        </div>

        <p
          className={`bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md ${
            project.id % 2 === 0 ? "xl:-ml-16" : ""
          }`}>
          {project.description}
        </p>
        <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark xs:flex-wrap xs:justify-start">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="text-2xl flex gap-4">
          <Link
            className="hover:text-textGreen duration-300"
            href={project.github}
            target="_blank">
            <TbBrandGithub />
          </Link>
          <Link
            className="hover:text-textGreen duration-300"
            href={project.youtube}
            target="_blank">
            <AiOutlineYoutube />
          </Link>
          <Link
            className="hover:text-textGreen duration-300"
            href={project.link}
            target="_blank">
            <RxOpenInNewWindow />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
