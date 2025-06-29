"use client";
import Wrapper from "@/components/shared/Wrapper";
import Button from "@/components/ui/Button";
import React from "react";
import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <p className="font-montserrat bg-yellow-950 text-4xl font-semibold text-white ">
          Home
        </p>
        <p className="bg-amber-200 text-2xl">Home2</p>
        <Button icon={<ArrowRight />} text="Ami mehedi" size="sm" />
      </Wrapper>
    </div>
  );
};

export default Home;
