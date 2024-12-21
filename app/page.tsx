import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Introduction from "@/components/Introduction";
import CompaniesSection from "@/components/CompaniesSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6">
        <ProfileCard />
        <Introduction />
      </div>

      <CompaniesSection />

      <div className="p-6">
        <h2 className="text-4xl font-bold mb-8">Works & Projects</h2>
        {/* Add your projects grid here */}
      </div>
    </div>
  );
}
