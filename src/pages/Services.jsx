import React from "react";
import welding from "../assets/reallogo.png";
import WhatWeOffer from "./WhatWeOffer";

const Services = () => {
  return (
    // <section id="services" className="px-6 py-16 bg-white">
    //   <div className="flex flex-col md:flex-row items-center justify-between">
    //     <div className="md:w-1/3">
    //       <img
    //         src={welding}
    //         alt="Fabrication Services"
    //         className="w-full h-auto object-contain"
    //       />
    //     </div>
    //     <div className="md:w-1/2 mt-10 md:mt-0 md:pl-12">
    //       <h4 className="text-blue-700 font-semibold mb-2 uppercase">
    //         Our Services
    //       </h4>

    //       <h2 className="text-3xl md:text-4xl font-bold mb-4">
    //         Trusted Legal Solutions <br /> For Individuals & Businesses
    //       </h2>

    //       <p className="text-gray-700 mb-6">
    //         Legal Quick provides comprehensive legal services including legal
    //         consultation, company registration, GST registration, trademark
    //         filing, agreement drafting, compliance management, and business
    //         legal support. Our experienced legal professionals ensure reliable,
    //         transparent, and efficient solutions tailored to your needs.
    //       </p>
    //     </div>
    //   </div>
    // </section>
    <section id="services" className="py-16 px-2 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={welding}
              alt="Fabrication Services"
              className="w-full max-w-md lg:max-w-lg object-contain"
            />
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h4 className="text-blue-700 font-semibold uppercase tracking-wider mb-3 text-sm sm:text-base">
              Our Services
            </h4>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Trusted Legal Solutions
              <br className="hidden sm:block" />
              For Individuals & Businesses
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Legal Quick provides comprehensive legal services including legal
              consultation, company registration, GST registration, trademark
              filing, agreement drafting, compliance management, and business
              legal support. Our experienced legal professionals ensure
              reliable, transparent, and efficient solutions tailored to your
              needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
