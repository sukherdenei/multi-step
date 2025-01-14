import Input from "../components/Input";
import LogoAndHeader from "../components/LogoAndHeader";
import Footer from "./Footer";

export default function First({ onClick, currentStep, type }) {
  return (
    <div className="bg-[#F3F4F6] w-[100vw] h-[100vh] pt-40">
      <div className="card w-[480px] h-[655px] bg-[#FFFFFF] m-auto border-2 rounded-2xl border-[#FFFFFF]  ">
        <LogoAndHeader />
        <Input
          Label={"First name "}
          placeholder={"Your first name"}
          type="text"
        />
        <Input Label={"Last name "} placeholder={"Your last name"} />
        <Input Label={"Username "} placeholder={"Your username"} />
        <Footer onClick={onClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
