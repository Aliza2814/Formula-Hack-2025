import Image from 'next/image'

const mentors = [
  {
    id: 1,
    image: '/assets/mentors/Frame 1562.png',
    alt: 'Mentor 1'
  },
  {
    id: 2,
    image: '/assets/mentors/Frame 1563.png',
    alt: 'Mentor 2'
  },
  {
    id: 3,
    image: '/assets/mentors/Frame 1564.png',
    alt: 'Mentor 3'
  },
  {
    id: 4,
    image: '/assets/mentors/Frame 1565.png',
    alt: 'Mentor 4'
  },
  {
    id: 5,
    image: '/assets/mentors/Frame 1566.png',
    alt: 'Mentor 5'
  }
]

export default function Mentors() {
  return (
    <section className="py-24 bg-background-dark" id="mentors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl font-bold text-text-dark">
            Meet Your <span className="text-primary">Mentors</span>
          </h2>
          <p className="mt-4 text-lg text-text-dark/80 max-w-2xl mx-auto">
            Learn from industry experts who will guide you throughout the hackathon
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="mentor-card bg-card-dark rounded-xl overflow-hidden border-2 border-secondary-dark hover:border-primary transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full aspect-square">
                <Image
                  src={mentor.image}
                  alt={mentor.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
