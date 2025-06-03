import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'María González',
    role: 'Empresaria',
    content: 'Excelente atención y profesionalismo. Me ayudaron a resolver un complicado caso laboral con resultados favorables. Su dedicación y conocimiento hicieron toda la diferencia en mi situación.',
    rating: 5,
    image: '/avatars/woman-1.jpg',
    company: 'González & Asociados'
  },
  {
    id: 2,
    name: 'Carlos Rodríguez',
    role: 'Particular',
    content: 'El asesoramiento en la sucesión de mi padre fue impecable. Muy agradecido por su dedicación y trato humano en un momento tan delicado para mi familia.',
    rating: 5,
    image: '/avatars/man-1.jpg',
    company: ''
  },
  {
    id: 3,
    name: 'Empresa Tech S.A.',
    role: 'Cliente Corporativo',
    content: 'Llevamos años confiando en su asesoramiento legal para nuestros negocios. Profesionales de primer nivel que entienden las necesidades de las empresas.',
    rating: 5,
    image: '/logos/tech-company.png',
    company: 'Tech S.A.'
  },
  {
    id: 4,
    name: 'Laura Martínez',
    role: 'Emprendedora',
    content: 'Increíble servicio al cliente y asesoramiento personalizado. Me guiaron en la constitución de mi empresa de manera clara y profesional.',
    rating: 5,
    image: '/avatars/woman-2.jpg',
    company: 'Martínez Emprendimientos'
  },
  {
    id: 5,
    name: 'Roberto Sánchez',
    role: 'Particular',
    content: 'Contraté sus servicios para un caso de accidente de tránsito y quedé muy satisfecho con el resultado. Excelente comunicación y seguimiento.',
    rating: 5,
    image: '/avatars/man-2.jpg',
    company: ''
  }
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <motion.div
    className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-burgundy"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute top-6 right-6 text-amber-400 text-2xl">
      <FaQuoteLeft className="opacity-20" />
    </div>
    <div className="flex items-center mb-6">
      <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-md">
        {testimonial.image ? (
          <img 
            src={testimonial.image} 
            alt={testimonial.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name)}&background=random`;
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-600 text-2xl">
            {testimonial.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
        <p className="text-sm text-gray-600">{testimonial.role}</p>
        {testimonial.company && (
          <p className="text-xs text-gray-500 mt-1">{testimonial.company}</p>
        )}
      </div>
    </div>
    <div className="mb-4 flex">
      {[...Array(5)].map((_, i) => (
        <FaStar 
          key={i} 
          className={`w-4 h-4 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`} 
        />
      ))}
    </div>
    <p className="text-gray-700 italic mb-6">"{testimonial.content}"</p>
  </motion.div>
);

const Testimonials = () => {
  // Mostrar solo los primeros 3 testimonios
  const visibleTestimonials = testimonials.slice(0, 3);

  return (
    <section id="testimonios" className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      {/* Elemento decorativo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-burgundy/10 text-burgundy text-sm font-medium mb-4">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
            Lo que dicen <span className="text-burgundy">nuestros clientes</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descubre las experiencias de quienes han confiado en nosotros para sus asuntos legales más importantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
