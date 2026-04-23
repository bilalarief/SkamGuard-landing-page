import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PainPoints from './components/PainPoints';
import MeetSkamGuard from './components/MeetSkamGuard';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQ';
import Blog from './components/Blog';
import CTABanner from './components/CTABanner';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <PainPoints />
        <MeetSkamGuard />
        <Features />
        <HowItWorks />
        <FAQ />
        <Blog />
        <CTABanner />
      </main>
      
    </div>
  );
};

export default App;
