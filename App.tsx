import React from 'react';
import { Shield, ChevronDown, CheckCircle2, AlertTriangle, Play, BarChart3, Users, Lock, Award, Briefcase, Zap } from 'lucide-react';

// Components
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import MethodologySection from './components/MethodologySection';
import AudienceSection from './components/AudienceSection';
import ComparisonSection from './components/ComparisonSection';
import SocialProofSection from './components/SocialProofSection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-900 text-gray-200 font-sans selection:bg-gold-500 selection:text-navy-900 overflow-x-hidden">
      {/* Alert Bar */}
      <div className="bg-alert-600 text-white text-center py-2 px-4 text-sm font-bold tracking-wider uppercase font-sans border-b border-alert-700">
        Uma forma simples para o líder sair da sobrecarga e ter mais clareza.
      </div>

      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      
      {/* Quote Break */}
      <div className="py-24 bg-navy-900 relative border-y border-gold-500/20">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <Award className="w-12 h-12 text-gold-500 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl md:text-4xl font-serif italic leading-relaxed text-gray-100">
              "Empresas não promovem <span className="text-alert-600 font-bold">Líderes Bombeiros</span>, nem líderes que trabalham demais, elas promovem apenas o líder que gera <span className="metallic-text font-bold not-italic">RESULTADO REAL</span>."
            </h2>
         </div>
      </div>

      <MethodologySection />
      <AudienceSection />
      <ComparisonSection />
      <SocialProofSection />
      <OfferSection />
      <Footer />
    </div>
  );
};

export default App;