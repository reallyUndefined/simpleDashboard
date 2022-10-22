import flowers from "../images/flowers.svg";
import BriefCardsList from "./BriefCardsList";
import StatsAndOther from "./StatsAndOthers";

const DashboardContents = () => {
  return (
    <div className="px-8 py-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-4">
        <img className="h-20" src={flowers} alt="" />
        <div className="">
          <h1 className="text-4xl text-slate-700 font-semibold">Hello Prabu</h1>
          <span>Welcome to the dashboard.</span>
        </div>
      </div>
      <BriefCardsList />
      <StatsAndOther />
    </div>
  );
};

export default DashboardContents;
