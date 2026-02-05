"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import logoData from "@/../public/logo.json";

export default function LogoAnimation() {
  return (
    <div className="w-full max-w-[240px] sm:max-w-[300px] md:max-w-[380px] h-auto">
      <Lottie 
        animationData={logoData} 
        loop={false} 
        autoplay={true}
      />
    </div>
  );
}
