import { useState } from "react";
import Input from "../components/Input";
import LogoAndHeader from "../components/LogoAndHeader";
import Footer from "./Footer";

export default function Second({ onClick, currentStep }) {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClickChecker = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.email.trim()) {
      newErrors.email = "email";
      isValid = false;
    }
    if (!formValues.phoneNumber.trim()) {
      newErrors.phoneNumber = "Last name is required";
      isValid = false;
    }
    if (!formValues.password.trim()) {
      newErrors.password = "User name is required";
      isValid = false;
    }
    if (!formValues.confirmPassword.trim()) {
      newErrors.confirmPassword = "User name is required";
      isValid = false;
    } else if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "passs";
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
  };

  return (
    <div className="flex flex-col justify-between	card w-[480px] h-[655px] bg-[#FFFFFF] p-[32px] rounded-[8px]  ">
      <div className="border-2 rounded-2xl border-[#FFFFFF] ">
        <LogoAndHeader />
        <Input
          name="email"
          Label={"Email"}
          placeholder={"Placeholder"}
          type="email"
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.email}</p>
        <Input
          name="phoneNumber"
          Label={"Phone number"}
          placeholder={"Placeholder"}
          type="number"
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.phoneNumber}</p>
        <Input
          name="password"
          Label={"Password"}
          placeholder={"Placeholder"}
          type="password"
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.password}</p>
        <Input
          name="confirmPassword"
          Label={"Confirm password"}
          placeholder={"Placeholder"}
          type="password"
          onChange={handleChange}
        />
        <p className="text-red-500 pl-7">{formErrors.confirmPassword}</p>
        <Footer onClick={handleClick} currentStep={currentStep + 1} />
      </div>
    </div>
  );
}
