import { InputJson, FCEvent } from "../types";

/**
 * Before optimization:
 * Convert raw input data (before optimization) into SchedulerPro-compatible events and skills map.
 */
export function convertInputToEvents(input: InputJson): {
    events: FCEvent[],
    skillsMap: Record<string, { name: string; level: number }[]>
} {
  
  const events: FCEvent[] = []
  const skillsMap: Record<string, { name: string; level: number }[]> = {}
 
  input.vehicles.forEach(v => {

   const vehicleId = v.id
   const collectedSkills: { name: string; level: number }[] = []

   v.shifts.forEach(shift => {
      // collect skills for the resource
       shift.skills?.forEach(s => {
        if (!collectedSkills.find(x => x.name === s.name && x.level === s.level)) {
          collectedSkills.push({ name: s.name, level: s.level })
        }
      })
      // Shift event
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
          skills: collectedSkills
        })
      })
    })
        // save skills for this vehicle
    skillsMap[vehicleId] = collectedSkills
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

  return {
    events,
    skillsMap
  }
}

/**
 * After optimization:
 * Convert optimization solution into SchedulerPro-compatible events.
 */
export function solutionToEvents(
    solution: any, 
    visitsMap?: Record<string, string>, 
    resourceSkillsMap?: Record<string, { name: string; level: number }[]>): FCEvent[] {
  
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
          skills: resourceSkillsMap?.[vehicleId] || [],
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