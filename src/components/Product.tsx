import React, { useState } from 'react';
import { Smartphone, Database, Brain, Shield, Users, Zap } from 'lucide-react';

const Product = () => {
  const [activeTab, setActiveTab] = useState('farmer');

  const features = [
    {
      icon: <Smartphone className="h-8 w-8 text-blue-500" />,
      title: "Simple Onboarding",
      description: "Easy registration using Aadhaar and mobile number with multilingual support"
    },
    {
      icon: <Database className="h-8 w-8 text-emerald-500" />,
      title: "Secure Data Integration",
      description: "Safe collection of alternative data sources with full user consent and privacy"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-500" />,
      title: "AI-Powered Scoring",
      description: "Real-time credit score generation with transparent explanations"
    },
    {
      icon: <Shield className="h-8 w-8 text-amber-500" />,
      title: "Bank-Grade Security",
      description: "Enterprise-level security and compliance with RBI guidelines"
    }
  ];

  return (
    <section id="product" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Product Overview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive platform designed for both rural users and financial institutions, 
            making credit assessment simple, fair, and accessible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 card-hover text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
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

        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
          <div className="mb-8">
            <div className="flex justify-center space-x-4 mb-8">
              <button
                onClick={() => setActiveTab('farmer')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === 'farmer'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Users className="inline-block w-5 h-5 mr-2" />
                Farmer App
              </button>
              <button
                onClick={() => setActiveTab('lender')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  activeTab === 'lender'
                    ? 'bg-emerald-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                <Zap className="inline-block w-5 h-5 mr-2" />
                Lender Dashboard
              </button>
            </div>

            {activeTab === 'farmer' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Farmer Mobile App</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Simple registration with Aadhaar verification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Upload mandi receipts and transaction history</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Receive instant credit score with explanation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Connect with verified lenders in your area</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-4 text-white mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm opacity-90">Credit Score</span>
                      <span className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">Updated Now</span>
                    </div>
                    <div className="text-3xl font-bold">742</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Sales</span>
                      <span className="font-semibold text-emerald-600">Strong</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Payment History</span>
                      <span className="font-semibold text-blue-600">Excellent</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Land Verification</span>
                      <span className="font-semibold text-emerald-600">Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'lender' && (
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Lender Dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">1</span>
                      </div>
                      <span className="text-gray-700">Access comprehensive borrower profiles</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">2</span>
                      </div>
                      <span className="text-gray-700">Review alternative credit data and scores</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">3</span>
                      </div>
                      <span className="text-gray-700">Make informed lending decisions quickly</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center">
                        <span className="text-emerald-600 font-semibold text-sm">4</span>
                      </div>
                      <span className="text-gray-700">Track portfolio performance and insights</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-4">Loan Application Review</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Applicant</span>
                      <span className="font-medium">Ramesh Kumar</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Credit Score</span>
                      <span className="font-bold text-emerald-600">742</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Risk Category</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-xs font-medium">Low Risk</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-sm text-gray-600">Loan Amount</span>
                      <span className="font-medium">₹50,000</span>
                    </div>
                    <div className="flex space-x-2 pt-2">
                      <button className="flex-1 bg-emerald-600 text-white py-2 rounded font-medium text-sm">
                        Approve
                      </button>
                      <button className="flex-1 bg-gray-200 text-gray-700 py-2 rounded font-medium text-sm">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;