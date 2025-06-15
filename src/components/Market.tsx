import React from 'react';
import { TrendingUp, MapPin, Target } from 'lucide-react';

const Market = () => {
  return (
    <section id="market" className="section-padding bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Massive Market Opportunity
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            India's rural credit market represents one of the largest underserved financial 
            segments globally, with tremendous growth potential.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">₹10+ Lakh Crore</h3>
            <p className="text-blue-600 font-semibold mb-4">Total Addressable Market</p>
            <p className="text-gray-600 text-sm">
              Complete rural credit market in India, growing at 15% annually
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">₹3.5 Lakh Crore</h3>
            <p className="text-emerald-600 font-semibold mb-4">Serviceable Available Market</p>
            <p className="text-gray-600 text-sm">
              Underserved rural borrowers ready for alternative credit solutions
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg card-hover text-center">
            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-amber-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">3 States</h3>
            <p className="text-amber-600 font-semibold mb-4">Initial Target Market</p>
            <p className="text-gray-600 text-sm">
              Starting with Andhra Pradesh, Telangana, and Karnataka
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Now?</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-semibold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Digital Infrastructure</h4>
                    <p className="text-gray-600 text-sm">UPI and Aadhaar penetration reaching rural areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-emerald-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-semibold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mobile Adoption</h4>
                    <p className="text-gray-600 text-sm">25% YoY growth in rural smartphone usage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-semibold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Government Support</h4>
                    <p className="text-gray-600 text-sm">PM-KISAN, Jan Dhan, and JAM trinity enabling digital finance</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-amber-100 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-amber-600 font-semibold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatory Environment</h4>
                    <p className="text-gray-600 text-sm">RBI promoting financial inclusion and alternative lending</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-emerald-500 rounded-xl p-8 text-white">
              <h4 className="text-xl font-bold mb-6">Market Growth Drivers</h4>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">600M+</div>
                  <div className="text-blue-100 text-sm">Rural Population</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">15%</div>
                  <div className="text-blue-100 text-sm">Annual Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">70%</div>
                  <div className="text-blue-100 text-sm">Smartphone Penetration</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">2025</div>
                  <div className="text-blue-100 text-sm">Digital India Target</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Market;