const Button = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-blue-500 h-[42px] px-6 rounded-lg text-white shadow-lg"
    >
      Cari
    </button>
  );
};

export default Button;
