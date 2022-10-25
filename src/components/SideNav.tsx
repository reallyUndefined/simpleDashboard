import { useState } from "react";
import {
  RiHome8Line,
  RiAdminLine,
  RiLogoutCircleLine,
  RiCheckboxCircleLine,
  RiGroupLine,
  RiBriefcase5Line,
} from "react-icons/ri";
import {
  BsBuilding,
  BsPersonCheck,
  BsJournalCheck,
  BsQuestionSquare,
  BsExclamationDiamond,
  BsCalendar2Event,
  BsCashCoin,
} from "react-icons/bs";

const SideNav = () => {
  const [viewTestData, setViewTestData] = useState(false);

  return (
    <div className="h-full">
      <div className="px-8 py-4 flex items-center gap-5 invisible lg:visible">
        <div className="rounded-full h-10 w-10 overflow-hidden">
          <img
            className="h-10 w-10 object-cover"
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="profile pic"
          />
        </div>
        <h1 className="text-4xl font-bold text-white">D ONE</h1>
      </div>
      <div className="h-[75vh] md:mt-8 pl-1 lg:pl-8 flex flex-col justify-between items-center lg:items-stretch">
        <div>
          <div className="bg-green-500/20 text-green-500 rounded-full lg:rounded-none lg:rounded-l-lg px-4 py-2 flex items-center gap-3 cursor-pointer">
            <RiHome8Line />
            <span className="hidden lg:block">Dashboard</span>
          </div>
          <div className="grid mt-4">
            <div className="mb-1">
              <span className="text-slate-400">HIRS</span>
              <NavItem text="Admin Management" icon={<RiAdminLine />} />
              <NavItem text="Company Management" icon={<BsBuilding />} />
              <NavItem text="Employee Management" icon={<BsPersonCheck />} />
              <NavItem text="Audit Trail" icon={<BsJournalCheck />} />
              <NavItem
                text="Approval Workflow"
                icon={<RiCheckboxCircleLine />}
              />
            </div>
            <div className="mb-1">
              <span className="text-slate-400">LEAVE</span>
              <NavItem text="Requests" icon={<BsQuestionSquare />} />
              <NavItem text="Leave Policy " icon={<BsExclamationDiamond />} />
              <NavItem text="Special Days" icon={<BsCalendar2Event />} />
              <NavItem text="Apply for a staff" icon={<RiGroupLine />} />
            </div>
            <div className="mb-1">
              <span className="text-slate-400">PAYROLL</span>
              <NavItem text="Payroll" icon={<BsCashCoin />} />
              <NavItem text="Paygrade" icon={<RiBriefcase5Line />} />
            </div>
          </div>
        </div>
        <div className="text-slate-400">
          <div className="flex items-center gap-2 mb-2">
            <label
              htmlFor="test-data"
              className={`relative w-12 border rounded-full cursor-pointer ${
                viewTestData ? "bg-blue-500" : ""
              }`}
            >
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full ${
                  viewTestData ? "right-[2px]" : "left-[2px]"
                }`}
              ></div>
              <input
                type="checkbox"
                id="test-data"
                className="invisible"
                checked={viewTestData}
                onChange={() => setViewTestData((prev) => !prev)}
              />
            </label>
            <span className="hidden lg:block">Viewing test data</span>
          </div>
          <div className="flex items-center gap-2 text-lg px-4 py-1 rounded-full hover:text-red-500 hover:bg-red-600/20 w-min cursor-pointer">
            <RiLogoutCircleLine size={22} />
            <span className="hidden lg:block">Logout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface NavItemProps {
  text: string;
  icon: React.ReactNode;
}
const NavItem = ({ text, icon }: NavItemProps) => {
  return (
    <div className="text-slate-300 hover:bg-green-700/20 hover:text-green-700 rounded-full lg:rounded-none lg:rounded-l-lg px-4 py-2 flex items-center gap-3 cursor-pointer transition-colors duration-150 ease-in-out">
      {icon}
      <span className="hidden lg:block">{text}</span>
    </div>
  );
};

export default SideNav;
