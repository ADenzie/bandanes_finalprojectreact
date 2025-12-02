import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const tourLink = "https://shop.keshimusic.com/pages/tour";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'biography', 'discography'];
      let found = 'home';
      sections.forEach(sec => {
        const el = document.getElementById(sec);
        if (el && window.scrollY >= el.offsetTop - 200) {
          found = sec;
        }
      });
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'discography', label: 'Discography' },
    { id: 'tour', label: 'Tour', external: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b transition-shadow ${scrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-4xl mx-auto px-4 py-5 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-keshiRed">Keshi.</a>

        {/* Desktop */}
        <div className="hidden md:flex gap-10">
          {navItems.map(item => item.external ? (
            <a key={item.id} href={tourLink} target="_blank" rel="noopener noreferrer"
               className="font-medium text-gray-700 hover:text-keshiRed transition">
              {item.label}
            </a>
          ) : (
            <a key={item.id} href={`#${item.id}`}
               className={`font-medium transition ${activeSection === item.id ? 'text-keshiRed font-bold' : 'text-gray-700 hover:text-keshiRed'}`}>
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden">
          {mobileOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          {navItems.map(item => item.external ? (
            <a key={item.id} href={tourLink} target="_blank" rel="noopener noreferrer"
               className="block py-4 px-6 hover:bg-keshiLight" onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ) : (
            <a key={item.id} href={`#${item.id}`} className="block py-4 px-6 hover:bg-keshiLight"
               onClick={() => setMobileOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;