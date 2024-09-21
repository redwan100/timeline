import bArrowLeft from "../../assets/arrow-left.png";
import bArrowRight from "../../assets/arrow-right.png";
import { timelineData } from "../constant";
import TimelineCard from "./TimelineCard";

const Timeline = () => {
  const data = timelineData || [];
  return (
    <div className="w-full">
      <div className="space-y-8 relative">
        <img
          src={bArrowLeft}
          alt="arrow"
          className="absolute -bottom-28 -right-[.85rem] w-60 z-50 translate-x-5"
        />
        <img
          src={bArrowRight}
          alt="arrow"
          className="absolute -bottom-28 -right-[15.7rem] w-60 z-50 translate-x-5"
        />
        {data.map((item) => (
          <TimelineCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
