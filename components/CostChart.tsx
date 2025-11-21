import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { COST_COMPARISON_DATA } from '../constants';

const CostChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white rounded-xl p-4 md:p-8 shadow-sm border border-slate-100">
      <h3 className="text-xl font-semibold text-slate-800 mb-2">Energy Cost Comparison</h3>
      <p className="text-slate-500 text-sm mb-6">Relative cost per unit of heating. Lower is better.</p>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={COST_COMPARISON_DATA}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis 
            dataKey="name" 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false}
          />
          <YAxis 
            tick={{ fill: '#64748b', fontSize: 12 }} 
            axisLine={false} 
            tickLine={false} 
            label={{ value: 'Cost Index (₹)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }}
          />
          <Tooltip 
            cursor={{ fill: '#f1f5f9' }}
            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Bar dataKey="cost" radius={[4, 4, 0, 0]} barSize={60}>
            {COST_COMPARISON_DATA.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CostChart;