import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const contactLinks = [
  { icon: Mail, text: 'parthatwork24@gmail.com', href: 'mailto:parthatwork24@gmail.com' },
  { icon: FaGithub, text: 'GitHub', href: 'https://github.com' },
  { icon: FaLinkedin, text: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: FaTwitter, text: 'Twitter', href: 'https://twitter.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-[#111118] py-20 md:py-28 relative overflow-hidden flex justify-center">
      <div className="w-full max-w-4xl px-6 sm:px-8 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7c3aed]/10 rounded-full blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#16161f] to-[#1a1a28] border border-[#7c3aed]/30 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#7c3aed]/15 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed] blur-xl opacity-50" />
          </div>
          
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
          
          <div className="relative z-10">
            <p className="text-sm font-bold tracking-widest uppercase text-[#06b6d4] mb-3">
              Contact
            </p>
            
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Let's Build <span className="gradient-text">Something</span>
            </h2>
            
            <p className="text-slate-400 max-w-lg mx-auto mb-10 leading-relaxed text-lg">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mx-auto">
              {contactLinks.map((link, i) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-br from-white/5 to-white/[0.02] border border-[#7c3aed]/30 rounded-xl text-base font-semibold hover:border-[#7c3aed] hover:bg-[#7c3aed]/10 transition-all duration-300 relative overflow-hidden group/link"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/link:translate-x-full transition-transform duration-700" />
                  
                  <motion.span
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                    className="relative z-10"
                  >
                    <link.icon className="w-5 h-5 text-[#06b6d4]" />
                  </motion.span>
                  <span className="relative z-10">{link.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
