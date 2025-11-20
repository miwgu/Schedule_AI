'use client'
import { useEffect, useRef } from 'react'
import type { FCEvent } from '../types'
import '../lib/schedulerpro-6.3.3-trial/build/schedulerpro.stockholm.css'

interface CalendarProps {
  events: FCEvent[]
}

export default function Calendar({ events }: CalendarProps) {
  const schedulerRef = useRef<HTMLDivElement>(null)
  const schedulerInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!schedulerRef.current) return

    const load = async () => {
      const mod = await import('../lib/schedulerpro-6.3.3-trial/build/schedulerpro.module.js')
      const SchedulerClass = mod.Scheduler || mod.default?.Scheduler
      if (!SchedulerClass) return

      // --- リソースをユニークに作成
      const resourceMap = new Map<string, { id: string; name: string }>()
      events.forEach(e => {
        const rid = e.resourceId || e.id
        if (!resourceMap.has(rid)) {
          resourceMap.set(rid, { id: rid, name: e.resourceName || rid })
        }
      })
      const resources = Array.from(resourceMap.values())

      // --- イベントを変換
      const evts = events.map(e => ({
        id: e.id,
        resourceId: e.resourceId || e.id,
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
        name: e.name,
        cls: e.eventColor ? `event-${e.eventColor}` : ''
      }))

      const scheduler = new SchedulerClass({
        appendTo: schedulerRef.current!,
        startDate: evts.length
          ? new Date(Math.min(...evts.map(e => e.startDate.getTime())))
          : new Date(),
        endDate: evts.length
          ? new Date(Math.max(...evts.map(e => e.endDate.getTime())))
          : new Date(),
        viewPreset: 'hourAndDay',

        // --- 左側の列に従業員名を表示
        columns: [
          { text: 'Employee', field: 'name', width: 150 }
        ],

        resources,
        events: evts,
        rowHeight: 35,

        tbar: [
          {
            type: 'button', text: 'Prev', cls: 'b-tool-action', weight: 100,
            onClick: () => {
              const curStart = scheduler.startDate
              const delta = scheduler.timeAxisSubGrid?.tickSize || 24*60*60*1000
              scheduler.scrollToDate(new Date(curStart.getTime() - delta))
            }
          },
          {
            type: 'button', text: 'Today', cls: 'b-tool-action', weight: 101,
            onClick: () => {
              const today = new Date()
              scheduler.scrollToDate(today)
              scheduler.setTimeSpan(today, new Date(today.getTime() + (scheduler.endDate - scheduler.startDate)))
            }
          },
          {
            type: 'button', text: 'Next', cls: 'b-tool-action', weight: 102,
            onClick: () => {
              const curStart = scheduler.startDate
              const delta = scheduler.timeAxisSubGrid?.tickSize || 24*60*60*1000
              scheduler.scrollToDate(new Date(curStart.getTime() + delta))
            }
          }
        ]
      })

      schedulerInstanceRef.current = scheduler
    }

    load()

    return () => {
      schedulerInstanceRef.current?.destroy()
    }
  }, [events])

  return <div ref={schedulerRef} style={{ height: 550, width: '100%' }} />
}