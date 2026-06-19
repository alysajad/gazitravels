import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="Privacy Policy"
            subtitle="Your Privacy Matters"
            alignment="left"
          />
          
          <div className="mt-12 space-y-12 text-body text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Overview</h2>
              <p>
                This privacy policy will help you understand how your personal information is collected, used and protected by GAZI TOURS AND TRAVELS. By personal information we mean any information you provide to us — including your name, age, address, contact number, email address, card / payment information and, where relevant, the date of birth of children travelling with you, or any other such detail you choose to share.
              </p>
              <p className="mt-4">
                We assure you that we follow appropriate security standards to protect your privacy when you use our website and book with us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Use & Disclosure of Information</h2>
              <p className="font-semibold text-dark mb-4">
                GAZI TOURS AND TRAVELS does not sell or rent the personal information of our clients and users to any third party without the consent of the customer or user involved.
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>We use your information only with your consent, to deliver the products and services you have requested from us.</li>
                <li>Financial information such as credit card, net-banking and debit card details is collected directly by the secure payment gateways and not stored by GAZI TOURS AND TRAVELS.</li>
                <li>We may share necessary information with our trusted service partners and agents to respond to your queries and resolve issues, with restrictions placed on how they may use that data.</li>
                <li>Your basic information — such as name, age, phone number and address — is shared with the relevant service providers (such as airlines or hotel / accommodation providers) only as required to confirm your bookings.</li>
                <li>We may disclose information when required by Indian or foreign government agencies for security, immigration or customs purposes, or as otherwise required by law.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Security Measures</h2>
              <p>
                GAZI TOURS AND TRAVELS applies standard regulations and the best administrative and technical security measures available to us to protect your personal data from unauthorised access, alteration or disclosure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Cookies & Technology</h2>
              <p>
                Our website uses cookies to enhance your experience and to present customised information. Third parties such as Google may use cookies to serve advertisements based on your browsing history. You can control or disable cookies at any time through your browser settings, though some features of the site may then not function as intended.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">External Links</h2>
              <p>
                Our website may contain links that connect you to entirely different websites. GAZI TOURS AND TRAVELS bears no responsibility for the content or practices of those external sites, and we advise you to review their own terms and conditions and privacy policies before sharing any information with them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or how your information is handled, please reach out to us at <a href="mailto:info@gazitourandtravels.com" className="text-accent-hover font-medium underline">info@gazitourandtravels.com</a> or call / WhatsApp <a href="tel:+917006604820" className="text-accent-hover font-medium underline">+91 7006604820</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
