import { Calendar, Users } from "lucide-react";
import FounderProfile from "../../../components/FounderProfile";
import BookingCalendar from "../../../components/BookingCalendar";
import Navbar from "@/components/Navbar";

export default function BookStrategyCallPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar bookingPage={true} />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-4">
          Book a Free Strategy Call
        </h1>
        <p className="text-xl text-center mb-8 text-gray-600">
          Get expert insights from our founding team to boost your digital
          presence
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-12">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
            <Users className="mr-2" />
            Meet Our Founding Team
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <FounderProfile
              name="Mohamed Hefny"
              role="Co-Founder & Business Strategist"
              description="Expert in scaling businesses through digital exposure. Former Amazon and Morgan Stanley employee."
              expertise={[
                "Business Scaling",
                "Digital Marketing",
                "Corporate Strategy",
                "Tech Industry Insights",
              ]}
            />
            <FounderProfile
              name="Amr Hefny"
              role="Co-Founder & Technical Lead"
              description="Experienced full-stack developer and freelancer. Specializes in small to medium-sized business solutions."
              expertise={[
                "Full-Stack Development",
                "Business Sales Strategies",
                "Digital Exposure Tactics",
                "Custom Software Solutions",
              ]}
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-700">
            <Calendar className="mr-2" />
            Schedule Your Free Strategy Call
          </h2>
          <p className="mb-6 text-gray-600">
            Select an available date to book your free strategy call with
            Mohamed and Amr Hefny. Our founding team is excited to help you grow
            your business!
          </p>
          <BookingCalendar />
        </div>
      </main>
    </div>
  );
}
