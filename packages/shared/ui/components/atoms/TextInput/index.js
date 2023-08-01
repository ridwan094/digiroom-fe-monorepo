const TextInput = ({ onChange }) => {
  return (
    <input
      onChange={onChange}
      className="h-[42px] rounded-lg px-4 shadow-2xl"
      type="text"
      placeholder="Cari apa nih?"
    />
  );
};

export default TextInput;
