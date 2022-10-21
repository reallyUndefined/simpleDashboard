import Card from "./Card";

interface BriefCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  iconColor: string;
}
const BriefCard = ({ icon, title, value, iconColor }: BriefCardProps) => {
  return (
    <Card>
      <div
        className={`rounded-full h-9 w-9 grid place-content-center mb-3 ${iconColor}`}
      >
        {icon}
      </div>
      <div className="flex justify-between items-end">
        <span className="text-lg">{title}</span>
        <span className="text-3xl font-bold">{value}</span>
      </div>
    </Card>
  );
};

export default BriefCard;
