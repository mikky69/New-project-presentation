import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TransportPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Assessing Transportation Facilities in Vehicular-Dominated Jimeta-Yola",
      subtitle: "A Multi-Criteria Approach",
      content: (
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <p className="text-xl font-semibold text-blue-800">MIKAILU SAMUEL NADRO</p>
            <p className="text-lg text-gray-700">Supervised by: NURA BALA (PHD)</p>
            <p className="text-md text-gray-600">Department of Civil Engineering</p>
            <p className="text-md text-gray-600">Bayero University, Kano</p>
            <p className="text-md text-gray-500 mt-8">Masters Seminar Presentation</p>
          </div>
        </div>
      )
    },
    {
      title: "Research Overview",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Study Focus</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Comprehensive assessment of public transportation facilities in Jimeta-Yola</li>
              <li>• Multi-criteria evaluation using Analytic Hierarchy Process (AHP)</li>
              <li>• Analysis of accessibility, safety, and quality of service</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Study Scale</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• 567 respondents surveyed across Yola North and Yola South</li>
              <li>• Data collection via KoboToolbox platform</li>
              <li>• QGIS spatial mapping, Python statistical analysis</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Introduction",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-900">Key Issues</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Public transportation essential for urban mobility</li>
              <li>• Jimeta-Yola faces rapid urbanization and population growth</li>
              <li>• Heavy reliance on private vehicles creates congestion and pollution</li>
              <li>• Social inequalities limit access for marginalized populations</li>
            </ul>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-900">Urban Context</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Inadequate infrastructure and limited route coverage</li>
              <li>• Inconsistent service quality across the city</li>
              <li>• Environmental degradation from vehicular dominance</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Problem Statement",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-orange-900">Infrastructure Challenges</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Poor infrastructure with limited routes</li>
              <li>• Unreliable schedules affecting commuter dependability</li>
              <li>• Increased traffic congestion from private vehicle reliance</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-900">Safety and Service Issues</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Safety concerns with informal operators leading to accidents</li>
              <li>• Lack of accountability in service provision</li>
              <li>• Quality issues: overcrowding, poorly maintained vehicles</li>
              <li>• Underserved areas with infrequent or absent services</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Study Justification",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Research Gaps</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Limited research on medium-sized Nigerian cities</li>
              <li>• Growing dependence on private vehicles</li>
              <li>• Need for adaptive public transport designs</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Study Contributions</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Empirical insights for evidence-based policy</li>
              <li>• Replicable methodology for similar contexts</li>
              <li>• Cost-effective safety interventions</li>
              <li>• Promotes sustainable urban development</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Research Aim and Objectives",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-indigo-900">Research Aim</h3>
            <p className="text-gray-800 text-sm leading-relaxed">
              To conduct comprehensive assessment of public transportation facilities in Jimeta-Yola using multi-criteria approach to identify challenges and propose improvements.
            </p>
          </div>
          <div className="bg-teal-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-teal-900">Objectives</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>1. Evaluate accessibility of public transportation services</li>
              <li>2. Assess safety of facilities and services</li>
              <li>3. Analyze quality of service provided by operators</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Study Area",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Geographic Information</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Capital of Adamawa State, Nigeria</li>
              <li>• Location: 9.2339° N, 12.3558° E</li>
              <li>• Population: ~500,000 (2021 census)</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Transportation Network</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Major roads: A13, F252, A345</li>
              <li>• Hubs: Jimeta Modern Market, Airport</li>
              <li>• Formal and informal systems</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Methodology - Tools",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-purple-900">Software</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• QGIS: Spatial mapping</li>
              <li>• KoboToolbox: Survey collection</li>
              <li>• Excel: AHP matrices</li>
              <li>• Python: Statistical analysis</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-indigo-900">Statistical Tests</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Cronbach alpha (0.85-0.90)</li>
              <li>• Chi-square tests</li>
              <li>• Eigenvector method</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Methodology - Sampling",
      content: (
        <div className="space-y-4">
          <div className="bg-teal-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-teal-900">Sample</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Total: 567 participants</li>
              <li>• Passengers: 74.43%</li>
              <li>• Drivers: 17.81%</li>
              <li>• Operators: 7.76%</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Validation</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Yamane formula: n = N/(1+N(e)²)</li>
              <li>• Minimum: 400, Actual: 567</li>
              <li>• 95% confidence, 5% margin</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "AHP Expert Panel",
      content: (
        <div className="space-y-4">
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-orange-900">10 Members</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• 3 urban planners (Ministry)</li>
              <li>• 2 transport operators</li>
              <li>• 3 academics (University)</li>
              <li>• 2 disabled commuters</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Process</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Purposive sampling</li>
              <li>• Virtual sessions (July 2025)</li>
              <li>• Geometric mean aggregation</li>
              <li>• Cronbach alpha = 0.98</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Results - Demographics",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Age Distribution</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Age 25-34: 34.57% (largest)</li>
              <li>• Age 35-44: 26.81%</li>
              <li>• Youthful cohort</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Gender and Location</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Male: 54.32%</li>
              <li>• Female: 44.44%</li>
              <li>• Yola: 51.85%</li>
              <li>• Jimeta: 46.74%</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Results - Accessibility",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-900">Key Findings</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Nearby stops: Only 47.27%</li>
              <li>• Equipped facilities: 33.86%</li>
              <li>• Disability suitable: 31.22%</li>
              <li>• Overall good rating: 22.57%</li>
            </ul>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-orange-900">Statistical Test</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Age-walk time: χ² = 6.10, p = 0.013</li>
              <li>• 62% of 18-34 walk 10+ min</li>
              <li>• Cronbach alpha = 0.87</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Results - Safety",
      content: (
        <div className="space-y-4">
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-900">Critical Concerns</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Night safety poor: 33.78%</li>
              <li>• Day safety good: 23.28%</li>
              <li>• Incidents reported: 15.52%</li>
              <li>• Good vehicle condition: 26.28%</li>
            </ul>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-purple-900">Gender Gap</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Females poor rating: 40%</li>
              <li>• Males poor rating: 28%</li>
              <li>• χ² = 5.89, p = 0.015</li>
              <li>• Cronbach alpha = 0.90</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Results - Quality of Service",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-900">Service Ratings</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Overall good: 24.87%</li>
              <li>• Overall poor: 32.28%</li>
              <li>• On-time poor: 35.80%</li>
              <li>• Cleanliness poor: 35.98%</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Information Gap</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Word-of-mouth: 50.44%</li>
              <li>• Income-quality: χ² = 4.72, p = 0.030</li>
              <li>• Cronbach alpha = 0.85</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "AHP - Pairwise Matrix",
      content: (
        <div className="space-y-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-indigo-900">Matrix</h3>
            <table className="w-full border text-sm">
              <thead className="bg-indigo-200">
                <tr>
                  <th className="border p-2">Criteria</th>
                  <th className="border p-2">Safety</th>
                  <th className="border p-2">Access</th>
                  <th className="border p-2">Quality</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2 font-semibold">Safety</td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-center">2</td>
                  <td className="border p-2 text-center">2</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Access</td>
                  <td className="border p-2 text-center">1/2</td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-center">1</td>
                </tr>
                <tr>
                  <td className="border p-2 font-semibold">Quality</td>
                  <td className="border p-2 text-center">1/2</td>
                  <td className="border p-2 text-center">1</td>
                  <td className="border p-2 text-center">1</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    {
      title: "AHP - Final Weights",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Criteria Weights</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-3 bg-white rounded">
                <span className="font-semibold">Safety:</span>
                <span className="text-xl font-bold text-red-600">0.43</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded">
                <span className="font-semibold">Accessibility:</span>
                <span className="text-xl font-bold text-blue-600">0.29</span>
              </div>
              <div className="flex justify-between p-3 bg-white rounded">
                <span className="font-semibold">Quality:</span>
                <span className="text-xl font-bold text-yellow-600">0.28</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "AHP - Consistency",
      content: (
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Validation</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• λmax = 3.01</li>
              <li>• CI = 0.01</li>
              <li>• CR = 0.017 (1.7%)</li>
              <li>• Threshold: CR less than 0.1</li>
              <li>• Result: Highly consistent</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Overall Performance Score",
      content: (
        <div className="space-y-4">
          <div className="bg-red-100 p-6 rounded-lg border-2 border-red-400">
            <h3 className="font-bold text-2xl mb-4 text-red-900 text-center">System Performance</h3>
            <div className="text-center">
              <p className="text-6xl font-bold text-red-700 mb-4">35.44%</p>
              <p className="text-lg text-gray-800">Below 50% adequacy threshold</p>
            </div>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-900">Calculation</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Safety: 0.43 × 0.4066</li>
              <li>• Accessibility: 0.29 × 0.3745</li>
              <li>• Quality: 0.28 × 0.2536</li>
              <li>• Total: 35.44%</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Conclusion",
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Objectives Achieved</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Accessibility: 47.27% have nearby stops, age disparities confirmed</li>
              <li>• Safety: 33.78% rate night safety poor, gender gaps identified</li>
              <li>• Quality: 24.87% rate good, income-quality link established</li>
            </ul>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-blue-900">Key Findings</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Overall score: 35.44% (below threshold)</li>
              <li>• Safety prioritized (weight = 0.43)</li>
              <li>• Substantial deficiencies across all criteria</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Recommendations (1/2)",
      content: (
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-purple-900">Accessibility</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Establish stops in underserved areas (52.73% lack access)</li>
              <li>• Construct shelters (66.14% deficit)</li>
              <li>• Prioritize routes A13, F252, A345</li>
            </ul>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-red-900">Safety</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Install lighting systems (33.78% night safety poor)</li>
              <li>• Implement safety inspections</li>
              <li>• Operator licensing mechanisms</li>
              <li>• Address gender disparities (40% females vs 28% males)</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Recommendations (2/2)",
      content: (
        <div className="space-y-4">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-yellow-900">Quality</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Clear route information displays (reduce 50.44% word-of-mouth)</li>
              <li>• Income-sensitive fare structures</li>
              <li>• Improve vehicle maintenance standards</li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-green-900">Policy</h3>
            <ul className="space-y-2 text-gray-800 text-sm">
              <li>• Adopt AHP for future planning</li>
              <li>• Stakeholder consultation mechanisms</li>
              <li>• Continuous service improvement</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Thank You",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 className="text-4xl font-bold text-blue-800">Thank You</h2>
          <div className="text-center space-y-4">
            <p className="text-xl text-gray-700">Questions and Discussion</p>
            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <p className="text-lg font-semibold text-blue-900">MIKAILU SAMUEL NADRO</p>
              <p className="text-md text-gray-600">Department of Civil Engineering</p>
              <p className="text-md text-gray-600">Bayero University, Kano</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-5xl h-full max-h-[600px] flex flex-col">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 rounded-t-lg">
            <h1 className="text-2xl font-bold">{slides[currentSlide].title}</h1>
            {slides[currentSlide].subtitle && (
              <p className="text-lg mt-1">{slides[currentSlide].subtitle}</p>
            )}
          </div>
          
          <div className="flex-1 overflow-y-auto p-8">
            {slides[currentSlide].content}
          </div>
          
          <div className="p-6 border-t flex items-center justify-between bg-gray-50 rounded-b-lg">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            
            <div className="text-gray-600 font-semibold">
              Slide {currentSlide + 1} of {slides.length}
            </div>
            
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportPresentation;
