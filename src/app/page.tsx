"use client";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Header from "@/components/sections/Header";
import MainTitle from "@/components/ui/MainTitle";

const Home = () => {
  return (
    <div>
      <Wrapper>
        <Navbar />
        {/* MAIN PART START */}
        <Header />
        <MainTitle
          text="kazi mehedi hasan "
          highlightedText={["kazi","hasan"]}
          highlightedTextClass="bg-black text-white rounded p-1.5"
          style=""
        />
        {/* MAIN PART END */}
        <Footer />
      </Wrapper>
    </div>
  );
};

export default Home;
