import Button from "../components/Button";
import Footer from "../components/Footer";
// import { LogoAndHeader } from "./Header";
import LogoAndHeader from "../components/LogoAndHeader";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] w-[100vw] h-[100vh] pt-40">
      <div className="card w-[480px] h-[655px] bg-[#FFFFFF] m-auto border-2 rounded-2xl border-[#FFFFFF]  ">
        <LogoAndHeader />
        <Button />
        <Footer />
      </div>
      <div className="second">{/* <LogoAndHeader /> */}</div>
    </div>
  );
}
