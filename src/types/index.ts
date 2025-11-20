export interface FCEvent {
  id: string
  resourceId: string
  resourceName?: string // ← Namn av resursen
  startDate: string
  endDate: string
  name: string
  eventColor?: string
}

export interface InputJson {
  vehicles: Vehicle[]
  visits: Visit[]
}

export interface Vehicle {
  id: string
  vehicleType: string
  shifts: Shift[]
}

export interface Shift {
  id: string
  startLocation: number[]
  minStartTime: string
  maxEndTime: string
  requiredBreaks: BreakItem[]
}

export interface BreakItem {
  id: string
  startTime?: string
  endTime?: string
  minStartTime?: string
  maxEndTime?: string
  duration: string
  type: 'FLOATING' | 'FIXED'
}

export interface Visit {
  id: string
  assignedVehicleId?: string
  name?: string
  timeWindows?: { minStartTime: string; maxEndTime: string }[]
}

export interface OptimizedJson {
  vehicles: Vehicle[]
  visits: Visit[]
}