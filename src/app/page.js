import LogoAndHeader from "./components/LogoAndHeader";
import Input from "./components/Input";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F3F4F6] w-[100vw] h-[100vh] pt-40">
      <div className="card w-[480px] h-[655px] bg-[#FFFFFF] m-auto border-2 rounded-2xl border-[#FFFFFF]  ">
        <LogoAndHeader />
        <Input Label={"first name *"} placeholder={"Your first name"} />
        <Input Label={"first name *"} placeholder={"Your last name"} />
        <Input Label={"first name *"} placeholder={"Your username"} />
        <Footer />
      </div>
      <div className="second">{/* <Header /> */}</div>
    </div>
  );
}
