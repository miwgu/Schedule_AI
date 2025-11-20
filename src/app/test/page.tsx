'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Calendar from '@/components/Calendar'        // FullCalendar/Bryntum用のコンポーネント
import OptimizeButton from '@/components/OptimizeButton'
import { InputJson, FCEvent } from '@/types'
import { convertInputToEvents } from '@/lib/convert'

export default function Page() {
  const [input, setInput] = useState<InputJson | null>(null)
  const [events, setEvents] = useState<FCEvent[]>([])
  const [loading, setLoading] = useState(false)

  // 固定デモID
  const demoId = 'BASIC'

  // ステップ 1: ページロード時にデモ JSON を取得
  useEffect(() => {
    const fetchDemoJson = async () => {
      try {
        const resp = await axios.get(`/api/demo/get/${encodeURIComponent(demoId)}`)
      console.log('Demo JSON received:', resp.data)
      const demoInput: InputJson = resp.data
      if (!demoInput.vehicles || !demoInput.visits) {
        console.warn('Demo JSON is missing vehicles or visits:', demoInput)
        return
      }
      setInput(demoInput)
      setEvents(convertInputToEvents(demoInput))
        /* const resp = await axios.get(`/api/demo/get/${encodeURIComponent(demoId)}`)
        console.log(resp.data)  
        const demoInput: InputJson = resp.data
        setInput(demoInput)
        setEvents(convertInputToEvents(demoInput)) */
      } catch (error) {
        console.error('Failed to load demo JSON', error)
      }
    }

    fetchDemoJson()
  }, [])

  // ステップ 3用: 最適化ボタン（現時点ではまだ未実装）
  async function handleOptimize() {
    if (!input) return
    setLoading(true)
    try {
      // TODO: /api/solve を呼ぶ
      alert('Optimizeボタンはまだ未実装です')
    } catch (e) {
      alert('Optimization failed: ' + String(e))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui, sans-serif' }}>
      <h1>ScheduleAI - Demo JSON Load</h1>

      {/* Optimizeボタンはステップ3で使用 */}
      <OptimizeButton onClick={handleOptimize} loading={loading} />

      {/* カレンダー表示 */}
      <Calendar events={events} />
    </div>
  )
}
