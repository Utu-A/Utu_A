const Introduction = () => {
  return (
    <div className="bg-card rounded-2xl p-8 flex flex-col justify-center">
      <h3 className="text-xl mb-4">Hello There!</h3>
      <h2 className="text-4xl font-bold mb-4">
        Securing systems, building robots, launching payloads, and redefining quantum tech.
      </h2>
      <div className="flex items-center gap-2 mb-6">
        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        <p className="text-muted-foreground">Available for Freelancing</p>
      </div>
      <a
        href="https://docs.google.com/document/d/1P1V9p-CX6Ai3Hm3aOCwTqwfikZwBWrfEf4HtZQzIu3E/edit?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-fit transition-colors duration-300"
      >
        Download CV
      </a>
    </div>
  );
};

export default Introduction;