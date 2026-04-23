import { motion } from 'framer-motion'
import { Rocket, Package, Smile, Star } from 'lucide-react'

export default function About() {
  const stats = [
    { num: '4+', label: 'Years Experience', icon: Rocket },
    { num: '30+', label: 'Projects Shipped', icon: Package },
    { num: '15+', label: 'Happy Clients', icon: Smile },
    { num: '5k+', label: 'GitHub Stars', icon: Star },
  ]

  return (
    <section id="about" className="w-full py-20 md:py-28 flex justify-center">
      <div className="w-full max-w-6xl px-6 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Turning ideas into <span className="gradient-text">reality</span>
            </h2>
            <p className="text-slate-400 leading-relaxed mb-4 text-lg">
              I'm a full-stack developer with 4+ years of experience building products that users love. I focus on clean code, great performance, and delightful interactions.
            </p>
            <p className="text-slate-400 leading-relaxed text-lg">
              When I'm not coding, you'll find me contributing to open source, writing tech articles, or exploring the latest in AI/ML.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/20 rounded-2xl p-6 text-center hover:border-[#7c3aed] transition-all duration-300 cursor-default relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl mb-2 relative z-10"
                >
                  <stat.icon className="w-8 h-8 text-[#06b6d4] mx-auto" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-extrabold gradient-text mb-1 relative z-10">
                  {stat.num}
                </div>
                <div className="text-sm text-slate-400 relative z-10">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
