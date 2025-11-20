# AI Optimization for Scheduling with Timefold Field Service Routing API

## 📚 Overview
This is a development test project using the Timefold Field Service Routing API

### Requirements
1. Display baseline data
Load a demo input JSON from the Timefold Field Service Routing Guide or via the demo-data endpoints below.
Render the data visually in a [Bryntum SchedulerPro](https://app.timefold.ai/models/field-service-routing/v1/api-spec) timeline (e.g. vehicles, visits, shifts).
2. Solve the schedule
Aim for a clean, minimal UI.
Allow the user to send the input JSON to Timefold's /route-plans endpoint.
Receive the output JSON and display the optimized schedule in page with a Bryntum component. You can show both active jobs (best solution) and the completed solution.
3. Visualize results
Update the SchedulerPro view to show employees (vehicles in timefold), optimized visit order, timing, and assignments.

### Tech Stack
Next.js, React (TypeScript)

### API
**Timefold PlanningAI:**  [Timefold API Endpoints](https://app.timefold.ai/models/field-service-routing/v1/api-spec/)
This Timefold Model exposes an API that helps your software to assign customer visits to technicians, and route the technicians to those visits.
-GET /v1/demo-data/{demoDataId}/input (use BASIC)
-POST /v1/route-plans
-GET /v1/route-plans/{id} 

## 💬 Contents

### 1. How to run the project
 
- Install dependencies:
```bash
npm install
```
- Add a .env file in the project root:
```bash
TIMEFOLD_API_KEY=*****
TIMEFOLD_BASE_URL=https://app.timefold.ai/api/models/field-service-routing/v1
TIMEFOLD_CONFIG_ID=*****
```
- Download and add Bryntum SchedulerPro under the lib directory.
- start the project:
```bash
npm run dev
```

### 2. Which parts are complete

All required features have been implemented.
Optional features are not included.

### 3. What AI tools you used during development

ChatGPT