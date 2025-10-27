import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, BarChart3 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center md:py-28">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/5 px-4 py-1.5 text-sm text-gray-700 backdrop-blur">
          <Rocket className="h-4 w-4 text-indigo-600" />
          Create professional dashboards in minutes
        </div>
        <h1 className="font-display text-4xl font-semibold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
          Visual Dashboard Builder
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
          Connect your data, drag-and-drop charts, and share beautiful dashboards without writing code.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#templates"
            className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-sm transition hover:bg-indigo-700"
          >
            <BarChart3 className="mr-2 h-5 w-5" />
            Explore Templates
          </a>
          <a
            href="#preview"
            className="inline-flex items-center justify-center rounded-lg border border-indigo-200 bg-white px-5 py-3 text-indigo-700 shadow-sm transition hover:border-indigo-300"
          >
            Try the Editor
          </a>
        </div>
      </div>
    </section>
  );
}
