// src/components/Specialty.tsx
import { motion } from "framer-motion";
import { Palette, Code, Target, Users } from "lucide-react";
import { skills } from "@/data";

const categories = [
  {
    icon: Palette,
    title: "Creative Design",
    description: "Desain grafis profesional untuk branding, media sosial, dan produk digital",
    skills: skills.creative
  },
  {
    icon: Code,
    title: "Technical Skills",
    description: "Penguasaan tools dan teknologi untuk pengembangan produk digital",
    skills: skills.technical
  },
  {
    icon: Target,
    title: "Strategy & Management",
    description: "Strategi pemasaran dan manajemen proyek yang efektif",
    skills: skills.strategy
  },
  {
    icon: Users,
    title: "Mentoring & Leadership",
    description: "Membimbing dan mengembangkan tim untuk mencapai hasil optimal",
    skills: skills.soft
  }
];

export default function Specialty() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-medium text-primary-600 mb-2">KEAHLIAN</h2>
          <h3 className="text-4xl lg:text-5xl font-display font-bold mb-4">
            Keahlian & Kompetensi
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Kombinasi keahlian kreatif, teknis, dan strategis untuk menghasilkan 
            solusi digital yang berdampak
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-dark-900 rounded-2xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-600" />
                </div>

                <h4 className="text-xl font-bold mb-2">{category.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {category.description}
                </p>

                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Workflow Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white dark:bg-dark-900 rounded-3xl p-8 lg:p-12"
        >
          <h4 className="text-2xl font-bold mb-8 text-center">Alur Kerja Proyek</h4>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "Analisis kebutuhan & riset" },
              { step: "02", title: "Strategy", desc: "Perencanaan & konsep" },
              { step: "03", title: "Execution", desc: "Desain & pengembangan" },
              { step: "04", title: "Delivery", desc: "Review & finalisasi" }
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="text-5xl font-bold text-primary-100 dark:text-primary-900/30 mb-2">
                  {item.step}
                </div>
                <h5 className="font-bold mb-1">{item.title}</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
                
                {idx < 3 && (
                  <div className="hidden md:block absolute top-6 right-0 w-full h-px bg-gradient-to-r from-primary-200 to-transparent dark:from-primary-800" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
