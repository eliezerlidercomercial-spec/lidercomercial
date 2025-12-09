import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const OfferSection: React.FC = () => {
  return (
    <section id="offer" className="py-20 px-6 bg-navy-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Offer Stack Card */}
        <div className="bg-navy-800 border border-gold-500/30 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600"></div>
            
            <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif text-center text-white mb-8">
                    Resumo do que você recebe no <br/>
                    <span className="text-gold-500 font-bold">Protocolo Líder Comercial Estratégico</span>
                </h3>

                <ul className="space-y-4 mb-12 max-w-2xl mx-auto">
                    {[
                        "Diagnóstico Completo da sua Liderança Atual",
                        "Implementação do Método LCE (15 Dias)",
                        "Ferramentas de Gestão de Tempo e Prioridade",
                        "Scripts de Delegação e Cobrança",
                        "Planilha de Indicadores Estratégicos",
                        "Bônus: Acesso à Comunidade de Líderes de Elite",
                        "Bônus: Masterclass de Recrutamento Comercial"
                    ].map((item, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 border-b border-white/5 pb-2">
                            <Check className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight">
                        Chegou a hora de implantar a <br/>
                        <span className="metallic-text">Liderança Estratégica</span>
                    </h2>
                    
                    <button className="w-full md:w-auto bg-alert-700 hover:bg-alert-600 text-white font-bold py-5 px-10 text-xl uppercase tracking-wider shadow-[0_0_30px_rgba(155,17,30,0.4)] transition-all hover:scale-105 group flex items-center justify-center mx-auto gap-3">
                        Clique AQUI e Cadastre-se
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <p className="text-gray-400 text-sm">
                        Você vai receber uma apresentação detalhada do método e a proposta em até 24h.
                    </p>

                    <div className="pt-8 border-t border-white/5">
                        <a href="https://wa.me/" className="text-gold-500 hover:text-gold-400 text-sm underline underline-offset-4 font-bold">
                            Se preferir, fale diretamente comigo no Whatsapp.
                        </a>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default OfferSection;