export default function ScheduleSection() {
  return (
    <section className="py-24 bg-background-light relative" id="schedule">
      <div className="absolute left-0 top-0 h-full w-1/5 tire-track-bg opacity-5 hidden md:block animate-tire-track"></div>
      <div className="absolute right-0 top-0 h-full w-1/5 tire-track-bg opacity-5 hidden md:block animate-tire-track" style={{transform: 'scaleX(-1)'}}></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-accent">
            Race <span className="text-primary">Weekend</span> Schedule
          </h2>
          <p className="mt-4 text-lg text-text-light/70">
            Don&apos;t miss a moment of the action. Here&apos;s the full timetable.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-x-12">
            <div>
              <h3 className="font-display text-3xl font-bold text-primary border-b-4 border-primary pb-2 mb-8">
                Day 1: Saturday, 06 Sep
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">09:00</div>
                    <div className="text-xs">AM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Check-in & Breakfast</h4>
                    <p className="text-text-light/70">Doors open. Fuel up for the day!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">10:00</div>
                    <div className="text-xs">AM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Opening Ceremony</h4>
                    <p className="text-text-light/70">Welcome address and theme reveal.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">11:00</div>
                    <div className="text-xs">AM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hacking Begins!</h4>
                    <p className="text-text-light/70">Lights out and away we go!</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">01:00</div>
                    <div className="text-xs">PM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Lunch / Pit Stop</h4>
                    <p className="text-text-light/70">Refuel your body and mind.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <h3 className="font-display text-3xl font-bold text-primary border-b-4 border-primary pb-2 mb-8">
                Day 2: Sunday, 07 Sep
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">11:00</div>
                    <div className="text-xs">AM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Hacking Ends / Code Freeze</h4>
                    <p className="text-text-light/70">Final lap! Submit your projects.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">12:00</div>
                    <div className="text-xs">PM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Project Expo & Judging</h4>
                    <p className="text-text-light/70">Showcase your work to the judges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-accent text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">03:00</div>
                    <div className="text-xs">PM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Finalist Pitches</h4>
                    <p className="text-text-light/70">Top teams present on the main stage.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary text-white font-bold rounded-lg px-4 py-2 text-center mr-4">
                    <div className="text-sm">04:00</div>
                    <div className="text-xs">PM</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Awards & Closing Ceremony</h4>
                    <p className="text-text-light/70">Podium finishers are announced!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}