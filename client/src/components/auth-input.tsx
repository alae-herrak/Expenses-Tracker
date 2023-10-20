interface props {
  type: string;
  placeholder: string;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  error: string;
}

const Input: React.FC<props> = ({
  type,
  placeholder,
  inputValue,
  setInputValue,
  error,
}) => {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={`w-[250px] rounded-md p-3 outline-slate-600 ring-slate-50 drop-shadow-md hover:ring-1 ${
          error !== "" && "border-[1px] border-red-400"
        }`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <span
        className={`w-[250px] text-left text-sm text-red-400 ${
          error === "" && "hidden"
        }`}
      >
        {error}
      </span>
    </>
  );
};

export default Input;
