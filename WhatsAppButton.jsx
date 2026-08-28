import { MessageCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { waLink, generalMessage } from '../data/clinic'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={waLink(generalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with DENTAL CLINICa on WhatsApp"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 left-6 z-50 h-14 w-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-premium"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <MessageCircle size={26} className="relative" fill="white" />
    </motion.a>
  )
}
