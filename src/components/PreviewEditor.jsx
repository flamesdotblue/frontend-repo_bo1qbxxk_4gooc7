import React from 'react';
import { Grip, Settings, Trash2, Plus } from 'lucide-react';

function colorClasses(color) {
  switch (color) {
    case 'emerald':
      return 'from-emerald-100 to-emerald-200';
    case 'amber':
      return 'from-amber-100 to-amber-200';
    case 'rose':
      return 'from-rose-100 to-rose-200';
    default:
      return 'from-indigo-100 to-indigo-200';
  }
}

function Widget({ title, subtitle, color = 'indigo' }) {
  return (
    <div className={`group relative rounded-xl border border-gray-200 bg-white p-4 shadow-sm`}>
      <div className="mb-3 flex items-center justify-between">
        <div className="inline-flex items-center gap-2">
          <Grip className="h-4 w-4 text-gray-400" />
          <span className="font-medium text-gray-900">{title}</span>
          <span className="text-xs text-gray-500">{subtitle}</span>
        </div>
        <div className="invisible inline-flex items-center gap-2 group-hover:visible">
          <button className="rounded-md p-1 text-gray-500 hover:bg-gray-100"><Settings className="h-4 w-4" /></button>
          <button className="rounded-md p-1 text-rose-500 hover:bg-rose-50"><Trash2 className="h-4 w-4" /></button>
        </div>
      </div>
      {/* Simple sparkline mock */}
      <div className={`h-24 w-full rounded-lg bg-gradient-to-r ${colorClasses(color)}`}></div>
    </div>
  );
}

export default function PreviewEditor() {
  return (
    <section id="preview" className="mx-auto max-w-6xl px-6 pb-20">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl">Try the visual editor</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Drag, resize, and arrange widgets on a responsive grid. Configure data in a click.</p>
        </div>
        <button className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white shadow-sm transition hover:bg-indigo-700">
          <Plus className="h-4 w-4" /> Add widget
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="md:col-span-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Widget title="Revenue" subtitle="Last 30 days" color="indigo" />
            <Widget title="Active Users" subtitle="7 day" color="emerald" />
            <Widget title="Conversion" subtitle="Funnel" color="amber" />
            <Widget title="Support Tickets" subtitle="Daily" color="rose" />
          </div>
        </div>
        <aside className="md:col-span-4">
          <div className="sticky top-24 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <h3 className="font-medium text-gray-900">Widget settings</h3>
            <div className="mt-4 space-y-4">
              <div>
                <label className="text-xs text-gray-500">Data source</label>
                <select className="mt-1 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option>Google Analytics</option>
                  <option>Stripe</option>
                  <option>PostgreSQL</option>
                  <option>CSV Upload</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500">Chart type</label>
                <select className="mt-1 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option>Line</option>
                  <option>Bar</option>
                  <option>Pie</option>
                  <option>KPI</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500">Date range</label>
                <select className="mt-1 w-full rounded-md border-gray-300 text-sm focus:border-indigo-500 focus:ring-indigo-500">
                  <option>Last 7 days</option>
                  <option>Last 30 days</option>
                  <option>Last 12 months</option>
                  <option>Custom…</option>
                </select>
              </div>
              <button className="w-full rounded-lg bg-gray-900 px-4 py-2 text-sm text-white transition hover:bg-black">Apply</button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
