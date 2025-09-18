const Terms = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-brand-navy">Terms of Service</h1>
        <div className="prose-lg text-brand-slate">
          <p><strong>Last Updated:</strong> January 18, 2025</p>

          <p>
            Welcome to Mullins Digital Ventures LLC. By accessing or using our website,
            products, or services, you agree to comply with and be bound by these Terms of Service.
          </p>

          <h2>Use of Our Services</h2>
          <p>
            You agree to use our website and services only for lawful purposes and in accordance
            with these Terms. You may not attempt to interfere with or disrupt the security or
            functionality of our systems.
          </p>

          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, logos, and intellectual property on this site are owned by
            Mullins Digital Ventures LLC and may not be used without prior written permission.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            We are not liable for any indirect, incidental, or consequential damages arising
            from your use of our website or services. All services are provided "as is" without
            warranties of any kind.
          </p>

          <h2>Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services if you
            violate these Terms or engage in harmful activities.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms are governed by the laws of the State of Wyoming, USA. Any disputes
            shall be resolved in the appropriate courts of Wyoming.
          </p>

          <h2>Contact Us</h2>
          <p>
            For questions about these Terms, please contact us at:<br />
            Email: <a href="mailto:admin@mullinsdigitalventures.com">admin@mullinsdigitalventures.com</a><br />
            Address: Mullins Digital Ventures LLC, Wyoming, USA
          </p>

          <p>
            We may update these Terms of Service periodically. Updates will be posted on this page
            with a revised effective date.
          </p>
        </div>

        <p className="mt-6">
          <a href="/" className="text-brand-blue hover:text-brand-navy smooth-transition">
            ← Return to Home
          </a>
        </p>
      </div>
    </div>
  );
};

export default Terms;
