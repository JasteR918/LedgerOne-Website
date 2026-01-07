import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </motion.div>

        <motion.div 
          className="prose prose-neutral max-w-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Commitment to Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LedgerOne is built with privacy as its foundation. We believe your financial data is deeply personal and should remain entirely under your control. This policy explains our approach to privacy and how we protect your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Collection</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong className="text-foreground">We do not collect any personal data.</strong> LedgerOne operates 100% offline and does not transmit any information to external servers. Specifically:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>No personal information is collected</li>
              <li>No financial data is uploaded or transmitted</li>
              <li>No analytics or tracking tools are used</li>
              <li>No cookies are placed on your device</li>
              <li>No account creation is required</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Data Storage</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All your financial data is stored locally on your device using secure, encrypted storage provided by iOS. Your data never leaves your device and is protected by your device's built-in security features, including Face ID and device passcode.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LedgerOne does not integrate with any third-party services that could access your data. We do not use:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Cloud storage services</li>
              <li>Analytics platforms</li>
              <li>Advertising networks</li>
              <li>Social media integrations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since all data is stored locally on your device, you have complete control over it. You can:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Access all your data directly within the app</li>
              <li>Delete all data by removing the app from your device</li>
              <li>Export your data at any time using the app's export feature</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LedgerOne leverages iOS's built-in security infrastructure to protect your data. This includes hardware-level encryption, secure enclave for biometric data, and app sandboxing. We recommend enabling Face ID or Touch ID for additional protection.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              LedgerOne does not knowingly collect any information from children under 13. Since we don't collect any data at all, this applies to users of all ages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated revision date. Our commitment to not collecting your data will never change.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this privacy policy or LedgerOne's privacy practices, please contact us at{" "}
              <a 
                href="mailto:vedang_k@icloud.com" 
                className="text-foreground hover:underline"
              >
                vedang_k@icloud.com
              </a>
            </p>
          </section>
        </motion.div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
