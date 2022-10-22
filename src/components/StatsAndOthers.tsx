import Card from "./Card";
import megaphone from "../images/megaphone.svg";
import Button from "./Button";
import RequestCard from "./RequestCard";
import CompanyStatCard from "./CompanyStatCard";
import EmployeeGenderCard from "./EmployeeGenderCard";
import SurveyCard from "./SurveyCard";

const StatsAndOther = () => {
  return (
    <div className="mt-12 grid grid-rows-[1fr_min-content] grid-cols-[2fr_3fr] gap-5">
      <SurveyCard />
      <div className="grid grid-cols-2 gap-5">
        <EmployeeGenderCard men={125} women={75} />
        <RequestCard />
        <CompanyStatCard
          title="New Clients"
          description="New clients joined during a period of time."
          isGood={false}
          percent={-2}
        />
        <CompanyStatCard
          title="Projects Done"
          description="Projects completed during a period of time."
          isGood
          percent={86}
        />
      </div>
      <div className="col-span-2 flex gap-5">
        <Card>
          <h2 className="text-2xl font-semibold">Create Announcement</h2>
          <div className="flex items-center justify-between mb-6">
            <span className="w-[24ch]">
              Make an announcement to your coworkers
            </span>
            <img className="h-24" src={megaphone} alt="" />
          </div>
          <div className="flex justify-between items-center">
            <Button text="Create announcement" />
            <button>See history</button>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold mb-4">Quick links</h2>
          <p className="mb-4">Based on your most frequently used modules</p>
          <div className="flex flex-wrap gap-x-10 gap-y-1">
            <a href="/">Add employee</a>
            <a href="/">Profile request update</a>
            <a href="/">Payroll management</a>
            <a href="/">Marketplace</a>
            <a href="/">Special days</a>
            <a href="/">Audit trail</a>
          </div>
        </Card>

        <Card>
          <h2 className="text-2xl font-semibold">Manual</h2>
          <div className="flex items-center gap-4">
            <img
              className="h-32"
              src="https://cdn.pixabay.com/photo/2013/07/13/10/12/sketchbook-156775_960_720.png"
              alt=""
            />
            <div className="flex flex-col gap-5">
              <p className="">
                Create your company manual. Add everything you want your
                employees to know about the company.
              </p>
              <Button text="Add content" className="self-end" />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatsAndOther;
