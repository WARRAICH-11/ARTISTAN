import { motion } from 'motion/react';
import { Calendar, Users, Award, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function Portfolio() {
  const exhibitions = [
    {
      id: 1,
      title: 'Voices of Tomorrow',
      category: 'Contemporary Exhibition',
      description: 'A groundbreaking showcase featuring emerging artists from around the globe, exploring themes of identity, technology, and cultural transformation.',
      image: 'https://images.unsplash.com/photo-1719398026703-0d3f3d162e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBleGhpYml0aW9uJTIwZ2FsbGVyeXxlbnwxfHx8fDE3NTc1MjEzMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Current',
      duration: 'March 15 - June 20, 2025',
      attendees: '15,000+ visitors',
      featured: ['Marina Delacroix', 'Chen Wei-Ming', '12 emerging artists']
    },
    {
      id: 2,
      title: 'Masters of Light',
      category: 'Historical Collection',
      description: 'An intimate exploration of classical techniques and luminous compositions by renowned masters, curated to inspire contemporary understanding.',
      image: 'https://images.unsplash.com/photo-1618411624931-e2a2fba5a826?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNldW0lMjBhcnQlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc1NzUyNTMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Upcoming',
      duration: 'July 10 - October 30, 2025',
      attendees: 'Projected 20,000+',
      featured: ['Alessandro Rosetti', 'Victoria Blackwood', 'Classical masters']
    },
    {
      id: 3,
      title: 'Sculptural Dialogues',
      category: 'Mixed Media Exhibition',
      description: 'Three-dimensional artworks that challenge spatial perception and invite interaction between viewer, space, and artistic vision.',
      image: 'https://images.unsplash.com/photo-1599374172861-3401e78ab10f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBjb2xsZWN0b3JzJTIwcHJpdmF0ZSUyMHZpZXdpbmd8ZW58MXx8fHwxNzU3NTI1MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Planning',
      duration: 'November 2025 - February 2026',
      attendees: 'Private viewings available',
      featured: ['Marcus Thompson', 'Installation artists', 'Interactive pieces']
    },
    {
      id: 4,
      title: 'Digital Renaissance',
      category: 'Technology & Art',
      description: 'Exploring the intersection of traditional artistic principles with cutting-edge digital technologies and NFT collections.',
      image: 'https://images.unsplash.com/photo-1579519397415-ef409ed831ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcnQlMjBnYWxsZXJ5JTIwbXVzZXVtfGVufDF8fHx8MTc1NzUyNDUwNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Past Success',
      duration: 'September - December 2024',
      attendees: '25,000+ visitors',
      featured: ['Digital pioneers', 'NFT artists', 'Tech-art fusion']
    },
    {
      id: 5,
      title: 'Watercolor Dreams',
      category: 'Technique Focus',
      description: 'A delicate journey through the ethereal world of watercolor mastery, featuring both traditional and innovative approaches.',
      image: 'https://images.unsplash.com/photo-1681238337874-c65010a35603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXRlcmNvbG9yJTIwcGFpbnRpbmclMjBhcnR3b3JrfGVufDF8fHx8MTc1NzQ4NzU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'Past Success',
      duration: 'May - August 2024',
      attendees: '18,000+ visitors',
      featured: ['Isabella Santos', 'Watercolor masters', 'Technique workshops']
    },
    {
      id: 6,
      title: "Collector's Circle",
      category: 'Exclusive Showcase',
      description: 'Private collection showcase featuring rare acquisitions and first-time exhibitions from renowned international collectors.',
      image: 'https://images.unsplash.com/photo-1592537131333-2bee8853e5c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHBhaW50aW5nJTIwY2FudmFzfGVufDF8fHx8MTc1NzUyNDQ5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      status: 'By Invitation',
      duration: 'Quarterly Events',
      attendees: 'Exclusive membership',
      featured: ['Private collections', 'Rare acquisitions', 'VIP experiences']
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      Current: 'bg-emerald-500/15 text-emerald-200 border border-emerald-400/30',
      Upcoming: 'bg-sky-500/15 text-sky-200 border border-sky-400/30',
      Planning: 'bg-violet-500/15 text-violet-200 border border-violet-400/30',
      'Past Success': 'bg-slate-300/10 text-slate-200 border border-slate-400/20',
      'By Invitation': 'bg-amber-500/15 text-amber-200 border border-amber-400/30'
    };
    return variants[status as keyof typeof variants] || 'bg-slate-300/10 text-slate-200 border border-slate-400/20';
  };

  return (
    <section id="exhibitions" className="relative py-24">
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
            className="mb-4 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-[0.24em] text-violet-300"
          >
            <Calendar className="h-4 w-4" />
            <span>Exhibitions & Events</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-4xl font-black text-white md:text-5xl"
          >
            Curated
            <span className="block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
              Experiences
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg leading-8 text-slate-300"
          >
            From groundbreaking contemporary showcases to intimate masterwork exhibitions, each AURELIA event is thoughtfully curated to create meaningful connections between art and audience.
          </motion.p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-slate-900/80 shadow-[0_20px_50px_rgba(15,23,42,0.45)] transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30"
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] ${getStatusBadge(exhibition.status)}`}>
                  {exhibition.status}
                </div>

                <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 backdrop-blur-sm">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="space-y-4 p-6">
                <div>
                  <div className="mb-2 text-sm font-medium text-violet-300">{exhibition.category}</div>
                  <h3 className="mb-3 text-xl font-bold text-white">{exhibition.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{exhibition.description}</p>
                </div>

                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-violet-300" />
                    {exhibition.duration}
                  </div>
                  <div className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-violet-300" />
                    {exhibition.attendees}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-400">Featured Artists</div>
                  <div className="flex flex-wrap gap-2">
                    {exhibition.featured.map((artist, artistIndex) => (
                      <span key={artistIndex} className="rounded-full border border-violet-400/20 bg-violet-500/10 px-2 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-violet-200">
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full rounded-full border border-violet-400/30 bg-white/5 text-white transition-colors hover:bg-violet-500 hover:text-white"
                >
                  {exhibition.status === 'Current'
                    ? 'Visit Exhibition'
                    : exhibition.status === 'Upcoming'
                      ? 'Learn More'
                      : exhibition.status === 'Planning'
                        ? 'Get Updates'
                        : exhibition.status === 'By Invitation'
                          ? 'Request Access'
                          : 'View Archive'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-violet-400/20 bg-gradient-to-r from-violet-500/10 via-slate-900 to-sky-500/10 p-8 text-center shadow-[0_30px_80px_rgba(15,23,42,0.7)]"
        >
          <Award className="mx-auto mb-4 h-12 w-12 text-violet-300" />
          <h3 className="mb-4 text-2xl font-bold text-white">Join Our Collector's Circle</h3>
          <p className="mx-auto mb-6 max-w-md text-slate-300">
            Get exclusive access to private viewings, artist talks, and first access to new acquisitions.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 px-8 text-slate-950 shadow-[0_0_25px_rgba(244,114,182,0.3)]">
              <MapPin className="mr-2 h-5 w-5" />
              Join Collector's Circle
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border border-violet-400/30 bg-white/5 px-8 text-white hover:bg-white/10">
              View All Events
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}