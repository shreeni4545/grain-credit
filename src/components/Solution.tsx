import React from 'react';
import { CheckCircle, Smartphone, Brain, Users, Zap } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Scoring",
      description: "Machine learning models analyze alternative data to generate reliable credit scores for rural populations."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-emerald-500" />,
      title: "Mobile-First Design",
      description: "User-friendly mobile app and SMS-based services work even in areas with limited internet connectivity."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Community Integration",
      description: "Leverages local networks and community data to build comprehensive creditworthiness profiles."
    },
    {
      icon: <Zap className="h-8 w-8 text-amber-500" />,
      title: "Real-Time Processing",
      description: "Instant credit score generation with transparent explanations to build user trust and understanding."
    }
  ];

  const dataTypes = [
    "Agricultural produce sales from mandi records",
    "Mobile phone usage and recharge patterns",
    "Utility bill payment history",
    "Local trade and business transactions",
    "Land ownership and farming practices",
    "Community standing and references"
  ];

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solution: <span className="gradient-text">GrainCredit Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A revolutionary credit scoring system that uses rural-relevant data to provide 
            fair and accurate creditworthiness assessments.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Alternative Data Sources We Use
            </h3>
            <div className="space-y-4">
              {dataTypes.map((dataType, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700">{dataType}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sample Credit Assessment</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mandi Sales (Monthly)</span>
                  <span className="font-semibold text-emerald-600">₹18,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Mobile Recharge</span>
                  <span className="font-semibold text-blue-600">₹200/month</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Utility Bills</span>
                  <span className="font-semibold text-purple-600">Regular</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Land Ownership</span>
                  <span className="font-semibold text-amber-600">1.5 acres</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Credit Score</span>
                  <span className="text-xl font-bold gradient-text">650</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Category</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    Medium Risk
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-md">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;