import { motion } from 'motion/react';
import { IMAGES } from '@/src/constants/images';

const rooms = [
  {
    id: 'type-a',
    name: 'Type A - Minimal Suite',
    desc: '여백의 미를 극대화한 미니멀한 스위트 룸입니다. 통창을 통해 들어오는 제주의 햇살과 함께 평온한 아침을 맞이하세요.',
    size: '45㎡ / 13.6평',
    capacity: '기준 2인 / 최대 3인',
    amenities: ['King Size Bed', 'Private Terrace', 'Mini Bar', 'Premium Amenities', 'Free Wi-Fi'],
    images: [
      IMAGES.ROOM_TYPE_A_1,
      IMAGES.ROOM_TYPE_A_2
    ]
  },
  {
    id: 'type-b',
    name: 'Type B - Nature View',
    desc: '제주의 숲을 온전히 담아낸 프라이빗 룸입니다. 자연의 소리에 귀 기울이며 진정한 휴식을 경험할 수 있는 공간입니다.',
    size: '52㎡ / 15.7평',
    capacity: '기준 2인 / 최대 4인',
    amenities: ['King Size Bed', 'Forest View Terrace', 'Bathtub', 'Kitchenette', 'Free Wi-Fi'],
    images: [
      IMAGES.ROOM_TYPE_B_1,
      IMAGES.ROOM_TYPE_B_2
    ]
  }
];

export default function Rooms() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-4">Our Spaces</span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">Rooms</h1>
        </motion.div>

        <div className="space-y-40">
          {rooms.map((room, idx) => (
            <div key={room.id} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className={idx % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}
              >
                <div className="space-y-8">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                    <img
                      src={room.images[0]}
                      alt={room.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <img
                        src={room.images[1]}
                        alt={room.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center p-8">
                      <p className="text-xs font-medium tracking-widest text-center text-primary/40 uppercase">
                        Minimalist Design for your comfort
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
                className={idx % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}
              >
                <div className="space-y-10">
                  <h2 className="text-4xl font-bold tracking-tight">{room.name}</h2>
                  <p className="text-lg text-primary/60 font-light leading-relaxed">
                    {room.desc}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-8 py-8 border-y border-primary/10">
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Size</h4>
                      <p className="text-sm font-medium">{room.size}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-2">Capacity</h4>
                      <p className="text-sm font-medium">{room.capacity}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold tracking-widest text-accent uppercase mb-6">Amenities</h4>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                      {room.amenities.map((item) => (
                        <li key={item} className="text-sm text-primary/70 flex items-center space-x-2">
                          <span className="w-1 h-1 bg-accent rounded-full" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="https://booking.naver.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-10 py-4 bg-primary text-white text-xs font-bold tracking-widest rounded-full hover:bg-accent transition-all"
                  >
                    BOOK THIS ROOM
                  </a>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
