
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
         
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted motorcycle workshop in Edgware, London. Quality service since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-red-600 transition-colors text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Maintenance & Repairs</li>
              <li>MOT Testing</li>
              <li>Insurance Claims</li>
              <li>Parts & Accessories</li>
              <li>Motorcycle Sales</li>
              <li>Motorcycle Hire</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  193 Burnt Oak Broadway<br />
                  Edgware, London<br />
                  HA8 5EH
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a href="tel:02037379463" className="text-sm text-gray-400 hover:text-red-600 transition-colors">
                  020 3737 9463
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-red-600 flex-shrink-0" />
                <a
                  href="http://www.baraomotorcycles.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-red-600 transition-colors"
                >
                  baraomotorcycles.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {new Date().getFullYear()} Barao Motorcycles. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://wa.me/447482100697"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 hover:text-red-600 transition-colors"
              >
                WhatsApp
              </a>
              <button className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Privacy Policy
              </button>
              <button className="text-sm text-gray-500 hover:text-red-600 transition-colors">
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}