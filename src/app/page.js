"use client";
import { useState } from "react";
import LogoAndHeader from "./components/LogoAndHeader";
import Input from "./components/Input";
import Allset from "./components/Allset";
import Second from "./components/Second";
import Third from "./components/Third";
import First from "./components/First";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const FormStep = [First, Second, Third, Allset][currentStep];
  return (
    <div className="bg-[#F3F4F6] w-[100vw] h-[100vh]">
      <FormStep
        currentStep={currentStep}
        onClick={() => setCurrentStep(currentStep + 1)}
      />
    </div>
  );
}
