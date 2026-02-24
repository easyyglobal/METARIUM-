import { motion } from 'motion/react';
import { IMAGES } from '@/src/constants/images';

const facilities = [
  {
    title: 'Morning Table',
    desc: '제주의 신선한 식재료로 차려낸 정갈한 조식으로 에너지를 채우는 아침을 시작해 보세요.',
    time: '07:00 - 10:00',
    img: IMAGES.FACILITY_GARDEN
  },
  {
    title: 'Cafe Merry in Jeju',
    desc: '통창 너머로 펼쳐지는 서귀포 바다를 마주하며, 달콤한 오후를 만끽하세요.',
    time: '10:00 - 18:00',
    img: IMAGES.cafe
  },
  {
    title: 'Private BBQ',
    desc: '개별 테라스에서 즐기는 프라이빗한 바베큐 파티. 제주산 식재료로 특별한 저녁을 만드세요.',
    time: '18:00 - 22:00',
    img: IMAGES.FACILITY_BBQ
  }
];

export default function Facilities() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-4">Experience</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Facilities</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-primary/60 font-light leading-relaxed">
                  {item.desc}
                </p>
                <div className="pt-4 border-t border-primary/10">
                  <span className="text-[10px] font-bold tracking-widest text-accent uppercase block mb-1">Operating Hours</span>
                  <p className="text-sm font-medium">{item.time}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PRIVATE VENUE 대관 안내 섹션 (최종 정돈 버전) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-40 overflow-hidden rounded-[3rem] bg-primary text-white"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* 텍스트 콘텐츠 영역: 여백과 간격을 넓혀 고급스러움 강조 */}
            <div className="p-12 md:p-20 flex flex-col justify-center space-y-10">
              <div className="space-y-4">
                <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block">Space for Inspiration</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                  METARIUM<br />PRIVATE VENUE
                </h2>
              </div>
              
              <p className="text-lg text-white/60 font-light leading-relaxed">
                제주의 자연과 모던한 건축이 어우러진 메타리움의 공간은 단순한 장소를 넘어 새로운 영감을 선사합니다. 
                프라이빗 연회, 창의적인 기업 워크숍, 그리고 예술적인 소규모 공연까지. 
                당신의 특별한 순간을 위한 독보적인 무대를 제안합니다.
              </p>

              {/* 대관 항목 리스트: 세로 라인 포인트를 주어 정갈하게 배치 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 pt-4">
                <div className="space-y-2 border-l border-accent/30 pl-6">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Banquet & Party</h4>
                  <p className="text-xs text-white/40 font-light">품격 있는 프라이빗 연회 및 파티</p>
                </div>
                <div className="space-y-2 border-l border-accent/30 pl-6">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Creative Workshop</h4>
                  <p className="text-xs text-white/40 font-light">영감을 깨우는 비즈니스 미팅</p>
                </div>
                <div className="space-y-2 border-l border-accent/30 pl-6">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Small Performance</h4>
                  <p className="text-xs text-white/40 font-light">감각적인 소규모 예술 공연</p>
                </div>
                <div className="space-y-2 border-l border-accent/30 pl-6">
                  <h4 className="text-sm font-bold text-accent uppercase tracking-widest">Custom Styling</h4>
                  <p className="text-xs text-white/40 font-light">목적에 맞는 공간 큐레이션</p>
                </div>
              </div>

              {/* 카카오톡 문의 버튼 */}
              <div className="pt-10">
                <a
                  href="https://open.kakao.com/o/sMETARIUM" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-4 px-12 py-6 bg-white text-primary rounded-full text-sm font-bold tracking-widest hover:bg-secondary transition-all group"
                >
                  <span>공간 대관 및 서비스 문의</span>
                  <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform" />
                </a>
              </div>
            </div>

            {/* 이미지 영역: 텍스트 영역과 자연스럽게 이어지는 그라데이션 적용 */}
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <img
                src={IMAGES.venue_bg}
                alt="Private Venue"
              
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent lg:hidden block" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
