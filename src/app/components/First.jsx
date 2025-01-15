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

  const handleClickChecker = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }
    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }
    if (!formValues.userName.trim()) {
      newErrors.userName = "User name is required";
      isValid = false;
    }
    setFormErrors(newErrors);
    return isValid;
  };

  const handleClick = () => {
    const isValid = handleClickChecker();
    if (isValid) {
      onClick();
    }
    // const { firstName, lastName, userName } = formValues;
    // if (!firstName.trim()) {
    //   setFormErrors((prev) => ({
    //     ...prev,
    //     firstName: "Please enter your first name",
    //   }));
    // }
    // if (!lastName.trim()) {
    //   setFormErrors((prev) => ({
    //     ...prev,
    //     lastName: "Please enter your last name",
    //   }));
    // }
    // if (!userName.trim()) {
    //   setFormErrors((prev) => ({
    //     ...prev,
    //     userName: "Please enter your username",
    //   }));
    // }
    // onClick;
  };

  return (
    <div className="flex flex-col justify-between	card w-[480px] h-[655px] bg-[#FFFFFF] p-[32px] rounded-[8px]">
      <div className=" border-2 rounded-2xl border-[#FFFFFF] ">
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
      </div>
      <div>
        <Footer onClick={handleClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
