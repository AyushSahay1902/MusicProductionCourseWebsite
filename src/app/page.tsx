import FeaturedCourses from "./components/FeaturedCourses";
import HeroSection from "./components/HeroSection";
import TestimonialCards from "./components/TestimonialCards";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <h1>Music App</h1>
      <HeroSection />
      <FeaturedCourses  />
      <TestimonialCards />
    </main>
  );
}
