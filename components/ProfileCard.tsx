import { Github, Twitter, Linkedin, Facebook } from "lucide-react";

const ProfileCard = () => {
  return (
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
        <a
          href="https://www.facebook.com/your_facebook_handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook Profile"
          className="p-2 hover:text-orange-500"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://twitter.com/your_twitter_handle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter Profile"
          className="p-2 hover:text-orange-500"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/utkarshsinghrajput23/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="p-2 hover:text-orange-500"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://github.com/Utu-A"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="p-2 hover:text-orange-500"
        >
          <Github size={20} />
        </a>
      </div>
    </div>
  );
};

export default ProfileCard;
