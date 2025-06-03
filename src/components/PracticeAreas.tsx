import { motion } from 'framer-motion';
import { FaBalanceScale, FaBriefcase, FaBuilding, FaUsers, FaCarCrash, FaHome } from 'react-icons/fa';

const practiceAreas = [
  {
    title: 'Derecho Civil',
    description: 'Asesoramiento integral en cuestiones civiles, contratos, daños y perjuicios, y responsabilidad civil.',
    icon: <FaBalanceScale className="w-6 h-6 text-burgundy" />,
    color: 'bg-burgundy/5',
    borderColor: 'border-burgundy/20'
  },
  {
    title: 'Derecho Laboral',
    description: 'Defensa de derechos laborales, despidos, accidentes de trabajo y asesoramiento a empresas.',
    icon: <FaBriefcase className="w-6 h-6 text-blue-600" />,
    color: 'bg-blue-50',
    borderColor: 'border-blue-200'
  },
  {
    title: 'Derecho Comercial',
    description: 'Asesoramiento a empresas, contratos comerciales, concursos y quiebras.',
    icon: <FaBuilding className="w-6 h-6 text-emerald-600" />,
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200'
  },
  {
    title: 'Familia y Sucesiones',
    description: 'Divorcios, alimentos, tenencia de hijos, sucesiones y planificación patrimonial.',
    icon: <FaUsers className="w-6 h-6 text-purple-600" />,
    color: 'bg-purple-50',
    borderColor: 'border-purple-200'
  },
  {
    title: 'Derecho Inmobiliario',
    description: 'Compraventa, alquileres, desalojos y conflictos de propiedad horizontal.',
    icon: <FaHome className="w-6 h-6 text-amber-600" />,
    color: 'bg-amber-50',
    borderColor: 'border-amber-200'
  },
  {
    title: 'Daños y Perjuicios',
    description: 'Reclamos por accidentes de tránsito, mala praxis médica y responsabilidad civil.',
    icon: <FaCarCrash className="w-6 h-6 text-red-600" />,
    color: 'bg-red-50',
    borderColor: 'border-red-200'
  }
];

const PracticeAreas = () => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="areas" className="relative py-20 md:py-28 overflow-hidden">
      {/* Fondo con patrón sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm63 31c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM34 90c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm56-76c1.657 0 3-1.343 3-3s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%239C92AC\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Áreas de <span className="text-burgundy">Especialización</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ofrecemos asesoramiento legal especializado en diversas áreas del derecho, brindando soluciones personalizadas y efectivas para cada caso.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {practiceAreas.map((area, index) => (
            <motion.div 
              key={index} 
              className={`relative bg-white rounded-xl p-8 border ${area.borderColor} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group overflow-hidden`}
              variants={item}
              whileHover={{ y: -5 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${area.color.replace('bg-', 'bg-opacity-100 bg-')}`}></div>
              <div className={`w-14 h-14 ${area.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-burgundy transition-colors duration-300">
                {area.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {area.description}
              </p>
              <div className="flex items-center text-burgundy font-medium group-hover:translate-x-1 transition-transform duration-300">
                <span>Saber más</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">¿No encontrás lo que buscás? Consultanos por otras áreas del derecho.</p>
          <a 
            href="#contacto" 
            className="inline-flex items-center justify-center bg-navy hover:bg-navy/90 text-white font-medium py-3 px-8 rounded-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            Consultar por otro tema
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PracticeAreas;
