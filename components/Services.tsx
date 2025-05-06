// components/Services.tsx
import React from "react";
// --- CORREÇÃO AQUI ---
// Importe os ícones específicos que você está usando da biblioteca react-icons/ri
import {
  RiPaletteLine,
  RiCodeBoxLine,
  RiLightbulbFlashLine,
} from "react-icons/ri";
// --- FIM DA CORREÇÃO ---

const Services = () => {
  const servicesList = [
    {
      title: "Identidade Visual",
      description:
        "Naming, logo, cores, tipografia e tudo o que dá cara à sua marca.",
      // O ícone agora é o componente importado
      icon: RiPaletteLine,
    },
    {
      title: "Web Design + Dev",
      description: "Sites responsivos, estratégicos e com visual que comunica.",
      // O ícone agora é o componente importado
      icon: RiCodeBoxLine,
    },
    {
      title: "Consultoria Criativa", // Mantenho opcional no texto da descrição
      description: "Sessões pra pensar visual, direção ou presença online.",
      // O ícone agora é o componente importado
      icon: RiLightbulbFlashLine,
    },
  ];

  return (
    <section
      id="services" // Mantém o ID para navegação
      className="w-full py-20 px-8 bg-gray-100 text-gray-800" // Ajusta padding e background
    >
      <div className="container mx-auto max-w-6xl text-center">
        {" "}
        {/* Container centralizado e largura máxima */}
        <h2 className="text-4xl md:text-5xl font-medium mb-12">
          {" "}
          {/* Use font-headline como definido */} Serviços
        </h2>
        {/* Grid para exibir os blocos de serviço com estilo aprimorado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {" "}
          {/* Mantém o grid, ajusta gap */}
          {servicesList.map((service, index) => (
            <div
              key={index}
              // Adicionado hover styles de volta
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
            >
              {/* Espaço para Ícone */}
              <div className="mb-6">
                {/* Renderiza o componente do ícone se existir */}
                {service.icon && (
                  <service.icon className="text-5xl text-fuchsia-200" />
                )}
                {/* Removido o placeholder simples agora que estamos usando ícones reais */}
              </div>
              {/* Use font-headline para os títulos dos serviços */}
              <h3 className="text-2xl font-headline font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              {/* Use font-body para as descrições */}
              <p className="text-lg font-body text-gray-700">
                {service.description}
              </p>
              {/* Opcional: Botão "Saiba Mais" por serviço */}
            </div>
          ))}
        </div>
        {/* Opcional: CTA geral "Pronto para começar?" */}
        <div className="mt-12">
          <a
            href="https://wa.me/64210735143?text=Oi%20Paola%2C%20vi%20seu%20trabalho%20e%20gostaria%20de%20conversar%20:)"
            target="_blank"
            rel="noopener noreferrer" // Boa prática para target="_blank"
            className="inline-block bg-fuchsia-300 border-2 border-fuchsia-400 text-fuchsia-950 py-3 px-6 rounded-full font-semibold hover:bg-fuchsia-300 transition duration-300"
          >
            Pronto para começar?
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
