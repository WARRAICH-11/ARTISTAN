import { motion } from 'motion/react';
import { ArrowRight, Palette, Award, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useNavigation } from './Navigation';
import React from 'react';

export function Hero() {
  const { setCurrentPage } = useNavigation();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(168,85,247,0.20),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_30%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="space-y-5"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.1, type: 'spring', stiffness: 160 }}
                className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-200 shadow-[0_0_25px_rgba(168,85,247,0.18)]"
              >
                <Palette className="h-4 w-4" />
                <span>Private Art Advisory</span>
              </motion.div>

              <h1 className="max-w-xl text-5xl font-black leading-[0.94] text-white md:text-6xl lg:text-[5.2rem]">
                Collect the
                <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
                  extraordinary.
                </span>
              </h1>

              <p className="max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
                Curated by Hassan Warraich, AURELIA brings together the world’s most compelling contemporary works and rare masterpieces for collectors who expect art to feel unforgettable.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="group rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 px-7 py-6 text-base font-semibold text-slate-950 shadow-[0_0_30px_rgba(244,114,182,0.35)] transition-all hover:scale-[1.02]"
                onClick={() => setCurrentPage('gallery')}
              >
                Explore Gallery
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full border border-white/15 bg-white/5 px-7 py-6 text-base font-semibold text-white hover:bg-white/10"
                onClick={() => setCurrentPage('collections')}
              >
                <Award className="mr-2 h-5 w-5" />
                Featured Collections
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid max-w-lg grid-cols-3 gap-5 pt-4"
            >
              {[
                { value: '500+', label: 'Artworks' },
                { value: '50+', label: 'Artists' },
                { value: '10K+', label: 'Collectors' }
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ rotateY: [0, 5, 0, -5, 0], rotateX: [0, 2, 0, -2, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              className="relative transform-gpu perspective-1000"
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-3 shadow-[0_30px_80px_rgba(15,23,42,0.7)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/20 via-transparent to-amber-300/20" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Contemporary Art Gallery"
                  className="h-[560px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <motion.div
                animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-8 top-10 w-32 overflow-hidden rounded-2xl border-4 border-slate-900 shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1592537131333-2bee8853e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzUyNDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Abstract art"
                  className="h-32 w-full object-cover"
                />
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -right-5 w-44 overflow-hidden rounded-2xl border-4 border-slate-900 shadow-[0_25px_50px_rgba(0,0,0,0.4)]"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1681238337874-c65010a35603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnR3b3JrfGVufDF8fHx8MTc1NzQ4NzU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Watercolor art"
                  className="h-40 w-full object-cover"
                />
              </motion.div>
            </motion.div>

            <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-slate-950/90 px-5 py-4 shadow-[0_25px_50px_rgba(15,23,42,0.45)] backdrop-blur-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 to-violet-500 text-slate-950">
                  <Sparkles className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-slate-400">Collector note</p>
                  <p className="text-sm font-semibold text-white">Private preview available</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex h-12 w-7 items-center justify-center rounded-full border-2 border-violet-300/80"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-2.5 w-1 rounded-full bg-violet-200"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}