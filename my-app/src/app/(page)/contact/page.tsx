import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Info } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center px-6 py-12 md:px-16 lg:px-24">
        {/* Contact Header */}
        <div className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold">Get In Touch With Us</h2>
          <p className="mt-2 text-sm text-gray-500">
            For more information about our products & services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!
          </p>
        </div>

        {/* Contact Details and Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 w-full max-w-5xl">
          {/* Contact Details */}
          <div className="space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <MapPin className="text-teal-600" />
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm w-40">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-teal-600" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm">Mobile: +(84) 546-6789</p>
                <p className="text-sm">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Info className="text-teal-600" />
              <div>
                <h4 className="font-semibold">Working Time</h4>
                <p className="text-sm">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-sm">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <Input placeholder="Your name" className="border rounded-md px-4 w-full py-2" /><br/>
            <Input placeholder="Email address" className="border rounded-md w-full px-4 py-2" /><br/>
            <Input placeholder="Subject (optional)" className="border rounded-md px-4 w-full py-2" />
            <Textarea placeholder="Type Your Message" className="border rounded-md px-4 py-2 h-28 w-full" />
            <Button className="bg-teal-600 text-white px-6 py-2 w-full md:w-auto">
              Submit
            </Button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 w-full max-w-5xl mt-16 p-6 rounded-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <div>
              <h4 className="font-semibold">High Quality</h4>
              <p className="text-sm text-gray-600">Crafted from top materials</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Warranty Protection</h4>
              <p className="text-sm text-gray-600">Over 2 years</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-2xl">🎧</span>
            <div>
              <h4 className="font-semibold">24 / 7 Support</h4>
              <p className="text-sm text-gray-600">Dedicated support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}