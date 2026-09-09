import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, ArrowRight, Clock, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'curator@artistan.gallery', link: 'mailto:curator@artistan.gallery' },
    { icon: Phone, label: 'Phone', value: '+92 300 1234567', link: 'tel:+12125550187' },
    { icon: MapPin, label: 'Gallery Location', value: 'Gujrat, Punjab', link: '#' },
    { icon: Clock, label: 'Gallery Hours', value: 'Tue-Sun, 10AM-7PM', link: '#' }
  ];

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-16 lg:grid-cols-2">
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
                className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.22em] text-violet-300"
              >
                <Palette className="h-4 w-4" />
                <span>Connect With AURELIA</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl font-black text-white md:text-5xl"
              >
                Ready to Discover Your
                <span className="mt-2 block bg-gradient-to-r from-amber-200 via-rose-300 to-violet-400 bg-clip-text text-transparent">
                  Perfect Artwork?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="text-lg leading-8 text-slate-300"
              >
                Whether you’re a seasoned collector or discovering art for the first time, Hassan Warraich and our expert team are here to guide you through our exceptional collection and help you find pieces that speak to your soul.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
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
                    className="group flex items-center gap-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-amber-300/20 text-violet-200 transition-all group-hover:from-violet-500/30 group-hover:to-amber-300/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium text-white">{item.label}</div>
                      <div className="text-slate-300 transition-colors group-hover:text-violet-200">{item.value}</div>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 border-t border-violet-400/20 pt-8"
            >
              <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-violet-400/30">
                <ImageWithFallback
                  src="https://warraich-11.github.io/PORTFOLIO/IMG_7911.png"
                  alt="Hassan Warraich, Founder & Curator"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <div className="font-semibold text-white">Hassan Warraich</div>
                <div className="text-sm text-slate-300">Founder & Chief Curator</div>
                <div className="text-xs uppercase tracking-[0.18em] text-violet-300">15+ Years Art Curation Experience</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_rgba(15,23,42,0.7)]"
          >
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">First Name</label>
                  <Input placeholder="HASSAN" className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-400" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">Last Name</label>
                  <Input placeholder="WARRAICH" className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-400" />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
                <Input type="email" placeholder="HASSAN@example.com" className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-400" />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Interest Area</label>
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-slate-200 outline-none ring-0 transition focus:border-violet-400/50">
                  <option className="bg-slate-900">What type of art interests you?</option>
                  <option className="bg-slate-900">Abstract Art</option>
                  <option className="bg-slate-900">Landscape Paintings</option>
                  <option className="bg-slate-900">Contemporary Art</option>
                  <option className="bg-slate-900">Portrait Art</option>
                  <option className="bg-slate-900">Watercolor Paintings</option>
                  <option className="bg-slate-900">Sculptures</option>
                  <option className="bg-slate-900">Mixed Collections</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Budget Range</label>
                <select className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2.5 text-slate-200 outline-none ring-0 transition focus:border-violet-400/50">
                  <option className="bg-slate-900">Select your budget range</option>
                  <option className="bg-slate-900">Under $2,000</option>
                  <option className="bg-slate-900">$2,000 - $5,000</option>
                  <option className="bg-slate-900">$5,000 - $10,000</option>
                  <option className="bg-slate-900">$10,000 - $25,000</option>
                  <option className="bg-slate-900">$25,000+</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">Tell us about your vision</label>
                <Textarea
                  placeholder="Describe the type of artwork you're looking for, the space it will be displayed in, or any specific requirements..."
                  rows={5}
                  className="rounded-xl border-white/10 bg-white/5 text-white placeholder:text-slate-400"
                />
              </div>

              <Button className="w-full rounded-full bg-gradient-to-r from-amber-200 via-rose-300 to-violet-500 px-6 py-6 text-base font-semibold text-slate-950 shadow-[0_0_25px_rgba(244,114,182,0.35)]">
                Send Enquiry
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}