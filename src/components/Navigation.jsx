import { useState, useEffect, memo } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useSmoothScroll } from '../hooks/useSmoothScroll'

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  const navItems = ['About', 'Skills', 'Education', 'Projects', 'Contact']

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (item) => {
    scrollToSection(item.toLowerCase())
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 px-6 sm:px-8 py-5 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-[#0a0a0f]/90 border-b border-[#7c3aed]/30 shadow-lg' 
          : 'backdrop-blur-xl bg-[#0a0a0f]/70 border-b border-[#7c3aed]/20'
      }`}
    >
      <motion.span 
        whileHover={{ scale: 1.05 }}
        className="text-2xl font-extrabold gradient-text cursor-pointer"
        onClick={() => scrollToSection('hero')}
      >
        &lt;Parth /&gt;
      </motion.span>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6 lg:gap-8 list-none">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => handleNavClick(item)}
              className="text-slate-400 text-sm font-medium hover:text-slate-100 transition-colors relative group focus:outline-none focus:text-slate-100"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] transition-all duration-300 group-hover:w-full" />
            </button>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          x: isMobileMenuOpen ? 0 : '100%'
        }}
        transition={{ type: 'tween', duration: 0.3 }}
        className={`md:hidden fixed top-0 right-0 h-screen w-64 bg-[#0a0a0f]/95 backdrop-blur-xl border-l border-[#7c3aed]/20 ${
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div className="pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item}>
                <button
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-slate-400 text-lg font-medium hover:text-slate-100 transition-colors py-2 focus:outline-none focus:text-slate-100"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </motion.nav>
  )
})

Navigation.displayName = 'Navigation'

export default Navigation