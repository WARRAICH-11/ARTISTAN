import { ShoppingCartProvider } from './components/ShoppingCartContext';
import { NavigationProvider, useNavigation } from './components/Navigation';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { ArtGallery } from './components/ArtGallery';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';
import { ShoppingCart } from './components/ShoppingCart';
import { React } from 'react';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <About />
            <Services />
            <ArtGallery />
            <Portfolio />
            <Contact />
          </>
        );
      case 'gallery':
        return (
          <div className="pt-20">
            <ArtGallery />
          </div>
        );
      case 'collections':
        return (
          <div className="pt-20">
            <Services />
          </div>
        );
      case 'artists':
        return (
          <div className="pt-20 min-h-screen bg-[#070b14]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
              <div className="text-center">
                <h1 className="mb-6 text-4xl font-bold text-white">Featured Artists</h1>
                <p className="mb-8 text-xl text-slate-300">Meet the talented artists whose work graces our collection</p>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="glass-card rounded-[1.5rem] p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">Marina Delacroix</h3>
                    <p className="mb-4 text-violet-300">Abstract Expressionist</p>
                    <p className="text-slate-300">Known for her ethereal color compositions that transcend traditional boundaries.</p>
                  </div>
                  <div className="glass-card rounded-[1.5rem] p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">Alessandro Rosetti</h3>
                    <p className="mb-4 text-violet-300">Landscape Master</p>
                    <p className="text-slate-300">Captures the profound beauty of nature with masterful oil painting techniques.</p>
                  </div>
                  <div className="glass-card rounded-[1.5rem] p-6">
                    <h3 className="mb-2 text-xl font-bold text-white">Victoria Blackwood</h3>
                    <p className="mb-4 text-violet-300">Portrait Artist</p>
                    <p className="text-slate-300">Creates stunning classical portraits that capture the essence of human grace.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'about':
        return (
          <div className="pt-20">
            <About />
          </div>
        );
      case 'contact':
        return (
          <div className="pt-20">
            <Contact />
          </div>
        );
      case 'cart':
        return <ShoppingCart />;
      case 'checkout':
        return (
          <div className="min-h-screen bg-[#070b14] pt-20">
            <div className="mx-auto max-w-4xl px-6 py-16 lg:px-8">
              <h1 className="mb-8 text-3xl font-bold text-white">Checkout</h1>
              <div className="glass-card rounded-[1.5rem] p-8">
                <p className="text-center text-slate-300">Secure checkout system would be implemented here.</p>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <ArtGallery />
            <Portfolio />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 antialiased selection:bg-fuchsia-500/40">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.14),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.12),_transparent_30%)]" />
      <div className="pointer-events-none fixed inset-x-0 top-0 h-96 bg-[radial-gradient(circle,_rgba(251,191,36,0.12),_transparent_50%)]" />
      <Header />
      <main className="relative z-10">{renderPage()}</main>
    </div>
  );
}

export default function App() {
  return (
    <ShoppingCartProvider children={undefined}>
      <NavigationProvider children={undefined}>
        <AppContent />
      </NavigationProvider>
    </ShoppingCartProvider>
  );
}