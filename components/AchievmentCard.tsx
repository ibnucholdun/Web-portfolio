import Image, { StaticImageData } from "next/image";
import { FaTrophy } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  image: string | StaticImageData;
  link: string;
}

const AchievmentCard = ({ title, image, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-70 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaTrophy className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
        </div>
        <div>
          <Image
            src={image}
            alt={title}
            className="min-w-full max-h-full object-cover"
          />
          <h2 className="text-base font-titleFont font-semibold tracking-wide group-hover:text-textGreen pt-2">
            {title}
          </h2>
        </div>
      </div>
    </a>
  );
};

export default AchievmentCard;
