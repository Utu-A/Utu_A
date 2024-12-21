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
        <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 w-fit">
          Download CV
        </button>
      </div>
    );
  };
  
  export default Introduction;
  