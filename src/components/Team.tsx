import React from 'react';
import { User, Award, Briefcase, GraduationCap } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Janu Sri Thota",
      role: "Founder & CEO",
      background: "Finance & Rural Development",
      experience: "8+ years in microfinance and rural banking",
      education: "MBA Finance, IIM",
      icon: <User className="h-8 w-8 text-blue-500" />
    },
    {
      name: "Priya Sharma",
      role: "Chief Technology Officer",
      background: "AI & Machine Learning",
      experience: "10+ years in fintech and AI/ML products",
      education: "MS Computer Science, IIT",
      icon: <Briefcase className="h-8 w-8 text-emerald-500" />
    },
    {
      name: "Rajesh Kumar",
      role: "Chief Operating Officer",
      background: "Operations & Partnerships",
      experience: "12+ years in fintech operations and partnerships",
      education: "MBA Operations, ISB",
      icon: <Award className="h-8 w-8 text-purple-500" />
    }
  ];

  const advisors = [
    {
      name: "Dr. Suresh Patel",
      role: "Former NABARD Executive",
      expertise: "Rural Banking & Policy"
    },
    {
      name: "Meera Krishnan",
      role: "Ex-Paytm VP",
      expertise: "Fintech & Digital Payments"
    },
    {
      name: "Anil Verma",
      role: "Agricultural Economist",
      expertise: "Rural Markets & Agriculture"
    }
  ];

  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A diverse team of experts in finance, technology, and rural development, 
            united by our mission to democratize credit access.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="text-center mb-6">
                <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {member.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.background}</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Briefcase className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{member.experience}</span>
                </div>
                <div className="flex items-start space-x-3">
                  <GraduationCap className="h-5 w-5 text-gray-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{member.education}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Advisory Board</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-blue-100 to-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">{advisor.name}</h4>
                <p className="text-blue-600 font-medium text-sm mb-2">{advisor.role}</p>
                <p className="text-gray-600 text-sm">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">We're Hiring!</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Join our mission to transform rural finance in India. We're looking for passionate 
            individuals in engineering, business development, and field operations.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;