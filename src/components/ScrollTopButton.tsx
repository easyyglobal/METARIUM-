import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react'; // motion/react 사용 확인
import { ArrowUp } from 'lucide-react';
import { cn } from '@/src/lib/utils'; // cn 유틸리티 경로 확인

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px 이상 스크롤 시 버튼 표시
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-40",
            "w-12 h-12 md:w-14 md:h-14",
            "bg-primary text-white rounded-full shadow-lg",
            "flex items-center justify-center transition-transform hover:scale-110 active:scale-95",
            "border border-white/10 backdrop-blur-sm"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}