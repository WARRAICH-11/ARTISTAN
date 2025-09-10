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
          <div className="pt-20 min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Featured Artists</h1>
                <p className="text-xl text-gray-600 mb-8">Meet the talented artists whose work graces our collection</p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Artist profiles would go here */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Marina Delacroix</h3>
                    <p className="text-purple-600 mb-4">Abstract Expressionist</p>
                    <p className="text-gray-600">Known for her ethereal color compositions that transcend traditional boundaries.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Alessandro Rosetti</h3>
                    <p className="text-purple-600 mb-4">Landscape Master</p>
                    <p className="text-gray-600">Captures the profound beauty of nature with masterful oil painting techniques.</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-xl font-bold mb-2">Victoria Blackwood</h3>
                    <p className="text-purple-600 mb-4">Portrait Artist</p>
                    <p className="text-gray-600">Creates stunning classical portraits that capture the essence of human grace.</p>
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
          <div className="min-h-screen bg-gray-50 pt-20">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
              <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <p className="text-center text-gray-600">Secure checkout system would be implemented here.</p>
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
    <div className="min-h-screen bg-background">
      <Header />
      {renderPage()}
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