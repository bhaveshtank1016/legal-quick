import React from "react";
import { FaStar, FaArrowRight } from "react-icons/fa";
import legalHero from "../assets/reallogo.png"; // Add your image

const Home = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <FaStar size={12} />
              Trusted by 500+ Businesses
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
              Legal Solutions
              <br />
              for Businesses,
              <br />
              <span className="text-blue-700">
                Simplified.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              Expert legal, compliance, taxation and registration
              services handled end-to-end by professionals so you
              can focus on growing your business.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">

              <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
                Get Free Consultation
                <FaArrowRight />
              </button>

              <button className="border border-gray-300 hover:border-blue-700 hover:text-blue-700 px-8 py-4 rounded-xl font-semibold transition">
                Talk To Expert
              </button>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-lg">

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  500+
                </h3>
                <p className="text-gray-500 text-sm">
                  Clients Served
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  98%
                </h3>
                <p className="text-gray-500 text-sm">
                  Success Rate
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  24h
                </h3>
                <p className="text-gray-500 text-sm">
                  Response Time
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            {/* Background Circle */}
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-40"></div>

            <img
              src={legalHero}
              alt="Legal Services"
              className="relative p-10 z-10 w-full max-w-xl mx-auto"
            />

            {/* Floating Card 1 */}
            <div className="hidden lg:block absolute top-0 left-0 bg-white shadow-xl rounded-2xl p-4 z-20">
              <h4 className="font-semibold text-gray-900">
                500+
              </h4>
              <p className="text-sm text-gray-500">
                Happy Clients
              </p>
            </div>

            {/* Floating Card 2 */}
            <div className="hidden lg:block absolute bottom-3 right-0 bg-white shadow-xl rounded-2xl p-4 z-20">
              <h4 className="font-semibold text-gray-900">
                4.9★ Rating
              </h4>
              <p className="text-sm text-gray-500">
                Trusted Service
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Home;

// <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8">
//             <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
//               Book Free Consultation
//             </h2>

//             <p className="text-gray-500 mt-2 mb-6">
//               Get expert guidance — no obligations.
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input
//                 type="text"
//                 name="fullName"
//                 placeholder="Full Name"
//                 onChange={handleChange}
//                 className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
//               />

//               <input
//                 type="text"
//                 name="phoneNumber"
//                 placeholder="Phone Number"
//                 onChange={handleChange}
//                 className="w-full border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-600"
//               />

//               <select
//                 name="businessType"
//                 onChange={handleChange}
//                 className="w-full border rounded-xl px-4 py-3"
//               >
//                 <option>Business Type</option>
//                 <option>Proprietorship</option>
//                 <option>LLP</option>
//                 <option>Private Limited</option>
//               </select>

//               <select
//                 name="serviceRequired"
//                 onChange={handleChange}
//                 className="w-full border rounded-xl px-4 py-3"
//               >
//                 <option>Service Required</option>
//                 <option>GST Registration</option>
//                 <option>Trademark Registration</option>
//                 <option>Company Registration</option>
//               </select>

//               <button
//                 type="submit"
//                 className="w-full bg-indigo-700 hover:bg-indigo-800 text-white py-4 rounded-xl font-semibold"
//               >
//                 Book Free Consultation
//               </button>
//             </form>

//             <p className="text-center text-gray-500 text-sm mt-4">
//               We respond promptly. Your information is kept confidential.
//             </p>
//           </div>
