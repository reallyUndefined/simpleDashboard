import Card from "./Card";

const RequestCard = () => (
  <Card>
    <h2 className="text-2xl font-semibold mb-2">Requests</h2>
    <div className="flex justify-between items-end border-b pb-2 mb-2">
      <span>Profile update request</span>
      <span className="font-bold">21</span>
    </div>
    <div className="flex justify-between items-end border-b pb-2 mb-2">
      <span>Leave request</span>
      <span className="font-bold">13</span>
    </div>
    <div className="flex justify-between items-end border-b pb-2 mb-2">
      <span>Loan request</span>
      <span className="font-bold">06</span>
    </div>
    <div className="flex justify-between items-end">
      <span>Other requests</span>
      <span className="font-bold">18</span>
    </div>
  </Card>
);

export default RequestCard;
