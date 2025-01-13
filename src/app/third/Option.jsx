const Input = ({ placeholder, Label }) => {
  const error = 0;

  return (
    <div className="m-3 ">
      <p className="pl-6">
        {Label} <span className="text-red-500">*</span>
      </p>
      <input
        placeholder={placeholder}
        type="text"
        name=""
        id=""
        className={`border-2 w-[416px] h-[68px] border-gray-300 rounded-2xl outline-none flex m-auto pl-4 ${
          error ? "focus:border-blue-500" : "focus:border-green-500"
        }`}
      />
    </div>
  );
};
export default Input;
