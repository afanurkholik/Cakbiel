import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import Specialty from "@/components/Specialty";
import { certifications, awards } from "@/data";
import { Award, BadgeCheck } from "lucide-react";

export default function SpecialtyPage() {
  return (
    <Layout title="Keahlian" description="Keahlian dan sertifikasi profesional">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              Keahlian & Sertifikasi
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Kompetensi profesional dan pengakuan atas pencapaian di bidang
              desain grafis dan multimedia.
            </p>
          </motion.div>

          <Specialty />

          {/* Sertifikasi */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Sertifikasi</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-6"
                >
                  <BadgeCheck className="w-8 h-8 text-primary-600 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-sm text-gray-500">{cert.date}</p>
                  {cert.credentialID && (
                    <p className="text-xs text-gray-400 mt-2">ID: {cert.credentialID}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Penghargaan */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Penghargaan & Prestasi</h2>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 bg-gray-50 dark:bg-dark-800 rounded-xl p-6"
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 ${
                      award.medal === "Gold"
                        ? "bg-yellow-100 dark:bg-yellow-900/30"
                        : award.medal === "Silver"
                        ? "bg-gray-200 dark:bg-gray-700"
                        : "bg-orange-100 dark:bg-orange-900/30"
                    }`}
                  >
                    <Award
                      className={`w-8 h-8 ${
                        award.medal === "Gold"
                          ? "text-yellow-600"
                          : award.medal === "Silver"
                          ? "text-gray-600"
                          : "text-orange-600"
                      }`}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{award.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {award.location} • {award.date}
                    </p>
                    <p className="text-sm text-primary-600 font-medium mt-1">
                      {award.medal} Medal • {award.role}
                    </p>
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
