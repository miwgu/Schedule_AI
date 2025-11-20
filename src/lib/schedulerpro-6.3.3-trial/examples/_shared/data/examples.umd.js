

var _window$examples;
//The file should be included after examples.js from Scheduler
const proExamples = {
  'Use cases': {
    items: [{
      folder: 'maps',
      title: 'Map integration',
      version: 'Pro',
      since: '4.0',
      updated: '6.2.2'
    }, {
      folder: 'flight-dispatch',
      title: 'A custom styled flight dispatch UI',
      since: '5.5.2',
      updated: '6.0.5'
    }, {
      folder: 'embedded-chart',
      title: 'Embed Chart component into each resource swimlane',
      version: 'Pro',
      since: '4.3.0',
      updated: '6.3.0'
    }, {
      folder: 'skill-matching',
      title: 'Skill matching',
      version: 'Pro',
      since: '6.0.0',
      updated: '6.1.3'
    }, {
      folder: 'planned-vs-actual',
      title: 'Planned vs Actual demo',
      version: 'Pro',
      since: '6.0.0'
    }, {
      folder: 'realtime-updates',
      title: 'Realtime updates',
      since: '6.1.8',
      updated: '6.3.0'
    }]
  },
  'Additional widgets': {
    items: [{
      folder: 'resourcehistogram',
      title: 'Resource histogram',
      version: 'Pro',
      updated: '5.6.9'
    }, {
      folder: 'resourceutilization',
      title: 'Resource utilization',
      version: 'Pro',
      since: '5.0',
      updated: '5.6.9'
    }, {
      folder: 'timeline',
      title: 'Scheduler Pro with Timeline widget',
      version: 'Pro',
      since: '4.0'
    }]
  },
  Features: {
    items: [{
      folder: 'infinite-scroll-crudmanager',
      title: 'Infinite scroll and CrudManager',
      version: 'Pro',
      since: '6.0.0',
      updated: '6.2.3'
    }, {
      folder: 'nested-events',
      title: 'Nested events with drag-n-drop support',
      version: 'Pro',
      since: '4.0',
      updated: '5.3.2'
    }, {
      folder: 'nested-events-configuration',
      title: 'Nested events configuration options',
      version: 'Pro',
      since: '5.1',
      updated: '6.2.4'
    }, {
      folder: 'nested-events-lazy-load',
      title: 'Lazy loaded nested events',
      version: 'Pro',
      since: '6.1.6'
    }, {
      folder: 'split-events',
      title: 'Split events with drag-n-drop support',
      version: 'Pro',
      since: '5.2',
      updated: '5.6.7'
    }, {
      folder: 'conflicts',
      title: 'Scheduling conflict resolution popup',
      version: 'Pro',
      since: '4.3.0'
    }, {
      folder: 'constraints',
      title: 'Constraints that affect scheduling',
      version: 'Pro'
    }, {
      folder: 'effort',
      title: 'Provided effort value distributed across duration',
      version: 'Pro',
      since: '5.3.0'
    }, {
      folder: 'dependencies',
      title: 'Dependencies affecting scheduling',
      version: 'Pro',
      updated: '6.2.4'
    }, {
      folder: 'nested-events-dependencies',
      title: 'Dependencies between nested events',
      version: 'Pro',
      since: '5.6.0'
    }, {
      folder: 'grouping',
      title: 'Group resources by any field',
      version: 'Pro'
    }, {
      folder: 'non-working-time',
      title: 'Visualize and filter out non-working time',
      version: 'Pro',
      updated: '5.0'
    }, {
      folder: 'percent-done',
      title: 'Event progress using percent done',
      version: 'Pro'
    }, {
      folder: 'event-non-working-time',
      title: 'Using and visualizing event calendars',
      version: 'Pro',
      since: '5.2.0'
    }, {
      folder: 'recurrence',
      title: 'Recurring events',
      version: 'Pro',
      since: '5.3.0'
    }, {
      folder: 'calendar-editor',
      title: 'Using calendar editor',
      version: 'Pro',
      since: '6.0.2'
    }, {
      folder: 'resource-non-working-time',
      title: 'Using resource calendars',
      version: 'Pro',
      updated: '5.3.3'
    }, {
      folder: 'weekends',
      title: 'Showing and respecting weekends',
      version: 'Pro'
    }, {
      folder: 'timezone',
      title: 'Time zone support',
      since: '5.3.0',
      updated: '5.6.11'
    }, {
      folder: 'travel-time',
      title: 'Travel time',
      version: 'Pro',
      since: '5.0.0',
      updated: '5.5.5'
    }, {
      folder: 'tree-summary-heatmap',
      title: 'Tree summary heatmap',
      version: 'Pro',
      since: '6.2.0',
      updated: '6.2.1'
    }]
  },
  Customization: {
    items: [{
      folder: 'custom-layouts',
      title: 'Grouping events',
      version: 'Pro',
      since: '4.3.0'
    }, {
      folder: 'localization',
      title: 'Localization',
      since: '5.3.0',
      updated: '6.1.8'
    }, {
      folder: 'taskeditor',
      title: 'Task editor customization',
      version: 'Pro',
      updated: '5.0'
    }]
  },
  Highlighting: {
    items: [{
      folder: 'highlight-event-calendars',
      title: 'Highlight task calendars',
      version: 'Pro',
      since: '5.0',
      updated: '6.0.5'
    }, {
      folder: 'highlight-resource-calendars',
      title: 'Highlight resource calendars',
      version: 'Pro',
      since: '5.0',
      updated: '6.0.5'
    }, {
      folder: 'highlight-time-spans',
      title: 'Highlight time spans',
      version: 'Pro',
      since: '5.0',
      updated: '6.0.5'
    }]
  },
  'Drag drop': {
    items: [{
      folder: 'drag-from-grid',
      title: 'Drag tasks from a grid',
      version: 'Pro',
      updated: '5.4.0'
    }, {
      folder: 'drag-unplanned-tasks',
      title: 'Drag unplanned tasks from a grid',
      version: 'Pro',
      since: '5.0'
    }, {
      folder: 'drag-batches',
      title: 'Drag orders to schedule batches of tasks',
      version: 'Pro',
      since: '4.0.8',
      updated: '6.0.5'
    }, {
      folder: 'nested-events-drag-from-grid',
      title: 'Drag events from a grid to nest them in a parent event',
      version: 'Pro',
      since: '5.1',
      updated: '6.2.0'
    }]
  },
  Misc: {
    items: [{
      folder: 'bigdataset',
      title: 'Big data set (pro-version)',
      version: 'Pro',
      updated: '4.3.1'
    }, {
      folder: 'inline-data',
      title: 'Using inline data',
      version: 'Pro',
      since: '5.0.3',
      updated: '5.6.7'
    }, {
      folder: 'nested-events-deep',
      title: 'Deeper nesting of events',
      version: 'Pro',
      since: '5.4.0'
    }]
  },
  Integration: {
    items: [{
      folder: 'extjsmodern',
      title: 'ExtJS Modern App integration',
      overlay: 'extjs',
      version: 'ExtJS 7.2.0',
      since: '4.0'
    }, {
      folder: 'salesforce',
      title: 'Integrate with Salesforce Lightning',
      globalUrl: 'https://bryntum-dev-ed.develop.my.site.com/demo/schedulerpro',
      since: '4.0',
      updated: '6.3.3',
      overlay: 'salesforce'
    }, {
      folder: 'webcomponents',
      title: 'Use as web component'
    }, {
      folder: 'frameworks/webpack/basic',
      title: 'Custom build using WebPack',
      overlay: 'webpack',
      version: 'WebPack 5',
      since: '2.3',
      updated: '6.1.4',
      offline: true
    }, {
      folder: 'frameworks/webpack/basic-thin',
      title: 'Custom thin build using WebPack',
      overlay: 'webpack',
      version: 'WebPack 5',
      since: '6.1.4'
    }]
  },
  'Angular examples': {
    overlay: 'angular',
    tab: 'angular',
    build: true,
    items: [{
      folder: 'frameworks/angular/angular-11',
      title: 'Inline data for Angular View Engine',
      version: 'Angular 13 + TypeScript 4',
      since: '5.3.3',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/conflicts',
      title: 'Scheduling conflict resolution popup',
      version: 'Angular 13 + TypeScript 4',
      since: '5.1',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/basic-thin',
      title: 'Basic thin setup',
      version: 'Angular 17 + TypeScript 5',
      since: '6.1.4'
    }, {
      folder: 'frameworks/angular/drag-unplanned-tasks',
      title: 'Drag unplanned tasks',
      version: 'Angular 16 + TypeScript 5',
      since: '5.5.0',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/highlight-event-calendars',
      title: 'Highlight task calendars',
      version: 'Angular 17 + TypeScript 5',
      since: '5.6.9',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/highlight-resource-calendars',
      title: 'Highlight resource calendars',
      version: 'Angular 17 + TypeScript 5',
      since: '5.6.9',
      updated: '6.0.5'
    }, {
      folder: 'frameworks/angular/inline-data',
      title: 'Inline data',
      version: 'Angular 17 + TypeScript 5',
      since: '5.6.9',
      updated: '6.2.1'
    }, {
      folder: 'frameworks/angular/maps',
      title: 'Map integration',
      version: 'Angular 18 + TypeScript 5',
      since: '6.1.8',
      updated: '6.2.2'
    }, {
      folder: 'frameworks/angular/nested-events-configuration',
      title: 'Nested events configuration options',
      version: 'Angular 15 + TypeScript 4',
      since: '5.3.0',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/non-working-time',
      title: 'Non-working time',
      version: 'Angular 13 + TypeScript 4',
      since: '5.1',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/resource-histogram',
      title: 'Resource histogram',
      version: 'Angular 13 + TypeScript 4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/resource-utilization',
      title: 'Resource utilization',
      version: 'Angular 16 + TypeScript 4',
      since: '5.6.3',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/taskeditor',
      title: 'Task editor customization',
      version: 'Angular 15 + TypeScript 4',
      since: '5.3.4',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/timezone',
      title: 'Time zone support',
      version: 'Angular 13 + TypeScript 4',
      since: '5.3.0',
      updated: '6.0.0'
    }, {
      folder: 'frameworks/angular/travel-time',
      title: 'Travel time',
      version: 'Angular 17 + TypeScript 5',
      since: '5.6.9',
      updated: '6.0.0'
    }]
  },
  'React + Vite examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react-vite/basic-thin',
      title: 'Basic thin setup',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '6.1.4'
    }, {
      folder: 'frameworks/react-vite/drag-batches',
      title: 'Scheduling orders',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '4.2.3',
      updated: '6.2.1'
    }, {
      folder: 'frameworks/react-vite/drag-unplanned-tasks',
      title: 'Drag unplanned tasks',
      version: 'React 18 + Vite 4 + TypeScript 5',
      since: '5.5.0',
      updated: '5.6.0'
    }, {
      folder: 'frameworks/react-vite/effort',
      title: 'Pro Event effort',
      version: 'React 19 + Vite 7 + TypeScript 5',
      since: '5.6.1',
      updated: '6.3.2'
    }, {
      folder: 'frameworks/react-vite/highlight-event-calendars',
      title: 'Highlight event calendars',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '5.6.9',
      updated: '6.0.5'
    }, {
      folder: 'frameworks/react-vite/highlight-resource-calendars',
      title: 'Highlight resource calendars',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '5.6.9',
      updated: '6.0.5'
    }, {
      folder: 'frameworks/react-vite/highlight-time-spans',
      title: 'Highlighting time spans',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '5.3.2',
      updated: '6.1.6'
    }, {
      folder: 'frameworks/react-vite/infinite-scroll-crudmanager',
      title: 'Infinite scroll and CrudManager',
      version: 'React 18 + Vite 4 + TypeScript 4',
      since: '6.0.0'
    }, {
      folder: 'frameworks/react-vite/inline-data',
      title: 'Inline data',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '6.0.0',
      updated: '6.2.1'
    }, {
      folder: 'frameworks/react-vite/maps',
      title: 'Map integration',
      version: 'React 19 + Vite 5 + TypeScript 5',
      since: '6.2.2'
    }, {
      folder: 'frameworks/react-vite/nested-events-lazy-load',
      title: 'Lazy loaded nested events',
      version: 'React 19 + Vite 5 + TypeScript 5',
      since: '6.1.6',
      updated: '6.2.3'
    }, {
      folder: 'frameworks/react-vite/non-working-time',
      title: 'Non-working time',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '6.2.5'
    }, {
      folder: 'frameworks/react-vite/split-events',
      title: 'Split events demo',
      version: 'React 19 + Vite 7 + TypeScript 5',
      since: '6.3.1'
    }, {
      folder: 'frameworks/react-vite/taskeditor',
      title: 'Task editor customization',
      version: 'React 18 + Vite 4 + TypeScript 4',
      since: '5.3.4'
    }, {
      folder: 'frameworks/react-vite/tree-lazy-load',
      title: 'Lazy loading of a tree project',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '6.2.1',
      updated: '6.3.2'
    }, {
      folder: 'frameworks/react-vite/travel-time',
      title: 'Travel time',
      version: 'React 18 + Vite 5 + TypeScript 5',
      since: '5.6.12'
    }]
  },
  'React examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react/javascript/resource-histogram',
      title: 'Resource histogram',
      version: 'React 16'
    }, {
      folder: 'frameworks/react/javascript/conflicts',
      title: 'Scheduling conflict resolution popup',
      version: 'React 18',
      since: '5.1'
    }, {
      folder: 'frameworks/react/javascript/timeline',
      title: 'Timeline',
      version: 'React 17',
      since: '4.1'
    }, {
      folder: 'frameworks/react/typescript/basic',
      title: 'Basic setup with TypeScript',
      version: 'React 17 + TypeScript 3',
      since: '5.0.3'
    }, {
      folder: 'frameworks/react/typescript/sharepoint-fabric',
      title: 'SharePoint Workbench with TypeScript',
      version: 'React 17 + TypeScript 4',
      offline: true,
      since: '5.6.0',
      updated: '6.0.2'
    }, {
      folder: 'frameworks/react/typescript/sharepoint-fabric-drag-from-grid',
      title: 'SharePoint Workbench Drag from Grid with TypeScript',
      version: 'React 17 + TypeScript 4',
      offline: true,
      since: '6.2.3'
    }]
  },
  'React + Remix examples': {
    overlay: 'react',
    tab: 'react',
    build: true,
    items: [{
      folder: 'frameworks/react-remix/basic',
      title: 'Basic setup',
      version: 'React 18 + Remix 2 + Vite 5 + TypeScript 5',
      offline: true,
      since: '6.0.0'
    }]
  },
  'Vue 3 + Vite examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue-3-vite/basic',
      title: 'Basic setup',
      version: 'Vue 3 + Vite 5 + TypeScript 5',
      since: '6.1.2'
    }, {
      folder: 'frameworks/vue-3-vite/basic-thin',
      title: 'Basic thin setup',
      version: 'Vue 3 + Vite 5 + TypeScript 5',
      since: '6.1.4'
    }, {
      folder: 'frameworks/vue-3-vite/drag-unplanned-tasks',
      title: 'Drag unplanned tasks',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.5.3',
      updated: '5.6.0'
    }, {
      folder: 'frameworks/vue-3-vite/highlight-event-calendars',
      title: 'Highlight event calendars',
      version: 'Vue 3 + Vite 5 + TypeScript 4',
      since: '5.6.9',
      updated: '6.0.5'
    }, {
      folder: 'frameworks/vue-3-vite/highlight-resource-calendars',
      title: 'Highlight resource calendars',
      version: 'Vue 3 + Vite 5 + TypeScript 4',
      since: '5.6.9',
      updated: '6.0.5'
    }, {
      folder: 'frameworks/vue-3-vite/inline-data',
      title: 'Inline data',
      version: 'Vue 3 + Vite 5 + TypeScript 4',
      since: '6.0.0'
    }, {
      folder: 'frameworks/vue-3-vite/maps',
      title: 'Map integration',
      version: 'Vue 3 + Vite 5 + TypeScript 5',
      since: '6.2.2'
    }, {
      folder: 'frameworks/vue-3-vite/non-working-time',
      title: 'Non-working time',
      version: 'Vue 3 + Vite 5 + TypeScript 4',
      since: '6.2.5'
    }, {
      folder: 'frameworks/vue-3-vite/taskeditor',
      title: 'Task editor customization',
      version: 'Vue 3 + Vite 4 + TypeScript 4',
      since: '5.3.4'
    }, {
      folder: 'frameworks/vue-3-vite/travel-time',
      title: 'Travel time',
      version: 'Vue 3 + Vite 5 + TypeScript 4',
      since: '5.6.12',
      updated: '6.1.2'
    }]
  },
  'Vue 3 examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue-3/javascript/conflicts',
      title: 'Scheduling conflict resolution popup',
      version: 'Vue 3',
      since: '5.1',
      updated: '5.3.0'
    }, {
      folder: 'frameworks/vue-3/javascript/resource-histogram',
      title: 'Resource histogram',
      version: 'Vue 3',
      since: '4.1',
      updated: '5.3.0'
    }]
  },
  'Vue 2 examples': {
    overlay: 'vue',
    tab: 'vue',
    build: true,
    items: [{
      folder: 'frameworks/vue/javascript/vue-renderer',
      title: 'Cell renderer',
      version: 'Vue 2',
      since: '4.1.0'
    }, {
      folder: 'frameworks/vue/javascript/resource-histogram',
      title: 'Resource histogram',
      version: 'Vue 2',
      updated: '5.3.0'
    }]
  }
};

// Update Scheduler examples
(_window$examples = window.examples) === null || _window$examples === undefined || _window$examples.forEach(e => {
  e.rootFolder = '../examples-scheduler/';
  e.group = e.group + ' (Basic Scheduler)';
});

// Flatten examples tree and merge
const skip = ['extjsmodern', 'localization'];
window.examples = Object.entries(proExamples).map(([group, parent]) => parent.items.map(item => Object.assign(item, parent, {
  group,
  items: undefined
}))).flat().concat(window.examples.filter(ex => !skip.includes(ex.folder)));