import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';

const PainPoints = React.lazy(() => import('./components/PainPoints'));
const MeetSkamGuard = React.lazy(() => import('./components/MeetSkamGuard'));
const Features = React.lazy(() => import('./components/Features'));
const HowItWorks = React.lazy(() => import('./components/HowItWorks'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const Blog = React.lazy(() => import('./components/Blog'));
const CTABanner = React.lazy(() => import('./components/CTABanner'));
const BlogDetail = React.lazy(() => import('./components/BlogDetail'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-10 h-10 border-4 border-sky-200 border-t-sky-500 rounded-full animate-spin"></div>
  </div>
);

const HomePage = () => {
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Suspense fallback={<LoadingSpinner />}>
          <PainPoints />
          <MeetSkamGuard />
          <Features />
          <HowItWorks />
          <FAQ />
          <Blog />
          <CTABanner />
        </Suspense>
      </main>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;