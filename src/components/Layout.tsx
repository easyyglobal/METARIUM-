import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/src/lib/utils';
import ScrollTopButton from './ScrollTopButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'ABOUT', path: '/' },
    { name: 'ROOMS', path: '/rooms' },
    { name: 'FACILITIES', path: '/facilities' },
    { name: 'GUIDE', path: '/guide' },
    { name: 'RESERVATION', path: '/reservation' },
  ];

  // Determine text color based on scroll and page
  const headerTextColor = cn(
    "transition-colors duration-300",
    isScrolled ? 'text-primary' : (isHomePage ? 'text-white drop-shadow-md' : 'text-primary')
  );

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6',
          isScrolled ? 'bg-white/80 backdrop-blur-md py-3 md:py-4 shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className={cn("text-2xl font-bold tracking-tighter transition-colors", headerTextColor)}>
            METARIUM
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  'text-sm font-medium tracking-widest hover:opacity-70 transition-all',
                  location.pathname === item.path ? 'opacity-100 font-bold' : 'opacity-80',
                  headerTextColor
                )}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://booking.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "px-6 py-2 text-xs font-bold tracking-widest transition-all rounded-full border",
                isScrolled 
                  ? "bg-primary text-white border-primary hover:bg-accent hover:border-accent" 
                  : (isHomePage 
                      ? "bg-white/10 text-white border-white/30 backdrop-blur-sm hover:bg-white hover:text-primary" 
                      : "bg-primary text-white border-primary hover:bg-accent hover:border-accent")
              )}
            >
              BOOKING
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className={cn("md:hidden transition-colors", headerTextColor)}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-white md:hidden flex flex-col items-center justify-center space-y-8"
      >
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="text-2xl font-light tracking-[0.2em] text-primary"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.name}
          </Link>
        ))}
        <a
          href="https://booking.naver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-4 bg-primary text-white text-sm font-bold tracking-widest rounded-full"
        >
          BOOKING ON NAVER
        </a>
      </motion.div>

      <main className="flex-grow">
        {children}
      </main>
  
  <ScrollTopButton />

      <footer className="bg-primary text-secondary py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-3 md:space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">METARIUM</h2>
            <p className="text-sm opacity-60 leading-relaxed max-w-xs">
              일상 그 너머의 스테이, 메타리움 제주.<br />
              자연 속에 스며드는 온전한 휴식을 선사합니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-2 md:space-y-4">
            <h3 className="text-xs font-bold tracking-widest opacity-40 uppercase">Contact</h3>
            <p className="text-sm">제주 서귀포시 중산간서로157번길 74</p>
            <p className="text-sm">T. 010-9905-8064</p>
            <p className="text-sm">E. info@metarium.com</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xs font-bold tracking-widest opacity-40 uppercase">Information</h3>
            <p className="text-sm">사업자등록번호: 123-45-67890</p>
            <p className="text-sm">대표: 홍길홍</p>
            <p className="text-sm opacity-40 mt-8">© 2026 METARIUM JEJU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
