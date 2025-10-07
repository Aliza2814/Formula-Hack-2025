import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-accent text-background-light" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Image
                alt="F1 Hackathon Logo"
                className="h-10 w-auto mr-3"
                src="/globe.svg"
                width={40}
                height={40}
              />
              <span className="font-display font-bold text-xl text-primary">F1 HACK</span>
            </div>
            <p className="mt-4 text-background-light/70">The pinnacle of motorsport and technology.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a className="hover:text-primary transition-colors" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#schedule">
                  Schedule
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#register">
                  Register
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#achievements">
                  Achievements
                </a>
              </li>
              <li>
                <a className="hover:text-primary transition-colors" href="#leaderboard">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-primary">Contact Us</h4>
            <p className="mt-4 text-background-light/70">Have questions? Reach out!</p>
            <a
              className="mt-2 inline-block hover:text-primary transition-colors"
              href="mailto:contact@f1hack.com"
            >
              contact@f1hack.com
            </a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-background-light/20 text-center text-background-light/50">
          <p>© 2025 F1 Hackathon. All Rights Reserved. Not an official F1™ event.</p>
        </div>
      </div>
    </footer>
  );
}