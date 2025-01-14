const Footer = ({ onClick, currentStep }) => {
  return (
    <div className="bg-[#121316]  m-auto w-[417px] h-[44px] rounded-lg border-blue-600 text-white  text-center mt-9 ">
      <button onClick={onClick}>Continue {currentStep}/3</button>
    </div>
  );
};
export default Footer;
