// src/pages/work.tsx
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import { projects } from "@/data";
import ProjectCard from "@/components/ProjectCard";

export default function Work() {
  return (
    <Layout title="Proyek" description="Portfolio proyek yang telah saya kerjakan">
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h1 className="text-5xl lg:text-7xl font-display font-bold mb-6">
              Semua Proyek
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl">
              Koleksi lengkap proyek branding, edukasi, dan kompetisi yang telah 
              saya kerjakan selama karir saya.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}
