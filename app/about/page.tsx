import ProfileCard from "@/components/ProfileCard";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <ProfileCard />
        <div>
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg mb-4">
            Hello! I'm a final-year Electrical Engineering student passionate about technology and innovation. I serve as the cybersecurity leader at my college, contributing to a safe digital environment and raising awareness about cybersecurity best practices. Additionally, I'm the secretary of the robotics team, where I help drive projects and foster collaboration among team members. As the payload lead of the rocketry team, I ensure the development of payload systems for successful rocket launches.
          </p>
          <p className="text-lg mb-4">
            I also have research certified by Microsoft and Google in the field of quantum communication, which demonstrates my commitment to exploring cutting-edge technologies. Alongside my academic and extracurricular pursuits, I have a strong interest in software development, with a focus on creating intuitive and impactful projects. My journey is driven by a passion for learning and contributing to meaningful technological advancements.
          </p>
          <p className="text-lg">
            Feel free to explore my projects and reach out if you'd like to collaborate or discuss ideas. I'm always open to exciting opportunities in the fields of technology, engineering, and research.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
