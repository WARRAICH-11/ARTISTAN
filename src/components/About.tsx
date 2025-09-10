import { motion } from 'motion/react';
import { Award, Palette, Eye, Heart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function About() {
  const achievements = [
    {
      icon: Award,
      title: 'Curatorial Excellence',
      description: 'Over 200 exhibitions curated worldwide, featuring both emerging and established artists.'
    },
    {
      icon: Palette,
      title: 'Artistic Vision',
      description: 'Discovering unique artistic voices that challenge conventions and inspire new perspectives.'
    },
    {
      icon: Eye,
      title: 'Global Perspective',
      description: 'Building bridges between Eastern and Western art traditions through thoughtful curation.'
    },
    {
      icon: Heart,
      title: 'Passionate Advocacy',
      description: 'Dedicated to supporting artists and making exceptional art accessible to collectors worldwide.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm font-medium text-purple-600 uppercase tracking-wider"
              >
                Founder & Curator
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Hassan Warraich
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  Visionary Art Curator
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                With over 15 years of experience in the international art world, Hassan Warraich has dedicated his life to discovering, curating, and sharing extraordinary artistic expressions that challenge conventions and inspire profound connections.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                From the prestigious galleries of London and New York to the intimate studios of emerging artists in developing nations, Hassan's journey has been driven by an unwavering belief that art has the power to transform lives, bridge cultures, and create lasting beauty in our world.
              </motion.p>
            </div>

            {/* Achievements Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                rotateY: [0, 2, 0, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-2xl transform-gpu"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hassan Warraich in contemporary art gallery"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
            
            {/* Floating Achievement Card */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-6 max-w-xs border border-purple-100"
            >
              <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">
                Carefully curated artworks from renowned and emerging artists worldwide
              </div>
            </motion.div>

            {/* Floating Recognition Card */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-xl shadow-2xl p-4 max-w-48"
            >
              <div className="text-lg font-bold mb-1">15+ Years</div>
              <div className="text-xs opacity-90">
                International art curation experience
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}