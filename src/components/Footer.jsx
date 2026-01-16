import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <p>
        Crafted with intention. Placeholder content today, polished stories tomorrow.
      </p>
      <small>&copy; {new Date().getFullYear()} Your Name</small>
    </motion.footer>
  );
}
