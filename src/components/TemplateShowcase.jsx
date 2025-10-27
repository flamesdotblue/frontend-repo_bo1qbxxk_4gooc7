import React from 'react';
import { BarChart3, PieChart, TrendingUp } from 'lucide-react';

function TemplateCard({ icon: Icon, title, kpis, accent }) {
  return (
    <div className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className={`inline-flex w-fit items-center gap-2 rounded-xl px-3 py-1 text-sm ${accent.bg} ${accent.text}`}>
        <Icon className="h-4 w-4" />
        <span>{title}</span>
      </div>
      {/* Mini chart mock */}
      <div className="mt-4 grid grid-cols-8 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="col-span-1 flex items-end">
            <div
              className="w-full rounded-t bg-gradient-to-t from-indigo-200 to-indigo-500"
              style={{ height: `${20 + ((i * 7) % 60)}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg bg-gray-50 p-3">
            <div className="text-xs text-gray-500">{k.label}</div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-gray-900">{k.value}</span>
              <span className={`text-xs ${k.delta > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                {k.delta > 0 ? '+' : ''}{k.delta}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TemplateShowcase() {
  const templates = [
    {
      icon: TrendingUp,
      title: 'SaaS Metrics',
      accent: { bg: 'bg-emerald-50', text: 'text-emerald-700' },
      kpis: [
        { label: 'MRR', value: '$48,230', delta: 6.2 },
        { label: 'Churn', value: '2.1%', delta: -0.3 },
        { label: 'CAC', value: '$118', delta: -4.1 },
        { label: 'LTV', value: '$3,240', delta: 3.4 },
      ],
    },
    {
      icon: BarChart3,
      title: 'E‑commerce',
      accent: { bg: 'bg-indigo-50', text: 'text-indigo-700' },
      kpis: [
        { label: 'Sales', value: '$128,900', delta: 8.5 },
        { label: 'AOV', value: '$78', delta: 1.7 },
        { label: 'Conversion', value: '3.4%', delta: 0.6 },
        { label: 'Inventory', value: '92%', delta: -1.2 },
      ],
    },
    {
      icon: PieChart,
      title: 'Marketing',
      accent: { bg: 'bg-amber-50', text: 'text-amber-700' },
      kpis: [
        { label: 'Leads', value: '1,842', delta: 9.4 },
        { label: 'CPL', value: '$14.20', delta: -2.6 },
        { label: 'ROI', value: '214%', delta: 5.3 },
        { label: 'CTR', value: '3.1%', delta: 0.4 },
      ],
    },
  ];

  return (
    <section id="templates" className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-semibold text-gray-900 sm:text-4xl">Pre‑built templates</h2>
          <p className="mt-2 max-w-2xl text-gray-600">Start fast with curated dashboards for SaaS, e‑commerce, marketing, and customer success.</p>
        </div>
        <a href="#preview" className="hidden rounded-lg border border-gray-200 px-4 py-2 text-sm text-gray-700 transition hover:bg-gray-50 sm:inline-flex">
          Try it now
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <TemplateCard key={t.title} icon={t.icon} title={t.title} kpis={t.kpis} accent={t.accent} />
        ))}
      </div>
    </section>
  );
}
