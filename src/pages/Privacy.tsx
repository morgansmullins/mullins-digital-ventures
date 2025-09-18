const Privacy = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-brand-navy">Privacy Policy</h1>
        <div className="prose-lg text-brand-slate">

          <p><strong>Last Updated:</strong> January 18, 2025</p>

          <p>
            Mullins Digital Ventures LLC ("we," "us," or "our") operates this website and respects your privacy. 
            This Privacy Policy explains how we collect, use, and protect your information.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Information We Collect</h2>
          <ul className="list-disc list-inside">
            <li>Contact information (name, email address, phone number)</li>
            <li>Business information you provide when contacting us</li>
            <li>Website usage data (pages visited, time spent, browser type)</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">How We Use Your Information</h2>
          <p>
            To respond to inquiries, improve our services, send occasional updates (opt-out anytime), 
            and comply with legal obligations.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Information Sharing</h2>
          <p>
            We do <strong>not</strong> sell or rent personal information. We may share data only with 
            service providers who help operate our website, or when required by law.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
          <p>
            We implement technical and organizational measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Your Rights</h2>
          <ul className="list-disc list-inside">
            <li>Access your personal information</li>
            <li>Request correction or deletion</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Contact Us</h2>
          <p>
            Email: <a href="mailto:admin@mullinsdigitalventures.com" className="text-brand-blue hover:underline">
              admin@mullinsdigitalventures.com
            </a><br />
            Address: Mullins Digital Ventures LLC, Wyoming, USA
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Updates will be posted on this page with a revised effective date.
          </p>

          <p className="mt-8">
            <a href="/" className="text-brand-blue hover:text-brand-navy smooth-transition">
              ← Return to Home
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
