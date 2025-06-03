import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Consulta General'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      console.log('Formulario de muestra enviado:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Restablecer el estado después de 3 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
    }, 1000);
  };

  // Datos de contacto
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-burgundy" />,
      title: 'Dirección',
      content: 'Av. Principal 1234, CABA, Argentina',
      className: 'hover:bg-burgundy/5'
    },
    {
      icon: <FaPhone className="w-5 h-5 text-blue-600" />,
      title: 'Teléfono',
      content: '+54 11 1234-5678',
      className: 'hover:bg-blue-50'
    },
    {
      icon: <FaEnvelope className="w-5 h-5 text-emerald-600" />,
      title: 'Email',
      content: 'contacto@estudiolegal.com',
      className: 'hover:bg-emerald-50'
    },
    {
      icon: <FaClock className="w-5 h-5 text-amber-600" />,
      title: 'Horario',
      content: 'Lun-Vie: 9:00 - 18:00',
      className: 'hover:bg-amber-50'
    }
  ];

  return (
    <section id="contacto" className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Elemento decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-burgundy/5 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-medium mb-4">
            Contáctenos
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Estamos para <span className="text-burgundy">ayudarte</span>
          </h2>
          <p className="text-lg text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo a la brevedad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Información de contacto */}
          <motion.div 
            className="lg:col-span-4 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900">Información de contacto</h3>
            <p className="text-gray-600">
              Estamos aquí para ayudarte. Contáctanos a través de cualquiera de estos medios o completa el formulario.
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className={`flex items-start p-4 rounded-xl transition-colors ${item.className}`}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-gray-600 mt-1">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="pt-6 border-t border-gray-200 mt-8">
              <h4 className="font-medium text-gray-900 mb-4">Horario de atención</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between"><span>Lunes - Viernes</span> <span>9:00 - 18:00 hs</span></p>
                <p className="flex justify-between"><span>Sábados</span> <span>9:00 - 13:00 hs</span></p>
                <p className="text-sm text-gray-500 mt-4">* Fuera de horario, déjanos un mensaje y te responderemos a la brevedad.</p>
              </div>
            </div>
          </motion.div>
          
          {/* Formulario */}
          <motion.div 
            className="lg:col-span-8 bg-white rounded-2xl shadow-xl overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Envíanos un mensaje</h3>
              
              {submitSuccess ? (
                <motion.div 
                  className="bg-green-50 border border-green-200 text-green-700 px-6 py-8 rounded-lg text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold mb-2">¡Mensaje enviado con éxito!</h4>
                  <p className="text-gray-600">Gracias por contactarte con nosotros. Te responderemos a la brevedad.</p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-6 px-6 py-2 bg-burgundy text-white rounded-lg hover:bg-burgundy/90 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Nombre completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                        placeholder="+54 11 1234-5678"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Asunto <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all appearance-none bg-white"
                          required
                        >
                          <option value="Consulta General">Consulta General</option>
                          <option value="Derecho Civil">Derecho Civil</option>
                          <option value="Derecho Laboral">Derecho Laboral</option>
                          <option value="Derecho Comercial">Derecho Comercial</option>
                          <option value="Familia y Sucesiones">Familia y Sucesiones</option>
                          <option value="Daños y Perjuicios">Daños y Perjuicios</option>
                          <option value="Derecho Inmobiliario">Derecho Inmobiliario</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-burgundy focus:border-transparent transition-all"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                      required
                    ></textarea>
                  </div>
                  
                  <div className="pt-2">
                    <motion.button
                      type="submit"
                      className="w-full flex items-center justify-center px-8 py-4 bg-burgundy text-white rounded-lg font-medium hover:bg-burgundy/90 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="mr-2" />
                          Enviar mensaje
                        </>
                      )}
                    </motion.button>
                    
                    <p className="mt-3 text-sm text-gray-500 text-center">
                      Tus datos están seguros con nosotros. No compartiremos tu información con terceros.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
);
};

export default ContactForm;
