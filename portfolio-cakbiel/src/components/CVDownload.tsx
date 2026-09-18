// src/components/CVDownload.tsx
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function CVDownload() {
  return (
    <section className="py-20 lg:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
            <FileText className="w-10 h-10 text-primary-600" />
          </div>

          <h2 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Ingin Versi Lengkap?
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Lihat atau download CV terbaru saya untuk overview lengkap pengalaman, 
            pendidikan, dan latar belakang profesional.
          </p>

          <a
            href="/assets/documents/cv.pdf"
            download
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download CV
          </a>

          <p className="text-sm text-gray-500 mt-4">
            Format PDF • Ukuran: 2-3 MB
          </p>
        </motion.div>
      </div>
    </section>
  );
}
