import { FaCertificate } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";

interface Props {
  title: string;
  // listItem: string[];
  link: string;
}

const CertificateCard = ({ title, link }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-full h-40 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaCertificate className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-2xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-base font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {title}
          </h2>
        </div>
        {/* <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul> */}
      </div>
    </a>
  );
};

export default CertificateCard;
