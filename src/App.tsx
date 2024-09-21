import icon1 from "./assets/Frame6.png";
import icon2 from "./assets/Frame7.png";
import icon3 from "./assets/Frame8.png";
import lineImg from "./assets/line.png";
import MobileView from "./components/MobileView";
import Timeline from "./components/timeline/Timeline";
import TimelineRight from "./components/timelineright/Timeline";
const App = () => {
  return (
    <div className="">
      <div className="w-full max-w-5xl mx-auto px-5 py-8 hidden sm:block">
        <div className="flex items-center gap-16 relative pb-32 ">
          <img
            src={lineImg}
            alt="line"
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[103%] z-50 w-6"
          />
          <Timeline />
          <TimelineRight />
        </div>
        {/* bottom content  */}
        <div className="flex gap-8 items-center -translate-y-4">
          <div className="bg-slate-200 px-4 py-10 rounded-2xl ">
            <img src={icon1} alt="" className="mx-auto w-12 mb-2" />
            <div>
              <h2 className="text-lg text-red-500 font-semibold mb-1 ">
                Significant administrative effort required
              </h2>
              <p className="text-sm text-gray-800">
                Processing supplier documents demands a heavy administrative
                load, consuming time and resources that could be better spent
                elsewhere.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 px-4 py-10 rounded-2xl translate-y-10">
            <img src={icon2} alt="" className="mx-auto w-12 mb-2" />
            <div>
              <h2 className="text-lg text-red-500 font-semibold mb-1 ">
                Significant administrative effort required
              </h2>
              <p className="text-sm text-gray-800">
                Processing supplier documents demands a heavy administrative
                load, consuming time and resources that could be better spent
                elsewhere.
              </p>
            </div>
          </div>
          <div className="bg-slate-200 px-4 py-10 rounded-2xl ">
            <img src={icon3} alt="" className="mx-auto w-12 mb-2" />
            <div>
              <h2 className="text-lg text-red-500 font-semibold mb-1 ">
                Significant administrative effort required
              </h2>
              <p className="text-sm text-gray-800">
                Processing supplier documents demands a heavy administrative
                load, consuming time and resources that could be better spent
                elsewhere.
              </p>
            </div>
          </div>
        </div>
      </div>

      <MobileView />
    </div>
  );
};

export default App;
