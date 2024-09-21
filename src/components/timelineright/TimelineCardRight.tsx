import rightArrow from "../../assets/card-arrow-right.png";

type cardProps = {
  id: number;
  title: string;
  description: string;
  icon: string;
};
const TimelineCard = ({ item }: { item: cardProps }) => {
  return (
    <div
      key={item.id}
      className="bg-slate-200 flex gap-5 p-6 rounded-2xl relative"
    >
      <img
        src={rightArrow}
        alt="left-arrow"
        className="absolute -left-[2.1rem] top-1/2 -translate-y-1/2 w-[2.1rem]  "
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
