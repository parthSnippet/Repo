import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import ErrorBoundary from './components/ErrorBoundary'
import Navigation from './components/Navigation'
import Loading from './components/Loading'

// Lazy load components for better performance
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const Skills = lazy(() => import('./components/Skills'))
const Education = lazy(() => import('./components/Education'))
const Projects = lazy(() => import('./components/Projects'))
const Contact = lazy(() => import('./components/Contact'))

export default function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <Navigation />
        
        <Suspense fallback={<Loading />}>
          <main>
            <Hero />
            <About />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </main>
        </Suspense>
        
        {/* Footer */}
        <footer className="text-center py-8 px-6 text-slate-400 text-sm border-t border-[#7c3aed]/20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-[#7c3aed]/5 blur-2xl" />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            Designed & built by{' '}
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="gradient-text font-bold cursor-default inline-block"
            >
              Parth Rohit
            </motion.span>
            {' '}· {new Date().getFullYear()}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-2 text-xs text-slate-500 relative z-10 flex items-center justify-center gap-1"
          >
            Made with <Heart className="w-3 h-3 text-red-500 fill-current" /> and React
          </motion.div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}
