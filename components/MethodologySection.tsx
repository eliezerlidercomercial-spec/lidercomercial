import React from 'react';
import { Microscope, Sliders, Rocket } from 'lucide-react';

const MethodologySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-900 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(203,157,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(203,157,42,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    Como funciona e como implantar
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Toda a implantação é simples e feita em apenas <span className="text-gold-500 font-bold">3 passos</span>, durante 15 dias:
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Step 1 */}
                <div className="relative p-8 bg-navy-800 border border-white/10 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold font-serif text-white">01</div>
                    <div className="w-14 h-14 bg-alert-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(155,17,30,0.5)]">
                        <Microscope className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">Diagnóstico e Implementação</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Vamos avaliar o processo atual e implementar o novo processo de liderança comercial.
                    </p>
                    <p className="text-sm text-gold-500 italic border-t border-white/5 pt-4">
                        Não é um curso, é uma estratégia que instalamos na sua rotina e fazemos isso juntos.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="relative p-8 bg-navy-800 border border-white/10 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold font-serif text-white">02</div>
                    <div className="w-14 h-14 bg-gold-600 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(203,157,42,0.5)]">
                        <Sliders className="w-7 h-7 text-navy-900" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">Alinhamento e Ajustes</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Ajustes práticos e rápidos para que suas ordens se tornem claras e a execução precisa.
                    </p>
                    <p className="text-sm text-gold-500 italic border-t border-white/5 pt-4">
                        Acompanhamos métricas claras para que você saiba exatamente qual ajuste deve fazer.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="relative p-8 bg-navy-800 border border-white/10 group hover:-translate-y-2 transition-transform duration-500">
                    <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl font-bold font-serif text-white">03</div>
                    <div className="w-14 h-14 bg-gray-200 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                        <Rocket className="w-7 h-7 text-navy-900" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">Escala em 15 dias</h3>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Após liberar 10h a 15h da agenda por semana, chegou a hora de escalar o resultado.
                    </p>
                    <p className="text-sm text-gold-500 italic border-t border-white/5 pt-4">
                        Os resultados são perceptíveis desde o primeiro dia.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center">
                <button onClick={() => document.getElementById('offer')?.scrollIntoView({behavior: 'smooth'})} className="inline-flex items-center text-gold-500 border-b border-gold-500 hover:text-white hover:border-white transition-colors uppercase tracking-widest text-sm font-bold pb-1 cursor-pointer">
                    Começar Implementação Agora
                    <Rocket className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    </section>
  );
};

export default MethodologySection;