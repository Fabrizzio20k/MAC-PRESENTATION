"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Box, Cpu, Video, Layers } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./Starfield"), { ssr: false });

export default function Home() {
  const galleryImages = Array(20).fill(
    "https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-linear-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900/30 via-black to-black pointer-events-none" />

      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-11 h-11">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-sm animate-pulse" />
              <div className="relative w-full h-full bg-linear-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-black text-lg">
                RF
              </div>
            </div>
            <span className="text-2xl font-black bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              REALFUSSION
            </span>
          </motion.div>
        </div>
      </nav>

      <section className="relative pt-40 pb-32 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto text-center relative z-10"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              rotate: [0, 1, -1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="inline-block mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
              <h1 className="relative text-7xl md:text-9xl font-black bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                REALFUSSION
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-white/90 mb-6"
          >
            Fotogrametría Acelerada por GPU
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl text-white/60 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Sistema completo que transforma videos o colecciones de fotografías
            en modelos 3D precisos y texturizados. Eliminación automática de
            fondos y superficies con IA.
          </motion.p>
        </motion.div>

        <StarField />
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-20 bg-linear-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
          >
            Tecnologías Integradas
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "YOLO v11",
                desc: "Segmentación inteligente que detecta y elimina automáticamente fondos, mesas y superficies de apoyo del modelo final.",
                gradient: "from-cyan-500 to-blue-500",
              },
              {
                icon: Box,
                title: "COLMAP + OpenMVS",
                desc: "Pipeline profesional de Structure from Motion y Multi-View Stereo para reconstrucción 3D de alta precisión.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                icon: Cpu,
                title: "CUDA Acceleration",
                desc: "Procesamiento paralelo masivo en GPU para extracción de features SIFT y densificación de nubes de puntos.",
                gradient: "from-pink-500 to-orange-500",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-black border border-white/10 rounded-3xl p-8">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-16 bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            Pipeline de Procesamiento
          </motion.h2>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="Video Input"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center">
                    <Video className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    1. Entrada de Video
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  El sistema acepta videos en múltiples formatos (MP4, AVI,
                  MOV). Analiza automáticamente cada frame evaluando métricas de
                  nitidez, contraste y exposición.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Extrae inteligentemente los mejores fotogramas eliminando
                  frames redundantes o de baja calidad, optimizando el proceso
                  de reconstrucción.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    2. Segmentación IA
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  YOLO v11 detecta el objeto principal en cada imagen con
                  máscaras de segmentación a nivel de píxel. Identifica y
                  elimina automáticamente fondos complejos y superficies de
                  apoyo.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Utiliza métricas de centralidad, área y compacidad para
                  seleccionar el objeto de interés, produciendo máscaras limpias
                  que mejoran drásticamente la calidad del modelo 3D final.
                </p>
              </div>
              <div>
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="AI Segmentation"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 md:order-1">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="3D Reconstruction"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-linear-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                    <Layers className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    3. Reconstrucción 3D
                  </h3>
                </div>
                <p className="text-white/70 text-lg leading-relaxed mb-4">
                  COLMAP ejecuta Structure from Motion extrayendo features SIFT,
                  emparejando correspondencias entre imágenes y triangulando
                  puntos 3D con Bundle Adjustment.
                </p>
                <p className="text-white/60 leading-relaxed">
                  OpenMVS densifica la nube de puntos, reconstruye la malla 3D
                  con Poisson Surface Reconstruction y texturiza el modelo
                  proyectando las imágenes originales sobre la geometría.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-center mb-20 bg-linear-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent"
          >
            Resultados
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
                <Image
                  src={img}
                  alt={`Result ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-linear-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-20" />
            <div className="relative bg-linear-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 md:p-16 backdrop-blur-xl">
              <h2 className="text-4xl md:text-5xl font-black mb-6 bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stack Tecnológico
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-white/70">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Backend</h3>
                  <ul className="space-y-2">
                    <li>• FastAPI - API REST moderna</li>
                    <li>• COLMAP - Structure from Motion</li>
                    <li>• OpenMVS - Multi-View Stereo</li>
                    <li>• YOLO v11 - Segmentación IA</li>
                    <li>• Docker + NVIDIA Toolkit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    Frontend
                  </h3>
                  <ul className="space-y-2">
                    <li>• Next.js 15 - Framework React</li>
                    <li>• TypeScript - Tipado estático</li>
                    <li>• Tailwind CSS - Estilos modernos</li>
                    <li>• Framer Motion - Animaciones</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-12 px-6">
        <div className="max-w-7xl mx-auto text-center text-white/40">
          <p className="text-lg">
            © 2025 REALFUSSION - Fotogrametría de Nueva Generación
          </p>
        </div>
      </footer>
    </div>
  );
}
