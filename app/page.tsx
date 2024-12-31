import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import Introduction from "@/components/Introduction";
import Projects from "@/components/Projects"; // Correct import for Projects
import About from "@/components/About";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6">
        <ProfileCard />
        <Introduction />
      </div>

      <About />

      {/* Rendering the Projects component */}
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-8">Works & Projects</h2>
        <Projects /> {/* Add the Projects component here to display GitHub repos */}
      </div>
    </div>
  );
}
