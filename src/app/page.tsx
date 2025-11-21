'use client'

import React, { useEffect, useState } from 'react'
import Calendar from '@/components/Calendar'
import OptimizeButton from '@/components/OptimizeButton'
import { convertInputToEvents, solutionToEvents } from '../lib/convert'
import { InputJson, FCEvent } from '../types'
import axios from 'axios'

export default function Page() {
  const [input, setInput] = useState<InputJson | null>(null)
  const [events, setEvents] = useState<FCEvent[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [visitsMap, setVisitsMap] = useState<Record<string, string>>({}) 
  const [skillsMap, setSkillsMap] = useState<Record<string, {name:string; level:number}[]>>({})

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const res = await axios.get('/api/demo/get/BASIC')
        const json = res.data as InputJson
        setInput(json)

        const { events, skillsMap } = convertInputToEvents(json)
        setEvents(events)
        setSkillsMap(skillsMap)

        //create map of visit id-> name
        const  map: Record<string, string> = {}
        json.visits.forEach(v =>{
          map[v.id] = v.name || v.id
        })
        setVisitsMap(map)
      } catch (err: any) {
        console.error(err)
        setError(err.message || String(err))
      }
    }
    fetchDemo()
  }, [])

  async function handleOptimize() {
    if (!input) return
    setLoading(true)
    try {
      const solveResp = await axios.post('/api/solve', input)
      const planId = solveResp.data.id
      const solution = await pollSolution(planId)

      // Pass visitsMap to convert solution to events with names
      setEvents(solutionToEvents(solution, visitsMap, skillsMap))

    } catch (err: any) {
      console.error(err)
      setError(err.message || String(err))
    } finally {
      setLoading(false)
    }
  }

  async function pollSolution(id: string) {
    while (true) {
      const resp = await axios.get(`/api/solve/${id}`)
      const status = resp.data.metadata?.solverStatus
      if (status === 'SOLVING_COMPLETED' || status === 'SOLVED') {
        return resp.data.modelOutput
      }

      // Drawing the intermediate process
      if (resp.data.modelOutput) {
        setEvents(solutionToEvents(resp.data.modelOutput, visitsMap, skillsMap))
      }

      await new Promise(res => setTimeout(res, 2000))
    }
  }

  return (
   <div className="scheduleai-container">
     <h1 className="scheduleai-header">ScheduleAI</h1>
   
     <div className="optimize-button-wrap">
       <OptimizeButton loading={loading} onClick={handleOptimize} />
     </div>
   
     {error && <div className="scheduleai-error">Error: {error}</div>}
   
     <div className="scheduler-wrapper">
       <Calendar events={events} />
     </div>
   </div>

  )
}
