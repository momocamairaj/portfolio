import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <small>&copy; {new Date().getFullYear()} Momoca Mairaj</small>
    </motion.footer>
  );
}
