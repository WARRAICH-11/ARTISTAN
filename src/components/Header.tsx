import { useState } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Search, ShoppingBag, Heart, Sparkles } from 'lucide-react';
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex cursor-pointer items-center gap-3"
            onClick={() => setCurrentPage('home')}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-200 via-rose-300 to-violet-500 shadow-[0_0_30px_rgba(244,114,182,0.35)]">
              <span className="text-lg font-black text-slate-950">A</span>
            </div>
            <div>
              <div className="text-2xl font-black tracking-[0.25em] text-white">AURELIA</div>
              <div className="-mt-1 text-[10px] uppercase tracking-[0.28em] text-slate-400">Curated by Hassan Warraich</div>
            </div>
          </motion.div>

          <nav className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => setCurrentPage(item.page)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                className="text-sm font-medium tracking-[0.18em] text-slate-300 transition-colors duration-200 hover:text-white"
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden text-slate-200 hover:bg-white/5 md:flex">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="hidden text-slate-200 hover:bg-white/5 md:flex">
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="relative rounded-full border border-white/10 bg-white/5 text-slate-100 hover:bg-white/10"
              onClick={() => setCurrentPage('cart')}
            >
              <ShoppingBag className="h-4 w-4" />
              {getTotalItems() > 0 && (
                <Badge className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center p-0 text-[10px]">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
            <Button
              size="sm"
              className="hidden rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 text-slate-950 shadow-[0_0_24px_rgba(244,114,182,0.35)] hover:brightness-110 lg:inline-flex"
              onClick={() => setCurrentPage('contact')}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Private Viewings
            </Button>

            <button
              className="rounded-full border border-white/10 p-2 text-slate-100 lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 lg:hidden"
          >
            <nav className="space-y-4 py-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setCurrentPage(item.page);
                    setIsMenuOpen(false);
                  }}
                  className="block text-left text-base font-medium tracking-[0.16em] text-slate-300 transition-colors hover:text-white"
                >
                  {item.label}
                </button>
              ))}
              <div className="flex items-center gap-3 border-t border-white/10 pt-4">
                <Button variant="ghost" size="sm" className="text-slate-200">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-200">
                  <Heart className="mr-2 h-4 w-4" />
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