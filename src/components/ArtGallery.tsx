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

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const handleAddToCart = (artwork: ArtPiece, e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(artwork);
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curated Art
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover extraordinary pieces from renowned artists and emerging talents, 
            each carefully selected for their unique vision and exceptional craftsmanship.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          <Filter className="w-5 h-5 text-gray-400 mr-2" />
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`${
                selectedCategory === category.id 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' 
                  : 'hover:bg-purple-50'
              }`}
            >
              {category.name}
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </motion.div>

        {/* Art Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArtworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onMouseEnter={() => setHoveredArt(artwork.id)}
                onMouseLeave={() => setHoveredArt(null)}
              >
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <ImageWithFallback
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredArt === artwork.id ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-black/40 flex items-center justify-center space-x-4"
                  >
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90">
                      <Eye className="w-4 h-4 mr-2" />
                      Quick View
                    </Button>
                    <Button size="sm" variant="secondary" className="backdrop-blur-sm bg-white/90">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </motion.div>

                  {/* 3D Floating Price Tag */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ 
                      scale: hoveredArt === artwork.id ? 1 : 0.8,
                      rotate: hoveredArt === artwork.id ? 0 : -45
                    }}
                    className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-lg shadow-lg transform-gpu"
                  >
                    <span className="font-bold">${artwork.price.toLocaleString()}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {artwork.title}
                    </h3>
                    <p className="text-purple-600 font-medium">
                      by {artwork.artist}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm line-clamp-2">
                    {artwork.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{artwork.medium}</span>
                    <span>{artwork.dimensions}</span>
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 group"
                    onClick={(e) => handleAddToCart(artwork, e)}
                  >
                    <ShoppingBag className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Add to Collection
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Button 
            size="lg" 
            variant="outline" 
            className="px-8 py-4"
            onClick={() => {
              // In a real app, this would load more artworks
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