import React from "react";
import welding from "../assets/legalservice.jpg";
import WhatWeOffer from "./WhatWeOffer";

const Services = () => {
  return (
    <section id="services" className="px-6 py-16 bg-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/3">
          <img
            src={welding}
            alt="Fabrication Services"
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
          <h4 className="text-blue-700 font-semibold mb-2 uppercase">
            Our Services
          </h4>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted Legal Solutions <br /> For Individuals & Businesses
          </h2>

          <p className="text-gray-700 mb-6">
            Legal Quick provides comprehensive legal services including legal
            consultation, company registration, GST registration, trademark
            filing, agreement drafting, compliance management, and business
            legal support. Our experienced legal professionals ensure reliable,
            transparent, and efficient solutions tailored to your needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
