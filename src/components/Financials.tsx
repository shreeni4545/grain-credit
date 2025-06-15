import React from 'react';
import { TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';

const Financials = () => {
  const projections = [
    { year: "Year 1", revenue: "50L", expenses: "1Cr", profit: "-50L", users: "5K" },
    { year: "Year 2", revenue: "2Cr", expenses: "1.5Cr", profit: "50L", users: "25K" },
    { year: "Year 3", revenue: "5Cr", expenses: "3Cr", profit: "2Cr", users: "100K" }
  ];

  const fundingBreakdown = [
    { category: "Product Development", percentage: 40, amount: "80L", color: "bg-blue-500" },
    { category: "Team Expansion", percentage: 30, amount: "60L", color: "bg-emerald-500" },
    { category: "Marketing & Partnerships", percentage: 20, amount: "40L", color: "bg-purple-500" },
    { category: "Operations & Legal", percentage: 10, amount: "20L", color: "bg-amber-500" }
  ];

  return (
    <section id="financials" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Financial Projections
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conservative projections based on pilot data and market analysis, 
            showing clear path to profitability.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                <BarChart3 className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">3-Year Projections</h3>
            </div>

            <div className="space-y-4">
              {projections.map((year, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{year.year}</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      {year.users} Users
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Revenue</div>
                      <div className="font-semibold text-emerald-600">₹{year.revenue}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Expenses</div>
                      <div className="font-semibold text-red-600">₹{year.expenses}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Profit</div>
                      <div className={`font-semibold ${year.profit.includes('-') ? 'text-red-600' : 'text-emerald-600'}`}>
                        ₹{year.profit}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center">
                <PieChart className="h-6 w-6 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Fund Utilization</h3>
            </div>

            <div className="mb-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold gradient-text">₹2 Crores</div>
                <div className="text-gray-600">Total Funding Required</div>
              </div>
            </div>

            <div className="space-y-4">
              {fundingBreakdown.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{item.category}</span>
                    <span className="font-bold text-gray-900">₹{item.amount}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`${item.color} h-2 rounded-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Investment Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">Break-even by Year 2 with 25K users</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">₹2Cr profit projected by Year 3</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">Multiple revenue streams reduce risk</span>
                </div>
                <div className="flex items-center space-x-3">
                  <PieChart className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">Clear path to Series A in 18-24 months</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-4">Key Assumptions</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-blue-200">User Growth Rate</span>
                  <span className="font-semibold">25% month-on-month</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Revenue per User</span>
                  <span className="font-semibold">₹500-2000 annually</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Customer Acquisition Cost</span>
                  <span className="font-semibold">₹150-300</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Churn Rate</span>
                  <span className="font-semibold">5-8% monthly</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-200">Gross Margin</span>
                  <span className="font-semibold">70-80%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Financials;