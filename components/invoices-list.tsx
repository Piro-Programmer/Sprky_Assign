"use client"

import { useState } from "react"
import { ChevronDown, Bell, Edit, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

const invoices = [
  {
    id: 1,
    client: "Client Name",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "update",
    color: "bg-purple-500",
  },
  {
    id: 2,
    client: "Client Name",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "unpaid",
    color: "bg-gray-500",
  },
  {
    id: 3,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "disputed",
    color: "bg-red-500",
  },
  {
    id: 4,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "paid",
    color: "bg-green-500",
  },
  {
    id: 5,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "paid",
    color: "bg-green-500",
  },
  {
    id: 6,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "partially",
    color: "bg-yellow-500",
  },
  {
    id: 7,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "paid",
    color: "bg-green-500",
  },
  {
    id: 8,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "overdue",
    color: "bg-red-500",
  },
  {
    id: 9,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "awaited",
    color: "bg-yellow-500",
  },
  {
    id: 10,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "draft",
    color: "bg-gray-400",
  },
  {
    id: 11,
    client: "Income Trend",
    amount: "€1,25,000",
    date: "Due: 2024-06-15",
    status: "paid",
    color: "bg-green-500",
  },
]

const getStatusLabel = (status: string) => {
  switch (status) {
    case "update":
      return "Update Status"
    case "unpaid":
      return "Unpaid"
    case "disputed":
      return "Disputed"
    case "paid":
      return "Paid"
    case "partially":
      return "Partially Paid"
    case "overdue":
      return "Overdue"
    case "awaited":
      return "Awaited"
    case "draft":
      return "Draft"
    default:
      return status
  }
}

export function InvoicesList() {
  const [isExpanded, setIsExpanded] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900">Your Invoices</h3>
          <Button variant="ghost" size="sm" onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </Button>
        </div>

        {isExpanded && (
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="h-4 w-4 text-gray-400 absolute left-3 top-3" />
              <Input
                placeholder="Search invoices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        )}
      </div>

      {isExpanded && (
        <div className="divide-y divide-gray-100">
          <div className="px-6 py-3 bg-gray-50 text-xs font-semibold text-gray-600 uppercase tracking-wide">
            <div className="grid grid-cols-4 gap-4">
              <div>Client</div>
              <div>Amount</div>
              <div>Due Date</div>
              <div>Status</div>
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {invoices
              .filter((invoice) => invoice.client.toLowerCase().includes(searchTerm.toLowerCase()))
              .map((invoice) => (
                <div key={invoice.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div className="font-medium text-gray-900">{invoice.client}</div>
                    <div className="font-semibold text-gray-900">{invoice.amount}</div>
                    <div className="text-sm text-gray-600">{invoice.date}</div>
                    <div className="flex items-center gap-2">
                      <Badge className={`${invoice.color} text-white text-xs px-3 py-1 border-0`}>
                        {getStatusLabel(invoice.status)}
                      </Badge>
                      {(invoice.status === "overdue" || invoice.status === "awaited") && (
                        <Bell className="h-4 w-4 text-gray-400" />
                      )}
                      {invoice.status === "draft" && <Edit className="h-4 w-4 text-gray-400" />}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  )
}
