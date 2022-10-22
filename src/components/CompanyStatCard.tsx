import Card from "./Card";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { HiChevronDown } from "react-icons/hi";

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
}: CompanyStatCardProps) => (
  <Card>
    <h2 className="text-2xl font-semibold">{title}</h2>
    <p className="mb-3">{description}</p>
    <div className="flex justify-between items-center">
      <div className="border rounded-md shadow-sm px-2 py-1 flex gap-1 items-center">
        <span className="font-semibold">Q2 2021</span> <HiChevronDown />
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

export default CompanyStatCard;
