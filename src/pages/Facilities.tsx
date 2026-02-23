import { motion } from 'motion/react';
import { IMAGES } from '@/src/constants/images';

const facilities = [
  {
    title: 'Infinity Pool',
    desc: '제주의 푸른 바다와 하늘이 만나는 인피니티 풀에서 시원한 휴식을 즐겨보세요.',
    time: '09:00 - 21:00',
    img: IMAGES.FACILITY_POOL
  },
  {
    title: 'Private BBQ',
    desc: '개별 테라스에서 즐기는 프라이빗한 바베큐 파티. 제주산 식재료로 특별한 저녁을 만드세요.',
    time: '18:00 - 22:00',
    img: IMAGES.FACILITY_BBQ
  },
  {
    title: 'Garden Path',
    desc: '제주의 돌담과 숲이 어우러진 산책로에서 고요한 사색의 시간을 가져보세요.',
    time: 'Always Open',
    img: IMAGES.FACILITY_GARDEN
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-40 p-12 md:p-20 bg-primary text-white rounded-[3rem] text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            메타리움만의 특별한 서비스
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Welcome Drink', desc: '제주 감귤 주스' },
              { label: 'Turndown Service', desc: '편안한 잠자리' },
              { label: 'Concierge', desc: '여행 정보 안내' },
              { label: 'Free Parking', desc: '넓은 주차 공간' }
            ].map((service) => (
              <div key={service.label} className="space-y-2">
                <h4 className="text-lg font-bold">{service.label}</h4>
                <p className="text-xs text-white/40">{service.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
