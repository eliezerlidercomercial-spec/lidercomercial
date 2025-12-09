import React from 'react';
import { Star } from 'lucide-react';

const SocialProofSection: React.FC = () => {
  // Simulating the high authority testimonials mentioned in the prompt
  const testimonials = [
    {
      name: "Diretor Executivo",
      company: "Grupo Varejista (Faturamento > R$1B)",
      text: "Eu estava cético se conseguiria sair da operação sem derrubar as vendas. Em 10 dias, a equipe estava batendo recorde diário e eu estava planejando a expansão do próximo trimestre.",
      initial: "R"
    },
    {
      name: "Gerente Nacional",
      company: "Indústria de Maquinário",
      text: "O Protocolo LCE não é motivacional barato. É engenharia de processos pura. Recuperei minhas noites de sono e minha equipe parou de me ligar para resolver problemas triviais.",
      initial: "M"
    },
    {
      name: "CEO",
      company: "Rede de Franquias",
      text: "Implementamos em 15 unidades. O padrão de liderança mudou. Deixamos de ter 'chefes bombeiros' para ter estrategistas focados em ROI. O investimento se pagou na primeira semana.",
      initial: "A"
    }
  ];

  return (
    <section className="py-24 px-6 bg-navy-800 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Não acredite na promessa. <br/>
                <span className="text-gold-500">Acredite no ROI destes Líderes</span>
            </h2>
            <p className="text-gray-400 text-lg uppercase tracking-widest font-mono">
                Validado de Gigantes de R$ 10 Bilhões a Operações em Expansão
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
                <div key={idx} className="bg-navy-900 border border-white/10 p-8 relative shadow-xl hover:border-gold-500/30 transition-colors">
                    <div className="flex text-gold-500 mb-6">
                        {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-gold-500 mr-1" />)}
                    </div>
                    <p className="text-gray-300 italic mb-8 leading-relaxed">"{t.text}"</p>
                    
                    <div className="flex items-center mt-auto border-t border-white/5 pt-6">
                        <div className="w-10 h-10 rounded-full bg-gold-600 text-navy-900 font-bold flex items-center justify-center text-lg mr-4 font-serif">
                            {t.initial}
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm">{t.name}</p>
                            <p className="text-gray-500 text-xs uppercase">{t.company}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;