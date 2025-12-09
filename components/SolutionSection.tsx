import React from 'react';
import { ShieldCheck, Zap, Users, BookOpen, Layers } from 'lucide-react';

const SolutionSection: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="w-6 h-6 text-gold-500" />,
      text: "Sua equipe vai resolver 80% dos problemas sem depender de você."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-500" />,
      text: "Você vai perceber resultados de 6 meses em até 15 dias de aceleração extrema."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      text: "Processo usado por +2.000 líderes em grupos como Gazin, STIHL e SEBRAE."
    },
    {
      icon: <Layers className="w-6 h-6 text-gold-500" />,
      text: "Construído desde o chão de fábrica, até a diretoria, sem teorias ou achismos."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-500" />,
      text: "Mais de 98,7% de aprovação dos participantes até o momento."
    },
    {
      icon: <BookOpen className="w-6 h-6 text-gold-500" />,
      text: "Não é um curso, é um processo 100% prático, inclui as ferramentas, planilhas e templates prontos para aplicação imediata."
    },
    {
      icon: <Zap className="w-6 h-6 text-gold-500" />,
      text: "Nós fizemos a engenharia reversa da melhor estratégia para você liderar e escalar com consistência."
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-navy-900 to-navy-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-12">
            Veja porque implantar o <br/>
            <span className="text-gold-500">Protocolo Líder Comercial Estratégico (LCE)</span>
        </h2>

        <div className="space-y-4">
            {benefits.map((item, idx) => (
                <div key={idx} className="group flex items-start p-6 bg-navy-900 border-l-[3px] border-gold-600/30 hover:border-gold-500 hover:bg-navy-800 transition-all duration-300 shadow-md">
                    <div className="mr-6 p-3 bg-navy-800 border border-white/5 rounded-sm shrink-0">
                        {item.icon}
                    </div>
                    <div>
                        <span className="block text-gold-500 font-mono text-xs mb-1 tracking-widest opacity-60">FATOR 0{idx + 1}</span>
                        <p className="text-lg text-gray-200 font-medium leading-relaxed">
                            {item.text}
                        </p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;