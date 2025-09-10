import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search, ShoppingBag, Heart } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useShoppingCart } from './ShoppingCartContext';
import { useNavigation } from './Navigation';
import React from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalItems } = useShoppingCart();
  const { setCurrentPage } = useNavigation();

  const menuItems = [
    { label: 'Gallery', page: 'gallery' as const },
    { label: 'Collections', page: 'collections' as const },
    { label: 'Artists', page: 'artists' as const },
    { label: 'About', page: 'about' as const },
    { label: 'Contact', page: 'contact' as const },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">ARTISTAN</div>
              <div className="text-xs text-muted-foreground -mt-1">Curated by Hassan Warraich</div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => setCurrentPage(item.page)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Heart className="w-5 h-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => setCurrentPage('cart')}
            >
              <ShoppingBag className="w-5 h-5" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 min-w-5 h-5 flex items-center justify-center text-xs p-0">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            
            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border"
          >
            <nav className="py-6 space-y-4">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsMenuOpen(false);
                  }}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium text-left"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
                <Button variant="ghost" size="sm">
                  <Heart className="w-5 h-5 mr-2" />
                  Favorites
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
}