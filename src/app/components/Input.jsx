export const Input = ({ label, placeholder, error }) => {
  return (
    <div>
      <p className="pl-6">{label}</p>
      <input
        className="border-2 w-[416px] h-[68px] rounded-2xl outline-[#0CA5E9] flex m-auto"
        placeholder={placeholder}
        type="text"
      />
      <div className="error">{/* <p>Нэрээ оруулна уу</p> */}</div>
    </div>
  );
};
