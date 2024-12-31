import React from 'react';

const About = () => {
  return (
    <section className="about-section py-10 px-5 bg-background text-foreground">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-5">About Me</h2>
        <p className="text-lg leading-7 mb-5">
          Hello! My name is Matt, and I am an Electrical Engineering final-year student with a strong passion for technology and innovation. I am a seasoned software developer with a focus on creating efficient and scalable solutions, and I actively contribute as a cybersecurity leader at my college.
        </p>
        <p className="text-lg leading-7 mb-5">
          I have the honor of serving as the secretary of the robotics team, where I help spearhead cutting-edge projects, and as the payload lead for the rocketry team, where I guide the design and development of payload systems. My research in quantum communication, certified by Microsoft and Google, is a testament to my dedication to pushing the boundaries of what technology can achieve.
        </p>
        <p className="text-lg leading-7">
          Beyond academics and research, I am deeply committed to fostering teamwork, continuous learning, and innovation. This portfolio showcases my journey, projects, and aspirations. Feel free to explore and connect with me to discuss collaboration opportunities!
        </p>
      </div>
    </section>
  );
};

export default About;
