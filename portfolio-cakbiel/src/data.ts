// src/data.ts

export const profile = {
  name: "Rahmad Maulada Nabila",
  nickname: "Cak Biel",
  role: "Desainer Grafis | Koordinator Multimedia | Mentor",
  location: "Banguntapan, Bantul, DI Yogyakarta",
  email: "rahmadnabil2705@gmail.com",
  phone: "+62 858 7018 1547",
  linkedin: "https://linkedin.com/in/rahmadnabiel",
  website: "https://cutt.ly/cakbiel-port",
  notionPortfolio: "https://cak-biel.notion.site/Cak-Biel-Portfolio-1b3634f3c4418059bd24ff658feb4847",
  tagline: "Mengembangkan Produk Digital Kreatif & Solutif",
  summary: "Desainer Grafis berpengalaman 3 tahun sebagai Koordinator Staf Multimedia, Guru Multimedia, dan Supervisor Tim Kompetisi Riset Pelajar. Memiliki visi untuk fokus memberikan jasa yang berdampak pada pengembangan produk digital kreatif dan solutif."
};

export const projects = [
  {
    title: "Branding & Media Sosial MA Darul Quran",
    category: "Branding & Social Media",
    description: "Mengelola semua kegiatan media termasuk pembuatan konten, dokumentasi acara sekolah, peningkatan branding dan penjaringan sekolah pada media digital secara terstruktur dengan membangun situs web dan konten media sosial.",
    year: "2023-2025",
    role: "Koordinator Multimedia & Social Media Specialist",
    tools: ["Adobe Photoshop", "Canva", "CorelDraw", "Social Media Strategy"],
    metrics: [
      { label: "Pertumbuhan Followers", value: "300%" },
      { label: "Total Engagement", value: "200K+" }
    ],
    image: "/assets/images/projects/branding-madarsa.jpg",
    slug: "branding-ma-darul-quran"
  },
  {
    title: "Program Ekstrakurikuler Multimedia",
    category: "Education & Mentoring",
    description: "Membangun program kegiatan mingguan ekstrakurikuler Multimedia dengan dua jurusan, yakni kursus 'Graphic Design' dan 'Videography'. Membangun dan memelihara lingkungan pembelajaran multimedia praktis dengan rules, rutinitas, dan etika perilaku yang jelas.",
    year: "2022-2025",
    role: "Guru Multimedia",
    tools: ["Adobe Premiere Pro", "Capcut", "Figma", "Mentoring"],
    metrics: [
      { label: "Siswa Dibimbing", value: "100+" },
      { label: "Program", value: "2 Jurusan" }
    ],
    image: "/assets/images/projects/multimedia-class.jpg",
    slug: "program-multimedia"
  },
  {
    title: "Supervisi Kompetisi Riset Pelajar",
    category: "Competition & Research",
    description: "Memimpin persiapan dan pelaksanaan proyek kompetisi internasional dan nasional dengan tim riset pelajar pada penelitian produk UI/UX. Mentoring, Coaching, dan Evaluasi proyek tim riset pelajar hingga kompetisi selesai.",
    year: "2023-2025",
    role: "Supervisor Kompetisi",
    tools: ["UI/UX Design", "Figma", "Research", "Project Management"],
    metrics: [
      { label: "Tim Dibimbing", value: "14 Tim" },
      { label: "Medali Emas", value: "7" },
      { label: "Medali Perak", value: "6" },
      { label: "Medali Perunggu", value: "1" }
    ],
    achievements: [
      "World Youth Invention and Innovation Award (WYIIA) 2023 - Gold",
      "Jakarta National Science Fair (JISF) 2024 - Gold",
      "World Invention Competition (WICE) 2024 - Gold",
      "WYIIA 2024 - Silver",
      "ISIF 2024 - Silver"
    ],
    image: "/assets/images/projects/competition-supervision.jpg",
    slug: "supervisi-kompetisi"
  },
  {
    title: "Desain Produk Islami Grafisindo",
    category: "Graphic Design & Production",
    description: "Mengelola pesanan pelanggan (online dan offline), menerbitkan surat perintah kerja produksi, serta mendesain cover, layout, dan souvenir Islami. Membuat mockup dan dummy, serta berkoordinasi dengan tim produksi untuk memastikan kualitas tinggi pada mushaf Al-Qur'an, buku Yasin, dan souvenir.",
    year: "2025-2026",
    role: "Admin Praproduksi & Desainer Grafis",
    tools: ["Adobe Photoshop", "CorelDraw", "Canva", "Dreamina AI"],
    metrics: [
      { label: "Project Dikelola", value: "10,000+" }
    ],
    image: "/assets/images/projects/islamic-products.jpg",
    slug: "desain-produk-islami"
  }
];

export const experience = [
  {
    title: "Admin Praproduksi & Desainer Grafis",
    company: "Grafisindo Creative Solution",
    period: "Agustus 2025 - Maret 2026",
    type: "Full-time",
    description: "Mengelola pesanan pelanggan, menerbitkan surat perintah kerja produksi, serta mendesain cover, layout, dan souvenir Islami.",
    achievements: [
      "Mengelola 10,000+ projek produk Mushaf, Yasin & Souvenir islami",
      "Menerapkan inovasi efektifitas surat perintah kerja"
    ]
  },
  {
    title: "Koordinator Staf Multimedia & Spesialis Media Sosial",
    company: "MA Darul Quran Wahid Hasyim Yogyakarta",
    period: "Maret 2023 - April 2025",
    type: "Full-time",
    description: "Mengelola semua kegiatan media termasuk pembuatan konten, dokumentasi acara sekolah, peningkatan branding dan penjaringan sekolah.",
    achievements: [
      "Pertumbuhan followers 300% dalam <1 tahun",
      "200,000+ total engagement di berbagai format konten"
    ]
  },
  {
    title: "Supervisor Kompetisi",
    company: "MA Darul Quran Wahid Hasyim Yogyakarta",
    period: "Juni 2023 - Juli 2025",
    type: "Part-time",
    description: "Memimpin persiapan dan pelaksanaan proyek kompetisi internasional dan nasional dengan tim riset pelajar.",
    achievements: [
      "Membimbing 14 tim riset siswa",
      "7 medali emas, 6 perak, 1 perunggu di 10+ kompetisi"
    ]
  },
  {
    title: "Guru Multimedia",
    company: "MA Darul Quran Wahid Hasyim Yogyakarta",
    period: "September 2022 - Juni 2025",
    type: "Part-time",
    description: "Membangun dan memelihara lingkungan pembelajaran multimedia praktis dengan rules, rutinitas, dan etika perilaku yang jelas.",
    achievements: [
      "Membangun program ekstrakurikuler Multimedia dengan 2 jurusan",
      "Kursus Graphic Design dan Videography"
    ]
  }
];

export const skills = {
  creative: [
    "Desain Grafis (CorelDraw, Canva, Adobe Photoshop)",
    "UI/UX Design (Figma)",
    "Video Editing (Adobe Premiere Pro, Capcut)",
    "AI Design Tools (Dreamina AI)"
  ],
  technical: [
    "Social Media Management",
    "Website Development",
    "Microsoft Office",
    "Digital Documentation"
  ],
  strategy: [
    "Social Media Marketing Strategy",
    "Brand Development",
    "Content Strategy",
    "Project Management"
  ],
  soft: [
    "Mentoring & Coaching",
    "Communication & Coordination",
    "Teaching & Training",
    "Team Leadership"
  ]
};

export const education = [
  {
    institution: "Universitas Terbuka UPBJJ Yogyakarta",
    degree: "Sistem Informasi",
    period: "2024 - Sekarang",
    details: "Telah menyelesaikan 51 sks utama dan lanjutan, IPK: 3.69"
  },
  {
    institution: "Universitas Pembangunan Nasional Veteran Yogyakarta",
    degree: "Sistem Informasi",
    period: "2021 - 2024",
    details: "Telah menyelesaikan 57 sks utama"
  }
];

export const certifications = [
  {
    title: "Certificate of Professional Skill - GRAPHIC DESIGN",
    issuer: "My Skill",
    date: "Juli 2025",
    credentialID: "MS-18/7/2025-NKsUi6qZDCT1Ir0v5w7L",
    details: "62 Kursus Selesai"
  }
];

export const awards = [
  {
    title: "World Invention Competition and Exhibition (WICE) 2024",
    medal: "Gold",
    location: "UNIVERSITAS MAHSA - Selangor Indonesia",
    date: "September 2025",
    role: "Supervisor"
  },
  {
    title: "Jakarta National Science Fair (JISF) 2024",
    medal: "Gold",
    location: "I3L - Jakarta Timur",
    date: "Juli 2024",
    role: "Supervisor"
  },
  {
    title: "World Youth Invention and Innovation Award (WYIIA) 2024",
    medal: "Silver",
    location: "UST Kota Yogyakarta",
    date: "Oktober 2024",
    role: "Supervisor"
  },
  {
    title: "International Science and Invention Fair (ISIF) 2024",
    medal: "Silver",
    location: "Balai Diklat Industri - Denpasar, Bali",
    date: "November 2024",
    role: "Supervisor"
  },
  {
    title: "World Youth Invention and Innovation Award (WYIIA) 2023",
    medal: "Gold",
    location: "UST Kota Yogyakarta",
    date: "Oktober 2023",
    role: "Supervisor"
  }
];

export const organizationalExperience = [
  {
    role: "Divisi Strategi Penjaringan - Tim Admision PPDB",
    organization: "MA Darul Quran Wahid Hasyim Yogyakarta",
    period: "Desember 2022 - April 2025",
    description: "Menghandle penjaringan penerimaan siswa untuk 300+ pendaftar melalui platform digital dan non digital."
  },
  {
    role: "Divisi Dokumentasi Akreditasi Sekolah",
    organization: "MA Darul Quran Wahid Hasyim Yogyakarta",
    period: "Maret 2024 - Desember 2024",
    description: "Mengumpulkan dan manage dokumentasi digital untuk program akreditasi sekolah.",
    achievement: "Berkontribusi meraih Akreditasi 'A' (BAN-PDM Decree No. 267/BAN-PDM/SK/2024)"
  }
];

export const navItems = [
  { name: "Beranda", slug: "/" },
  { name: "Proyek", slug: "/work" },
  { name: "Keahlian", slug: "/specialty" },
  { name: "Tentang", slug: "/about" },
  { name: "CV", slug: "/cv" }
];
