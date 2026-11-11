import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "WhatsApp",
    icon: FaWhatsapp,
    link: "https://wa.me/6285190066709",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/webtagons/",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Pengembangan website profesional untuk perusahaan, lembaga, organisasi, dan bisnis dengan desain responsif serta pengalaman pengguna yang optimal.",
  },
  {
    number: "02",
    title: "Custom Web Application",
    description:
      "Pengembangan aplikasi berbasis web yang dirancang sesuai kebutuhan operasional, proses bisnis, dan sistem kerja organisasi.",
  },
  {
    number: "03",
    title: "Company Profile Website",
    description:
      "Website profil perusahaan untuk memperkuat identitas digital, meningkatkan kredibilitas, dan memperkenalkan produk maupun layanan.",
  },
  {
    number: "04",
    title: "Online Voting System",
    description:
      "Sistem pemungutan suara digital dengan manajemen peserta, verifikasi pemilih, rekapitulasi suara, dan dashboard monitoring.",
  },
  {
    number: "05",
    title: "Learning Management System",
    description:
      "Platform pembelajaran digital untuk mengelola kelas, materi, tugas, ujian online, nilai, dan perkembangan peserta.",
  },
  {
    number: "06",
    title: "Digital Platform & Information System",
    description:
      "Pengembangan platform digital dan sistem informasi untuk membantu pengelolaan data, administrasi, serta layanan berbasis teknologi.",
  },
] as const;

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  description: string;
  features: string[];
  techStack: string[];
  image: string;
  link: string;
  targetUser?: string;
  impact?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "seraya-voting",
    title: "Seraya: Jejak Tumbuh — Sistem E-Voting Kampus",
    category: "Online Voting System",
    badge: "E-Voting & Security",
    summary:
      "Sistem pemilihan raya mahasiswa digital (E-Voting) aman, cepat, dan transparan dengan token kriptografi one-time.",
    description:
      "Seraya: Jejak Tumbuh merupakan platform pemilihan raya mahasiswa digital terenkripsi yang dirancang untuk menggantikan proses pemungutan suara konvensional. Sistem ini menjamin integritas suara pemilih secara real-time tanpa risiko manipulasi data.",
    features: [
      "Verifikasi Pemilih Otentik menggunakan token one-time access terenkripsi.",
      "Antarmuka bilik suara digital yang intuitif dan responsif di berbagai perangkat.",
      "Penghitungan suara langsung (Quick Count) dengan audit trail kriptografi.",
      "Dashboard monitoring pengawas dan saksi pemilihan secara transparan.",
    ],
    techStack: ["React", "Next.js", "Tailwind CSS", "PHP / Node.js API", "MySQL", "SHA-256"],
    image: "/projects/project-seraya.jpg",
    link: "#contact",
    targetUser: "Mahasiswa, Panitia Pemilihan Raya (KPU Mahasiswa), Saksi & Pengawas Kampus.",
    impact:
      "Meniadakan biaya logistik kertas, memangkas waktu penghitungan suara dari berhari-hari menjadi hitungan menit dengan tingkat validitas 100%.",
  },
  {
    id: "sim-tbm-alc",
    title: "SIM TBM Assyuro ALC — Smart Library & AI Assistant",
    category: "Digital Platform & Information System",
    badge: "Smart Library & AI",
    summary:
      "Platform literasi digital dan sistem informasi perpustakaan komunitas mengelola 10.411+ buku dengan asisten AI pintar.",
    description:
      "SIM TBM Assyuro ALC adalah sistem informasi manajemen perpustakaan modern berbasis web di Masbagik Timur, Lombok. Mengelola 10.411 koleksi fisik secara digital, sistem ini terintegrasi dengan chatbot cerdas berbasis NLP (Assyuro.bot AI) untuk memandu pemustaka 24/7.",
    features: [
      "Katalog Digital Pintar (OPAC) dengan rekomendasi buku terpopuler dan kurasi pembaca.",
      "Real-Time Dashboard menampilkan metrik 10.411 buku, 1.262 anggota, dan 2.100+ sesi baca.",
      "Assyuro.bot AI — asisten cerdas virtual untuk rekomendasi buku dan panduan sirkulasi mandiri.",
      "Manajemen sirkulasi peminjaman dan pelacakan rak buku secara akurat.",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "MySQL Real-Time", "NLP / AI Chatbot"],
    image: "/projects/project-sim-tbm.jpg",
    link: "#contact",
    targetUser: "Masyarakat umum, pelajar, relawan literasi, dan pengelola perpustakaan komunitas.",
    impact:
      "Menjadi percontohan Smart Library tingkat desa di Lombok, meningkatkan minat baca serta efisiensi manajemen sirkulasi perpustakaan.",
  },
  {
    id: "adm-menjahit-lms",
    title: "LPKS ALC — LMS & Presensi QR Program Menjahit",
    category: "Learning Management System",
    badge: "LMS & QR Attendance",
    summary:
      "Sistem manajemen pelatihan vokasi dengan kartu ID digital, presensi barcode QR Code, dan rekap otomatis multi-sheet Excel.",
    description:
      "Sistem LMS komprehensif untuk Lembaga Pelatihan Kerja Swasta (LPKS) Assyuro Lombok Creative yang mendigitalisasi proses absensi harian, materi pelatihan menjahit, kuis evaluasi, hingga pencetakan kartu tanda peserta standar.",
    features: [
      "Presensi QR Code Instan — scan kartu tanda peserta (80mm × 100mm) untuk presensi masuk/keluar.",
      "Kartu ID Digital Otomatis — generator PDF kartu peserta resmi berfoto dan ber-QR code.",
      "Manajemen Materi Vokasi — repositori modul materi PDF, video instruksional, dan bank soal kuis.",
      "Ekspor Excel Multi-Sheet Komprehensif — rekap kehadiran harian, persentase nilai, dan pelaporan resmi dinas.",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "PHP API", "MySQL"],
    image: "/projects/project-adm-menjahit.jpg",
    link: "#contact",
    targetUser: "Instruktur pelatihan, staff administrasi LPKS, dan peserta kursus vokasi.",
    impact:
      "Menghilangkan presensi manual, mempermudah pelaporan berkala ke dinas tenaga kerja, dan mempercepat evaluasi kelulusan peserta.",
  },
  {
    id: "balente-apk",
    title: "Balente Pariwisata — Mobile App Smart Tourism",
    category: "Custom Web Application",
    badge: "Mobile Application",
    summary:
      "Aplikasi mobile panduan pariwisata Desa Wisata Balente dengan peta interaktif, direktori budaya, dan pemesanan aktivitas.",
    description:
      "Aplikasi mobile Android yang berfungsi sebagai asisten digital para pelancong saat mengeksplorasi Desa Wisata Balente. Menyediakan informasi geowisata, atraksi kebudayaan lokal, kuliner khas, dan penginapan desa.",
    features: [
      "Peta Wisata & Navigasi GPS Interaktif langsung ke spot atraksi dan homestay.",
      "Direktori UMKM & Kuliner Tradisional khas masyarakat Balente.",
      "Kalender Event Budaya dan informasi pertunjukan kearifan lokal.",
      "Tampilan antarmuka mobile-first yang ringan dan hemat kuota bagi wisatawan.",
    ],
    techStack: ["Android Mobile Framework", "REST API", "Google Maps SDK", "Cloud Database"],
    image: "/projects/project-balente-apk.jpg",
    link: "#contact",
    targetUser: "Wisatawan nusantara & mancanegara, pengelola desa wisata, dan pelaku UMKM lokal.",
    impact:
      "Meningkatkan eksposur potensi desa, mempermudah penjelajahan wisatawan tanpa tersesat, dan mendongkrak penjualan produk UMKM lokal.",
  },
  {
    id: "balente-web",
    title: "Balente.my.id — Portal Resmi Smart Tourism Desa Balente",
    category: "Website Development",
    badge: "Tourism Web Portal",
    summary:
      "Website portal promosi destinasi wisata, paket perjalanan, akomodasi, dan kearifan lokal Desa Balente.",
    description:
      "Website profil dan portal pariwisata terpadu Balente.my.id yang dirancang untuk memamerkan keindahan alam, paket wisata edukasi, dan daya tarik budaya secara elegan dengan galeri visual berkualitas tinggi.",
    features: [
      "Showcase Panorama Destinasi Alam, Geowisata, dan Wisata Budaya.",
      "Katalog Paket Wisata & Reservasi Homestay masyarakat lokal.",
      "Informasi Lengkap Rute, Fasilitas, dan Tips Perjalanan Wisata.",
      "Koneksi langsung pemesanan melalui WhatsApp pengelola wisata desa.",
    ],
    techStack: ["Next.js / Modern Web", "Tailwind CSS", "Cloudflare CDN", "Responsive Layout"],
    image: "/projects/project-balente-web.jpg",
    link: "#contact",
    targetUser: "Calon pelancong, komunitas pencinta alam, biro perjalanan, dan pengelola pokdarwis.",
    impact:
      "Menjadikan Desa Wisata Balente dapat diakses di internet secara global, memperkuat positioning desa wisata mandiri berbasis digital.",
  },
  {
    id: "pandu-app",
    title: "P.A.N.D.U — Mobile App Pendampingan Remaja & Edukasi Gizi",
    category: "Custom Web Application",
    badge: "Health & Mobile App",
    summary:
      "Aplikasi pendampingan kesehatan remaja untuk pencegahan anemia, pelacakan konsumsi tablet tambah darah, dan edukasi stunting.",
    description:
      "Aplikasi mobile inovatif P.A.N.D.U (Pandu, Asistensi, Niat, dan Dukungan) yang dirancang untuk memonitor status nutrisi remaja putri, kepatuhan minum Tablet Tambah Darah (TTD), serta edukasi pencegahan stunting masa depan.",
    features: [
      "Pelacak & Pengingat Rutin Konsumsi Tablet Tambah Darah (TTD).",
      "Kalkulator IMT (Indeks Massa Tubuh) otomatis beserta anjuran pola makan bergizi.",
      "Modul Edukasi Interaktif mengenai kesehatan reproduksi dan pencegahan anemia.",
      "Konsultasi Rahasia dengan konselor sebaya & tenaga kesehatan mitra.",
    ],
    techStack: ["Mobile App Framework", "SQLite", "Push Notification Service", "REST API"],
    image: "/projects/project-pandu.jpg",
    link: "#contact",
    targetUser: "Remaja putri, siswi sekolah, konselor sebaya, dan fasilitator kesehatan masyarakat.",
    impact:
      "Membantu menurunkan angka risiko anemia di kalangan pelajar sekolah dan meningkatkan kesadaran nutrisi sejak dini.",
  },
  {
    id: "fg-diy",
    title: "Forum GenRe DIY — Sistem Seleksi & Portal Informasi Duta",
    category: "Digital Platform & Information System",
    badge: "Government & Selection",
    summary:
      "Platform informasi dan sistem publikasi pengumuman seleksi Duta Generasi Berencana (GenRe) D.I. Yogyakarta.",
    description:
      "Sistem informasi terintegrasi untuk Forum GenRe D.I. Yogyakarta yang menjadi pusat publikasi program remaja, verifikasi kelulusan tahapan seleksi Duta GenRe, serta profil finalis dari seluruh kabupaten/kota di DIY.",
    features: [
      "Sistem Pengumuman Kelulusan Seleksi Tahapan Duta GenRe DIY secara realtime.",
      "Portal Transparansi Nilai dan Verifikasi Berkas Administratif.",
      "Profil interaktif finalis Duta GenRe DIY dan galeri program aksi sosial.",
      "Bank materi edukasi Triad KRR (Seksualitas, HIV/AIDS, Napza) dan Life Skills.",
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "Real-Time DB", "Vercel Cloud"],
    image: "/projects/project-fg-diy.jpg",
    link: "#contact",
    targetUser: "Peserta seleksi Duta GenRe, panitia seleksi, pengurus Forum GenRe DIY, dan masyarakat umum.",
    impact:
      "Memastikan pengumuman seleksi transparan, cepat, dan sanggup menampung ribuan akses pengunjung serentak tanpa kendala *server down*.",
  },
  {
    id: "elearning-alc",
    title: "E-Learning ALC — Platform Edukasi & Pelatihan Digital",
    category: "Learning Management System",
    badge: "E-Learning Platform",
    summary:
      "Portal landing page dan gerbang pembelajaran terintegrasi bagi siswa pelatihan vokasi LPKS ALC.",
    description:
      "Portal resmi e-learningalc.online yang memfasilitasi pendaftaran kursus online, silabus pembelajaran vokasi, materi digital, dan sistem login terpadu antara instruktur dan peserta didik.",
    features: [
      "Pendaftaran Online Terintegrasi untuk berbagai program keterampilan kerja.",
      "Katalog Kelas & Kurikulum Vokasi yang tersusun sistematis.",
      "Portal Login Terpusat bagi peserta dan staf instruktur pelatihan.",
      "Informasi Jadwal Kelas, Ujian Kompetensi, dan Sertifikasi Resmi.",
    ],
    techStack: ["HTML5", "CSS3 / Tailwind", "JavaScript", "PHP Backend", "MySQL"],
    image: "/projects/project-elearning-alc.jpg",
    link: "#contact",
    targetUser: "Calon peserta kursus, siswa vokasi aktif, instruktur ahli, dan staf operasional LPKS.",
    impact:
      "Memperluas jangkauan pendaftaran kursus vokasi ke luar daerah dan mempermudah distribusi materi pembelajaran secara terpusat.",
  },
  {
    id: "life-os",
    title: "Life OS — Personal Dashboard & Productivity System",
    category: "Custom Web Application",
    badge: "Personal Productivity",
    summary:
      "Sistem produktivitas terintegrasi all-in-one untuk manajemen target, habit harian, keuangan, dan tugas.",
    description:
      "Aplikasi berbasis web modern untuk manajemen kehidupan terpusat. Menggabungkan pelacakan rutinitas harian, papan tugas prioritas, pencatatan arus kas keuangan, serta visualisasi progres target jangka panjang dalam satu antarmuka futuristik.",
    features: [
      "Goal Tracker & Milestone Dashboard dengan persentase capaian target.",
      "Habit Tracker Interaktif dengan visualisasi streak dan konsistensi harian.",
      "Manajemen Arus Kas Keuangan pribadi (income, expense, saving goals).",
      "Papan Manajemen Tugas berbasis prioritas (Urgent / Important Matrix).",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Data Analytics UI", "Local/Cloud Sync"],
    image: "/projects/project-life-os.jpg",
    link: "#contact",
    targetUser: "Profesional mandiri, developer, mahasiswa, dan individu yang mengutamakan efisiensi hidup.",
    impact:
      "Meningkatkan konsistensi kebiasaan positif dan membantu pengguna mengontrol arus keuangan pribadi secara disiplin.",
  },
  {
    id: "pikm-senandika",
    title: "PIKM Senandika UTY — Portal Informasi & Konseling Mahasiswa",
    category: "Website Development",
    badge: "Campus & Mental Health",
    summary:
      "Portal informasi kesehatan mental, edukasi konseling sebaya, dan sistem reservasi konseling mahasiswa UTY.",
    description:
      "Website resmi Pusat Informasi dan Konseling Mahasiswa Senandika Universitas Teknologi Yogyakarta yang hadir sebagai ruang aman (safe space) bagi mahasiswa untuk mengakses edukasi kesehatan mental dan konseling.",
    features: [
      "Booking Sesi Konseling Privat Daring / Tatap Muka dengan konselor sebaya terlatih.",
      "Artikel dan Modul Edukatif mengenai manajemen stres, relasi sehat, dan self-growth.",
      "Screening Awal Kesehatan Mental dan formulir kepribadian.",
      "Informasi Kegiatan Kampus, seminar psikologi, dan kontak hotline krisis.",
    ],
    techStack: ["Web Application", "Tailwind CSS", "Responsive UI", "Booking Management Engine"],
    image: "/projects/project-pikm-senandika.jpg",
    link: "#contact",
    targetUser: "Mahasiswa UTY, pengurus organisasi kampus, konselor sebaya, dan dosen pembimbing.",
    impact:
      "Membuka akses konseling tanpa stigma bagi ratusan mahasiswa yang membutuhkan ruang curhat dan bimbingan kesehatan mental.",
  },
  {
    id: "alc-yayasan",
    title: "Yayasan Assyuro Lombok Creative — Official Web Profil",
    category: "Company Profile Website",
    badge: "Foundation Profile",
    summary:
      "Website company profile resmi Yayasan Pendidikan dan Pelatihan Assyuro Lombok Creative dan unit binaannya.",
    description:
      "Website profil kelembagaan resmi Yayasan Pendidikan dan Pelatihan Assyuro Lombok Creative yang menaungi berbagai unit pendidikan (TBM, PAUD, PKBM, LPKS, Koperasi ALC). Menampilkan sejarah pendirian, legalitas, serta laporan kegiatan sosial kemasyarakatan.",
    features: [
      "Hero Profile & Showcase Unit Lembaga binaan yayasan secara komprehensif.",
      "Transparansi Legalitas, Visi Misi, dan Struktur Pengurus Yayasan.",
      "Galeri Dokumentasi Program Pelatihan, Bakti Sosial, dan Pendidikan Anak Usia Dini.",
      "Formulir Kemitraan dan Donasi Pemberdayaan Masyarakat.",
    ],
    techStack: ["Next.js / React", "Tailwind CSS", "High-Resolution Gallery", "Responsive UI"],
    image: "/projects/project-alc.jpg",
    link: "#contact",
    targetUser: "Masyarakat umum, calon mitra CSR, lembaga donor, dan peserta pelatihan yayasan.",
    impact:
      "Meningkatkan kredibilitas hukum dan reputasi yayasan di mata instansi pemerintah, mitra kerja sama, dan para donatur.",
  },
  {
    id: "pikr-kenari",
    title: "PIK-R Kenari — Website Komunitas & Edukasi Remaja",
    category: "Company Profile Website",
    badge: "Youth Community",
    summary:
      "Website profil dan dokumentasi kegiatan Pusat Informasi dan Konseling Remaja (PIK-R) Kenari.",
    description:
      "Website profil komunitas yang dirancang untuk mempublikasikan inisiatif pemberdayaan generasi muda di tingkat desa, mencakup sosialisasi bahaya pernikahan dini, gaya hidup sehat, dan aksi sukarelawan kemanusiaan.",
    features: [
      "Profil Pengurus & Struktur Organisasi PIK-R Kenari.",
      "Dokumentasi Galeri Kegiatan Sosialisasi Remaja Sehat & Aksi Lingkungan.",
      "Edukasi Pendewasaan Usia Perkawinan (PUP) dan keterampilan hidup (life skills).",
      "Formulir pendaftaran relawan pemuda dan kontak konsultasi sebaya.",
    ],
    techStack: ["Modern Web Platform", "Responsive Design", "Mobile-Optimized Media", "Cloud Hosting"],
    image: "/projects/project-pikr-kenari.jpg",
    link: "#contact",
    targetUser: "Remaja desa, karang taruna, orang tua, dan pembina organisasi pemuda.",
    impact:
      "Mendorong partisipasi aktif ratusan pemuda desa dalam program literasi dan pemberdayaan komunitas sebaya.",
  },
];

export const FOOTER_DATA = [
  {
    title: "Services",
    data: [
      {
        name: "Website Development",
        icon: null,
        link: "#services",
      },
      {
        name: "Custom Web Application",
        icon: null,
        link: "#services",
      },
      {
        name: "Online Voting System",
        icon: null,
        link: "#services",
      },
      {
        name: "Learning Management System",
        icon: null,
        link: "#services",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "WhatsApp (+62 851-9006-6709)",
        icon: FaWhatsapp,
        link: "https://wa.me/6285190066709",
      },
      {
        name: "Instagram (@webtagons)",
        icon: FaInstagram,
        link: "https://www.instagram.com/webtagons/",
      },
    ],
  },
  {
    title: "About Webtagons",
    data: [
      {
        name: "About Us",
        icon: null,
        link: "#about",
      },
      {
        name: "Our Portfolio",
        icon: null,
        link: "#portfolio",
      },
      {
        name: "Contact Us",
        icon: null,
        link: "#contact",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "Home",
    link: "#home",
  },
  {
    title: "About",
    link: "#about",
  },
  {
    title: "Services",
    link: "#services",
  },
  {
    title: "Portfolio",
    link: "#portfolio",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const CONTACT_INFO = {
  whatsappNumber: "+62 851-9006-6709",
  whatsappLink: "https://wa.me/6285190066709",
  instagramUsername: "@webtagons",
  instagramLink: "https://www.instagram.com/webtagons/",
} as const;
