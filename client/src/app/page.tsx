import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import ScheduleSection from '@/components/schedule-section';
import AchievementsSection from '@/components/achievements-section';
import LeaderboardSection from '@/components/leaderboard-section';
import SponsorsSection from '@/components/sponsors-section';
import RegistrationSection from '@/components/registration-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background-light font-body text-text-light">
      <Header />
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <AchievementsSection />
      <LeaderboardSection />
      <SponsorsSection />
      <RegistrationSection />
      <Footer />
    </div>
  );
}
