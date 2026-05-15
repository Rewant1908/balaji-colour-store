import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';

const serviceOptions = [
  'Modular Kitchen', 'Wardrobe', 'Wall Painting', 'False Ceiling',
  'Curtains', 'Bath Fittings', 'UPVC Doors', 'PVC/WPC Panels', 'Other',
];

export const Consultation: React.FC = () => {
  const [form, setForm]     = useState({ name: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim())  e.name  = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    else if (!/^[6-9]\d{9}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.service)      e.service = 'Please select a service';
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-syne text-xs uppercase tracking-[0.25em] text-[#FF6B2B] mb-3">Get Started</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Free Consultation</h2>
          <p className="font-dm text-base text-neutral-500 max-w-md mx-auto">
            Connect with our Master Architects &amp; Paint Experts. Hyper-detailed 3D visual specifications prior to any commitment.
          </p>
        </div>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-16 text-center"
          >
            <CheckCircle className="w-16 h-16 text-[#FF6B2B]" />
            <h3 className="font-playfair text-2xl font-bold text-neutral-900">Request Received!</h3>
            <p className="font-dm text-base text-neutral-500 max-w-sm">
              Master Designer Ravi Jain or Umang Jain will reach out within 3 hours with your initial quotation.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', service: '', message: '' }); }}
              className="mt-4 px-6 py-2 rounded-full border border-[#FF6B2B] text-[#FF6B2B] font-syne font-bold text-xs uppercase tracking-wider hover:bg-[#FF6B2B] hover:text-white transition-colors"
            >
              Submit Another
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="name" className="font-syne font-bold text-xs uppercase tracking-wider text-neutral-700 mb-1.5 block">
                  Full Name
                </label>
                <input
                  id="name" type="text" placeholder="Ravi Sharma" required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl border font-dm text-sm bg-[#FDFAF6] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 transition ${
                    errors.name ? 'border-red-400' : 'border-neutral-200'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="font-syne font-bold text-xs uppercase tracking-wider text-neutral-700 mb-1.5 block">
                  Mobile Number
                </label>
                <input
                  id="phone" type="tel" placeholder="9431212039" required
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className={`w-full px-4 py-3 rounded-xl border font-dm text-sm bg-[#FDFAF6] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 transition ${
                    errors.phone ? 'border-red-400' : 'border-neutral-200'
                  }`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Service */}
            <div>
              <label htmlFor="service" className="font-syne font-bold text-xs uppercase tracking-wider text-neutral-700 mb-1.5 block">
                Service Required
              </label>
              <select
                id="service" required
                value={form.service}
                onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                className={`w-full px-4 py-3 rounded-xl border font-dm text-sm bg-[#FDFAF6] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 transition ${
                  errors.service ? 'border-red-400' : 'border-neutral-200'
                }`}
              >
                <option value="">Select a service…</option>
                {serviceOptions.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="font-syne font-bold text-xs uppercase tracking-wider text-neutral-700 mb-1.5 block">
                Additional Details <span className="text-neutral-400 font-normal normal-case">(optional)</span>
              </label>
              <textarea
                id="message" rows={4} placeholder="Tell us about your project…"
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 font-dm text-sm bg-[#FDFAF6] focus:outline-none focus:ring-2 focus:ring-[#FF6B2B]/40 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto sm:self-start flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#FF6B2B] text-white font-syne font-bold text-sm uppercase tracking-wider hover:bg-[#e55a1c] transition-colors shadow-lg shadow-[#FF6B2B]/25"
            >
              <Send className="w-4 h-4" /> Request Free Consultation
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
