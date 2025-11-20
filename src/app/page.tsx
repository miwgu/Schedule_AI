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

  useEffect(() => {
    const fetchDemo = async () => {
      try {
        const res = await axios.get('/api/demo/get/BASIC')
        const json = res.data as InputJson
        setInput(json)
        setEvents(convertInputToEvents(json))
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
      setEvents(solutionToEvents(solution))
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
        setEvents(solutionToEvents(resp.data.modelOutput))
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
