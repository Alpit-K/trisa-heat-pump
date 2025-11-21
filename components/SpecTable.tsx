import React from 'react';
import { SPECS } from '../constants';

const SpecTable: React.FC = () => {
  return (
    <div id="specs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-4">
            Technical Specifications
          </h2>
          <p className="text-slate-600">Detailed performance metrics for our range of heat pumps.</p>
        </div>

        <div className="overflow-x-auto shadow-xl rounded-2xl border border-slate-200">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Parameter
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold text-blue-700 uppercase tracking-wider bg-blue-50/50">
                  TR-HP-200
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold text-blue-700 uppercase tracking-wider bg-blue-50/50">
                  TR-HP-300
                </th>
                <th scope="col" className="px-6 py-4 text-center text-sm font-bold text-blue-700 uppercase tracking-wider bg-blue-50/50">
                  TR-HP-500
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {SPECS.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">
                    {row.feature}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center">
                    {row.model200}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center">
                    {row.model300}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 text-center">
                    {row.model500}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-400 text-center">
          * Condition: Heating Capacity at air 20°C / 15°C, Water temperature from 15°C to 55°C.
        </p>
      </div>
    </div>
  );
};

export default SpecTable;