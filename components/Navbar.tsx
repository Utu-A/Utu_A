import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-12 p-4">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <div className="flex gap-6 items-center">
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="./component/About" className="hover:text-gray-300">About</a>
        <a href="./component/Services" className="hover:text-gray-300">Services</a>
        <a href="./components/Works" className="hover:text-gray-300">Works</a>
        <a href="auth/contact" className="hover:text-gray-300">Contact</a>
        <ThemeToggle />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
