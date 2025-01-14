const Footer = ({ onClick, currentStep }) => {
  return (
    <div className="m-auto  w-[417px] h-[44px] rounded-lg border-blue-600 text-white  text-center mt-9 ">
      <button className="w-[128px] h-[44px] bg-white rounded-md border-2 text-black">
        Back
      </button>
      <button
        className="w-[280px] h-[44px] rounded-md bg-black"
        onClick={onClick}
      >
        Continue {currentStep}/4
      </button>
    </div>
  );
};
export default Footer;
