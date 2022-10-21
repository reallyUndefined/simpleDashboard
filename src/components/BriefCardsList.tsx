import BriefCard from "./BriefCard";
import {
  BsPerson,
  BsCalendar2Date,
  BsPersonCheck,
  BsCashStack,
} from "react-icons/bs";

const BriefCardsList = () => {
  return (
    <div className="flex gap-5">
      <BriefCard
        icon={<BsPerson />}
        title="Number of staff"
        value="128"
        iconColor="bg-blue-300 text-blue-600"
      />
      <BriefCard
        icon={<BsCalendar2Date />}
        title="Number of leaves"
        value="16"
        iconColor="bg-red-300 text-red-600"
      />
      <BriefCard
        icon={<BsPersonCheck />}
        title="Profile update request"
        value="21"
        iconColor="bg-yellow-300 text-yellow-600"
      />
      <BriefCard
        icon={<BsCashStack />}
        title="Next pay"
        value="25th June"
        iconColor="bg-green-300 text-green-600"
      />
    </div>
  );
};

export default BriefCardsList;
