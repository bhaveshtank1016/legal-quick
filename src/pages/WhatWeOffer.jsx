import {
  Scale,
  Briefcase,
  FileText,
  Landmark,
  ShieldCheck,
  Building,
} from "lucide-react";

const services = [
  {
    icon: <Scale size={40} />,
    title: "Legal Consultation",
    description:
      "Professional legal advice for individuals, startups, and businesses on various legal matters.",
  },
  {
    icon: <Building size={40} />,
    title: "Company Registration",
    description:
      "Private Limited, LLP, OPC, Partnership, and Startup registration services with complete support.",
  },
  {
    icon: <FileText size={40} />,
    title: "GST Registration & Compliance",
    description:
      "GST registration, return filing, compliance management, and taxation support for businesses.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Trademark Registration",
    description:
      "Protect your brand identity with hassle-free trademark search, filing, and registration.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Legal Documentation",
    description:
      "Drafting and reviewing agreements, contracts, affidavits, notices, and other legal documents.",
  },
  {
    icon: <Landmark size={40} />,
    title: "Corporate Compliance",
    description:
      "Ensure your business stays compliant with regulatory, legal, and statutory requirements.",
  },
];

const WhatWeOffer = () => {
  return (
    <section id="offer" className="px-6 py-20 md:px-16 bg-white">
      <h4 className="text-blue-700 font-bold mb-2 uppercase text-center">
        What We Offer
      </h4>

      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
        Comprehensive Legal Services For Every Need
      </h2>

      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        Legal Quick provides expert legal consultation, company registration,
        GST services, trademark protection, legal documentation, and corporate
        compliance solutions to help individuals and businesses grow with
        confidence.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-blue-900 text-white flex flex-col items-center p-10 text-center min-h-[250px] rounded-xl shadow"
          >
            <div className="mb-4 text-yellow-400">{service.icon}</div>
            <h3 className="text-lg font-semibold text-yellow-400">
              {service.title}
            </h3>
            <p className="text-sm mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;
