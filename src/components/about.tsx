import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Certified mechanics with years of experience",
  },
  {
    icon: Users,
    title: "Customer Focused",
    description: "Dedicated to exceptional customer service",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Efficient service without compromising quality",
  },
  {
    icon: CheckCircle,
    title: "Quality Guaranteed",
    description: "All work comes with our warranty",
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-red-600">Barao Motorcycles</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              Located in the heart of Edgware, London, Barao Motorcycles has been serving the motorcycling community with passion and dedication. We're more than just a workshop – we're enthusiasts who understand your love for riding.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From routine servicing to complex repairs, MOT testing to insurance claims, buying your dream bike to hiring one for an adventure – we're your one-stop destination for all things motorcycles.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-red-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762604462465-76720d039e9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcmVwYWlyJTIwd29ya3Nob3AlMjBtZWNoYW5pY3xlbnwxfHx8fDE3NzM0MTIwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Barao Motorcycles Workshop"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
