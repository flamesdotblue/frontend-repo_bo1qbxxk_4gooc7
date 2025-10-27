import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import TemplateShowcase from './components/TemplateShowcase';
import PreviewEditor from './components/PreviewEditor';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <FeatureGrid />
      <TemplateShowcase />
      <PreviewEditor />
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Visual Dashboard Builder</p>
          <nav className="flex items-center gap-4 text-sm text-gray-600">
            <a href="#templates" className="hover:text-gray-900">Templates</a>
            <a href="#preview" className="hover:text-gray-900">Editor</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
