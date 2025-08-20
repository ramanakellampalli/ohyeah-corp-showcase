import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold uppercase text-sm tracking-wide mb-4">OhYeah Software Pvt Ltd</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">Simplifying Business Software for the Next Generation. Fast, reliable, and built for scale.</p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold uppercase text-sm tracking-wide mb-4">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold uppercase text-sm tracking-wide mb-4">Connect</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-4 h-4 mr-2" />
                Twitter
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} OhYeah Software Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;