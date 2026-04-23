import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/20 via-[#0a0a0f] to-[#06b6d4]/20 animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15),transparent_50%)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7c3aed] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] pointer-events-none z-[1]" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center text-5xl mx-auto mb-8 shadow-[0_0_40px_rgba(124,58,237,0.5)] cursor-pointer"
        >
          👨💻
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/30 rounded-full px-4 py-2 text-sm text-[#06b6d4] mb-6"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-[#06b6d4] rounded-full"
          />
          Available for work
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
        >
          Hi, I'm{' '}
          <motion.span
            className="gradient-text"
            whileHover={{ scale: 1.05 }}
            style={{ display: 'inline-block' }}
          >
            Parth Rohit
          </motion.span>
          <br />
          Full-Stack Developer
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          I craft fast, beautiful web experiences — from pixel-perfect UIs to scalable back-end systems.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white rounded-lg font-semibold shadow-[0_8px_30px_rgba(124,58,237,0.4)] hover:shadow-[0_12px_40px_rgba(124,58,237,0.6)] transition-shadow duration-300"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border-2 border-[#7c3aed]/30 text-slate-100 rounded-lg font-semibold hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
