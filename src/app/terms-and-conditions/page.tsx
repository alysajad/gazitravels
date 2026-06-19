import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeading
            title="Terms & Conditions"
            subtitle="Booking & Cancellation"
            alignment="left"
          />
          
          <div className="mt-12 space-y-12 text-body text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Bookings & Payments</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>GAZI TOURS AND TRAVELS requires only 20% of the total tour cost to confirm and secure your booking. This percentage may vary depending on the itinerary, trip category and duration.</li>
                <li>The advance amount will be adjusted as per the recommendation of your personal travel consultant.</li>
                <li>Online payments are accepted through our secure payment gateway.</li>
                <li>A 3% additional charge will be levied on credit-card payments over the total amount.</li>
                <li>All bank charges and payment-gateway fees on remittances must be borne by the passenger.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Cancellation & Refunds</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Any cancellation must be notified to GAZI TOURS AND TRAVELS in writing.</li>
                <li>Cancellation charges will be effective from the date on which we receive your cancellation in writing.</li>
                <li>Cancellation of transportation tickets follows the rules of the respective authority.</li>
                <li>Air tickets issued at special / promotional fares are non-refundable, and the applicable cancellation charges are borne by the guest.</li>
                <li>Bookings made during peak tourist season may attract no refund on cancellation, regardless of the reason.</li>
                <li>Peak-season policies vary by region and by hotel. Hotels may apply their own cancellation policies, which we are obliged to follow. Any excess charges arising from such cancellations are the responsibility of the client and not of the travel agent.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Tour & Itinerary Changes</h2>
              <p>
                Itineraries are planned in advance, but travel can be affected by weather, road conditions, flight cancellations, or other circumstances beyond our control. In such cases GAZI TOURS AND TRAVELS reserves the right to amend, reschedule or substitute parts of the itinerary in the interest of your safety and comfort. We will always do our best to offer a suitable alternative of equal value.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-semibold text-dark mb-4">Acceptance</h2>
              <p>
                By confirming a booking with GAZI TOURS AND TRAVELS, you acknowledge that you have read, understood and agreed to these terms and conditions. For any clarification, please contact us at <a href="mailto:info@gazitourandtravels.com" className="text-accent-hover font-medium underline">info@gazitourandtravels.com</a> or call / WhatsApp <a href="tel:+917006604820" className="text-accent-hover font-medium underline">+91 7006604820</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
