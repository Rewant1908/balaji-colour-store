import React, { useState, useEffect, lazy, Suspense } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { LoaderScreen } from './components/LoaderScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

// Lazy-load below-fold sections for faster initial paint
const Team            = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const BrandsMarquee   = lazy(() => import('./components/BrandsMarquee').then(m => ({ default: m.BrandsMarquee })));
const ServicesBento   = lazy(() => import('./components/ServicesBento').then(m => ({ default: m.ServicesBento })));
const ColorExplorer   = lazy(() => import('./components/ColorExplorer').then(m => ({ default: m.ColorExplorer })));
const Gallery         = lazy(() => import('./components/Gallery').then(m => ({ default: m.Gallery })));
const Stats           = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const Consultation    = lazy(() => import('./components/Consultation').then(m => ({ default: m.Consultation })));
const Footer          = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const PaintDivider    = lazy(() => import('./components/PaintDivider').then(m => ({ default: m.PaintDivider })));

const SectionFallback = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <span className="w-8 h-8 rounded-full border-4 border-[#FF6B2B] border-t-transparent animate-spin" />
  </div>
);

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <LoaderScreen onComplete={() => setLoading(false)} />}
      {!loading && (
        <main>
          <Navbar />
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <BrandsMarquee />
            <PaintDivider fill="#FF6B2B" />
            <ServicesBento />
            <PaintDivider fill="#00C2CB" flip />
            <ColorExplorer />
            <Gallery />
            <PaintDivider fill="#F5A623" />
            <Stats />
            <Team />
            <Consultation />
            <Footer />
          </Suspense>
        </main>
      )}
    </>
  );
};

export default App;
