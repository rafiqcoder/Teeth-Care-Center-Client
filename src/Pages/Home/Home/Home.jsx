/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";


import UseTitle from "../../../hooks/UseTitle";
import AppoinmentCalltoAction from "../AppoinmentCalltoAction/AppoinmentCalltoAction";
import Banner from "../Banner/Banner";
import ExeptionalArea from "../ExecptionalArea/ExeptionalArea";
import InfoCards from "../InfoCards/InfoCards"; 
import ServiceArea from "../ServiceArea/ServiceArea";


const Home = () => {
//loading data by route

//seting title
  UseTitle("Home");

 
  return (
   
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <ServiceArea></ServiceArea>
      <ExeptionalArea></ExeptionalArea>
      <AppoinmentCalltoAction></AppoinmentCalltoAction>

    </div>

  );
};

export default Home;
