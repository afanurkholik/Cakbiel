"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data";

// === KONFIGURASI VIDEO ===
const VIDEO_ID = "_KYT0GngsUY";                              // dari watch?v=_KYT0GngsUY
const THUMBNAIL_URL = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;
const FALLBACK_THUMB = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`; // cadangan bila maxres tak tersedia
const EMBED_SRC = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;

export default function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient + grid (sama seperti sebelumnya) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-primary-50/50 dark:from-primary-900/10 dark:via-transparent dark:to-primary-900/10" />
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(0 0 0 / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, rgb(0 0 0 / 0.1) 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT ===== */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
              KREATIF × TEKNOLOGI × STRATEGI
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-6"
            >
              Mengembangkan <span className="gradient-text">Produk Digital</span> Kreatif &amp; Solutif
            </motion.h1>

            {/* DESKRIPSI BARU */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
            >
              Desainer Grafis dengan pengalaman 4 tahun dalam industri branding,
              desain produk, &amp; mentoring. Spesialis manajemen proyek yang
              rapi, adaptif, kreatif dan solutif.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all hover:scale-105"
              >
                Lihat Proyek <ArrowRight className="w-5 h-5" />
              </Link>

              {/* BOOKLET PORT → LINK GOOGLE DRIVE */}
              <a
                href={profile.bookletPort}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-300 dark:border-dark-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-full font-medium transition-all"
              >
                Booklet Port <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* STATS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-gray-200 dark:border-dark-700"
            >
              <div>
                <p className="text-3xl font-bold text-primary-600">300%</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Pertumbuhan Followers</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">200K+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Total Engagement</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">10000+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Proyek Selesai</p>
              </div>
            </motion.div>
          </motion.div>

          {/* ===== RIGHT — VIDEO WITH MANDATORY VISIBLE THUMBNAIL ===== */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-white/10">
              {!playing ? (
                /* STATE 1: THUMBNAIL POSTER (WAJIB TERLIHAT) + PLAY BUTTON */
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Putar video profil"
                  className="group/thumb relative block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  {/* Thumbnail utama dengan fallback otomatis */}
                  <img
                    src={THUMBNAIL_URL}
                    onError={(e) => {
                      const t = e.currentTarget as HTMLImageElement;
                      if (t.src !== FALLBACK_THUMB) t.src = FALLBACK_THUMB;
                    }}
                    alt="Thumbnail video profil Rahmad Maulada Nabila"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-105"
                  />
                  {/* Gradient gelap tipis biar tombol play kontras */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
                  {/* Tombol play besar di tengah */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary-600/95 backdrop-blur-sm flex items-center justify-center shadow-2xl ring-4 ring-white/20 transition-transform duration-300 group-hover/thumb:scale-110">
                      <Play className="w-9 h-9 sm:w-10 sm:h-10 text-white fill-white ml-1" />
                    </span>
                  </div>
                  {/* Label kecil bawah */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="text-xs sm:text-sm font-medium text-white/90 tracking-wide uppercase drop-shadow">
                      Watch Showreel
                    </span>
                    <span className="text-[10px] sm:text-xs text-white/70 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full">
                      YouTube
                    </span>
                  </div>
                </button>
              ) : (
                /* STATE 2: IFRAME EMBED (dimuat HANYA setelah diklik → hemat bandwidth & cookie-safe) */
                <iframe
                  src={EMBED_SRC}
                  title="Video profil Rahmad Maulada Nabila"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              )}
            </div>

            {/* Floating glow accents (dekorasi, sama seperti desain awal) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 bg-primary-500/20 rounded-2xl blur-xl pointer-events-none"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary-600/20 rounded-full blur-xl pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
