import { motion } from 'motion/react';
import { IMAGES } from '@/src/constants/images';

const rooms = [
  {
    id: 'type-a',
    name: 'Type A - Ocean Serenity ',
    desc: '서귀포의 푸른 바다를 마주하며 깊은 잠에 드는 시간. 최고급 침구류와 독립된 싱글 베드로 편안하면서도 프라이빗한 휴식을 제공합니다.',
    size: '45㎡ / 13.6평',
    capacity: '기준 2인',
    amenities: ['Premium Single Bed (2ea)', 'Ocean View Terrace', 'Bathtub & Luxury Amenities', 'Free Wi-Fi'],
    images: [
      IMAGES.ROOM_TYPE_A_1,
      IMAGES.ROOM_TYPE_A_2
    ]
  },
  {
    id: 'type-b',
    name: 'Type B - Private Ocean',
    desc: '문을 열면 펼쳐지는 서귀포의 푸른 수평선. 준비된 테라스에서 바다를 마주하며 프라이빗 바베큐를 즐기세요.',
    size: '52㎡ / 15.7평',
    capacity: '기준 2인',
    amenities: ['Premium Single Bed (2ea)', 'Private BBQ Terrace', 'Panoramic Ocean View', 'Free Wi-Fi'],
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
          className="mb-10 md:mb-20"
        >
          <span className="text-accent text-xs font-bold tracking-[0.4em] uppercase block mb-2 md:mb-4">Our Spaces</span>
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
                <div className="space-y-6 md:space-y-10">
                  <h2 className="text-4xl font-bold tracking-tight">{room.name}</h2>
                  <p className="text-lg text-primary/60 font-light md:leading-relaxed">
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
