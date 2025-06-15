import React from 'react';
import { DollarSign, Users, BarChart3, Building } from 'lucide-react';

const BusinessModel = () => {
  const revenueStreams = [
    {
      icon: <Building className="h-8 w-8 text-blue-500" />,
      title: "B2B API Subscriptions",
      description: "Banks and NBFCs pay subscription fees for access to our credit scoring API",
      revenue: "Primary Revenue",
      percentage: "60%"
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-500" />,
      title: "B2C Premium Services",
      description: "Premium features for users including financial literacy and credit improvement plans",
      revenue: "Secondary Revenue",
      percentage: "25%"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-purple-500" />,
      title: "Data Analytics Services",
      description: "Anonymized market insights sold to policymakers, NGOs, and research institutions",
      revenue: "Tertiary Revenue",
      percentage: "15%"
    }
  ];

  return (
    <section id="business-model" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sustainable Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Multiple revenue streams ensure long-term sustainability while maintaining 
            affordability for rural users.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {revenueStreams.map((stream, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover">
              <div className="flex items-center justify-between mb-6">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center">
                  {stream.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{stream.percentage}</div>
                  <div className="text-sm text-gray-600">{stream.revenue}</div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {stream.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {stream.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Pricing Strategy
              </h3>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">For Financial Institutions</h4>
                  <p className="text-blue-700 text-sm mb-3">API access with tiered pricing based on usage</p>
                  <div className="flex items-center justify-between">
                    <span className="text-blue-600 font-medium">Per Score</span>
                    <span className="text-blue-900 font-bold">₹5-15</span>
                  </div>
                </div>
                
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-semibold text-emerald-900 mb-2">For Rural Users</h4>
                  <p className="text-emerald-700 text-sm mb-3">Basic scoring free, premium features affordable</p>
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-600 font-medium">Premium Plans</span>
                    <span className="text-emerald-900 font-bold">₹99-299/month</span>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibant text-purple-900 mb-2">Data & Analytics</h4>
                  <p className="text-purple-700 text-sm mb-3">Market insights and research reports</p>
                  <div className="flex items-center justify-between">
                    <span className="text-purple-600 font-medium">Research Reports</span>
                    <span className="text-purple-900 font-bold">₹50K-2L</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Go-to-Market Strategy</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Strategic Partnerships</h5>
                    <p className="text-blue-100 text-sm">Collaborate with cooperatives, NGOs, and MFIs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Community Engagement</h5>
                    <p className="text-blue-100 text-sm">Financial literacy workshops and local events</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-1">Digital Marketing</h5>
                    <p className="text-blue-100 text-sm">WhatsApp campaigns and regional social media</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h5 className="font-semibant mb-1">Pilot Programs</h5>
                    <p className="text-blue-100 text-sm">District-wise rollouts with local government support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModel;