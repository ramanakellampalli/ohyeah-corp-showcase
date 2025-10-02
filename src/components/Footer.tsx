import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-white font-bold text-xl mb-6">OhYeah Software Pvt Ltd</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">Simplifying Business Software for the Next Generation. Fast, reliable, and built for scale.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Quick Links</h4>
            <div className="space-y-4">
              <Link to="/" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
              <Link to="/about" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                About
              </Link>
              <Link to="/products" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Products
              </Link>
              <Link to="/contact" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-6">Connect</h4>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/company/ohyeah-software-pvt-ltd/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200 group cursor-pointer"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                LinkedIn
              </a>
              <a 
                href="#"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200 group cursor-pointer"
              >
                <Twitter className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Twitter
              </a>
              <a 
                href="#"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200 group cursor-pointer"
              >
                <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                GitHub
              </a>
              <a 
                href="mailto:ohyeahsoftwarepvtlmtd@gmail.com"
                className="flex items-center text-gray-400 hover:text-blue-400 transition-all duration-200 group cursor-pointer"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-200" />
                Email
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} OhYeah Software Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;