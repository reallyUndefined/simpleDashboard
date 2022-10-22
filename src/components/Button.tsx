interface ButtonProps {
  text: string;
  className?: string;
}
const Button = ({ text, className }: ButtonProps) => {
  return (
    <button
      className={`border border-blue-500 text-blue-500 rounded px-4 py-2 font-semibold hover:text-white hover:bg-blue-500 active:bg-blue-600 transition-colors duration-150 ease-in-out ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
