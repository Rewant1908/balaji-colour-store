import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Clock, MapPin, Send, User, Mail, MessageSquare, Calendar } from 'lucide-react'

const contacts = [
  { name: 'Ravi Jain', phone: '9431212039', role: 'Owner' },
  { name: 'Umang Jain', phone: '7903904076', role: 'Manager' },
  { name: 'Shubham Jain', phone: '9430024233', role: 'Consultant' },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly.')
    setForm({ name: '', phone: '', email: '', service: '', message: '' })
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 text-brand-coral text-sm font-semibold mb-4">Get In Touch</span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">Book Free Consultation</h2>
          <p className="mt-4 text-lg text-brand-dark/50">Start your home transformation journey today</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-6">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-6">Contact Directly</h3>
              <div className="space-y-4">
                {contacts.map(c => (
                  <a key={c.phone} href={`tel:${c.phone}`} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-brand-dark/5 hover:border-brand-coral/30 hover:shadow-md transition-all group">
                    <div className="w-12 h-12 rounded-xl bg-brand-coral/10 flex items-center justify-center group-hover:bg-brand-coral group-hover:text-white transition-colors text-brand-coral"><Phone size={20} /></div>
                    <div><div className="font-semibold text-brand-dark">{c.name}</div><div className="text-sm text-brand-dark/50">{c.phone} • {c.role}</div></div>
                  </a>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-bold text-brand-dark mb-4">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3"><Clock size={18} className="text-brand-teal" /><span className="text-brand-dark/70">Monday – Saturday: 10 AM – 6 PM</span></div>
                <div className="flex items-center gap-3"><Clock size={18} className="text-brand-gold" /><span className="text-brand-dark/70">Sunday: 10 AM – 5 PM</span></div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-brand-dark mb-8">Request a Callback</h3>
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="relative"><User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/30" /><input type="text" placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-dark/10 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all bg-white/50" required /></div>
                <div className="relative"><Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/30" /><input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-dark/10 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all bg-white/50" required /></div>
                <div className="relative sm:col-span-2"><Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/30" /><input type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-dark/10 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all bg-white/50" /></div>
                <div className="relative sm:col-span-2"><Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-dark/30" /><select value={form.service} onChange={e => setForm({...form, service: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-dark/10 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all bg-white/50 appearance-none" required><option value="">Select Service Interested In</option><option>Modular Kitchen</option><option>Modular Wardrobe</option><option>Paint Solutions</option><option>False Ceiling</option><option>PVC/WPC Panels</option><option>UPVC Doors & Windows</option><option>Bath Fittings</option><option>Other</option></select></div>
                <div className="relative sm:col-span-2"><MessageSquare size={18} className="absolute left-4 top-4 text-brand-dark/30" /><textarea placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({...form, message: e.target.value})} rows={4} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-brand-dark/10 focus:border-brand-coral focus:ring-2 focus:ring-brand-coral/20 outline-none transition-all bg-white/50 resize-none" /></div>
              </div>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} type="submit" className="mt-6 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-coral to-brand-purple text-white font-semibold shadow-lg hover:shadow-xl transition-all">
                <Send size={18} />
                Book Free Consultation
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}