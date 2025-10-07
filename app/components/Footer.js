import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-card-dark text-text-dark border-t border-secondary-dark" id="contact">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Image 
                alt="F1 Hackathon Logo" 
                className="h-10 w-auto mr-3 filter brightness-150"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeCAj0zwjlm7bIBw4piss-wacsc9LAwXuHVr59q1K-QZ2fECB0zo3TfhgZckZlTUitH1lGJAENSzYvxxWkK-OHK3j3w867tlqbOdv3zkv08LAeZTUfwA83Or4eW1PQgvRRzyGL-KJEFdQXn2K8D2vKjCsrVA16GypadabM0uWp3CQ2KigFlOPNjoprJIHfXA_UYfP28uj6Eu5TA4FAY5ZbO_nSVwzp6HSp5oVYNAoOo551D82SsMe5hiKdDv9THHlYFzydgCzhmvQ_"
                width={40}
                height={40}
              />
              <span className="font-display font-bold text-xl text-primary">F1 HACK</span>
            </div>
            <p className="mt-4 text-text-dark/70">The pinnacle of motorsport and technology.</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-primary">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li><a className="hover:text-primary transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-primary transition-colors" href="#timeline">Timeline</a></li>
              <li><a className="hover:text-primary transition-colors" href="#mentors">Mentors</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-lg text-primary">Contact Us</h4>
            <p className="mt-4 text-text-dark/70">Have questions? Reach out!</p>
            <a className="mt-2 inline-block hover:text-primary transition-colors"
              href="mailto:contact@f1hack.com">contact@f1hack.com</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-secondary-dark text-center text-text-dark/50">
          <p>© 2025 F1 Hackathon. All Rights Reserved. Not an official F1™ event.</p>
        </div>
      </div>
    </footer>
  )
}
