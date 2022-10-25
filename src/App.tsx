import DashboardContents from "./components/DashboardContents";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="font-barlowCondensed text-slate-600">
      <div className="grid grid-cols-[5rem_1fr] lg:grid-cols-[18rem_1fr] min-h-screen">
        <div className="bg-navyBlue">
          <SideNav />
        </div>
        <div className="bg-gray-100">
          <TopNav />
          <DashboardContents />
        </div>
      </div>
    </div>
  );
}

export default App;
