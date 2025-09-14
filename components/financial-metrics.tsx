export function FinancialMetrics() {
  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Total Earnings</h3>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-3xl font-bold text-gray-900">$1,25,000</div>
        <p className="text-sm text-green-600 mt-2">+12% from last month</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Payment Awaited</h3>
            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900">$25,000</div>
          <p className="text-sm text-gray-500 mt-2">5 pending invoices</p>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Payment Overdue</h3>
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          </div>
          <div className="text-2xl font-bold text-gray-900">$25,000</div>
          <p className="text-sm text-red-600 mt-2">3 overdue invoices</p>
        </div>
      </div>
    </div>
  )
}
