export default function AchievementsSection() {
  const achievements = [
    {
      name: "Grid Starter",
      description: "Successfully registered for the hackathon.",
      icon: "🏁",
      unlocked: true
    },
    {
      name: "First Lap",
      description: "Submitted your first line of code.",
      icon: "🚀",
      unlocked: true
    },
    {
      name: "Pit Crew",
      description: "Successfully collaborated with your team.",
      icon: "👥",
      unlocked: false
    },
    {
      name: "Innovator's Cup",
      description: "Solved a complex F1 challenge.",
      icon: "💡",
      unlocked: false
    },
    {
      name: "Chequered Flag",
      description: "Finished the hackathon with a working project.",
      icon: "🏁",
      unlocked: false
    },
    {
      name: "Grand Prix Champion",
      description: "Secured a podium finish.",
      icon: "🏆",
      unlocked: false
    }
  ];

  return (
    <section className="py-24 bg-card-light relative" id="achievements">
      <div className="absolute top-0 left-0 w-full h-20 chequered-flag-bg transform -skew-y-2 origin-top-left opacity-70"></div>
      <div className="absolute bottom-0 right-0 w-full h-20 chequered-flag-bg transform skew-y-2 origin-bottom-right opacity-70"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-accent">
            Unlock Your <span className="text-primary">Achievements</span>
          </h2>
          <p className="mt-4 text-lg text-text-light/70 max-w-2xl mx-auto">
            Participate, innovate, and earn exclusive F1-themed badges!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`flex flex-col items-center text-center ${
                achievement.unlocked ? '' : 'opacity-50 grayscale'
              }`}
            >
              <div className="w-24 h-24 flex items-center justify-center text-4xl bg-background-light rounded-full mb-2 border-2 border-primary/20">
                {achievement.icon}
              </div>
              <h4 className="font-bold text-md text-accent">{achievement.name}</h4>
              <p className="text-sm text-text-light/70">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}