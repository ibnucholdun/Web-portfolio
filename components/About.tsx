import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi! I’m a Meta Certified Frontend Developer with 3+ years of
            experience in building fast, scalable, and user-friendly web
            applications. I specialize in Next.js, React, Tailwind CSS, and
            Strapi, ensuring top-notch performance and seamless user
            experiences.
          </p>
          <p>
            With a strong foundation in Full-Stack Development, I have
            successfully delivered 10+ real-world projects, including SaaS
            platforms, e-commerce websites, and enterprise applications.
          </p>
          <p className="">
            🔹 What I Can Do for You: <br />✅ Frontend Development – Next.js,
            React, Tailwind CSS, TypeScript, shadcnUi ✅ Headless CMS & API
            Integration – Strapi, Directus, Firebase <br />✅ Performance
            Optimization – Faster load times & improved SEO (LCP, Lighthouse,
            Core Web Vitals) <br />✅ Full-Stack Support – Node.js, Express.js,
            PostgreSQL, MongoDB <br />✅ Responsive UI/UX – Ensuring a seamless
            experience across all devices
          </p>
          <p>
            🚀 Why Work With Me? <br />
            🔹 Meta Certified – Verified expertise in modern frontend
            technologies <br />
            🔹 10+ successful projects – Proven track record in real-world
            applications <br />
            🔹 Clean, scalable, and maintainable code – Following industry best
            practices <br />
            🔹 Fast communication & problem-solving – Ensuring smooth
            collaboration
          </p>
          <p>
            💡 Let’s build something amazing together! Send me a message, and
            let’s discuss how I can help with your project. 🚀
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-3 gap-2">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Tailwindcss
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Strapi
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              PostgreSQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Supabase
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Firebase
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
