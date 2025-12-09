import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 py-16 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Bio Text */}
        <div className="md:col-span-8 space-y-6">
            <h4 className="text-gold-500 font-serif text-2xl font-bold">Sobre o Expert</h4>
            <blockquote className="text-3xl md:text-4xl font-serif italic text-white leading-snug">
                "Eu construo líderes que vencem sem depender de heróis."
            </blockquote>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
                Com mais de 28 anos de campo de batalha, sou <strong className="text-gray-200">Edvaldo Eliezer</strong>. 
                Meu propósito é tirar líderes de alta performance da Armadilha do Herói Operacional e construir máquinas de vendas autônomas.
            </p>
            
            <div className="flex gap-12 pt-4">
                <div>
                    <span className="block text-3xl font-bold text-white">+2.000</span>
                    <span className="text-sm text-gold-500 uppercase tracking-wider">Líderes Treinados</span>
                </div>
                <div>
                    <span className="block text-3xl font-bold text-white">+150</span>
                    <span className="text-sm text-gold-500 uppercase tracking-wider">Empresas Atendidas</span>
                </div>
            </div>
        </div>

        {/* Placeholder for Expert Image - Styled as a badge or profile */}
        <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="w-64 h-64 bg-navy-800 border-2 border-gold-500/50 relative p-2 shadow-2xl rotate-3">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-500"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-500"></div>
                
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center overflow-hidden grayscale contrast-125">
                     {/* Replace with actual Expert Image */}
                     <span className="text-gray-500 font-serif italic text-center px-4">Foto do Expert<br/>Edvaldo Eliezer</span>
                </div>
            </div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>&copy; {new Date().getFullYear()} Protocolo LCE. Todos os direitos reservados. Vamos arquitetar esse sucesso juntos.</p>
      </div>
    </footer>
  );
};

export default Footer;