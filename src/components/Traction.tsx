import React from 'react';
import { TrendingUp, Users, Building, CheckCircle, MapPin, Calendar } from 'lucide-react';

const Traction = () => {
  const milestones = [
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "1,000+ Users Onboarded",
      description: "Successfully completed pilot program in Krishna District",
      status: "completed"
    },
    {
      icon: <Building className="h-6 w-6 text-emerald-500" />,
      title: "5 Financial Partnerships",
      description: "MOUs signed with 2 regional banks and 3 MFIs",
      status: "completed"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-500" />,
      title: "85% User Satisfaction",
      description: "High approval rates and positive feedback from pilot users",
      status: "completed"
    },
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      title: "3 State Expansion",
      description: "Expanding operations to Telangana and Karnataka",
      status: "in-progress"
    }
  ];

  const metrics = [
    { label: "Total Users", value: "1,000+", growth: "+150%" },
    { label: "Credit Scores Generated", value: "2,500+", growth: "+200%" },
    { label: "Partner Banks", value: "5", growth: "+400%" },
    { label: "Success Rate", value: "85%", growth: "+15%" }
  ];

  return (
    <section id="traction" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Traction & Milestones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our pilot program has demonstrated strong market validation and user acceptance, 
            setting the foundation for rapid scaling.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center card-hover">
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium mb-2">{metric.label}</div>
              <div className="text-emerald-600 text-sm font-semibold">
                <TrendingUp className="inline-block w-4 h-4 mr-1" />
                {metric.growth}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Key Milestones</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  milestone.status === 'completed' 
                    ? 'bg-emerald-100' 
                    : 'bg-amber-100'
                }`}>
                  {milestone.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                    {milestone.status === 'completed' && (
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    )}
                    {milestone.status === 'in-progress' && (
                      <Calendar className="h-5 w-5 text-amber-500" />
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Pilot Program Success</h3>
              <p className="text-blue-100 mb-6">
                Our Krishna District pilot has validated our approach and demonstrated 
                significant impact on rural financial inclusion.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">1,000+ farmers successfully onboarded</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">85% reported improved credit access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">60% reduction in loan processing time</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-300" />
                  <span className="text-blue-100">Zero security incidents or data breaches</span>
                </div>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 rounded-xl p-6">
              <h4 className="text-lg font-bold mb-4">User Testimonial</h4>
              <blockquote className="text-blue-100 italic mb-4">
                "GrainCredit gave me the confidence to approach banks. For the first time, 
                my mandi sales and mobile usage actually worked in my favor for getting a loan."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Ramesh Kumar</div>
                  <div className="text-blue-200 text-sm">Farmer, Krishna District</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Traction;