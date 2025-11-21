import React from 'react';
import { ArrowRight, Wind, Zap, Waves, RotateCcw } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl text-green-400 mb-4">
            How It Works
          </h2>
          <p className="text-slate-300 max-w-2xl text-lg">
            Heat pumps work like a refrigerator in reverse. Instead of creating heat, they simply move it from the atmosphere to your water tank, resulting in massive energy savings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="relative p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900">1</div>
                <div className="h-12 w-12 text-blue-400 mb-4"><Wind /></div>
                <h3 className="text-xl font-bold mb-2">Heat Absorption</h3>
                <p className="text-slate-400 text-sm">Low-temp refrigerant absorbs free heat energy from the surrounding air in the evaporator.</p>
            </div>

            {/* Step 2 */}
            <div className="relative p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                 <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900">2</div>
                <div className="h-12 w-12 text-yellow-400 mb-4"><Zap /></div>
                <h3 className="text-xl font-bold mb-2">Compression</h3>
                <p className="text-slate-400 text-sm">The compressor increases the pressure and temperature of the refrigerant vapor.</p>
            </div>

            {/* Step 3 */}
            <div className="relative p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                 <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900">3</div>
                <div className="h-12 w-12 text-red-400 mb-4"><Waves /></div>
                <h3 className="text-xl font-bold mb-2">Heat Exchange</h3>
                <p className="text-slate-400 text-sm">High-heat refrigerant transfers energy to the water in the tank via the heat exchanger.</p>
            </div>

            {/* Step 4 */}
            <div className="relative p-6 rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm">
                 <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold text-slate-900">4</div>
                <div className="h-12 w-12 text-purple-400 mb-4"><RotateCcw /></div>
                <h3 className="text-xl font-bold mb-2">Expansion</h3>
                <p className="text-slate-400 text-sm">Refrigerant passes through the valve, cools down, and the cycle repeats.</p>
            </div>

        </div>

        <div className="mt-12 flex justify-center text-slate-500">
             <div className="flex items-center gap-2">
                <span>Thermodynamic Cycle</span>
                <ArrowRight className="w-4 h-4" />
                <span>Continuous Hot Water</span>
             </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;