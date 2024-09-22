import icon1 from "../assets/Frame6.png";
import icon2 from "../assets/Frame7.png";
import icon3 from "../assets/Frame8.png";
import arrow from "../assets/mobile-arrow.png";
import { timelineData, timelineDataRight } from "./constant";
const MobileView = () => {
  const topData = [...timelineData, ...timelineDataRight];

  return (
    <div className="p-4 sm:hidden overflow-hidden">
      <div className="space-y-6 relative mb-16 max-w-sm w-full mx-auto">
        {topData.map((item) => (
          <div
            key={item.id}
            className="bg-slate-200 p-6  rounded-2xl relative z-10 max-w-sm w-full mx-auto"
          >
            <img src={item.icon} alt={item.title} className="size-10 mb-2" />
            <div>
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}

        {/* arrow  */}
        <img
          src={arrow}
          alt="arrow"
          className="h-full absolute top-14 left-20"
        />
        {/* arrow  */}
      </div>
      <div className="gap-8 items-center pt-4 max-w-sm w-full mx-auto space-y-4">
        <div className="bg-slate-200 px-6 py-10 rounded-2xl ">
          <img src={icon1} alt="" className="w-12 mb-2" />
          <div>
            <h2 className="text-lg text-red-500 font-semibold mb-1 ">
              Significant administrative effort required
            </h2>
            <p className="text-sm text-gray-800">
              Processing supplier documents demands a heavy administrative load,
              consuming time and resources that could be better spent elsewhere.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 px-6 py-10 rounded-2xl">
          <img src={icon2} alt="" className="w-12 mb-2" />
          <div>
            <h2 className="text-lg text-red-500 font-semibold mb-1 ">
              Significant administrative effort required
            </h2>
            <p className="text-sm text-gray-800">
              Processing supplier documents demands a heavy administrative load,
              consuming time and resources that could be better spent elsewhere.
            </p>
          </div>
        </div>
        <div className="bg-slate-200 px-6 py-10 rounded-2xl ">
          <img src={icon3} alt="" className="w-12 mb-2" />
          <div>
            <h2 className="text-lg text-red-500 font-semibold mb-1 ">
              Significant administrative effort required
            </h2>
            <p className="text-sm text-gray-800">
              Processing supplier documents demands a heavy administrative load,
              consuming time and resources that could be better spent elsewhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
