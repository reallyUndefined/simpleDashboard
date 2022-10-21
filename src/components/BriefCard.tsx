interface BriefCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconColor: string;
}
const BriefCard = ({ icon, title, value, iconColor }: BriefCardProps) => {
  return (
    <div className="rounded-lg px-4 py-5 shadow-sm border w-full">
      <div
        className={`rounded-full h-9 w-9 grid place-content-center mb-3 ${iconColor}`}
      >
        {icon}
      </div>
      <div className="flex justify-between items-end">
        <span className="text-lg">{title}</span>
        <span className="text-3xl font-bold">{value}</span>
      </div>
    </div>
  );
};

export default BriefCard;
