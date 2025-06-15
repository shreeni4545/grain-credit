import React from 'react';
import { X, AlertTriangle, TrendingDown } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <X className="h-8 w-8 text-red-500" />,
      title: "70%+ Rural Indians Lack Formal Credit",
      description: "Traditional banks reject rural applications due to absence of conventional credit histories, leaving millions without access to fair lending."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      title: "Dependence on High-Interest Informal Lending",
      description: "Farmers resort to local moneylenders charging 24-60% annual interest, trapping families in cycles of debt and poverty."
    },
    {
      icon: <TrendingDown className="h-8 w-8 text-red-600" />,
      title: "Outdated Credit Assessment Methods",
      description: "Current scoring models ignore rural-specific data like crop sales, land ownership, and community standing that actually indicate creditworthiness."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Credit Crisis in Rural India
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Despite being the backbone of India's economy, rural communities face systematic 
            exclusion from formal financial services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg card-hover border border-gray-100">
              <div className="bg-red-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {problem.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                The Cost of Financial Exclusion
              </h3>
              <p className="text-red-100 text-lg">
                Every year, millions of rural entrepreneurs lose opportunities to grow their 
                businesses, educate their children, and improve their living conditions 
                simply because they can't access fair credit.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">500M+</div>
                <div className="text-red-100">People Affected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">60%</div>
                <div className="text-red-100">Interest Rates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">₹3.5L</div>
                <div className="text-red-100">Crore Unserved Market</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">25%</div>
                <div className="text-red-100">Annual Growth Lost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;