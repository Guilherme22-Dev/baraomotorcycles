import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Wrench, FileCheck, Shield, Package, ShoppingCart, Key } from "lucide-react";

const services = [
  {
    title: "Maintenance & Repairs",
    description: "Expert motorcycle servicing and repairs by certified mechanics. From routine maintenance to complex engine work, we keep your bike running smoothly.",
    icon: Wrench,
    image: "https://images.unsplash.com/photo-1762604462465-76720d039e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmVwYWlyJTIwd29ya3Nob3AlMjBtZWNoYW5pY3xlbnwxfHx8fDE3NzM0MTIwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "MOT Testing",
    description: "Authorised MOT testing centre for motorcycles. Fast, reliable, and thorough inspections to ensure your bike meets all safety standards.",
    icon: FileCheck,
    image: "https://images.unsplash.com/photo-1714968382877-df9dc01ad17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwTU9UJTIwaW5zcGVjdGlvbnxlbnwxfHx8fDE3NzM0MTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Insurance Claims",
    description: "Professional assistance with motorcycle insurance claims. We work with all major insurers to get your bike back on the road quickly.",
    icon: Shield,
    image: "https://images.unsplash.com/photo-1759665996019-c2bdf600b90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHN8ZW58MXx8fHwxNzczMzg1ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Parts & Accessories",
    description: "Wide range of genuine and aftermarket parts. Quality components, accessories, and gear to enhance your riding experience.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1759665996019-c2bdf600b90f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwZW5naW5lJTIwcGFydHN8ZW58MXx8fHwxNzczMzg1ODYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Motorcycle Sales",
    description: "Quality motorcycles for sale. From sport bikes to cruisers, we offer carefully selected bikes with full service history and warranty options.",
    icon: ShoppingCart,
    image: "https://images.unsplash.com/photo-1769539228472-2fc9eea190e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydCUyMG1vdG9yY3ljbGUlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzMzNjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Motorcycle Hire",
    description: "Flexible motorcycle rental service. Whether for a day or longer, hire quality bikes for your adventures around London and beyond.",
    icon: Key,
    image: "https://images.unsplash.com/photo-1760880921253-53b8bd0ee843?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmVudGFsJTIwc2VydmljZXxlbnwxfHx8fDE3NzM0MTIwMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive motorcycle services tailored to your needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-red-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-900/20"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-red-600 p-3 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://wa.me/447482100697"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg font-medium transition-all shadow-lg shadow-red-900/50"
          >
            Get a Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
