import Image from 'next/image';
import { Calendar, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <main className="flex-grow pt-28 md:pt-36 relative overflow-hidden">
      <div className="absolute inset-0 parallax-bg"></div>
      <div className="container mx-auto px-6 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-black text-accent tracking-widest">
          <span className="text-primary">START</span> YOUR ENGINES
        </h1>
        <p className="font-display mt-4 text-xl sm:text-2xl text-text-light/80 max-w-3xl">
          The ultimate Formula 1 themed hackathon. Build, innovate, and race to the finish line with cutting-edge tech.
        </p>
        <p className="mt-4 font-bold text-2xl text-accent flex items-center justify-center gap-2">
          <Calendar className="text-primary" size={28} /> 06-07th September 2025
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a className="bg-accent text-white font-bold py-4 px-10 rounded-lg text-lg flex items-center space-x-3 hover:bg-zinc-800 transition-colors" href="#register">
            <Users size={24} />
            <span>Register Your Team</span>
          </a>
          <a className="bg-card-light text-accent border-2 border-accent font-bold py-4 px-10 rounded-lg text-lg flex items-center space-x-3 hover:bg-secondary-light transition-colors" href="https://devfolio.co" target="_blank">
            <Image
              alt="Devfolio icon"
              className="h-6 w-6"
              src="/globe.svg"
              width={24}
              height={24}
            />
            <span>Apply with Devfolio</span>
          </a>
        </div>
      </div>
      <div className="hidden lg:block absolute -bottom-20 -left-20 z-0 opacity-80">
        <Image
          alt="Cartoon F1 car"
          className="h-72 w-auto transform animate-car-left"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAoaS5HXJU7-2SHmQkqAihNxhe2DuceeV1PklHoQXH-VsFAiNWvTiZejOXdraYuEcJheZ1c0kmhvIeKJSJ8JsNMH10J0xJtuC6BR1bc8eVCf8b_N6p78xZ2GRrsfKTwssYKTM8_zdTRlYCw_qXLZyax0C9ZR5jiicyammIcB0IPQnVkFxjgasGZQ9Cs0zTThi7xZNew65PxhicJinUNxdSsrNdNOPMsWSgXosewMe0jNvYOcU6oGWMIzOKUddkT9gnGbT0EHCDtbfD"
          width={288}
          height={288}
        />
      </div>
      <div className="hidden lg:block absolute -bottom-24 -right-20 z-0 opacity-80">
        <Image
          alt="Cartoon F1 helmet"
          className="h-80 w-auto transform animate-helmet-right"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBy7Lnww912z4_32uoqEb5bJvSbK1xp_JYqxu1NBmPgxFR3da5uvoQHhEs2bwoZhaqecrcTBoyErVdRvPckx2JcN9_Zr16ERcIRfOCr1br7bsjqXtCVvAwLaXuBvu8zjc4OFzFG7d7ZsmTIIXKEGFQvcsqCss6SN95ilBE21N9GM6d1lqNd6TJkxVCfz8bvkMQ4R_yBgNqasQA4sLZ1MNWa9gJDCYPUZBtYx0SVBA2ebsCqIoQ7KNEYaMhg9Pw99aU-fDwWyPgrFqJn"
          width={320}
          height={320}
        />
      </div>
    </main>
  );
}