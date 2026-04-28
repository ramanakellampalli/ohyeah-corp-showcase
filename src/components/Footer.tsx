import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-6">

        <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
          OhYeah Software
        </span>

        <nav className="hidden sm:flex items-center gap-6">
          {[
            { to: "/home", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact" },
          ].map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/company/ohyeah-software-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:ohyeahsoftwarepvtlmtd@gmail.com"
            aria-label="Email"
            className="text-gray-400 hover:text-gray-900 transition-colors"
          >
            <Mail className="w-4 h-4" />
          </a>
          <span className="text-xs text-gray-400 hidden md:inline">
            © {new Date().getFullYear()} OhYeah Software Pvt Ltd
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
