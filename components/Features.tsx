import React from 'react';
import { Leaf, ThermometerSnowflake, Zap, ShieldCheck, Droplet, Smartphone } from 'lucide-react';
import { FEATURES } from '../constants';

const iconMap: Record<string, React.ReactNode> = {
  Leaf: <Leaf className="w-8 h-8 text-green-500" />,
  ThermometerSnowflake: <ThermometerSnowflake className="w-8 h-8 text-blue-500" />,
  Zap: <Zap className="w-8 h-8 text-yellow-500" />,
  ShieldCheck: <ShieldCheck className="w-8 h-8 text-slate-600" />,
  Droplet: <Droplet className="w-8 h-8 text-blue-400" />,
  Smartphone: <Smartphone className="w-8 h-8 text-indigo-500" />,
};

const Features: React.FC = () => {
  return (
    <div id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Advanced Engineering for Everyday Comfort
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Our heat pumps combine cutting-edge technology with durable materials to provide a reliable hot water solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-slate-100"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {iconMap[feature.iconName]}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;