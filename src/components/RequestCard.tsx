import Card from "./Card";

const RequestCard = () => (
  <Card>
    <h2 className="text-2xl font-semibold mb-2">Requests</h2>
    {[
      { type: "Profile update request", value: 21 },
      { type: "Leave request", value: 13 },
      { type: "Loan request", value: 6 },
      { type: "Other requests", value: 18 },
    ].map((req) => (
      <div
        key={req.type}
        className="flex justify-between items-end border-b pb-2 mb-2 last-of-type:pb-0 last-of-type:mb-0 last-of-type:border-none"
      >
        <span>{req.type}</span>
        <span className="font-bold">{req.value}</span>
      </div>
    ))}
  </Card>
);

export default RequestCard;
