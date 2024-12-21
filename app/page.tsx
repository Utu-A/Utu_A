import { Github, Twitter, Linkedin, Facebook } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle'

const Navigation = () => {
  return (
    <nav className="flex justify-between items-center mb-12 p-4">
      <h1 className="text-2xl font-bold">Portfolio</h1>
      
      <div className="flex gap-6 items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Services</a>
        <a href="#" className="hover:text-gray-300">Works</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        <ThemeToggle />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Hire Me
        </button>
      </div>
    </nav>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 p-6">
        {/* Profile Card */}
        <div className="bg-card rounded-2xl p-8">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-orange-500 rounded-full"></div>
            <div className="absolute inset-4 bg-card rounded-full"></div>
            <img
              src="/api/placeholder/192/192"
              alt="Profile"
              className="absolute inset-8 rounded-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-bold text-center mb-2">Utkarsh Singh</h2>
          <p className="text-muted-foreground text-center mb-6">
            Developer and Researcher
          </p>
          <div className="flex justify-center gap-4">
            <button className="p-2 hover:text-orange-500">
              <Facebook size={20} />
            </button>
            <button className="p-2 hover:text-orange-500">
              <Twitter size={20} />
            </button>
            <button className="p-2 hover:text-orange-500">
              <Linkedin size={20} />
            </button>
            <button className="p-2 hover:text-orange-500">
              <Github size={20} />
            </button>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-card rounded-2xl p-8 flex flex-col justify-center">
          <h3 className="text-xl mb-4">Hello There!</h3>
          <h2 className="text-4xl font-bold mb-4">
          Securing systems, building robots, launching payloads, and redefining quantum tech.
          </h2>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <p className="text-muted-foreground">Available for Freelancing</p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-fit">
            Download CV
          </button>
        </div>
      </div>

      {/* Companies Section */}
      <div className="bg-card rounded-2xl p-8 mb-12 mx-6">
        <h3 className="text-xl mb-6">Companies I Worked With</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {['Company 1', 'Company 2', 'Company 3', 'Company 4', 'Company 5'].map((company, index) => (
            <div 
              key={index} 
              className="h-12 bg-muted rounded-lg flex items-center justify-center"
            >
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Works Section */}
      <div className="p-6">
        <h2 className="text-4xl font-bold mb-8">Works & Projects</h2>
        {/* Add your projects grid here */}
      </div>
    </div>
  );
}