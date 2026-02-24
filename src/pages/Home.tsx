import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { IMAGES } from '@/src/constants/images';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={IMAGES.HERO_BG}
            alt="Jeju Resort"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-sm md:text-base font-light tracking-[0.3em] mb-6"
          >
            JEJU PREMIUM RESORT
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-white text-4xl md:text-8xl font-bold tracking-wider mb-12 text-balance"
          >
            일상 그 너머의,<br /> 메타리움 제주
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <a
              href="https://booking.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-4 px-10 py-5 bg-white text-primary rounded-full text-sm font-bold tracking-widest hover:bg-secondary transition-all group"
            >
              <span>BOOKING ON NAVER</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center"
        >
          <span className="text-[10px] tracking-[0.4em] mb-4 uppercase">Scroll Down</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/3 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-32 px-6 md:px-12 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-8">Philosophy</span>
            <h2 className="text-3xl md:text-5xl font-light leading-tight text-primary">
              자연 속에 스며드는<br />온전한 휴식의 공간
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-primary/60 font-light leading-relaxed max-w-2xl mx-auto"
          >
            아침에는 빛과 함께 바다가 들어오고 낮에는 제주의 색이 공간에 머물며 
            해 질 무렵에는 노을이 하루의 끝을 알려줍니다. 
            단순한 숙박이 아닌 머무는 시간 자체가 하나의 경험이 되는 것을 느껴보세요.

          </motion.p>
        </div>
      </section>

      {/* Rooms Preview */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-2 md:space-y-4">
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block">Our Spaces</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Rooms</h2>
            </div>
            <Link to="/rooms" className="text-sm font-bold tracking-widest border-b border-primary pb-2 hover:text-accent hover:border-accent transition-all">
              VIEW ALL ROOMS
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Type A - Ocean Serenity",
                desc: "휴식이 필요하다면, 프라이빗한 오션뷰 스위트 룸",
                img: IMAGES.ROOM_TYPE_A_1
              },
              {
                title: "Type B - Private Ocean",
                desc: "제주의 바다를 온전히 담아낸 프라이빗 룸",
                img: IMAGES.ROOM_TYPE_B_1
              }
            ].map((room, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 rounded-2xl">
                  <img
                    src={room.img}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{room.title}</h3>
                <p className="text-primary/50 font-light">{room.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Highlight */}
      <section className="relative py-40 bg-primary text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img
            src={IMAGES.FACILITY_POOL}
            alt="Pool"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-2xl space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-6">Experience</span>
              <h2 className="text-3xl md:text-7xl font-bold tracking-normal leading-tight mb-8">
                머무름 그 이상의<br />특별한 경험
              </h2>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                제주의 신선함을 담은 아침 식탁과 바다를 품은 오후의 카페, <br className="hidden md:block"/>
                그리고 우리만의 프라이빗한 바베큐 파티까지. 메타리움에서 완벽한 하루를 완성해 보세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <h4 className="text-xl font-bold mb-1 md:mb-2">Morning Table</h4>
                <p className="text-sm text-white/40">에너지를 채우는 아침</p>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 md:mb-2">Private BBQ</h4>
                <p className="text-sm text-white/40">우리만의 프라이빗한 저녁</p>
              </div>
            </motion.div>

            <Link to="/facilities" className="inline-block text-sm font-bold tracking-widest border-b border-white pb-2 hover:text-accent hover:border-accent transition-all">
              EXPLORE FACILITIES
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-secondary">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-video bg-white rounded-3xl overflow-hidden shadow-2xl"
            >
              {/* Placeholder for Map */}
              <img
                src={IMAGES.MAP_PLACEHOLDER}
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-50 grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-primary text-white px-6 py-3 rounded-full text-xs font-bold tracking-widest">
                  SEOGWIPO, JEJU
                </div>
              </div>
            </motion.div>

            <div className="space-y-6 md:space-y-8">
              <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block">Location</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">오시는 길</h2>
              <div className="space-y-4 text-primary/70">
                <p className="text-lg font-medium text-primary">제주 서귀포시 중산간서로157번길 74</p>
                <p className="text-sm leading-relaxed">
                  제주공항에서 차로 약 50분 소요됩니다.<br />
                  서귀포의 푸른 바다와 한라산의 정취를 동시에 느낄 수 있는<br />
                  가장 아름다운 곳에 위치하고 있습니다.
                </p>
              </div>
              <Link to="/guide" className="inline-block text-sm font-bold tracking-widest border-b border-primary pb-2 hover:text-accent hover:border-accent transition-all">
                VIEW GUIDE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto px-6"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tighter mb-12">
            당신에게 기억되는 제주가<br />완벽하길 바랍니다
          </h2>
          <a
            href="https://booking.naver.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-4 px-12 py-6 bg-primary text-white rounded-full text-sm font-bold tracking-widest hover:bg-accent transition-all shadow-xl"
          >
            <span>BOOKING ON NAVER</span>
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  );
}
