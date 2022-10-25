import Card from "./Card";
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiOutlineCaretDown,
} from "react-icons/ai";
import { useState } from "react";

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Q1 2021");

  return (
    <Card>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mb-3">{description}</p>
      <div className="flex justify-between items-center">
        <div
          className="relative flex gap-2 items-center border shadow-sm rounded-md px-2 py-1 cursor-pointer"
          onClick={() => {
            setShowDropdown((prev) => !prev);
          }}
        >
          {/* <select className="w-full px-2 py-1 text-gray-500 bg-white border rounded-md shadow-sm outline-none focus:border-slate-300">
            {["Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021"].map((option) => (
              <option className="bg-white hover:bg-slate-100">{option}</option>
            ))}
          </select> */}
          <span className="font-semibold">{selectedOption}</span>
          <AiOutlineCaretDown />
          <div
            className={`absolute top-0 left-0 w-full border shadow-sm rounded-md overflow-hidden ${
              showDropdown ? "visible" : "invisible"
            }`}
          >
            <ul className="bg-white text-center">
              {["Q1 2021", "Q2 2021", "Q3 2021", "Q4 2021"].map((option) => (
                <li
                  className="hover:bg-slate-100 px-2 py-1 cursor-pointer"
                  onClick={() => {
                    setSelectedOption(option);
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          </div>
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
