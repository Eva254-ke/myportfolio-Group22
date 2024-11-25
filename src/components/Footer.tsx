import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-8">
            <a
              href="https://github.com/Eva254-ke"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/zachariah-evans-6aa862301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0A66C2] p-2 rounded-lg hover:bg-[#004182] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/Zachariah075730"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1DA1F2] p-2 rounded-lg hover:bg-[#0C85D0] transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="mailto:evanszachary36@proton.me"
              className="hover:text-accent transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Zachariah Evans. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;