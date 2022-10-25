import Card from "./Card";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";

const SurveyCard = () => {
  const chartData: { legend: string; percent: string; color: string }[] = [
    { legend: "Extremely likely", percent: "62%", color: "green" },
    { legend: "Verry likely", percent: "38%", color: "greenyellow" },
    { legend: "Somewhat likely", percent: "22%", color: "lightsalmon" },
    { legend: "Not so likely", percent: "16%", color: "tomato" },
    { legend: "Not at all likely", percent: "8%", color: "red" },
  ];

  return (
    <Card>
      <div className="flex flex-col gap-4 h-full min-h-[20rem]">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Employee Happiness</h2>
          <span className="text-slate-500">August 2022</span>
        </div>
        <div className="relative h-full my-6">
          {/* chart bg */}
          <div className="absolute inset-0 w-full h-full flex flex-col justify-between text-right">
            {["100%", "75%", "50%", "25%", "0%"].map((percent) => (
              <div key={percent} className="flex gap-1 items-center">
                <span className="leading-none text-slate-500 w-8">
                  {percent}
                </span>
                <div className="border-t w-full"></div>
              </div>
            ))}
          </div>
          {/* chart */}
          <div className="h-full w-full py-2 pl-9">
            <div className="h-full w-full flex justify-evenly items-end">
              {chartData.map((data) => (
                <div
                  key={data.legend}
                  className="relative w-[12%] rounded-t-md"
                  style={{ height: data.percent, backgroundColor: data.color }}
                >
                  <span
                    className="absolute -top-6 left-0 w-full text-center font-bold text-sm"
                    style={{ color: data.color }}
                  >
                    {data.percent}
                  </span>
                  <span className="absolute top-[102%] left-0 w-full text-center text-xs text-slate-500">
                    {data.legend}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a href="/">See all surveys</a>
          <div className="flex items-center gap-3">
            <button
              disabled
              className="rounded border p-2 disabled:text-gray-400"
              aria-label="previous survey"
            >
              <AiOutlineDoubleLeft />
            </button>
            <span className="">1/5</span>
            <button
              className="rounded border p-2 disabled:text-gray-400"
              aria-label="next survey"
            >
              <AiOutlineDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SurveyCard;
