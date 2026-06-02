import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import StatsAchievements from "./StatsAchievements";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Business Owner",
    feedback:
      "Legal Quick made our company registration process incredibly smooth. Their team guided us through every step and completed everything on time.",
    stars: 5,
    initials: "PS",
  },
  {
    name: "Amit Verma",
    role: "Startup Founder",
    feedback:
      "I approached Legal Quick for trademark registration and legal documentation. Their professionalism and expertise exceeded my expectations.",
    stars: 5,
    initials: "AV",
  },
  {
    name: "Neha Gupta",
    role: "Entrepreneur",
    feedback:
      "The GST registration and compliance support provided by Legal Quick was fast, transparent, and hassle-free. Highly recommended.",
    stars: 5,
    initials: "NG",
  },
];

const ClientTestimonials = () => {
  return (
    <section className="   py-25 px-2 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl text-blue-700 md:text-4xl font-bold mb-6">
          What Our Clients Say
        </h2>

        <p className="mb-12 max-w-2xl mx-auto ">
          Trusted by entrepreneurs, startups, and individuals for reliable
          legal, compliance, and business registration services.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-md relative"
            >
              <FaQuoteLeft className="text-2xl text-yellow-400 mb-4" />
              <p className="mb-4 text-sm">{item.feedback}</p>
              <div className="flex items-center gap-4">
                <div className="bg-yellow-400 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold">
                  {item.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{item.name}</p>
                  <p className="text-xs text-gray-600">{item.role}</p>
                  <div className="flex text-yellow-400 mt-1">
                    {Array(item.stars)
                      .fill()
                      .map((_, i) => (
                        <FaStar key={i} size={14} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
