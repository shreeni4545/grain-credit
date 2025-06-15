import React, { useState } from 'react';
import { ArrowLeft, Calculator, User, Smartphone, Sprout, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

interface MVPDemoProps {
  onBack: () => void;
}

const MVPDemo: React.FC<MVPDemoProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    village: '',
    mobileRecharge: '',
    agriPurchase: '',
    shgRepayment: '',
    cropRisk: ''
  });

  const [score, setScore] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const computeScore = () => {
    let calculatedScore = 0;

    // Mobile Recharge Consistency
    if (formData.mobileRecharge === 'High') calculatedScore += 25;
    else if (formData.mobileRecharge === 'Medium') calculatedScore += 15;
    else if (formData.mobileRecharge === 'Low') calculatedScore += 5;

    // Agri Purchase Frequency
    if (formData.agriPurchase === 'Monthly') calculatedScore += 25;
    else if (formData.agriPurchase === 'Quarterly') calculatedScore += 15;
    else if (formData.agriPurchase === 'Rarely') calculatedScore += 5;

    // SHG Repayment Consistency
    if (formData.shgRepayment === 'On-Time') calculatedScore += 30;
    else if (formData.shgRepayment === 'Delayed') calculatedScore += 15;
    else if (formData.shgRepayment === 'No Record') calculatedScore += 0;

    // Crop Yield Risk Level
    if (formData.cropRisk === 'Low') calculatedScore += 20;
    else if (formData.cropRisk === 'Medium') calculatedScore += 10;
    else if (formData.cropRisk === 'High') calculatedScore += 5;

    return Math.min(calculatedScore, 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const calculatedScore = computeScore();
    setScore(calculatedScore);
    setShowResult(true);
  };

  const getCreditCategory = (score: number) => {
    if (score >= 80) return { label: 'Excellent', color: 'text-emerald-600', bg: 'bg-emerald-100' };
    if (score >= 60) return { label: 'Good', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (score >= 40) return { label: 'Fair', color: 'text-amber-600', bg: 'bg-amber-100' };
    return { label: 'Poor', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const getScoreInsights = (score: number) => {
    if (score >= 80) return [
      'Strong repayment history with SHGs',
      'Consistent mobile and digital behavior',
      'Low agricultural risk profile',
      'Eligible for premium loan rates'
    ];
    if (score >= 60) return [
      'Good financial discipline',
      'Regular agricultural activities',
      'Moderate risk profile',
      'Eligible for standard loan products'
    ];
    if (score >= 40) return [
      'Some financial activity recorded',
      'Irregular payment patterns',
      'Higher risk assessment needed',
      'May need collateral or guarantor'
    ];
    return [
      'Limited financial history',
      'Inconsistent payment behavior',
      'High risk profile',
      'Requires additional verification'
    ];
  };

  if (showResult && score !== null) {
    const category = getCreditCategory(score);
    const insights = getScoreInsights(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setShowResult(false)}
            className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Form
          </button>

          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                GrainCredit Score Generated
              </h1>
              <p className="text-gray-600">
                Based on alternative data analysis for {formData.name}
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Score Display */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="text-6xl font-bold gradient-text mb-2">{score}</div>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${category.bg} ${category.color}`}>
                    {category.label} Credit Score
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 h-4 rounded-full transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-gray-600">Score Range</div>
                    <div className="font-semibold">0-100</div>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600">Percentile</div>
                    <div className="font-semibold">{Math.min(95, score + 15)}th</div>
                  </div>
                </div>
              </div>

              {/* Insights */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Score Insights</h3>
                <div className="space-y-4">
                  {insights.map((insight, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{insight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Recommended Actions</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Share this score with local banks and NBFCs</li>
                    <li>• Continue regular SHG participation</li>
                    <li>• Maintain consistent mobile recharge patterns</li>
                    <li>• Keep agricultural purchase records updated</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Breakdown */}
            <div className="mt-8 bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Score Breakdown</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Mobile Behavior</div>
                  <div className="text-sm text-gray-600">{formData.mobileRecharge} Consistency</div>
                  <div className="text-blue-600 font-medium">
                    {formData.mobileRecharge === 'High' ? '25/25' : 
                     formData.mobileRecharge === 'Medium' ? '15/25' : '5/25'} points
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Sprout className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Agri Activity</div>
                  <div className="text-sm text-gray-600">{formData.agriPurchase} Purchases</div>
                  <div className="text-emerald-600 font-medium">
                    {formData.agriPurchase === 'Monthly' ? '25/25' : 
                     formData.agriPurchase === 'Quarterly' ? '15/25' : '5/25'} points
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <User className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="font-semibold text-gray-900">SHG Repayment</div>
                  <div className="text-sm text-gray-600">{formData.shgRepayment}</div>
                  <div className="text-purple-600 font-medium">
                    {formData.shgRepayment === 'On-Time' ? '30/30' : 
                     formData.shgRepayment === 'Delayed' ? '15/30' : '0/30'} points
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-amber-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-amber-600" />
                  </div>
                  <div className="font-semibold text-gray-900">Risk Assessment</div>
                  <div className="text-sm text-gray-600">{formData.cropRisk} Risk</div>
                  <div className="text-amber-600 font-medium">
                    {formData.cropRisk === 'Low' ? '20/20' : 
                     formData.cropRisk === 'Medium' ? '10/20' : '5/20'} points
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={onBack}
                className="bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-200 font-semibold"
              >
                Back to Main Site
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-emerald-50 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={onBack}
          className="mb-8 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Main Site
        </button>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-emerald-500 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              GrainCredit Score Calculator
            </h1>
            <p className="text-gray-600">
              Experience our AI-powered credit scoring for rural India. 
              Enter your details to see how alternative data creates your credit profile.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Basic Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter mobile number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Village/Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.village}
                    onChange={(e) => setFormData({...formData, village: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your village"
                  />
                </div>
              </div>

              {/* Alternative Data Inputs */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
                  Alternative Credit Data
                </h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mobile Recharge Consistency *
                  </label>
                  <select
                    required
                    value={formData.mobileRecharge}
                    onChange={(e) => setFormData({...formData, mobileRecharge: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select consistency level</option>
                    <option value="High">High - Regular monthly recharges</option>
                    <option value="Medium">Medium - Occasional recharges</option>
                    <option value="Low">Low - Irregular recharges</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agricultural Purchase Frequency *
                  </label>
                  <select
                    required
                    value={formData.agriPurchase}
                    onChange={(e) => setFormData({...formData, agriPurchase: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select purchase frequency</option>
                    <option value="Monthly">Monthly - Regular seed/fertilizer purchases</option>
                    <option value="Quarterly">Quarterly - Seasonal purchases</option>
                    <option value="Rarely">Rarely - Minimal agricultural activity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    SHG Repayment History *
                  </label>
                  <select
                    required
                    value={formData.shgRepayment}
                    onChange={(e) => setFormData({...formData, shgRepayment: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select repayment pattern</option>
                    <option value="On-Time">On-Time - Always pays SHG loans on time</option>
                    <option value="Delayed">Delayed - Sometimes delays SHG payments</option>
                    <option value="No Record">No Record - No SHG participation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Crop Yield Risk Level *
                  </label>
                  <select
                    required
                    value={formData.cropRisk}
                    onChange={(e) => setFormData({...formData, cropRisk: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select risk level</option>
                    <option value="Low">Low - Fertile land, good irrigation</option>
                    <option value="Medium">Medium - Average conditions</option>
                    <option value="High">High - Drought-prone, rain-fed</option>
                  </select>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Privacy Note:</strong> This is a demo. In production, data would be collected 
                    securely with user consent and encrypted storage following RBI guidelines.
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-emerald-500 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-200 font-semibold flex items-center justify-center"
              >
                <Calculator className="mr-2 h-5 w-5" />
                Generate GrainCredit Score
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MVPDemo;