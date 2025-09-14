import { DashboardHeader } from '@/components/dashboard-header';
import { CreateInvoiceCard } from '@/components/create-invoice-card';
import { TimePeriodSelector } from '@/components/time-period-selector';
import { FinancialMetrics } from '@/components/financial-metrics';
import { IncomeChart } from '@/components/income-chart';
import { InvoicesList } from '@/components/invoices-list';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">SP</span>
            </div>
            <div>
              {/* <h3 className="font-semibold text-gray-800">Sparkonomy</h3> */}
              <img
                src="/Sparkonomy.png"
                alt="Sparkonomy - sparking the creator economy"
                className="h-10 w-auto"
              />
              <p className="text-xs text-gray-600">
                Sparking the smarter economy
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-purple-600 bg-purple-50 rounded-lg font-medium"
              >
                <div className="w-5 h-5 bg-purple-500 rounded"></div>
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Invoices
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Clients
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
              >
                <div className="w-5 h-5 bg-gray-300 rounded"></div>
                Reports
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <DashboardHeader />

        <main className="flex-1 p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <CreateInvoiceCard />
                <FinancialMetrics />
              </div>

              <TimePeriodSelector />
              <IncomeChart />
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <InvoicesList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
