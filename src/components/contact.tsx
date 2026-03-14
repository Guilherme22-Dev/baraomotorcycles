import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="text-red-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have questions or need a quote? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Address</h4>
                    <p className="text-gray-400">193 Burnt Oak Broadway</p>
                    <p className="text-gray-400">Edgware, London</p>
                    <p className="text-gray-400">HA8 5EH</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Phone</h4>
                    <a href="tel:02037379463" className="text-gray-400 hover:text-red-600 transition-colors block">
                      020 3737 9463
                    </a>
                    <a href="tel:07482100697" className="text-gray-400 hover:text-red-600 transition-colors block">
                      074 8210 0697
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Website</h4>
                    <a
                      href="http://www.baraomotorcycles.co.uk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      www.baraomotorcycles.co.uk
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                    <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-400">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Card */}
          <div className="relative">
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-8 lg:p-12 shadow-2xl shadow-red-900/50">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Message Us on WhatsApp</h3>
                  <p className="text-red-100">Fast response guaranteed</p>
                </div>
              </div>

              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Get instant answers to your questions, request quotes, or book your service appointment directly through WhatsApp. We're here to help!
              </p>

              <a
                href="https://wa.me/447482100697"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white hover:bg-gray-100 text-red-600 font-bold py-4 px-6 rounded-lg text-center transition-all shadow-lg text-lg"
              >
                Open WhatsApp Chat
              </a>

              <div className="mt-6 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm text-center">
                  Available during business hours
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.5831234567!2d-0.2759!3d51.6091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761482c9a7c8df%3A0x1234567890abcdef!2s193%20Burnt%20Oak%20Broadway%2C%20Edgware%20HA8%205EH!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale contrast-125"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
