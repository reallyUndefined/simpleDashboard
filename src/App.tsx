import DashboardContents from "./components/DashboardContents";
import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="font-barlowCondensed text-slate-600">
      <div className="grid grid-cols-[20%_1fr] min-h-screen">
        <div className="bg-navyBlue"></div>
        <div className="bg-gray-100">
          <TopNav />
          <DashboardContents />
        </div>
      </div>
    </div>
  );
}

export default App;
