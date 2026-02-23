import { motion } from 'motion/react';
import { MapPin, Clock, Users, Info } from 'lucide-react';
import { IMAGES } from '@/src/constants/images';

export default function Guide() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-4">Information</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Guide</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-20">
            {/* Check-in/out */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                  <Clock size={24} />
                </div>
                <h2 className="text-2xl font-bold">체크인 / 체크아웃</h2>
              </div>
              <div className="grid grid-cols-2 gap-8 p-10 bg-white rounded-3xl shadow-sm border border-primary/5">
                <div>
                  <p className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Check-in</p>
                  <p className="text-3xl font-bold">15:00</p>
                </div>
                <div>
                  <p className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Check-out</p>
                  <p className="text-3xl font-bold">11:00</p>
                </div>
              </div>
              <p className="text-sm text-primary/50 leading-relaxed">
                * 얼리 체크인 및 레이트 체크아웃은 당일 객실 상황에 따라 유료로 가능합니다.<br />
                * 22시 이후 입실하실 경우 반드시 사전에 연락 부탁드립니다.
              </p>
            </section>

            {/* Rules */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                  <Users size={24} />
                </div>
                <h2 className="text-2xl font-bold">이용 규정 및 주의사항</h2>
              </div>
              <div className="space-y-6 p-10 bg-white rounded-3xl shadow-sm border border-primary/5">
                {[
                  { title: '인원 규정', content: '최대 인원 초과 시 입실이 제한될 수 있습니다. (영유아 포함)' },
                  { title: '금연 안내', content: '전 객실 및 리조트 내 모든 구역은 금연 구역입니다.' },
                  { title: '반려동물', content: '반려동물 동반 입실은 불가합니다.' },
                  { title: '취사 안내', content: '객실 내 육류, 생선 등 냄새가 심한 음식의 조리는 금지됩니다.' }
                ].map((item) => (
                  <div key={item.title} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-10">
                    <h4 className="text-sm font-bold w-32 shrink-0">{item.title}</h4>
                    <p className="text-sm text-primary/60">{item.content}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Location */}
            <section className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary text-white rounded-2xl flex items-center justify-center">
                  <MapPin size={24} />
                </div>
                <h2 className="text-2xl font-bold">오시는 길</h2>
              </div>
              <div className="aspect-video bg-white rounded-3xl overflow-hidden border border-primary/5 relative">
                <img
                  src={IMAGES.MAP_PLACEHOLDER}
                  alt="Map"
                  className="w-full h-full object-cover grayscale opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary text-white px-8 py-4 rounded-full text-sm font-bold tracking-widest shadow-2xl">
                    METARIUM JEJU
                  </div>
                </div>
              </div>
              <div className="p-8 bg-secondary rounded-2xl space-y-4">
                <p className="text-sm font-bold">주소: 제주 서귀포시 중산간서로157번길 74</p>
                <div className="space-y-2">
                  <p className="text-xs text-primary/50">버스 이용 시: 201번 버스 탑승 후 '메타리움 앞' 정류장 하차</p>
                  <p className="text-xs text-primary/50">택시 이용 시: 제주공항에서 약 50분 소요 (예상 요금 35,000원)</p>
                </div>
              </div>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-10 bg-primary text-white rounded-3xl sticky top-32">
              <div className="flex items-center space-x-3 mb-6">
                <Info size={20} className="text-accent" />
                <h3 className="text-xl font-bold">도움이 필요하신가요?</h3>
              </div>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                이용 안내에 대해 더 궁금하신 점이 있다면 고객센터로 문의해 주세요.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Customer Center</p>
                  <p className="text-2xl font-bold">064-123-4567</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold tracking-widest text-white/40 uppercase mb-1">Email</p>
                  <p className="text-sm font-medium">help@metarium.com</p>
                </div>
              </div>
              <a
                href="https://booking.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 w-full py-4 bg-white text-primary text-xs font-bold tracking-widest rounded-full flex items-center justify-center hover:bg-secondary transition-all"
              >
                BOOKING ON NAVER
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
