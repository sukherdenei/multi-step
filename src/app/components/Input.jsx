const Input = ({ label, placeholder, Label }) => {
  const error = "true";
  return (
    <div>
      <p className="pl-4">
        {Label} <span className="text-red-500">*</span>
      </p>
      <input
        placeholder={placeholder}
        type="text"
        name=""
        id=""
        className={`border-2 w-[416px] h-[68px] rounded-2xl outline-[#0CA5E9] flex m-3 pl-4 ${
          error ? "focus:border-red-500" : "focus:border-green-500"
        }`}
      />
      <div className="error">{/* <p>Нэрээ оруулна уу</p> */}</div>
    </div>
  );
};
export default Input;

//  className="border-2 w-[416px] h-[68px] rounded-2xl outline-[#0CA5E9] flex m-3 pl-4"
