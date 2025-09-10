import { motion } from 'motion/react';
import { Calendar, Users, Award, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
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
      title: 'Collector\'s Circle',
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
      'Current': 'bg-green-100 text-green-800',
      'Upcoming': 'bg-blue-100 text-blue-800',
      'Planning': 'bg-purple-100 text-purple-800',
      'Past Success': 'bg-gray-100 text-gray-800',
      'By Invitation': 'bg-yellow-100 text-yellow-800'
    };
    return variants[status as keyof typeof variants] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="exhibitions" className="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
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
            className="flex items-center justify-center space-x-2 mb-4"
          >
            <Calendar className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">
              Exhibitions & Events
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Curated
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              {' '}Experiences
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600"
          >
            From groundbreaking contemporary showcases to intimate masterwork exhibitions, 
            each ARTISTAN event is thoughtfully curated to create meaningful connections between art and audience.
          </motion.p>
        </motion.div>

        {/* Exhibitions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Exhibition Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Status Badge */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadge(exhibition.status)}`}>
                  {exhibition.status}
                </div>

                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Exhibition Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-sm text-purple-600 font-medium mb-2">{exhibition.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{exhibition.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{exhibition.description}</p>
                </div>
                
                {/* Event Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    {exhibition.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    {exhibition.attendees}
                  </div>
                </div>

                {/* Featured Artists */}
                <div className="space-y-2">
                  <div className="text-xs font-medium text-gray-700 uppercase tracking-wider">Featured Artists</div>
                  <div className="flex flex-wrap gap-1">
                    {exhibition.featured.map((artist, artistIndex) => (
                      <span
                        key={artistIndex}
                        className="px-2 py-1 bg-purple-50 text-xs text-purple-700 rounded-full"
                      >
                        {artist}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-purple-600 group-hover:text-white transition-colors border-purple-200"
                >
                  {exhibition.status === 'Current' ? 'Visit Exhibition' : 
                   exhibition.status === 'Upcoming' ? 'Learn More' : 
                   exhibition.status === 'Planning' ? 'Get Updates' : 
                   exhibition.status === 'By Invitation' ? 'Request Access' : 'View Archive'}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200"
        >
          <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Join Our Collector's Circle
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Get exclusive access to private viewings, artist talks, and first access to new acquisitions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 bg-gradient-to-r from-purple-600 to-blue-600">
              <MapPin className="mr-2 w-5 h-5" />
              Join Collector's Circle
            </Button>
            <Button size="lg" variant="outline" className="px-8 border-2 border-purple-600 text-purple-600">
              View All Events
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}