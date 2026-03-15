// src/App.tsx
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Services } from "./components/services";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="w-full scroll-smooth font-sans bg-black text-white">
      {/* Header fixo */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Serviços */}
      <Services />

      {/* Sobre */}
      <About />

      {/* Contato */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
