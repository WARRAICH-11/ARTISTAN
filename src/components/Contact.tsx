import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'curator@artistan.gallery',
      link: 'mailto:curator@artistan.gallery'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 300 1234567',
      link: 'tel:+12125550187'
    },
    {
      icon: MapPin,
      label: 'Gallery Location',
      value: 'Gujrat,Punjab',
      link: '#'
    },
    {
      icon: Clock,
      label: 'Gallery Hours',
      value: 'Tue-Sun, 10AM-7PM',
      link: '#'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
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
                className="flex items-center space-x-2"
              >
                <Palette className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium text-purple-600 uppercase tracking-wider">
                  Connect With ARTISTAN
                </span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Ready to Discover Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  {' '}Perfect Artwork?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Whether you're a seasoned collector or discovering art for the first time, 
                Hassan Warraich and our expert team are here to guide you through our exceptional collection 
                and help you find pieces that speak to your soul.
              </motion.p>
            </div>

            {/* Contact Methods */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 group cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg flex items-center justify-center group-hover:from-purple-200 group-hover:to-blue-200 transition-colors">
                      <Icon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{item.label}</div>
                      <div className="text-gray-600 group-hover:text-purple-600 transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Curator Profile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4 pt-8 border-t border-purple-200"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-purple-200">
                <ImageWithFallback
                  src="https://warraich-11.github.io/PORTFOLIO/IMG_7911.png"
                  alt="Hassan Warraich, Founder & Curator"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-gray-900">Hassan Warraich</div>
                <div className="text-sm text-gray-600">Founder & Chief Curator</div>
                <div className="text-xs text-purple-600">15+ Years Art Curation Experience</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-purple-100"
          >
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    First Name
                  </label>
                  <Input placeholder="HASSAN" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Last Name
                  </label>
                  <Input placeholder="WARRAICH" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email
                </label>
                <Input type="email" placeholder="HASSAN@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Interest Area
                </label>
                <select className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600">
                  <option>What type of art interests you?</option>
                  <option>Abstract Art</option>
                  <option>Landscape Paintings</option>
                  <option>Contemporary Art</option>
                  <option>Portrait Art</option>
                  <option>Watercolor Paintings</option>
                  <option>Sculptures</option>
                  <option>Mixed Collections</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Budget Range
                </label>
                <select className="w-full px-3 py-2 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600">
                  <option>Select your budget range</option>
                  <option>Under $2,000</option>
                  <option>$2,000 - $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us about your vision
                </label>
                <Textarea 
                  placeholder="Describe the type of artwork you're looking for, the space it will be displayed in, or any specific requirements..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                Send Inquiry
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.form>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl border border-purple-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Schedule a Private Gallery Tour
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Experience our collection in person with a personalized tour by Hassan Warraich or one of our expert curators.
          </p>
          <Button size="lg" variant="outline" className="px-8 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white">
            Book Private Tour
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}