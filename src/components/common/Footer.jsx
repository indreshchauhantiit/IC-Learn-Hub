
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const socialLinks = [
    { name: "Facebook", Icon: FaFacebookF, url: "https://facebook.com" },
    { name: "Instagram", Icon: FaInstagram, url: "https://instagram.com" },
    { name: "LinkedIn", Icon: FaLinkedinIn, url: "https://linkedin.com" },
    { name: "Twitter", Icon: FaTwitter, url: "https://twitter.com" },
  ];

  const categories = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Digital Marketing",
  ];

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link to="/" className="mb-4 flex items-center gap-2">
              <BookOpen className="h-7 w-7 text-indigo-400" />
              <span className="text-2xl font-bold text-white">
                IC-LearnHub
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-slate-400">
              Learn new skills, explore your potential,
              and build your future with IC-LearnHub.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex gap-4">
              {socialLinks.map(({ name, Icon, url }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  className="text-slate-400 transition hover:text-white"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-white">
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    to="/courses"
                    className="hover:text-white"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">
              Contact Us
            </h3>
            <p className="text-sm leading-6 text-slate-400">
              Have questions about our courses?
              Get in touch with our team.
            </p>
            <a
              href="mailto:support@IC-learnhub.example"
              className="mt-3 inline-block text-sm text-indigo-400 hover:text-indigo-300"
            >
              support@IC-learnhub.example
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} IC-LearnHub. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;