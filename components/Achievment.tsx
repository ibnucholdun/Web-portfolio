import React from "react";
import SectionTitle from "./SectionTitle";
import AchievmentCard from "./AchievmentCard";
import {
  achievment1,
  achievment2,
  achievment3,
  achievment4,
} from "@/public/assets";

type Props = {};

const Achievment = (props: Props) => {
  return (
    <section
      id="achievment"
      className="max-w-container mx-auto lgl:px-20 py-24"
    >
      <SectionTitle title="Some of the achievements obtained" titleNo="05" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <AchievmentCard
          title="1st place Demo Day at Skilvul"
          image={achievment1}
          link="https://drive.google.com/file/d/1W2I0E1CPgVvfjU8qTRYtaw_7yGCGyWvz/view"
        />
        <AchievmentCard
          title="People's Choice Awards Champion at Skilvul"
          image={achievment2}
          link="https://drive.google.com/file/d/1Vz6nfDyeyCb9sZM0F6B9f9aTythlojqU/view"
        />
        <AchievmentCard
          title="Best Capstone Project at Dicoding Indonesia"
          image={achievment3}
          link="https://drive.google.com/file/d/18upCMSg4ZV5efUQfvtKqcbtLzUzWhpan/view"
        />
        <AchievmentCard
          title="Outstanding Students in the Field of Work at UNSIKA Formadikip"
          image={achievment4}
          link="https://drive.google.com/file/d/1GXU6hzAdkzDMxnQJlRQXdYBewUcdGSvm/view"
        />
      </div>
    </section>
  );
};

export default Achievment;
