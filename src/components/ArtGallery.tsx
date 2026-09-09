import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Heart, Eye, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { artworks, categories } from '../data/artworks';
import { useShoppingCart, ArtPiece } from './ShoppingCartContext';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function ArtGallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredArt, setHoveredArt] = useState<string | null>(null);
  const { addToCart } = useShoppingCart();

  const filteredArtworks = selectedCategory === 'all' ? artworks : artworks.filter((art) => art.category === selectedCategory);

  const handleAddToCart = (artwork: ArtPiece, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(artwork);
  };

  return (
    <section id="gallery" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl font-black text-white md:text-5xl">
            Curated Art
            <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
              Collection
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl leading-8 text-slate-300">
            Discover extraordinary pieces from renowned artists and emerging talents, each carefully selected for their unique vision and exceptional craftsmanship.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-wrap items-center justify-center gap-3"
        >
          <Filter className="mr-2 h-5 w-5 text-slate-400" />
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id
                  ? 'rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 text-slate-950 shadow-[0_0_20px_rgba(244,114,182,0.3)]'
                  : 'rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2 bg-slate-900/80 text-slate-100">
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900/80 shadow-[0_20px_60px_rgba(15,23,42,0.5)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/35"
                onMouseEnter={() => setHoveredArt(artwork.id)}
                onMouseLeave={() => setHoveredArt(null)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredArt === artwork.id ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-950/45"
                  >
                    <Button size="sm" variant="secondary" className="rounded-full bg-white/90 text-slate-900 backdrop-blur-sm">
                      <Eye className="mr-2 h-4 w-4" />
                      Quick View
                    </Button>
                    <Button size="sm" variant="secondary" className="rounded-full bg-white/90 text-slate-900 backdrop-blur-sm">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: hoveredArt === artwork.id ? 1 : 0.8, rotate: hoveredArt === artwork.id ? 0 : -45 }}
                    className="absolute right-4 top-4 rounded-xl bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 px-3 py-2 text-sm font-black text-slate-950 shadow-[0_15px_30px_rgba(244,114,182,0.3)]"
                  >
                    <span>${artwork.price.toLocaleString()}</span>
                  </motion.div>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h3 className="mb-1 text-xl font-bold text-white">{artwork.title}</h3>
                    <p className="text-sm font-medium text-violet-300">by {artwork.artist}</p>
                  </div>

                  <p className="line-clamp-2 text-sm leading-6 text-slate-300">{artwork.description}</p>

                  <div className="flex items-center justify-between text-sm text-slate-400">
                    <span>{artwork.medium}</span>
                    <span>{artwork.dimensions}</span>
                  </div>

                  <Button
                    className="w-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-[0_15px_30px_rgba(99,102,241,0.35)] hover:brightness-110"
                    onClick={(e) => handleAddToCart(artwork, e)}
                  >
                    <ShoppingBag className="mr-2 h-4 w-4" />
                    Add to Collection
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            variant="outline"
            className="rounded-full border border-white/10 bg-white/5 px-8 py-5 text-base font-semibold text-white hover:bg-white/10"
            onClick={() => {
              alert('Loading more artworks... (Feature would be implemented with pagination)');
            }}
          >
            Load More Artworks
          </Button>
        </motion.div>
      </div>
    </section>
  );
}