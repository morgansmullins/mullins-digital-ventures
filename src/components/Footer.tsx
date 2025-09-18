const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Mullins Digital Ventures</h3>
            <p className="text-white/80">
              Building ventures at the intersection of AI, digital products, and media innovation.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-white/80 hover:text-white smooth-transition">
                Services
              </a>
              <a href="#about" className="block text-white/80 hover:text-white smooth-transition">
                About
              </a>
              <a href="#contact" className="block text-white/80 hover:text-white smooth-transition">
                Contact
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <a href="/privacy" className="block text-white/80 hover:text-white smooth-transition">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-white/80 hover:text-white smooth-transition">
                Terms of Service
              </a>
              <a href="/cookies" className="block text-white/80 hover:text-white smooth-transition">
                Cookie & Disclaimer Policy
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80">
            © 2025 Mullins Digital Ventures LLC — Registered in Wyoming, USA
          </p>
          <p className="text-white/80 mt-2 text-sm">
            This site may use AI-generated content. Outputs are provided "as is" and should not be relied upon as professional advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;