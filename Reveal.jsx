import { motion } from 'framer-motion'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
