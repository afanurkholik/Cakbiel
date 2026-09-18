// src/components/Contact.tsx
import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { profile } from "@/data";

export default function Contact() {
  return (
    <section className="py-20 lg:py-32 px-6 bg-gray-50 dark:bg-dark-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-display font-bold mb-6">
            Punya Proyek yang{" "}
            <span className="gradient-text">Layak Dibangun?</span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
            Saya terbuka untuk peluang{" "}
            <span className="text-primary-600 font-medium">freelance</span>,{" "}
            <span className="text-primary-600 font-medium">full-time</span>, 
            dan{" "}
            <span className="text-primary-600 font-medium">kolaborasi proyek</span>.
          </p>

          {/* Contact Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Email Saya
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-full font-medium transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            <a
              href={`https://wa.me/${profile.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-full font-medium transition-all"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6">
              <Mail className="w-6 h-6 text-primary-600 mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
              <a href={`mailto:${profile.email}`} className="font-medium hover:text-primary-600 transition-colors">
                {profile.email}
              </a>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-xl p-6">
              <Phone className="w-6 h-6 text-primary-600 mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Telepon</p>
              <a href={`tel:${profile.phone}`} className="font-medium hover:text-primary-600 transition-colors">
                {profile.phone}
              </a>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-xl p-6">
              <MapPin className="w-6 h-6 text-primary-600 mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Lokasi</p>
              <p className="font-medium">{profile.location}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
