'use client'

import { useEffect, useRef } from 'react'
import type { FCEvent } from '../types'
import '../lib/schedulerpro-6.3.3-trial/build/schedulerpro.stockholm.css'

interface CalendarProps {
  events: FCEvent[]
}

/**
 * SchedulerPro wrapper component
 *
 * - Uses SchedulerPro from the local trial build.
 * - Prepares fields for dependency lines (not enabled by default unless dependencies data is provided).
 * - Recreates the Scheduler on `events` change to ensure consistent state.
 *
 * Notes:
 * - If you move to production, ensure the SchedulerPro bundle path and license are configured.
 * - You can enable drag/drop, dependencies, and other Pro features by adding configs and payloads below.
 */
export default function Calendar({ events }: CalendarProps) {
  const schedulerRef = useRef<HTMLDivElement | null>(null)
  const schedulerInstanceRef = useRef<any>(null)

  useEffect(() => {
    if (!schedulerRef.current) return

    let destroyed = false

    const load = async () => {
      // dynamic import of the trial build (your path may vary)
      const mod = await import('../lib/schedulerpro-6.3.3-trial/build/schedulerpro.module.js')

      // NOTE: Load SchedulerPro class (not Scheduler)
      const SchedulerClass = (mod as any).SchedulerPro || (mod as any).default?.SchedulerPro
      if (!SchedulerClass) {
        console.error('SchedulerPro class not found in module.')
        return
      }

      // Extract unique resources (id & name) from events to build the SchedulerPro resource list

     const resources = Object.values(
       events.reduce((acc: any, e: any) => {
         if (!acc[e.resourceId]) {
           acc[e.resourceId] = {
             id: e.resourceId,
             name: e.resourceName || e.resourceId,
             skills: e.skills || []
           }
         } else {
           if (e.skills && e.skills.length > 0) {
             acc[e.resourceId].skills = e.skills
           }
         }
         return acc
       }, {})
     )


      // Convert events to scheduler format
      const evts = events.map(e => ({
        id: e.id,
        resourceId: e.resourceId || 'unassigned',
        startDate: new Date(e.startDate),
        endDate: new Date(e.endDate),
        name: e.name,
        cls: e.eventColor ? `event-${e.eventColor}` : ''
      }))

      // Add a buffer around the earliest start and latest end times for better visual spacing
      const now = new Date()
      const startDate = evts.length
        ? new Date(Math.min(...evts.map(ev => ev.startDate.getTime())) - 60 * 60 * 1000)
        : new Date(now.getTime() - 2 * 60 * 60 * 1000)
      const endDate = evts.length
        ? new Date(Math.max(...evts.map(ev => ev.endDate.getTime())) + 60 * 60 * 1000)
        : new Date(now.getTime() + 6 * 60 * 60 * 1000)

      // Placeholder: dependencies array (if you later map Timefold's ordering to dependency records)
      // Example structure for SchedulerPro dependencies:
      //const dependencies: any[] = []

      // Create scheduler
      const scheduler = new SchedulerClass({
        appendTo: schedulerRef.current!,
        startDate,
        endDate,
        viewPreset: 'hourAndDay', // hourly ticks + day labels

        // Show resource name column (left)
        columns: [
          { text: 'Employee', 
            field: 'name', 
            width: 150,
            renderer: ({ record }:any) => {
            const skills = record.skills?.map((s:any) => `${s.name} Lv${s.level}`).join(', ') || 'No skills'
            return {
              tag: 'div',
              children: [
                { tag: 'div', html: `<strong>${record.name}</strong>` },
                { tag: 'div', html: skills, style: 'font-size:0.8em;color:gray;' }
            ]
          }
       }
          
          }
        ],

        // Two subgrids: left locked (resources) and main timeline
        subGridConfigs: {
          locked: { flex: 1 },
          normal: { flex: 4 }
        },

        // Core data
        resources,
        events: evts,
        rowHeight: 40,

        // If you later have dependencies, pass them here:
        // dependencies,

        // Toolbar for navigation (keeps UX consistent)
        tbar: [
          {
            type: 'button', text: 'Prev', cls: 'b-tool-action',
            onClick: () => {
              const curStart = scheduler.startDate
              const delta = (scheduler.timeAxisSubGrid as any)?.tickSize || 24 * 60 * 60 * 1000
              scheduler.scrollToDate(new Date(curStart.getTime() - delta))
            }
          },
          {
            type: 'button', text: 'Today', cls: 'b-tool-action',
            onClick: () => {
              const today = new Date()
              scheduler.scrollToDate(today)
              scheduler.setTimeSpan(today, new Date(today.getTime() + (scheduler.endDate.getTime() - scheduler.startDate.getTime())))
            }
          },
          {
            type: 'button', text: 'Next', cls: 'b-tool-action',
            onClick: () => {
              const curStart = scheduler.startDate
              const delta = (scheduler.timeAxisSubGrid as any)?.tickSize || 24 * 60 * 60 * 1000
              scheduler.scrollToDate(new Date(curStart.getTime() + delta))
            }
          }
        ],

        // Optional: tooltip renderer to show both Local and EST times (very useful for testing)
        eventTooltip: {
          renderer: ({ eventRecord }: any) => {
            const localStart = new Date(eventRecord.startDate).toLocaleString()
            const estStart = new Date(eventRecord.startDate).toLocaleString('en-US', { timeZone: 'America/New_York' })
            return `
              <div style="padding:6px">
                <div><b>${eventRecord.name}</b></div>
                <div>Local: ${localStart}</div>
                <div>EST: ${estStart}</div>
              </div>
            `
          }
        },

        // OPTIONAL: enable drag/drop and event edit — commented out by default; enable if you want to allow manual adjustments.
        // crudManager: {},
        // enableDragCreation: true,
        // eventEditFeature: true,
      })

      // Save instance ref
      schedulerInstanceRef.current = scheduler

      // Example: if you want to react to manual drag/drop (and then POST back to Timefold), subscribe to events:
      // scheduler.on('eventdrop', ({ records }) => {
      //   // records contains the changed event(s). Build a small patch and re-submit to Timefold if needed.
      // })

      if (destroyed) {
        scheduler.destroy()
      }
    }

    load()

    return () => {
      destroyed = true
      schedulerInstanceRef.current?.destroy()
      schedulerInstanceRef.current = null
    }
  }, [events])

  return <div ref={schedulerRef} style={{ height: 550, width: '100%' }} />
}
