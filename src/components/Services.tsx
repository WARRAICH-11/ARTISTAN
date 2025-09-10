import { motion } from 'motion/react';
import { Palette, Brush, Camera, Shapes, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigation } from './Navigation';
import React from 'react';

export function Services() {
  const { setCurrentPage } = useNavigation();
  const collections = [
    {
      icon: Palette,
      title: 'Abstract Expressions',
      description: 'Bold, contemporary pieces that challenge perception and evoke deep emotional responses through color and form.',
      features: ['Modern Abstract', 'Color Studies', 'Geometric Forms', 'Textural Works'],
      image: 'https://images.unsplash.com/photo-1592537131333-2bee8853e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzUyNDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '150+ Pieces',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Camera,
      title: 'Landscape Mastery',
      description: 'Breathtaking natural scenes captured with masterful technique, bringing the beauty of nature indoors.',
      features: ['Oil Paintings', 'Watercolors', 'Digital Landscapes', 'Photorealistic'],
      image: 'https://images.unsplash.com/photo-1701979396436-7d2107f65ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGxhbmRzY2FwZSUyMGFydHxlbnwxfHx8fDE3NTc1MjQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '90+ Pieces',
      gradient: 'from-blue-500 to-teal-500'
    },
    {
      icon: Brush,
      title: 'Contemporary Voices',
      description: 'Cutting-edge works from today\'s most innovative artists, reflecting modern culture and society.',
      features: ['Mixed Media', 'Installation Art', 'Digital Creations', 'Experimental'],
      image: 'https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '200+ Pieces',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Shapes,
      title: 'Sculptural Forms',
      description: 'Three-dimensional artworks that explore space, material, and form in extraordinary ways.',
      features: ['Bronze Sculptures', 'Modern Forms', 'Interactive Pieces', 'Kinetic Art'],
      image: 'https://images.unsplash.com/photo-1750920362984-0a0d44d04577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc1NzUyNDUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '60+ Pieces',
      gradient: 'from-green-500 to-yellow-500'
    }
  ];

  return (
    <section id="collections" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-sm font-medium text-purple-600 uppercase tracking-wider mb-4"
          >
            Featured Collections
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Explore Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}Curated Collections
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            Discover our carefully curated collections, each representing a unique artistic journey 
            and offering pieces that speak to different aesthetic sensibilities.
          </motion.p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Floating Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${collection.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Count Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-900">{collection.count}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{collection.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{collection.description}</p>
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className={`w-2 h-2 bg-gradient-to-r ${collection.gradient} rounded-full mr-2`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    className={`w-full bg-gradient-to-r ${collection.gradient} hover:opacity-90 transition-opacity group-hover:scale-[1.02] transition-transform`}
                    onClick={() => setCurrentPage('gallery')}
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Looking for Something Specific?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Our expert curators are here to help you find the perfect piece for your space and style.
          </p>
          <Button 
            size="lg" 
            className="px-8 bg-gradient-to-r from-purple-600 to-blue-600"
            onClick={() => setCurrentPage('contact')}
          >
            Consult with Our Curators
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}