import { motion } from 'motion/react';
import { ArrowRight, Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Reservation() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-4">Booking</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Reservation</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">실시간 예약 안내</h2>
              <p className="text-lg text-primary/60 font-light leading-relaxed">
                메타리움은 네이버 예약 시스템을 통해 실시간 예약을 진행하고 있습니다.<br />
                아래 버튼을 클릭하시면 객실별 예약 현황을 확인하실 수 있습니다.
              </p>
            </div>

            <a
              href="https://booking.naver.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-6 p-8 md:p-12 bg-white rounded-[2rem] shadow-xl border border-primary/5 group hover:bg-primary hover:text-white transition-all duration-500 w-full"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-widest text-accent uppercase group-hover:text-white/60">Official Booking</span>
                <h3 className="text-3xl font-bold">네이버 실시간 예약</h3>
              </div>
              <div className="ml-auto w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-primary transition-all">
                <ArrowRight size={24} />
              </div>
            </a>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-secondary rounded-3xl space-y-4">
                <Instagram size={24} className="text-accent" />
                <h4 className="text-xl font-bold">Instagram</h4>
                <p className="text-sm text-primary/50">@metarium_jeju</p>
                <a href="#" className="text-xs font-bold tracking-widest border-b border-primary pb-1">FOLLOW US</a>
              </div>
              <div className="p-8 bg-secondary rounded-3xl space-y-4">
                <Mail size={24} className="text-accent" />
                <h4 className="text-xl font-bold">Email</h4>
                <p className="text-sm text-primary/50">info@metarium.com</p>
                <a href="mailto:info@metarium.com" className="text-xs font-bold tracking-widest border-b border-primary pb-1">SEND EMAIL</a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-sm border border-primary/5"
          >
            <h2 className="text-2xl font-bold mb-10">자주 묻는 질문 (FAQ)</h2>
            <div className="space-y-8">
              {[
                { q: '예약 취소 및 환불 규정은 어떻게 되나요?', a: '체크인 10일 전까지는 100% 환불이 가능하며, 이후 기간에 따라 차등 적용됩니다.' },
                { q: '연박 할인이 있나요?', a: '2박 이상 예약 시 전체 금액의 10% 할인이 자동 적용됩니다.' },
                { q: '바베큐 이용은 미리 예약해야 하나요?', a: '네, 원활한 준비를 위해 체크인 최소 1일 전까지 예약을 권장드립니다.' },
                { q: '주차 공간은 충분한가요?', a: '객실당 1대의 전용 주차 공간이 마련되어 있습니다.' }
              ].map((faq, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <span className="text-accent font-bold">Q.</span>
                    <h4 className="text-sm font-bold leading-tight">{faq.q}</h4>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-primary/20 font-bold">A.</span>
                    <p className="text-sm text-primary/60 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-primary/10">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold">카카오톡 문의</h4>
                  <p className="text-xs text-primary/40">상담 시간: 10:00 - 18:00</p>
                </div>
                <a href="#" className="ml-auto text-xs font-bold tracking-widest bg-secondary px-4 py-2 rounded-full">채팅하기</a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
