import React from 'react'
import { motion } from 'framer-motion'

const team = [
  {
    name: 'Ravi Jain',
    title: 'Founder & Managing Director',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'With over 25 years in the interior design and paint industry, Ravi founded Balaji Colour Store with a vision to bring premium home transformation services to every household. His deep expertise in Asian Paints solutions and modular interiors has helped over 5,000 families create their dream homes.',
    tag: 'Founder',
    color: '#FF6B6B',
  },
  {
    name: 'Shubham Jain',
    title: 'Head of Design & Projects',
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Shubham leads the creative and operational side of every project, from concept to final handover. His eye for detail and passion for precision ensure that every modular kitchen, wardrobe, and false ceiling installation is delivered on time and above expectations.',
    tag: 'Design & Ops',
    color: '#4ECDC4',
  },
  {
    name: 'Umang Jain',
    title: 'Head of Sales & Client Relations',
    image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400',
    description:
      'Umang is the first point of contact for new clients and the driving force behind Balaji\'s trusted reputation. His consultative approach to understanding each family\'s needs, combined with transparent pricing, has earned the studio a near-perfect referral rate.',
    tag: 'Sales',
    color: '#FFD93D',
  },
]

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-sm font-semibold mb-4">
            Meet the Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-brand-dark">
            The People Behind Every Beautiful Home
          </h2>
          <p className="mt-4 text-lg text-brand-dark/50 max-w-2xl mx-auto">
            A passionate leadership team with decades of combined experience in interiors, paint, and design.
          </p>
        </motion.div>

        {/* Cards — centred 3-column grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.14 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl overflow-hidden bg-white border border-brand-dark/5 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                {/* Colour tag chip */}
                <span
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white"
                  style={{ backgroundColor: member.color }}
                >
                  {member.tag}
                </span>
                {/* Bottom gradient fade into card */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* Text */}
              <div className="px-6 pb-8 pt-2 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-brand-dark leading-tight">{member.name}</h3>
                <p className="text-sm font-medium mt-0.5 mb-3" style={{ color: member.color }}>
                  {member.title}
                </p>
                <p className="text-sm text-brand-dark/60 leading-relaxed flex-1">
                  {member.description}
                </p>
              </div>

              {/* Bottom accent bar */}
              <div
                className="h-1 w-full opacity-60 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: member.color }}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
