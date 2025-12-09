import React from 'react';
import { Check, Play } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 px-6 border-b border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-navy-900">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-radial from-navy-800 via-navy-900 to-navy-900 opacity-80"></div>
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center space-x-2 border border-gold-500/30 bg-navy-800/50 px-3 py-1 text-gold-500 text-xs tracking-[0.2em] uppercase font-bold">
            <span className="w-2 h-2 bg-alert-600 rounded-full animate-pulse"></span>
            <span>Briefing de Missão</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-white">
            Líder Comercial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 text-3xl md:text-4xl lg:text-5xl block mt-2 opacity-80">
              Saia do “Modo Bombeiro”
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gold-400 font-serif italic border-l-2 border-alert-600 pl-4">
             Pare de apenas apagar incêndios e torne-se um Líder Estratégico de elite.
          </p>

          <div className="space-y-4 font-sans text-gray-300">
            {[
              "Recupere de 10 a 15 horas semanais e delegue com eficácia.",
              "Foque nas atividades que trazem faturamento e resultados reais.",
              "Construa equipes autônomas e elimine microgerenciamento.",
              "Tenha uma liderança mais tranquila, sem perder performance.",
              "Sem teoria motivacional, aplicação prática com resultados em até 15 dias."
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="w-5 h-5 text-gold-500 shrink-0 mt-1" />
                <span className="text-base md:text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <button className="group relative px-8 py-4 bg-gold-600 hover:bg-gold-500 text-navy-900 font-bold text-lg uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(203,157,42,0.3)] hover:shadow-[0_0_30px_rgba(203,157,42,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Iniciar Protocolo
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            <div className="absolute inset-0 border border-white/20"></div>
          </button>
        </div>

        {/* Video Placeholder */}
        <div className="lg:col-span-5">
          <div className="relative group">
            {/* Decorative Borders */}
            <div className="absolute -inset-1 bg-gradient-to-b from-gold-500/20 to-transparent opacity-50 blur-sm"></div>
            <div className="relative aspect-video bg-navy-800 border border-gold-500/30 flex items-center justify-center overflow-hidden shadow-2xl">
                {/* Simulated Thumbnail */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale mix-blend-overlay"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent"></div>
                
                {/* Play Button */}
                <div className="relative z-10 w-20 h-20 rounded-full border border-gold-500/50 bg-navy-900/80 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer">
                    <Play className="w-8 h-8 text-gold-500 fill-gold-500 ml-1" />
                </div>

                {/* Status Indicators */}
                <div className="absolute top-4 left-4 flex space-x-1">
                    <div className="w-1 h-1 bg-alert-600"></div>
                    <div className="w-1 h-1 bg-alert-600"></div>
                    <div className="w-1 h-1 bg-alert-600"></div>
                </div>
                <div className="absolute bottom-4 right-4 text-xs font-mono text-gold-500 tracking-widest">
                    REC // 00:04:21
                </div>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest font-mono">
            Assista ao Briefing Operacional
          </p>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;