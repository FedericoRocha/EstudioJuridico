import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-serif font-bold mb-4 text-white">
              Estudio Legal<br />Fernández & Asociados
            </h3>
            <p className="text-gray-300 mb-6">
              Más de 20 años brindando soluciones legales integrales con profesionalismo y compromiso.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-burgundy transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-burgundy transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Columna 2: Enlaces rápidos */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-burgundy">
              Enlaces
            </h4>
            <ul className="space-y-3">
              {['Inicio', 'Áreas de práctica', 'Sobre nosotros', 'Testimonios', 'Contacto'].map((text, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Columna 3: Contacto */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-burgundy">
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-burgundy mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Dirección</p>
                  <p className="text-gray-300 text-sm">Av. Principal 1234, CABA<br />Buenos Aires, Argentina</p>
                </div>
              </li>
              
              <li className="flex items-center">
                <FaPhone className="text-burgundy mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Teléfono</p>
                  <a href="tel:+541112345678" className="text-gray-300 hover:text-white text-sm transition-colors">+54 11 1234-5678</a>
                </div>
              </li>
              
              <li className="flex items-center">
                <FaEnvelope className="text-burgundy mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a href="mailto:info@estudiofernandez.com" className="text-gray-300 hover:text-white text-sm transition-colors">info@estudiofernandez.com</a>
                </div>
              </li>
              
              <li className="flex items-center">
                <FaClock className="text-burgundy mr-3 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Horario</p>
                  <p className="text-gray-300 text-sm">Lun-Vie: 9:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Estudio Legal Fernández & Asociados. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              {['Términos y condiciones', 'Política de privacidad', 'Aviso legal'].map((item, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
