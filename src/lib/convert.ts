import { InputJson, FCEvent } from "../types";

// --- 最適化前: input → events
export function convertInputToEvents(input: InputJson): FCEvent[] {
  const events: FCEvent[] = []

  input.vehicles.forEach(v => {
    v.shifts.forEach(shift => {
      // Shift 全体
      events.push({
        id: `shift-${v.id}-${shift.id}`,
        resourceId: v.id,
        resourceName: v.id,
        startDate: shift.minStartTime,
        endDate: shift.maxEndTime,
        name: `Shift (${v.id})`,
        eventColor: "gray"
      })

      // Break
      shift.requiredBreaks.forEach(b => {
        const start = b.minStartTime || b.startTime
        const end = b.maxEndTime || b.endTime
        if (!start || !end) return

        events.push({
          id: `break-${b.id}`,
          resourceId: v.id,
          resourceName: v.id,
          startDate: start,
          endDate: end,
          name: "Break",
          eventColor: "orange"
        })
      })
    })
  })

  // Visits
  input.visits.forEach(vs => {
    const tw = vs.timeWindows?.[0]
    if (!tw) return

    events.push({
      id: vs.id,
      resourceId: vs.assignedVehicleId || "unassigned",
      resourceName: vs.assignedVehicleId || "unassigned",
      startDate: tw.minStartTime,
      endDate: tw.maxEndTime,
      name: vs.name || vs.id,
      eventColor: "blue"
    })
  })

  return events
}

// --- 最適化後: solution → events
export function solutionToEvents(solution: any): FCEvent[] {
  const out: FCEvent[] = []

  for (const vehicle of solution.vehicles ?? []) {
    const vehicleId = vehicle.id
    const vehicleName = vehicle.name || vehicle.id
    for (const shift of vehicle.shifts ?? []) {
      for (const task of shift.itinerary ?? []) {
        out.push({
          id: task.id,
          resourceId: vehicleId,
          resourceName: vehicleName,
          startDate: task.startServiceTime || task.startTime || task.arrivalTime,
          endDate: task.departureTime || task.endTime,
          name: task.kind === 'BREAK' ? 'Break' : `Visit ${task.id}`,
          eventColor: task.kind === 'BREAK' ? 'orange' : 'blue'
        })
      }
    }
  }

  return out
}




/* import { InputJson, FCEvent } from '../types'

export function convertInputToEvents(input: InputJson): FCEvent[] {
  const startBase = new Date(input.dayStart)
  const events: FCEvent[] = []

  let offsetByVehicle: Record<string, number> = {}
  input.vehicles.forEach((v) => (offsetByVehicle[v.id] = 0))

  input.visits.forEach((visit, idx) => {
    const vehicle = input.vehicles[idx % input.vehicles.length]
    const offset = offsetByVehicle[vehicle.id]
    const start = new Date(startBase.getTime() + offset * 60 * 1000)
    const end = new Date(start.getTime() + visit.durationMin * 60 * 1000)
    offsetByVehicle[vehicle.id] = offset + visit.durationMin + 15

    events.push({
      id: visit.id,
      title: `${visit.address} — ${vehicle.name}`,
      start: start.toISOString(),
      end: end.toISOString(),
      extendedProps: {
        vehicleId: vehicle.id,
        durationMin: visit.durationMin
      }
    })
  })

  return events
} */