
import { motion } from 'framer-motion';

const Logo = () => (
    <span
        className="inline-block font-extrabold text-2xl md:text-3xl text-white tracking-tight select-none"
        aria-label="Logo"
        style={{
            fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif',
            letterSpacing: '0.03em',
        }}
    >
        <motion.span
            className="inline-block font-extrabold text-2xl md:text-3xl text-white tracking-tight select-none"
            aria-label="Logo"
            style={{
                fontFamily: 'Poppins, Inter, Segoe UI, Arial, sans-serif',
                letterSpacing: '0.03em',
            }}
            animate={{ x: [0, 10, 0, -10, 0] }}
            transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
            }}
        >
            Dev<span className="text-purple-400">.</span>Zee
        </motion.span>
    </span>
);

export default Logo;