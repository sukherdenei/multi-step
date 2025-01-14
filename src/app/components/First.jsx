// "use client";
import { useState } from "react";
import Input from "../components/Input";
import LogoAndHeader from "../components/LogoAndHeader";
import Footer from "./Footer";

export default function First({ onClick, currentStep }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { firstName, lastName, userName } = formValues;
    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Please enter your first name",
      }));
    }
    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Please enter your last name",
      }));
    }
    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "Please enter your username",
      }));
    }
  };

  return (
    <div>
      <div className="card w-[480px] h-[655px] bg-[#FFFFFF] m-auto border-2 rounded-2xl border-[#FFFFFF] ">
        <LogoAndHeader />
        <Input
          name="firstName"
          Label={"First name "}
          placeholder={"Your first name"}
          type="name"
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.firstName}</p>
        <Input
          name="lastName"
          Label={"Last name "}
          placeholder={"Your last name"}
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7 ">{formErrors.lastName}</p>
        <Input
          name="userName"
          Label={"Username "}
          placeholder={"Your username"}
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.userName}</p>
        <Footer onClick={onClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
