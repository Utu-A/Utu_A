import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center mb-12 p-4">
      <h1 className="text-2xl font-bold">Portfolio</h1>

      <div className="flex gap-6 items-center">
        <Link href="/" className="hover:text-gray-300">Home</Link>
        <Link href="about" className="hover:text-gray-300">About</Link>
        <Link href="project" className="hover:text-gray-300">Projects</Link>
        <Link href="auth/contact" className="hover:text-gray-300">Contact</Link>
        <ThemeToggle />
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
