import React from "react";
import about1 from "../assets/legalquick.png";

const About = () => {
  return (
    <section id="about" className="w-full bg-white">
      {/* Introduction Section */}
      <div className="w-full py-24 px-6 md:px-20">
        <div className="bg-gray-100 border-white rounded-lg p-6 md:p-10 shadow-md">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <h3 className="text-blue-700 font-bold text-md mb-2 tracking-wide uppercase">
                Our Values
              </h3>

              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Trusted Legal Solutions for Individuals & Businesses
              </h2>

              <p className="text-gray-700 mb-8 max-w-sm leading-relaxed">
                Legal Quick is committed to providing professional legal
                consultation, documentation services, and expert legal guidance.
                Our experienced legal professionals help clients navigate
                complex legal matters with confidence, transparency, and
                reliability.
              </p>
              
            </div>

            <div className="md:col-span-2 bg-blue-900 text-white rounded-lg overflow-hidden grid md:grid-cols-2">
              <div className="w-full flex justify-center items-center">
                <div className="p-6 md:p-8 w-full">
                  <div className="grid gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Our Vision</h3>

                      <p className="text-sm mb-4 leading-relaxed">
                        To become India's most trusted legal services platform
                        by making professional legal assistance accessible,
                        affordable, and convenient for everyone.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Our Mission
                      </h3>

                      <p className="text-sm mb-4 leading-relaxed">
                        Our mission is to simplify legal processes through
                        expert consultation, document preparation, business
                        registration, compliance services, and personalized
                        legal support for individuals and organizations.
                      </p>
                      <button className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded hover:bg-yellow-500 transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div
        className="relative w-full bg-cover bg-center text-white py-24 px-6 md:px-20"
        style={{ backgroundImage: `url(${about1})` }}
      >
        <div className="absolute inset-0 bg-[#0a0a4a] opacity-75 z-0"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto">
         
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Get Expert Legal Assistance Today
          </h2>

          <p className="text-lg mb-6 leading-relaxed">
            Whether you need legal consultation, company registration, GST
            services, trademark registration, agreement drafting, or compliance
            support, Legal Quick is here to help you every step of the way.
          </p>

          <button className="bg-blue-700   font-bold px-6 py-3 rounded hover:bg-yellow-500 transition duration-300">
            BOOK FREE CONSULTATION
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-blue-900 py-14 text-white px-6 md:px-20 grid grid-cols-2 md:grid-cols-4 text-center gap-8">
        <div>
          <h3 className="text-4xl font-bold">5000+</h3>
          <p className="font-medium mt-2">Satisfied Clients</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">10000+</h3>
          <p className="font-medium mt-2">Cases & Services Handled</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="font-medium mt-2">Legal Experts</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">4.9</h3>
          <p className="font-medium mt-2">Client Rating</p>
        </div>
      </div>
    </section>
  );
};

export default About;
