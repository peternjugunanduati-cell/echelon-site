import Head from "next/head";
import { useState, useEffect } from "react";

export default function EchelonUltimateLaunch() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [particles, setParticles] = useState([]);
  const [scrollY, setScrollY] = useState(0);
  const whatsappNumber = "254797844697";

  const gallery = [
    { title: "Modern Luxury Kitchen", src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c" },
    { title: "Walk-in Wardrobe", src: "https://images.unsplash.com/photo-1615873968403-89e068629265" },
    { title: "Executive Office Fit-out", src: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76" },
    { title: "Living Room Feature Wall", src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0" },
    { title: "Custom TV Unit", src: "https://images.unsplash.com/photo-1618220179428-22790b461013" },
    { title: "Glass Partition Office", src: "https://images.unsplash.com/photo-1604328727766-a151d1045ab4" },
  ];

  const testimonials = [
    { client: "James Mwangi", text: "Echelon transformed our apartment into a masterpiece." },
    { client: "Aisha Njeri", text: "Professional, precise, and excellent finishes." },
    { client: "Peter Odhiambo", text: "The best interior designers in Nairobi." },
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const temp = Array.from({ length: 30 }).map(() => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 2 + Math.random() * 4,
      speed: 0.2 + Math.random() * 0.4,
    }));
    setParticles(temp);
    const interval = setInterval(() => {
      setParticles(prev =>
        prev.map(p => ({ ...p, y: p.y - p.speed < 0 ? window.innerHeight : p.y - p.speed }))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const parallax = offset => scrollY * offset;
  const { motion } = window.framerMotion;

  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet" />
        <script src="https://cdn.jsdelivr.net/npm/framer-motion/dist/framer-motion.umd.js"></script>

        <style>{`
          .shimmer-text {
            position: relative;
            display: inline-block;
            background: linear-gradient(90deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.2) 100%);
            background-size: 200% auto;
            color: transparent;
            -webkit-background-clip: text;
            background-clip: text;
            animation: shimmer 2s linear infinite;
          }
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}</style>
      </Head>

      <div className="relative bg-white text-gray-900 overflow-x-hidden min-h-screen">

        {/* Ambient Audio */}
        <audio id="ambientAudio" loop autoPlay muted playsInline>
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
        </audio>
        <button
          className="fixed bottom-4 right-4 bg-white/80 text-gray-800 px-3 py-2 rounded-full shadow-lg z-50"
          onClick={() => {
            const audio = document.getElementById("ambientAudio");
            if (audio.muted) { audio.muted = false; audio.volume = 0.15; }
            else { audio.muted = true; }
          }}
        >
          🎵
        </button>

        {/* Floating particles */}
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white/20"
            style={{ width: p.size, height: p.size, left: p.x, top: p.y + scrollY * 0.05 }}
          />
        ))}

        {/* Hero */}
        <section className="px-6 py-16 relative text-center overflow-hidden">
          <div className="relative z-10">
            <div
              className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 rounded-full filter blur-3xl opacity-40 animate-[pulse_6s_ease-in-out_infinite]"
              style={{ transform: `translateY(${scrollY * 0.05}px)` }}
            />
            <motion.h1
              className="text-4xl font-bold mb-4 relative z-10 shimmer-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Echelon Interiors
            </motion.h1>
            <p className="text-gray-600 mb-6 z-10 relative">
              Luxury Interior Design & Fit-Out Company in Nairobi.
            </p>
            <a href={`https://wa.me/${whatsappNumber}?text=Hello%20Echelon%20Interiors,%20I%20would%20like%20a%20quotation`} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-white px-6 py-2 rounded-2xl shadow-lg z-10 relative">Request Quotation</button>
            </a>
          </div>
        </section>

        {/* Portfolio */}
        <motion.section className="bg-gray-50 px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-10">Our Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                className="relative rounded-2xl shadow-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
                whileTap={{ scale: 0.97, rotateX: -1, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                style={{ transform: `translateY(${scrollY * 0.15 * (i + 1)}px)` }}
              >
                <img src={item.src} alt={item.title} className="h-56 w-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/5 to-white/10 opacity-60 pointer-events-none rounded-2xl" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/30 backdrop-blur-sm text-white rounded-b-2xl">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Featured Projects Carousel */}
        <motion.section className="px-6 py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Projects</h2>
          <div className="flex overflow-x-scroll gap-6 pb-4 snap-x snap-mandatory">
            {gallery.map((item, i) => (
              <motion.div
                key={i}
                className="min-w-[250px] rounded-2xl shadow-xl snap-start cursor-pointer relative"
                onClick={() => setSelectedImage(item)}
                whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
                whileTap={{ scale: 0.97, rotateX: -1, rotateY: -1 }}
                transition={{ type: "spring", stiffness: 120, damping: 10 }}
                style={{ transform: `translateY(${scrollY * 0.1 * (i + 1)}px)` }}
              >
                <img src={item.src} alt={item.title} className="h-56 w-full object-cover rounded-2xl" />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/30 backdrop-blur-sm text-white rounded-b-2xl">
                  <h3 className="font-semibold">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section className="px-6 py-16 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Testimonials</h2>
          <div className="flex overflow-x-scroll gap-6 pb-4 snap-x snap-mandatory">
            {testimonials.map((t, i) => (
              <div key={i} className="min-w-[250px] bg-white p-6 rounded-2xl shadow-lg snap-start">
                <p className="text-gray-800 italic mb-4">"{t.text}"</p>
                <h4 className="font-semibold text-gray-900 text-right">- {t.client}</h4>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4" onClick={() => setSelectedImage(null)}>
            <div className="max-w-4xl w-full">
              <img src={selectedImage.src} alt={selectedImage.title} className="rounded-2xl w-full" />
              <p className="text-white text-center mt-4">{selectedImage.title}</p>
            </div>
          </div>
        )}

      </div>
    </>
  );
      }
