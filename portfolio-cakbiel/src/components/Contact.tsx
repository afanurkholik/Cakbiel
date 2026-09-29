import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import { profile } from "@/data";

export default function Contact() {
  // Template subject & body untuk CTA email (di-encode agar aman di URL mailto:)
  const emailSubject = encodeURIComponent("Peluang Kolaborasi / Rekrutmen");
  const emailBody = encodeURIComponent(
    "Halo Kak Rahmad,\n\n" +
    "Saya tertarik dengan profil Anda di cakbiel.netlify.app.\n\n" +
    "Saya ingin mendiskusikan peluang:\n" +
    "- Posisi: [sebutkan]\n" +
    "- Company: [sebutkan]\n" +
    "- Timeline: [sebutkan]\n\n" +
    "Mohon info ketersediaan dan rate card bila relevan.\n\n" +
    "Terima kasih!"
  );
  const mailtoHref = `mailto:${profile.email}?subject=${emailSubject}&body=${emailBody}`;

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
            <span className="text-primary-600 font-medium">full-time</span>, dan{" "}
            <span className="text-primary-600 font-medium">kolaborasi proyek</span>.
          </p>

          {/* ===== TOMBOL CTA ===== */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {/* EMAIL SAYA — mailto dengan subject + body template */}
            <a
              href={mailtoHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105 shadow-lg shadow-primary-600/20"
            >
              <Mail className="w-5 h-5" />
              Email Saya
            </a>

            {/* LINKEDIN */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-full font-medium transition-all"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>

            {/* WHATSAPP */}
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

          {/* ===== INFO KONTAK GRID ===== */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white dark:bg-dark-900 rounded-xl p-6">
              <Mail className="w-6 h-6 text-primary-600 mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
              <a
                href={`mailto:${profile.email}`}
                className="font-medium hover:text-primary-600 transition-colors break-all"
              >
                {profile.email}
              </a>
            </div>

            <div className="bg-white dark:bg-dark-900 rounded-xl p-6">
              <Phone className="w-6 h-6 text-primary-600 mb-3" />
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Telepon</p>
              <a
                href={`tel:${profile.phone}`}
                className="font-medium hover:text-primary-600 transition-colors"
              >
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
