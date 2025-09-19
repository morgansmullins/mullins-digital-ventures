const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-6 sm:py-8 md:py-12 px-3 sm:px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-6 md:mb-8">
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Mullins Digital Ventures</h3>
            <p className="text-white/80 mb-2 text-sm sm:text-base">
              Transforming the Digital landscape
            </p>
            <p className="text-white/80 text-sm sm:text-base">
              Building ventures at the intersection of AI, digital products, and media innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                Services
              </a>
              <a href="#about" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                About
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                Terms of Service
              </a>
              <a href="/cookies" className="block text-white/80 hover:text-white smooth-transition text-sm sm:text-base touch-manipulation py-1">
                Cookie & Disclaimer Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 sm:pt-8 text-center">
          <p className="text-white/80 text-sm sm:text-base">
            © 2025 Mullins Digital Ventures LLC — Registered in Wyoming, USA
          </p>
          <p className="text-white/80 mt-2 text-xs sm:text-sm">
            This site may use AI-generated content. Outputs are provided "as is" and should not be relied upon as professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;