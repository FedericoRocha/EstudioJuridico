import { motion } from 'framer-motion';
import { FaBalanceScale, FaGavel, FaHandshake, FaUserTie, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const values = [
    {
      title: 'Ética',
      description: 'Actuamos con integridad y rectitud en cada caso que asumimos.',
      icon: <FaShieldAlt className="w-6 h-6 text-burgundy" />
    },
    {
      title: 'Profesionalismo',
      description: 'Contamos con un equipo altamente calificado y en constante actualización.',
      icon: <FaUserTie className="w-6 h-6 text-blue-600" />
    },
    {
      title: 'Compromiso',
      description: 'Nos involucramos plenamente en cada caso para alcanzar los mejores resultados.',
      icon: <FaHandshake className="w-6 h-6 text-emerald-600" />
    }
  ];

  return (
    <section id="sobre-nosotros" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-burgundy/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
            }
          }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-medium mb-4">
            Nuestra Historia
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Más de <span className="text-burgundy">20 años</span> de excelencia legal
          </h2>
          <div className="h-1 w-20 bg-burgundy mx-auto mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 text-left mt-16">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-4 top-0 h-full w-1 bg-gradient-to-b from-burgundy/20 to-burgundy/60"></div>
              <p className="text-lg text-gray-700 mb-6 pl-6">
                Fundado en 2003, <strong className="text-gray-900">Estudio Legal Fernández & Asociados</strong> se ha consolidado como un referente en el asesoramiento jurídico integral, ofreciendo soluciones legales personalizadas con un enfoque cercano y profesional.
              </p>
              <p className="text-lg text-gray-700 pl-6">
                Nuestro equipo de abogados altamente calificados se destaca por su compromiso con la excelencia, la ética profesional y la búsqueda constante de los mejores resultados para nuestros clientes.
              </p>
              
              <div className="mt-10 pl-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-burgundy/10 rounded-full">
                    <FaGavel className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">+5,000</h4>
                    <p className="text-gray-600">Casos atendidos</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-burgundy/10 rounded-full">
                    <FaChartLine className="w-6 h-6 text-burgundy" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">95%</h4>
                    <p className="text-gray-600">Tasa de éxito</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative h-80 md:h-auto bg-gray-200 rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-burgundy/80 to-navy/80 mix-blend-overlay"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <FaBalanceScale className="w-24 h-24 text-white/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Nuestra Misión</h3>
                <p className="text-white/90">Brindar asesoramiento legal de excelencia, ofreciendo soluciones efectivas y personalizadas que superen las expectativas de nuestros clientes.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sección de Valores */}
        <motion.div 
          className="max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div 
            className="text-center mb-16"
            variants={item}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-6">
              Nuestros <span className="text-burgundy">Valores</span> Fundamentales
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principios que guían cada decisión y acción en nuestro estudio jurídico
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                variants={item}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 rounded-full bg-burgundy/10 flex items-center justify-center mb-6 mx-auto">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-center text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 text-center">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
