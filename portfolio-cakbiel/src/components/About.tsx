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
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/50 dark:bg-dark-800/50 flex items-center justify-center">
                    <span className="text-5xl">🎓</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    [Foto About]<br />
                    Ukuran: 600x750px
                  </p>
                </div>
              </div>
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
              Kreatif oleh Nature.<br />
              <span className="gradient-text">Teknis oleh Pengalaman.</span>
            </h3>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 mb-8">
              <p>
                Saya Rahmad Maulada Nabila, seorang desainer grafis dan koordinator multimedia 
                dengan passion dalam mengembangkan produk digital yang kreatif dan solutif. 
                Dengan pengalaman 3+ tahun di bidang multimedia, saya telah membimbing berbagai 
                tim untuk meraih prestasi di kompetisi nasional dan internasional.
              </p>
              <p>
                Saat ini saya menempuh pendidikan Sarjana Sistem Informasi di Universitas Terbuka 
                dengan IPK 3.69. Saya percaya pada pendekatan yang menggabungkan kreativitas 
                desain dengan strategi teknologi untuk menghasilkan solusi yang berdampak.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="border-l-2 border-primary-600 pl-4">
                <GraduationCap className="w-6 h-6 text-primary-600 mb-2" />
                <p className="text-2xl font-bold">51</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">SKS Selesai</p>
              </div>
              <div className="border-l-2 border-primary-600 pl-4">
                <Briefcase className="w-6 h-6 text-primary-600 mb-2" />
                <p className="text-2xl font-bold">4</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pengalaman Kerja</p>
              </div>
              <div className="border-l-2 border-primary-600 pl-4">
                <Trophy className="w-6 h-6 text-primary-600 mb-2" />
                <p className="text-2xl font-bold">14</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Medali</p>
              </div>
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
