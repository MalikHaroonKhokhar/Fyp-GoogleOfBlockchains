import React from 'react';
import frontendDeveloperImage from './aboutusImages/frontend-developer.png';
import backendDeveloperImage from './aboutusImages/backend-developer.png';
import smartContractDeveloperImage from './aboutusImages/smart-contract-developer.png';


const AboutUs = () => {
  return (
    <div>
    
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg shadow p-6">
          <img src={frontendDeveloperImage} alt="Frontend Developer" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Frontend Developer</h2>
          <p className="text-gray-700">
            Creative and detail-oriented individual who brings designs to life with ReactJS.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <img src={backendDeveloperImage} alt="Back-end Developer" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Back-end Developer</h2>
          <p className="text-gray-700">
            Problem solver who specializes in building robust and efficient server-side applications.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <img src={smartContractDeveloperImage} alt="Smart Contract Developer" className="w-full mb-4 rounded-lg" />
          <h2 className="text-xl font-bold mb-2">Smart Contract Developer</h2>
          <p className="text-gray-700">
            Expert in blockchain technology and decentralized applications.
          </p>
        </div>
      </div>

     
    </div>
    </div>
  );
};

export default AboutUs;