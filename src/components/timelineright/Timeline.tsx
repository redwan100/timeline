import { timelineDataRight } from "../constant";
import TimelineCard from "./TimelineCardRight";

const TimelineRight = () => {
  const data = timelineDataRight || [];
  return (
    <div className="w-full">
      <div className="space-y-12 relative">
        {data.map((item) => (
          <TimelineCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default TimelineRight;
