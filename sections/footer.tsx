import { Instagram,Twitter,Facebook } from 'lucide-react';

const Footer = () => {
  return (
   <footer className="bg-[#e8f1fe]">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center py-4">
      <div className="flex space-x-6 mb-4 md:px-5">
        <a href="x.com"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit X page">
          <Instagram/>
        </a>
          <a href="x.com"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit X page">
          <Facebook/>
        </a>
          <a href="x.com"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="Visit X page">
          <Twitter/>
        </a>
      </div>
      <p className="text-sm font-jetBrains md:px-5 ">&copy; 2025 Frozio, All meow reserved.</p>
    </div>
   </footer>
  )
}

export default Footer;