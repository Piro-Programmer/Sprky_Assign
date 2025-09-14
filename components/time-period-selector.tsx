"use client"

import { useState } from "react"
import { Calendar, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TimePeriodSelector() {
  const [selectedPeriod, setSelectedPeriod] = useState("3Months")

  const periods = [
    { id: "1Month", label: "1 Month" },
    { id: "3Months", label: "3 Months" },
    { id: "1Year", label: "1 Year", premium: true },
    { id: "Custom", label: "Custom", icon: Calendar },
  ]

  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="mb-3">
        <h3 className="text-sm font-medium text-gray-700">Time Period</h3>
        <p className="text-xs text-gray-500">dd mm yyyy - dd mm yyyy</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {periods.map((period) => (
          <Button
            key={period.id}
            variant={selectedPeriod === period.id ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedPeriod(period.id)}
            className={`relative ${
              selectedPeriod === period.id
                ? "bg-purple-500 text-white hover:bg-purple-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
            }`}
          >
            {period.icon && <period.icon className="h-4 w-4 mr-1" />}
            {period.label}
            {period.premium && <Crown className="h-3 w-3 ml-1 text-purple-500" />}
          </Button>
        ))}
      </div>
    </div>
  )
}
