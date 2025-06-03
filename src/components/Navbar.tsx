import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { 
      name: 'Áreas', 
      href: '#areas',
      submenu: [
        { name: 'Derecho Civil', href: '#civil' },
        { name: 'Derecho Laboral', href: '#laboral' },
        { name: 'Derecho Comercial', href: '#comercial' },
        { name: 'Familia y Sucesiones', href: '#familia' },
      ]
    },
    { name: 'Sobre Nosotros', href: '#sobre-nosotros' },
    { name: 'Testimonios', href: '#testimonios' },
  ];
  
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="flex items-center group"
              onClick={() => setActiveLink('')}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-burgundy/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <span className={`relative text-2xl font-serif font-bold transition-all duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}>
                  Fernández & Asociados
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className={`relative text-sm font-medium transition-all duration-300 ${
                    scrolled ? 'text-gray-700' : 'text-white'
                  } group-hover:text-burgundy px-2 py-1`}
                  onMouseEnter={() => link.submenu && setOpenSubmenu(index)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                  onClick={() => {
                    setActiveLink(link.href);
                    setOpenSubmenu(null);
                  }}
                >
                  <span className="relative">
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-burgundy transition-all duration-300 ${
                      activeLink === link.href ? 'w-full' : 'group-hover:w-full'
                    }`}></span>
                  </span>
                  {link.submenu && (
                    <FaChevronDown className="inline-block ml-1 text-xs opacity-70" />
                  )}
                </a>
                
                {/* Submenú desplegable */}
                {link.submenu && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 transition-all duration-300 ${
                      openSubmenu === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                    }`}
                    onMouseEnter={() => setOpenSubmenu(index)}
                    onMouseLeave={() => setOpenSubmenu(null)}
                  >
                    {link.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-burgundy transition-colors duration-200"
                        onClick={() => {
                          setActiveLink(subItem.href);
                          setIsOpen(false);
                        }}
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a
              href="#contacto"
              className="ml-4 bg-burgundy text-white px-6 py-2.5 rounded-md text-sm font-medium hover:bg-opacity-90 transition-all duration-300 flex items-center transform hover:scale-105 shadow-lg hover:shadow-burgundy/30"
              onClick={() => setActiveLink('#contacto')}
            >
              <FaPhone className="mr-2" size={12} />
              Contactar
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-200 ${
                scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
              }`}
              aria-expanded={isOpen}
              aria-label="Menú principal"
            >
              {isOpen ? (
                <FaTimes className={`h-6 w-6 ${scrolled ? 'text-navy' : 'text-white'}`} />
              ) : (
                <FaBars className={`h-6 w-6 ${scrolled ? 'text-navy' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-white shadow-xl">
          {navLinks.map((link) => (
            <div key={link.name}>
              <a
                href={link.href}
                className={`block px-4 py-3 rounded-md text-base font-medium ${
                  activeLink === link.href 
                    ? 'bg-gray-100 text-burgundy' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setActiveLink(link.href);
                  if (!link.submenu) setIsOpen(false);
                }}
              >
                <div className="flex justify-between items-center">
                  {link.name}
                  {link.submenu && (
                    <FaChevronDown 
                      className={`transition-transform duration-200 ${
                        openSubmenu === navLinks.indexOf(link) ? 'transform rotate-180' : ''
                      }`} 
                      size={12} 
                    />
                  )}
                </div>
              </a>
              {link.submenu && (
                <div 
                  className={`pl-4 overflow-hidden transition-all duration-300 ${
                    openSubmenu === navLinks.indexOf(link) ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  {link.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                      onClick={() => {
                        setActiveLink(subItem.href);
                        setIsOpen(false);
                      }}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contacto"
            className="block px-4 py-3 mt-2 rounded-md text-base font-medium text-white bg-burgundy hover:bg-opacity-90 text-center"
            onClick={() => {
              setActiveLink('#contacto');
              setIsOpen(false);
            }}
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
