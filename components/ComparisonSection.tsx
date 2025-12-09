import React from 'react';

const ComparisonSection: React.FC = () => {
  const comparisonData = [
    {
      label: "Tempo Operacional",
      without: "60% a 70% do tempo no operacional",
      with: "60% a 70% do tempo no estratégico"
    },
    {
      label: "Metas",
      without: "Metas furadas em todo fechamento",
      with: "Metas previsíveis e batidas antes do prazo"
    },
    {
      label: "Papel do Líder",
      without: "Apenas 'apagador de incêndios'",
      with: "Acionado apenas para decisões importantes"
    },
    {
      label: "Autonomia",
      without: "Todas as demandas dependem de você",
      with: "Equipe autônoma que sabe o que fazer"
    },
    {
      label: "Carga Horária",
      without: "Até 15h por dia e ainda falta tempo",
      with: "Controle total da agenda e tempo"
    },
    {
      label: "Vida Pessoal",
      without: "Vive falhando com a família",
      with: "Tempo de qualidade de forma leve"
    },
    {
      label: "Talentos",
      without: "Perde talentos por não resolver o caos",
      with: "Retém talentos e forma novos"
    }
  ];

  return (
    <section className="py-24 px-6 bg-navy-900 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-4">
                A Diferença é <span className="text-alert-600">BRUTAL</span>
            </h2>
            <p className="text-center text-gray-400 mb-16 font-serif italic">
                Veja o comparativo da sua vida com e sem o protocolo.
            </p>

            <div className="overflow-hidden border border-white/10 rounded-lg shadow-2xl">
                {/* Headers */}
                <div className="grid grid-cols-2 md:grid-cols-[1fr_1fr] bg-navy-800">
                    <div className="p-6 text-center border-r border-white/5 bg-alert-600/10">
                        <span className="block text-alert-500 font-bold uppercase tracking-wider text-sm md:text-base">Sem o Protocolo</span>
                    </div>
                    <div className="p-6 text-center bg-gold-600/10">
                        <span className="block text-gold-500 font-bold uppercase tracking-wider text-sm md:text-base">Com o Protocolo LCE</span>
                    </div>
                </div>

                {/* Rows */}
                {comparisonData.map((row, idx) => (
                    <div key={idx} className={`grid grid-cols-2 border-t border-white/5 ${idx % 2 === 0 ? 'bg-navy-900' : 'bg-navy-800/50'}`}>
                        {/* Without */}
                        <div className="p-4 md:p-6 border-r border-white/5 flex items-center justify-center md:justify-start">
                            <p className="text-gray-500 font-medium text-sm md:text-lg text-center md:text-left">
                                <span className="md:hidden text-xs text-alert-700 block mb-1 uppercase tracking-widest">Sem:</span>
                                {row.without}
                            </p>
                        </div>
                        {/* With */}
                        <div className="p-4 md:p-6 flex items-center justify-center md:justify-start relative overflow-hidden">
                             {/* Subtle gold glow behind "With" column items */}
                             <div className="absolute inset-0 bg-gold-500/5 opacity-0 hover:opacity-100 transition-opacity"></div>
                             <p className="text-gray-200 font-bold text-sm md:text-lg text-center md:text-left relative z-10">
                                <span className="md:hidden text-xs text-gold-700 block mb-1 uppercase tracking-widest">Com:</span>
                                {row.with}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-xl text-white font-serif italic">
                    Essa evolução da rotina pode fazer parte da sua vida a partir da próxima <span className="text-gold-500 underline decoration-gold-500/50">segunda-feira</span>!
                </p>
            </div>
        </div>
    </section>
  );
};

export default ComparisonSection;