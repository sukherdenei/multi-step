const Input = ({ placeholder, Label, lastName, userName, firstName }) => {
  const error = "";
  // !lastName ? (error = true) : (error = null);
  // !userName ? (error = true) : (error = null);
  // !firstName ? (error = true) : (error = null);

  return (
    <div className="m-3 ">
      <p className="pl-6">
        {Label} <span className="text-red-600">*</span>
      </p>
      <input
        value={lastName}
        placeholder={placeholder}
        type="text"
        // onChange={(e) => lastName(e.target.value)}
        name=""
        id=""
        className={`border-2 w-[416px] h-[68px] border-gray-300 rounded-2xl outline-none flex m-auto pl-4 ${
          error ? "focus:border-blue-500" : "focus:border-red-500"
        }`}
      />
    </div>
  );
};
export default Input;
