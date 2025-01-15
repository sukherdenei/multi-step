import Input from "../components/Input";
import LogoAndHeader from "../components/LogoAndHeader";
import Footer from "../components/Footer";

export default function Third({ onClick, currentStep }) {
  return (
    <div className="flex flex-col justify-between	card w-[480px] h-[655px] bg-[#FFFFFF] p-[32px] rounded-[8px]">
      <div className="border-2 rounded-2xl border-[#FFFFFF] ">
        <LogoAndHeader />
        <Input Label={"Date of birth"} type="date" />
        <Footer onClick={onClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
