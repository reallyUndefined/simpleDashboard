import Card from "./Card";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

interface CompanyStatCardProps {
  title: string;
  description: string;
  percent: number;
  isGood: boolean;
}
const CompanyStatCard = ({
  title,
  description,
  percent,
  isGood,
}: CompanyStatCardProps) => {
  return (
    <Card>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <div className="relative">
          <select className="w-full px-2 py-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-slate-300">
            {["Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021"].map((option) => (
              <option className="bg-white hover:bg-slate-100">{option}</option>
            ))}
          </select>
        </div>
        <div className="flex gap-2">
          <span
            className={`text-xl font-bold ${
              isGood ? "text-green-600" : "text-red-600"
            }`}
          >
            {percent}%
          </span>
          <div
            className={`rounded-full w-8 grid place-content-center ${
              isGood ? "bg-green-300 text-green-600" : "bg-red-300 text-red-600"
            }`}
          >
            {isGood ? <AiOutlineLike /> : <AiOutlineDislike />}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CompanyStatCard;
