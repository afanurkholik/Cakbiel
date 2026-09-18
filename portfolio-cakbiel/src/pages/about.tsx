// src/pages/about.tsx
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import About from "@/components/About";
import { education, organizationalExperience } from "@/data";
import { GraduationCap, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <Layout title="Tentang" description="Tentang Rahmad Maulada Nabila">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              Tentang Saya
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Mengenal lebih dekat latar belakang pendidikan dan pengalaman 
              organisasi saya.
            </p>
          </motion.div>

          <About />

          {/* Education */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Pendidikan</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{edu.institution}</h3>
                      <p className="text-primary-600 font-medium mb-2">{edu.degree}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">{edu.period}</p>
                      <p className="text-sm text-gray-500">{edu.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Organizational Experience */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Pengalaman Organisasi</h2>
            <div className="space-y-6">
              {organizationalExperience.map((org, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">{org.role}</h3>
                      <p className="text-primary-600 font-medium mb-2">{org.organization}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{org.period}</p>
                      <p className="text-gray-700 dark:text-gray-300">{org.description}</p>
                      {org.achievement && (
                        <p className="text-sm text-primary-600 mt-2 font-medium">
                          ✓ {org.achievement}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
