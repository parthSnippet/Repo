import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { User, ArrowDown } from 'lucide-react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="w-full min-h-screen flex items-center justify-center text-center relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/10 via-[#0a0a0f] to-[#06b6d4]/10" />
      
      {/* Interactive gradient that follows mouse */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(124,58,237,0.15), transparent 40%)`
        }}
      />
      
      {/* Floating particles - minimal */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#7c3aed]/40 rounded-full"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${30 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + (i * 0.5),
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 pt-24 pb-16">
        {/* Avatar with hover effects */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
          whileHover={{ 
            scale: 1.1,
            rotate: 5,
            boxShadow: '0 0 50px rgba(124,58,237,0.6)'
          }}
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(124,58,237,0.4)] cursor-pointer transition-all duration-300 group"
        >
          <User className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
        </motion.div>
        
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/30 rounded-full px-4 py-2 text-sm text-[#06b6d4] mb-6 backdrop-blur-sm hover:bg-[#7c3aed]/20 transition-colors duration-300"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-2 h-2 bg-[#06b6d4] rounded-full"
          />
          Available for work
        </motion.div>
        
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6"
        >
          <motion.span
            whileHover={{ scale: 1.02 }}
            className="inline-block"
          >
            Hi, I'm{' '}
          </motion.span>
          <motion.span
            className="gradient-text inline-block cursor-pointer"
            whileHover={{ 
              scale: 1.05,
              filter: 'brightness(1.2)'
            }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Parth Rohit
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-slate-300 to-slate-100 bg-clip-text text-transparent"
          >
            Full-Stack Developer
          </motion.span>
        </motion.h1>
        
        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-lg text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed hover:text-slate-300 transition-colors duration-300"
        >
          I craft fast, beautiful web experiences — from pixel-perfect UIs to scalable back-end systems.
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              boxShadow: '0 15px 35px rgba(124,58,237,0.5)'
            }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 bg-gradient-to-r from-[#7c3aed] to-[#5b21b6] text-white rounded-lg font-semibold shadow-[0_8px_25px_rgba(124,58,237,0.3)] transition-all duration-300 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#06b6d4] to-[#7c3aed] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              y: -3,
              borderColor: '#7c3aed',
              backgroundColor: 'rgba(124,58,237,0.1)'
            }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-transparent border-2 border-[#7c3aed]/30 text-slate-100 rounded-lg font-semibold hover:text-white transition-all duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        whileHover={{ scale: 1.1 }}
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
          <span className="text-sm font-medium">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div>
    </section>
  )
}
