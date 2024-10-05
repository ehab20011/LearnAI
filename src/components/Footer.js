// src/components/Footer.js
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} LearnAI. All Rights Reserved.
          </p>
  
          {/* Social Media Icons (Placeholder for now) */}
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              Twitter
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  }
  