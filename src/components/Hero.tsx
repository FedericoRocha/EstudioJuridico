import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { FaBalanceScale, FaGavel, FaHandshake } from 'react-icons/fa';

const Hero = () => {
  const controls = useAnimation();

  // Efecto para el scroll suave
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          const yOffset = -80;
          const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
          
          window.scrollTo({
            top: y,
            behavior: 'smooth'
          });
        }
      }
    };

    // Iniciar animación de entrada
    controls.start('visible');
    
    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, [controls]);

  // Animaciones
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      } 
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const stats = [
    { number: '20+', label: 'Años de experiencia', icon: <FaGavel className="w-5 h-5 text-navy" /> },
    { number: '1000+', label: 'Casos exitosos', icon: <FaBalanceScale className="w-5 h-5 text-navy" /> },
    { number: '99%', label: 'Clientes satisfechos', icon: <FaHandshake className="w-5 h-5 text-navy" /> },
  ];

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white text-gray-800 overflow-hidden">
      {/* Fondo con patrón sutil y gradiente */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJub25lIj48cGF0dGVybiBpZD0icGF0dGVybi1iYXNlIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgcGF0dGVyblRyYW5zZm9ybT0icm90YXRlKDQ1KSI+PHJlY3QgaWQ9InBhdHRlcm4tYmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmZmZmYiPjwvcmVjdD48cGF0aCBkPSJNNTAgMTBWNDBNNTAgNjBWNjBNMzUgMzVIMjBNNjUgMzVINzVNMTUgNTBIMk04NSA1MEg3MCIgc3Ryb2tlPSJyZ2JhKDIxOCwyMjAsMjI2LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLWJhc2UpIj48L3JlY3Q+PC9zdmc+')] opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/90 to-white"></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-navy/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-burgundy/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 py-24 md:py-32 lg:py-40">
        <motion.div
          className="container mx-auto px-4 text-center"
          initial="hidden"
          animate={controls}
          variants={container}
        >
          {/* Badge con animación */}
          <motion.div
            variants={item}
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm mb-8 hover:shadow transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <span className="h-2.5 w-2.5 bg-burgundy rounded-full mr-2.5"></span>
            <span className="text-sm font-medium text-gray-700 tracking-wide">Estudio jurídico especializado</span>
          </motion.div>

          {/* Título principal con gradiente */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 leading-tight max-w-5xl mx-auto text-gray-900"
          >
            Asesoría legal <span className="text-burgundy">profesional</span> y cercana
          </motion.h1>

          {/* Descripción */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Más de <span className="font-semibold text-gray-800">20 años de experiencia</span> brindando soluciones legales integrales con profesionalismo, ética y compromiso con nuestros clientes.
          </motion.p>

          {/* Botones de acción */}
          <motion.div 
            variants={item} 
            className="flex flex-col sm:flex-row justify-center gap-5 mb-20"
          >
            <a
              href="#contacto"
              className="group relative inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white font-medium py-4 px-10 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Solicitar consulta
                <svg className="w-4 h-4 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-navy to-burgundy opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
            <a
              href="#areas"
              className="group relative inline-flex items-center justify-center bg-white hover:bg-gray-50 text-navy font-medium py-4 px-10 rounded-sm border border-gray-200 transition-all duration-300 hover:shadow-sm hover:-translate-y-0.5 overflow-hidden"
            >
              <span className="relative z-10">Nuestros servicios</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </motion.div>

          {/* Indicadores de confianza */}
          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
            <div className="relative bg-white px-6 inline-flex -mt-px">
              <span className="text-sm text-gray-500 font-medium bg-white px-4">Confían en nosotros</span>
            </div>
          </motion.div>

          {/* Estadísticas */}
          <motion.div 
            variants={container}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto pt-12"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={item}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-navy/5 rounded-full mb-4 mx-auto">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Efecto de gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Hero;
