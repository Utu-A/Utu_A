import Projects from "@/components/Projects";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 mt-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
          Projects and Work
        </h1>
        <Projects />
      </div>
    </div>
  );
};

export default ProjectsPage;
