import Input from "../components/Input";
import LogoAndHeader from "../components/LogoAndHeader";
import Footer from "./Footer";

export default function Second({ onClick, currentStep }) {
  return (
    <div className="bg-[#F3F4F6] w-[100vw] h-[100vh] pt-40">
      <div className="card w-[480px] h-[655px] bg-[#FFFFFF] m-auto border-2 rounded-2xl border-[#FFFFFF]  ">
        <LogoAndHeader />
        <Input Label={"Email"} placeholder={"Placeholder"} type="email" />
        <Input
          Label={"Phone number"}
          placeholder={"Placeholder"}
          type="number"
        />
        <Input Label={"Password"} placeholder={"Placeholder"} type="password" />
        <Input
          Label={"Confirm password"}
          placeholder={"Placeholder"}
          type="password"
        />
        <Footer onClick={onClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
