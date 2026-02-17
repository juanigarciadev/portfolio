"use client"
import { motion } from 'framer-motion'

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  y?: string;
}

export const FadeIn = ({ children, className, y = '20px' }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    viewport={{ once: true, amount: 0.2 }}
    className={className}
  >
    {children}
  </motion.div>
)