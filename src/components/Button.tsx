interface ButtonProps {
  text: string;
}
const Button = ({ text }: ButtonProps) => {
  return (
    <button className="border border-blue-500 text-blue-500 rounded px-4 py-2 font-semibold hover:text-white hover:bg-blue-500 transition-colors duration-150 ease-in-out">
      {text}
    </button>
  );
};

export default Button;
