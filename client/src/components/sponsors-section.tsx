export default function SponsorsSection() {
  return (
    <section className="py-24 bg-accent text-white" id="sponsors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl font-bold text-white">
            Official <span className="text-primary">Partners</span>
          </h2>
          <p className="mt-4 text-lg text-background-light/70 max-w-2xl mx-auto">
            Powering innovation at the F1 Hackathon. We&apos;re proud to be supported by industry leaders.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className="h-12 w-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 font-bold grayscale hover:grayscale-0 transition-all duration-300"
            >
              SPONSOR {index}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}