"use client"

import { BarChart, Bar, XAxis, ResponsiveContainer, Cell } from "recharts"

const data = [
  { month: "Jan", income: 2000, growth: -50 },
  { month: "Feb", income: 3000, growth: -25 },
  { month: "Mar", income: 4500, growth: 0 },
  { month: "Apr", income: 2500, growth: -25 },
  { month: "May", income: 5000, growth: 50 },
  { month: "Jun", income: 4000, growth: 25 },
]

export function IncomeChart() {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Income Trend</h3>
        <p className="text-sm text-gray-600">Your monthly income and growth for the last 6 months.</p>
      </div>

      <div className="relative">
        <div className="h-48 w-full relative">
          <ResponsiveContainer width="85%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 0, left: 20, bottom: 5 }}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} className="text-xs text-gray-600" />
              <Bar dataKey="income" radius={[4, 4, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill="#8b5cf6" />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>

          <div className="absolute right-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-5">
            <span>100%</span>
            <span>50%</span>
            <span>0%</span>
            <span>-50%</span>
            <span>-100%</span>
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-500 rounded-sm"></div>
            <span>Income</span>
          </div>
          <div className="flex items-center gap-2">
            <span>mom Growth</span>
          </div>
        </div>
      </div>
    </div>
  )
}
