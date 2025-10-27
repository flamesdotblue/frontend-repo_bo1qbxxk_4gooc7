import React from 'react';
import { Database, Plug, Layout, Clock, Share2, Lock } from 'lucide-react';

const features = [
  {
    icon: Plug,
    title: 'Connect Anything',
    desc: 'Google Analytics, Stripe, Salesforce, databases, CSVs, and REST APIs with OAuth built-in.',
  },
  {
    icon: Layout,
    title: 'Drag-and-Drop',
    desc: 'Place, resize, and configure widgets on a responsive grid with undo/redo support.',
  },
  {
    icon: Database,
    title: 'Real-Time Metrics',
    desc: 'Live updates with configurable refresh intervals and historical comparisons.',
  },
  {
    icon: Share2,
    title: 'Share & Embed',
    desc: 'Public links, embed codes, PDF exports, and scheduled email reports.',
  },
  {
    icon: Clock,
    title: 'Fast Setup',
    desc: 'Get from zero to insightful dashboards in under 5 minutes with beautiful defaults.',
  },
  {
    icon: Lock,
    title: 'Secure by Design',
    desc: 'Role-based access, secure auth, and privacy-first data handling.',
  },
];

export default function FeatureGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center font-display text-3xl font-semibold text-gray-900 sm:text-4xl">
        Everything you need to build powerful dashboards
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
        Pre-built connectors, a simple editor, and real-time visualization—no engineering required.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="mb-4 inline-flex rounded-xl bg-indigo-50 p-3 text-indigo-600">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
