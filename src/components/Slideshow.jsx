import React, { useState } from "react";
import pic4 from "./pictures/pic4.jpg";

const pictures = pic4;

function Slideshow() {
  
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <img
          src={pictures}
          alt=""
          className="object-cover w-full h-full transition-opacity duration-500 ease-in-out"
        />
       
        {
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="text-white text-6xl font-bold mb-4">
                Google of Blockchain
            </h1>
            <p className="text-white text-3xl">
                A Blockchain indexing protocol
            </p>
          </div>
        }
      </div>
    </div>    
  );
}

export default Slideshow;