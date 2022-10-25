import { BiSearch, BiMessageDots, BiCaretDown } from "react-icons/bi";

const TopNav = () => {
  return (
    <div className="bg-white px-8 flex flex-col-reverse items-center justify-between pt-2 md:flex-row md:pt-0">
      <nav className="flex gap-10 text-center max-w-[17.32rem]">
        <div className="relative py-2 lg:py-5 w-full lg:flex-shrink-0 lg:w-max cursor-pointer grid place-content-center">
          <a className="text-inherit" href="#employee">
            Employee View
          </a>
        </div>
        <div className="relative py-2 lg:py-5 w-full lg:flex-shrink-0 lg:w-max cursor-pointer grid place-content-center">
          <a className="text-inherit" href="#sys">
            System Control
          </a>
        </div>
        <div className="relative py-2 lg:py-5 w-full lg:flex-shrink-0 lg:w-max after:absolute after:bottom-0 after:left-0 after:rounded after:w-full after:bg-blue-600 after:h-1 font-semibold text-blue-600 cursor-pointer grid place-content-center">
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
