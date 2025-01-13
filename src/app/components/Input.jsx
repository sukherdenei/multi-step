const Input = ({ label, placeholder, Label, error }) => {
  return (
    <div>
      <p className="pl-4">{Label}</p>
      <input
        className="border-2 w-[416px] h-[68px] rounded-2xl outline-[#0CA5E9] flex m-3 pl-4 "
        placeholder={placeholder}
        type="text"
      />
      <div className="error">{/* <p>Нэрээ оруулна уу</p> */}</div>
    </div>
  );
};
export default Input;
