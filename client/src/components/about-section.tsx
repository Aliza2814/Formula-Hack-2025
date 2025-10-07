import { Zap, Users, Trophy } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-24 bg-card-light relative" id="about">
      <div className="absolute top-0 left-0 w-full h-20 chequered-flag-bg transform -skew-y-2 origin-top-left opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 chequered-flag-bg transform skew-y-2 origin-bottom-right opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-accent">
            About the <span className="text-primary">Race</span>
          </h2>
          <p className="mt-4 text-lg text-text-light/70 max-w-2xl mx-auto">
            Join us for a 2-day high-octane coding marathon, where you&apos;ll tackle challenges inspired by the world of Formula 1.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-8 bg-background-light rounded-xl border-2 border-primary/20 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Zap className="text-primary mx-auto" size={64} />
            <h3 className="font-display text-2xl font-bold mt-4">Innovate at Speed</h3>
            <p className="mt-2 text-text-light/80">
              Develop groundbreaking solutions for race strategy, car performance, and fan engagement.
            </p>
          </div>
          <div className="p-8 bg-background-light rounded-xl border-2 border-primary/20 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Users className="text-primary mx-auto" size={64} />
            <h3 className="font-display text-2xl font-bold mt-4">Collaborate & Compete</h3>
            <p className="mt-2 text-text-light/80">
              Work with your team, network with mentors, and compete for amazing prizes and glory.
            </p>
          </div>
          <div className="p-8 bg-background-light rounded-xl border-2 border-primary/20 shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
            <Trophy className="text-primary mx-auto" size={64} />
            <h3 className="font-display text-2xl font-bold mt-4">Win Big</h3>
            <p className="mt-2 text-text-light/80">
              Showcase your project to a panel of expert judges from the tech and motorsport industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}