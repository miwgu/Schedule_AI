import { InputJson, FCEvent } from "../types";

// Before optimization: input → events
export function convertInputToEvents(input: InputJson): FCEvent[] {
  const events: FCEvent[] = []
  const vehicleSkills: { name: string; level: number }[] = []
  const resourceSkillsMap: Record<string, string[]> = {}

  input.vehicles.forEach(v => {

    const vehicleId = v.id
    const skills: string[] = []


    v.shifts.forEach(shift => {
      // Shift
      events.push({
        id: `shift-${vehicleId}-${shift.id}`,
        resourceId: vehicleId,
        resourceName: vehicleId,
        startDate: shift.minStartTime,
        endDate: shift.maxEndTime,
        name: `Shift (${vehicleId})`,
        eventColor: "green",
        skills: shift.skills ?? []
      })

      // Skills
      shift.skills?.forEach(s => {
        vehicleSkills.push({ name: s.name, level: s.level })
      })

      // Break
      shift.requiredBreaks.forEach(b => {
        const start = b.minStartTime || b.startTime
        const end = b.maxEndTime || b.endTime
        if (!start || !end) return

        events.push({
          id: `break-${b.id}`,
          resourceId: vehicleId,
          resourceName: vehicleId,
          startDate: start,
          endDate: end,
          name: "Break",
          eventColor: "orange",
          skills: vehicleSkills
        })
      })
    })
    resourceSkillsMap[vehicleId] = vehicleSkills.map(s => `${s.name} Lv${s.level}`)
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

// After optimization: solution → events
export function solutionToEvents(solution: any, visitsMap?: Record<string, string>): FCEvent[] {
  const out: FCEvent[] = []

  for (const vehicle of solution.vehicles ?? []) {
    const vehicleId = vehicle.id
    const vehicleName = vehicle.name || vehicle.id
    for (const shift of vehicle.shifts ?? []) {
      for (const task of shift.itinerary ?? []) {
        const visitName =
        task.kind === 'BREAK' ? 'Break'  : visitsMap?.[task.id] || task.name || `Visit ${task.id}`
        out.push({
          id: task.id,
          resourceId: vehicleId,
          resourceName: vehicleName,
          startDate: task.startServiceTime || task.startTime || task.arrivalTime,
          endDate: task.departureTime || task.endTime,
          name: visitName,
          eventColor: task.kind === 'BREAK' ? 'orange' : 'blue'
        })
      }
    }
  }

  return out
}