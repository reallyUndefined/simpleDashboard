import { BiSearch, BiMessageDots, BiCaretDown } from "react-icons/bi";

const TopNav = () => {
  return (
    <div className="bg-white px-8  flex justify-between items-center">
      <nav className="flex gap-10">
        <div className="relative py-5 cursor-pointer">
          <a href="#employee">Employee View</a>
        </div>
        <div className="relative py-5 cursor-pointer">
          <a href="#sys">System Control</a>
        </div>
        <div className="relative py-5 after:absolute after:bottom-0 after:left-0 after:rounded after:w-full after:bg-blue-600 after:h-1 font-semibold text-blue-600 cursor-pointer">
          <a href="#admin">Admin</a>
        </div>
      </nav>
      <div className="flex gap-4">
        <div className="rounded-full h-10 w-10 border grid place-content-center shadow">
          <BiSearch />
        </div>
        <div className="rounded-full h-10 w-10 border grid place-content-center shadow">
          <BiMessageDots />
        </div>
        <div className="flex items-center">
          <div className="rounded-full h-10 w-10 border shadow overflow-hidden">
            <img
              className="h-10 w-10 object-cover"
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="profile pic"
            />
          </div>
          <BiCaretDown />
        </div>
      </div>
    </div>
  );
};

export default TopNav;
