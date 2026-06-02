import {
  Scale,
  ShieldCheck,
  Clock3,
  Users
} from "lucide-react";

const reasons = [
  {
    icon: <Scale className="text-yellow-400 w-8 h-8" />,
    title: "Experienced Legal Experts",
    description:
      "Our team of legal professionals provides reliable guidance across various legal matters."
  },
  {
    icon: <Clock3 className="text-yellow-400 w-8 h-8" />,
    title: "Fast & Efficient Service",
    description:
      "Quick processing and timely delivery of legal documents, registrations, and compliance services."
  },
  {
    icon: <ShieldCheck className="text-yellow-400 w-8 h-8" />,
    title: "Trusted & Confidential",
    description:
      "Your information and legal matters are handled with complete confidentiality and professionalism."
  },
  {
    icon: <Users className="text-yellow-400 w-8 h-8" />,
    title: "Client-Centric Approach",
    description:
      "We focus on understanding your needs and providing personalized legal solutions."
  }
]; 

const WhyChooseUs = () => {
  return (
    <section id="about">
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why <span className="text-blue-700">Choose Legal Quick?</span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We simplify legal processes by providing expert guidance,
            transparent communication, and dependable legal solutions for
            individuals, startups, and businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-15">
            {reasons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-4 ">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2 text-blue-700">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default WhyChooseUs;
