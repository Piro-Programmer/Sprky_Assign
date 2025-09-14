import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CreateInvoiceCard() {
  return (
    <div
      className="text-white shadow-lg hover:shadow-xl transition-shadow rounded-xl border border-gray-100"
      style={{ backgroundColor: "#7c3aed" }}
    >
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-xl font-bold" style={{ color: "#ffffff" }}>
              Create New Invoice
            </h2>
            <p className="text-sm" style={{ color: "#e5e7eb" }}>
              Start by creating and sending new invoice
            </p>
            <p className="text-xs" style={{ color: "#d1d5db" }}>
              Or Upload an existing invoice and set payment reminder
            </p>
          </div>
          <div className="flex-shrink-0">
            <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              <Plus className="h-4 w-4 mr-2" />
              Create Invoice
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
