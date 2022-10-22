import Card from "./Card";

interface EmployeeGenderCardProps {
  men: number;
  women: number;
}
const EmployeeGenderCard = ({ men, women }: EmployeeGenderCardProps) => {
  const menPercentage = (men / (men + women)) * 100;
  const womenPercentage = (women / (men + women)) * 100;

  return (
    <Card>
      <div className="grid grid-rows-[min-content_1fr] h-full">
        <h2 className="text-2xl font-semibold mb-3">Employee Gender</h2>
        <div className="grid grid-cols-2">
          <div className="grid grid-rows-[min-content_1fr_min-content] place-content-center text-center">
            <span className="font-semibold text-pink-400">
              {womenPercentage.toFixed(1)}%
            </span>
            <div
              className="bg-pink-400 w-4 mx-auto mt-auto rounded"
              style={{ height: womenPercentage + "%" }}
            ></div>
            <span className="font-bold text-pink-400">{women}</span>
            <span className="tracking-wide">Women</span>
          </div>
          <div className="grid grid-rows-[min-content_1fr_min-content_min-content] place-content-center text-center">
            <span className="font-semibold text-blue-400">
              {menPercentage.toFixed(1)}%
            </span>
            <div
              className="bg-blue-400 w-4 mx-auto mt-auto rounded"
              style={{ height: menPercentage + "%" }}
            ></div>
            <span className="font-bold text-blue-400">{men}</span>
            <span className="tracking-wide">Men</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmployeeGenderCard;
