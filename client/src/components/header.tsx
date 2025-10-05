import Image from 'next/image';
import { FlagIcon } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-card-light shadow-md fixed top-0 left-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            alt="F1 Hackathon Logo"
            className="h-12 w-auto mr-3"
            src="/globe.svg"
            width={48}
            height={48}
            priority
          />
          <span className="font-display font-bold text-2xl text-primary tracking-wider">
            F1 HACK
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#about">
            About
          </a>
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#schedule">
            Schedule
          </a>
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#register">
            Register
          </a>
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#sponsors">
            Sponsors
          </a>
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#achievements">
            Achievements
          </a>
          <a className="font-semibold text-text-light hover:text-primary transition-colors" href="#leaderboard">
            Leaderboard
          </a>
        </nav>
        <a className="bg-primary text-white font-bold py-3 px-6 gap-2 rounded-lg hover:opacity-90 transition-opacity flex items-center" href="#register">
          <FlagIcon />
          Register Now
        </a>
      </div>
    </header>
  );
}