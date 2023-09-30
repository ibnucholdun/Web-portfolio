import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-24 text-textLight">
      <a href="mailto:ibnucholdun023s@gmail.com">
        <p className="text-sm rotate-90 w-72 tracking-widest text-textGreen">
          ibnucholdun023@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-[50px] bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
