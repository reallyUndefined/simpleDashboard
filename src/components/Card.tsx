const Card = ({ children }: React.PropsWithChildren) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 shadow-sm border w-full h-full">
      {children}
    </div>
  );
};

export default Card;
