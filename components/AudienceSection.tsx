import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-navy-800">
        <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center text-white mb-16">
                Para quem é este Protocolo de Liderança?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* For Whom */}
                <div className="bg-navy-900 border-t-4 border-gold-500 p-8 shadow-2xl relative">
                    <h3 className="text-2xl font-serif font-bold text-gold-500 mb-8 flex items-center">
                        <span className="bg-gold-500 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">✓</span>
                        Para quem é:
                    </h3>
                    <ul className="space-y-6">
                        {[
                           "Diretor, Gerente ou Dono que comanda líderes ou múltiplas unidades.",
                           "Já tem competência, mas sente que sua carreira estagnou no operacional.",
                           "Tem urgência em preparar a operação para bater metas sem o caos atual.",
                           "É um executivo cansado de ser “Diretor Acorrentado” com times imaturos.",
                           "Quer construir equipes com senso de dono e previsibilidade.",
                           "Profissionais ambiciosos, focados em escala e legado"
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <CheckCircle2 className="w-5 h-5 text-gold-500 mr-3 shrink-0 mt-1" />
                                <span className="text-gray-300 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Not For Whom */}
                <div className="bg-navy-900/50 border-t-4 border-gray-600 p-8 grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                    <h3 className="text-2xl font-serif font-bold text-gray-400 mb-8 flex items-center">
                        <span className="bg-gray-600 text-navy-900 rounded-full w-8 h-8 flex items-center justify-center mr-3 text-sm">✕</span>
                        Não é para quem:
                    </h3>
                    <ul className="space-y-6">
                        {[
                           "Ainda não tem time sob responsabilidade.",
                           "Acredita que centralizar é a única forma de garantir qualidade.",
                           "Busca apenas algo 'motivacional', sem aplicação prática."
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start">
                                <XCircle className="w-5 h-5 text-gray-500 mr-3 shrink-0 mt-1" />
                                <span className="text-gray-500 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AudienceSection;