import React from 'react';
import { AlertTriangle, XCircle, Anchor } from 'lucide-react';

const ProblemSection: React.FC = () => {
  const problems = [
    "Você foi contratado para liderar, mas está preso em tarefas operacionais, sente que chegou num teto e não consegue crescer?",
    "Parece que sua equipe trava sem você e o trabalho não acontece, parece que viraram entregadores de recados para você resolver?",
    "Você vê seus pares menos competentes sendo promovidos, enquanto você é visto apenas como 'o cara legal que resolve problemas'?",
    "Você já cancelou férias, respondeu e-mails na madrugada ou atendeu ligações no jantar de família porque 'a operação ia parar'?"
  ];

  const culprits = [
    "Falta de um método claro, assim, toda demanda parece urgente e toma seu tempo.",
    "Tem um processo “lindo”, porém, não consegue aplicar na prática.",
    "A equipe passou a ver o líder como “central de dúvidas” e ele ainda não percebeu.",
    "Achar que indicadores são ferramentas mágicas e resolvem o problema sozinhos.",
    "O líder acostumou com o famoso “deixa que eu faço, é mais rápido.”",
    "Quer agradar a todos e não sabe dizer não, lota a agenda de urgências dos outros.",
    "Falta uma rotina de liderança e de treinamento consistente da equipe.",
    "Investe em treinamentos genéricos que motivam por uns dias, mas não resolvem o problema."
  ];

  return (
    <section className="bg-navy-900 py-20 px-6 relative">
      <div className="max-w-5xl mx-auto">
        
        {/* Hero Trap Header */}
        <div className="mb-16 text-center">
            <div className="inline-block mb-4 p-3 bg-alert-600/10 border border-alert-600/30 rounded-full">
                <AlertTriangle className="w-8 h-8 text-alert-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                Você já se viu preso nas armadilhas do líder <span className="text-alert-600">"Herói Operacional"</span>?
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto opacity-50"></div>
        </div>

        {/* The Questions - Dark Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {problems.map((prob, idx) => (
                <div key={idx} className="bg-navy-800 border-l-4 border-alert-700 p-6 shadow-lg">
                    <p className="text-gray-300 text-lg leading-relaxed font-medium">"{prob}"</p>
                </div>
            ))}
        </div>

        {/* Transition Text */}
        <div className="text-center max-w-3xl mx-auto mb-20">
            <p className="text-xl md:text-2xl font-serif text-white italic">
                Isso não é culpa do destino, nem culpa sua, é apenas uma questão de <span className="text-gold-500 border-b border-gold-500">ajuste na sua estratégia de liderança</span>, e nós vamos corrigir isso hoje!
            </p>
        </div>

        {/* The Culprits Section */}
        <div className="relative bg-navy-800 border border-white/5 p-8 md:p-12">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-gold-500/30"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-gold-500/30"></div>

            <h3 className="text-2xl md:text-4xl font-serif font-bold text-white mb-10 text-center">
                Aqui estão os <span className="text-alert-600">verdadeiros culpados</span> que te mantêm preso na “liderança bombeiro”:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                {culprits.map((culprit, idx) => (
                    <div key={idx} className="flex items-start gap-4 group">
                        <XCircle className="w-6 h-6 text-alert-600 shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <p className="text-gray-300 group-hover:text-gray-100 transition-colors">{culprit}</p>
                    </div>
                ))}
            </div>

            <div className="mt-12 p-6 bg-navy-900 border border-gold-500/20 text-center">
                <p className="text-gold-400 font-medium">
                    Aqui estão apenas alguns dos inimigos que impedem o crescimento do líder. <br className="hidden md:block"/>
                    <span className="text-white font-bold">Quando você resolve essa base, tudo se resolve.</span>
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;