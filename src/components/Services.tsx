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
      gradient: 'from-violet-500 to-fuchsia-500'
    },
    {
      icon: Camera,
      title: 'Landscape Mastery',
      description: 'Breathtaking natural scenes captured with masterful technique, bringing the beauty of nature indoors.',
      features: ['Oil Paintings', 'Watercolors', 'Digital Landscapes', 'Photorealistic'],
      image: 'https://images.unsplash.com/photo-1701979396436-7d2107f65ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvaWwlMjBwYWludGluZyUyMGxhbmRzY2FwZSUyMGFydHxlbnwxfHx8fDE3NTc1MjQ1MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '90+ Pieces',
      gradient: 'from-sky-500 to-cyan-500'
    },
    {
      icon: Brush,
      title: 'Contemporary Voices',
      description: 'Cutting-edge works from today\'s most innovative artists, reflecting modern culture and society.',
      features: ['Mixed Media', 'Installation Art', 'Digital Creations', 'Experimental'],
      image: 'https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '200+ Pieces',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Shapes,
      title: 'Sculptural Forms',
      description: 'Three-dimensional artworks that explore space, material, and form in extraordinary ways.',
      features: ['Bronze Sculptures', 'Modern Forms', 'Interactive Pieces', 'Kinetic Art'],
      image: 'https://images.unsplash.com/photo-1750920362984-0a0d44d04577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnQlMjBnYWxsZXJ5fGVufDF8fHx8MTc1NzUyNDUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '60+ Pieces',
      gradient: 'from-amber-400 to-orange-500'
    }
  ];

  return (
    <section id="collections" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.24em] text-violet-300"
          >
            Featured Collections
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black text-white md:text-5xl"
          >
            Explore Our
            <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
              Curated Collections
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-slate-300"
          >
            Discover our carefully curated collections, each representing a unique artistic journey and offering pieces that speak to different aesthetic sensibilities.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection, index) => {
            const Icon = collection.icon;
            return (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-slate-900/80 shadow-[0_25px_60px_rgba(15,23,42,0.52)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/35"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={collection.image}
                    alt={collection.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    className={`absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r ${collection.gradient} shadow-[0_10px_25px_rgba(15,23,42,0.35)]`}
                  >
                    <Icon className="h-5 w-5 text-white" />
                  </motion.div>

                  <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-slate-950/70 px-3 py-1 backdrop-blur-md">
                    <span className="text-sm font-semibold text-white">{collection.count}</span>
                  </div>
                </div>

                <div className="space-y-6 p-8">
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-white">{collection.title}</h3>
                    <p className="leading-7 text-slate-300">{collection.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {collection.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-300">
                        <div className={`mr-2 h-2 w-2 rounded-full bg-gradient-to-r ${collection.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full rounded-full bg-gradient-to-r ${collection.gradient} px-6 text-white shadow-[0_15px_30px_rgba(168,85,247,0.25)] hover:brightness-110`}
                    onClick={() => setCurrentPage('gallery')}
                  >
                    Explore Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-sky-500/10 p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.7)]"
        >
          <h3 className="mb-4 text-2xl font-bold text-white">Looking for Something Specific?</h3>
          <p className="mx-auto mb-6 max-w-md text-slate-300">
            Our expert curators are here to help you find the perfect piece for your space and style.
          </p>
          <Button
            size="lg"
            className="rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 px-8 text-slate-950 shadow-[0_0_30px_rgba(244,114,182,0.3)]"
            onClick={() => setCurrentPage('contact')}
          >
            Consult with Our Curators
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}