// src/components/About.tsx
import { motion } from "framer-motion";
import { GraduationCap, Trophy, Briefcase } from "lucide-react";
import { profile, education, awards } from "@/data";

export default function About() {
  return (
    <section className="py-20 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/40 dark:to-primary-800/40">
              {/* Placeholder for About Image */}
              <img 
  src="/assets/images/about/about-photo.jpg" 
  alt="Rahmad Maulada Nabila - Tentang Saya"
  loading="lazy"
  className="w-full h-full object-cover"
/>
            </div>
            
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-primary-600" />
                <div>
                  <p className="text-2xl font-bold">{awards.length}+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Penghargaan</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-medium text-primary-600 mb-2">TENTANG SAYA</h2>
            <h3 className="text-4xl lg:text-5xl font-display font-bold mb-6">
              Setiap Ide Layak Tampil .<br />
              <span className="gradient-text">Dengan Cara Terbaiknya.</span>
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p>
Saya Rahmad Maulada Nabila, Desainer Grafis berpengalaman 4 tahun sebagai Desainer Produk, Spesialis Sosial Media, Admin Marketplace, dan Mentor Tim Kompetisi Riset Pelajar. Menempuh Pendidikan Sarjana Sistem Informasi. 
              </p>
              <p>
                Memiliki visi untuk fokus memberikan jasa yang berdampak pada pengembangan produk digital kreatif dan solutif bagi perusahaan. Saya memiliki kemampuan manajemen proyek desain yang rapi, adaptif dalam menghadapi berbagai tipe customer offline maupun online, dan solutif dalam menghadapi study case dalam tim.
              </p>
            </div>

            <a
              href="/cv"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              Selengkapnya Tentang Saya
              <span className="w-5 h-5">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
