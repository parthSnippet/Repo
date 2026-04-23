import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          className="w-16 h-16 border-4 border-[#7c3aed]/20 border-t-[#7c3aed] rounded-full mx-auto mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-slate-400 text-lg"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  )
}

export default Loading