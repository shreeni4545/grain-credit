import React from 'react';
import { ArrowRight, Play, TrendingUp, Users, Shield } from 'lucide-react';

interface HeroProps {
  onDemoClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section id="hero" className="section-padding pt-24 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                Empowering Rural India 🌾
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Fair Credit Access for 
                <span className="gradient-text"> Rural India</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Breaking the cycle of financial exclusion with AI-powered credit scoring 
                using alternative data from agricultural sales, mobile usage, and local transactions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onDemoClick}
                className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-200 font-semibold flex items-center justify-center group"
              >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-500 hover:text-blue-600 transition-all duration-200 font-semibold flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600">Rural Indians Excluded</div>
              </div>
              <div className="text-center">
                <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">₹10L+</div>
                <div className="text-sm text-gray-600">Crore Market Size</div>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">85%</div>
                <div className="text-sm text-gray-600">User Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="animate-float">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">Credit Score</h3>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      High Creditworthy
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-3xl font-bold gradient-text">742</span>
                      <div className="text-right">
                        <div className="text-sm text-gray-600">Score Range</div>
                        <div className="text-sm font-medium">300-850</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-3 rounded-full" style={{width: '87%'}}></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                    <div>
                      <div className="text-sm text-gray-600">Mandi Sales</div>
                      <div className="font-semibold text-emerald-600">Strong</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Mobile Usage</div>
                      <div className="font-semibold text-blue-600">Consistent</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Bill Payments</div>
                      <div className="font-semibold text-emerald-600">Regular</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">Land Records</div>
                      <div className="font-semibold text-blue-600">Verified</div>
                    </div>
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

export default Hero;