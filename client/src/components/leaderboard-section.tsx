export default function LeaderboardSection() {
  const teams = [
    { rank: 1, name: "Red-Bullish Coders", points: 1250, trophy: "🥇" },
    { rank: 2, name: "Mercedes Mavericks", points: 1180, trophy: "🥈" },
    { rank: 3, name: "Ferrari Finishers", points: 1050, trophy: "🥉" },
    { rank: 4, name: "McLaren Masters", points: 980, trophy: "" },
    { rank: 5, name: "Alpine Innovators", points: 870, trophy: "" }
  ];

  return (
    <section className="py-24 bg-accent text-white" id="leaderboard">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-white">
            The <span className="text-primary">Leaderboard</span>
          </h2>
          <p className="mt-4 text-lg text-background-light/70 max-w-2xl mx-auto">
            Track the top teams racing to victory! Points are awarded for participation, project progress, and challenges.
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card-light text-text-light rounded-xl shadow-2xl p-6 md:p-8">
          <div className="grid grid-cols-3 font-bold text-lg text-primary border-b-2 border-primary pb-4 mb-4">
            <div className="text-left">Rank</div>
            <div className="text-left">Team Name</div>
            <div className="text-right">Points</div>
          </div>
          <div className="space-y-4">
            {teams.map((team) => (
              <div key={team.rank} className="grid grid-cols-3 items-center py-3 px-2 rounded-lg bg-background-light">
                <div className="flex items-center">
                  {team.trophy && (
                    <span className="text-2xl mr-2">{team.trophy}</span>
                  )}
                  <span className="font-bold text-xl">{team.rank}</span>
                </div>
                <div className="font-semibold">{team.name}</div>
                <div className="text-right font-bold text-lg text-primary">{team.points}</div>
              </div>
            ))}\n          </div>
          <div className="text-center mt-8 text-text-light/70">
            <p>* Leaderboard updates in real-time during the hackathon.</p>
          </div>
        </div>
      </div>
    </section>
  );
}