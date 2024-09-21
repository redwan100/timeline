import leftArrow from "../../assets/card-arrow-left.png";

type cardProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
};

const TimelineCard = ({ item }: { item: cardProps }) => {
  return (
    <div className="bg-slate-200 flex gap-5 p-6  rounded-2xl relative z-10">
      <img
        src={leftArrow}
        alt="left-arrow"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[2.1rem] translate-x-8 -z-10"
      />
      <div className="">
        <img src={item.icon} alt="icon" className="min-w-10" />
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
        <p className="text-sm text-gray-800">{item.description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;
