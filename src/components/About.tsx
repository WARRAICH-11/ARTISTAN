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
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm font-medium uppercase tracking-[0.24em] text-violet-300"
              >
                Founder & Curator
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-black text-white md:text-5xl"
              >
                Hassan Warraich
                <span className="mt-2 block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
                  Visionary Art Curator
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-8 text-slate-300"
              >
                With over 15 years of experience in the international art world, Hassan Warraich has dedicated his life to discovering, curating, and sharing extraordinary artistic expressions that challenge conventions and inspire profound connections.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-8 text-slate-300"
              >
                From the prestigious galleries of London and New York to the intimate studios of emerging artists in developing nations, Hassan’s journey has been driven by an unwavering belief that art has the power to transform lives, bridge cultures, and create lasting beauty in our world.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
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
                    className="glass-card flex items-start gap-4 rounded-[1.4rem] p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/25 to-amber-300/25 text-violet-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-base font-semibold text-white">{achievement.title}</h3>
                      <p className="text-sm leading-6 text-slate-300">{achievement.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ rotateY: [0, 2, 0, -2, 0], scale: [1, 1.02, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_0_50px_rgba(168,85,247,0.18)]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Hassan Warraich in contemporary art gallery"
                className="h-[620px] w-full rounded-[1.5rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 max-w-xs rounded-[1.3rem] border border-violet-400/20 bg-slate-950/90 p-5 shadow-[0_20px_40px_rgba(15,23,42,0.45)] backdrop-blur-xl"
            >
              <div className="mb-1 text-3xl font-black text-violet-300">500+</div>
              <div className="text-sm leading-6 text-slate-300">
                Carefully curated artworks from renowned and emerging artists worldwide
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -right-5 -top-5 max-w-48 rounded-[1.2rem] bg-gradient-to-br from-amber-200 via-rose-300 to-violet-500 p-4 text-slate-950 shadow-[0_20px_40px_rgba(168,85,247,0.35)]"
            >
              <div className="text-lg font-black">15+ Years</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-700">International curation</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}