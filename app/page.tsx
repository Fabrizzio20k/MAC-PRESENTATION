"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Sparkles,
  Zap,
  Box,
  Cpu,
  Video,
  Layers,
  Clock,
  Shield,
  Rocket,
} from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";

const StarField = dynamic(() => import("./Starfield"), { ssr: false });

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const galleryImages = Array(20).fill(
    "https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-purple-900/30 via-black to-black pointer-events-none" />

      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="relative w-9 h-9 sm:w-11 sm:h-11">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl blur-sm animate-pulse" />
              <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-xl flex items-center justify-center font-black text-base sm:text-lg">
                RF
              </div>
            </div>
            <span className="text-lg sm:text-2xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              REALFUSSION
            </span>
          </motion.div>
        </div>
      </nav>

      <section className="relative pt-32 sm:pt-40 pb-20 sm:pb-32 px-4 sm:px-6">
        <motion.div
          style={{ opacity, scale }}
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
            className="inline-block mb-6 sm:mb-8"
          >
            <div className="relative">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full blur-2xl sm:blur-3xl opacity-30 animate-pulse" />
              <h1 className="relative text-5xl sm:text-7xl md:text-9xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
                REALFUSSION
              </h1>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/90 mb-4 sm:mb-6 px-4"
          >
            Fotogrametría Acelerada por GPU
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-base sm:text-xl text-white/60 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-4"
          >
            Sistema completo que transforma videos o colecciones de fotografías
            en modelos 3D precisos y texturizados. Eliminación automática de
            fondos y superficies con IA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto px-4"
          >
            {[
              { icon: Clock, label: "Minutos", value: "No horas" },
              { icon: Shield, label: "IA Integrada", value: "YOLO v11" },
              { icon: Rocket, label: "GPU", value: "CUDA" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-100 transition" />
                <div className="relative bg-black/80 backdrop-blur border border-white/10 rounded-2xl p-4 sm:p-6">
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400 mx-auto mb-2 sm:mb-3" />
                  <p className="text-xs sm:text-sm text-white/60 mb-1">
                    {stat.label}
                  </p>
                  <p className="text-base sm:text-xl font-bold text-white">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <StarField />
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent px-4"
          >
            Tecnologías Integradas
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "YOLO v11",
                desc: "Segmentación inteligente que detecta y elimina automáticamente fondos, mesas y superficies de apoyo del modelo final.",
                gradient: "from-cyan-500 to-blue-500",
                features: [
                  "Detección de objetos",
                  "Máscaras precisas",
                  "Filtrado de fondos",
                ],
              },
              {
                icon: Box,
                title: "COLMAP + OpenMVS",
                desc: "Pipeline profesional de Structure from Motion y Multi-View Stereo para reconstrucción 3D de alta precisión.",
                gradient: "from-purple-500 to-pink-500",
                features: [
                  "Features SIFT",
                  "Bundle Adjustment",
                  "Mallas texturizadas",
                ],
              },
              {
                icon: Cpu,
                title: "CUDA Acceleration",
                desc: "Procesamiento paralelo masivo en GPU para extracción de features SIFT y densificación de nubes de puntos.",
                gradient: "from-pink-500 to-orange-500",
                features: [
                  "Paralelización GPU",
                  "NVIDIA Container",
                  "Velocidad 10x",
                ],
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
                    {feature.desc}
                  </p>
                  <div className="space-y-2">
                    {feature.features.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-xs sm:text-sm text-white/50"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-10 sm:mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent px-4"
          >
            Pipeline de Procesamiento
          </motion.h2>

          <div className="space-y-12 sm:space-y-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="Video Input"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      <span className="text-xs sm:text-sm font-medium">
                        Análisis de frames en tiempo real
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Video className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    1. Entrada de Video
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-3 sm:mb-4">
                  El sistema acepta videos en múltiples formatos (MP4, AVI,
                  MOV). Analiza automáticamente cada frame evaluando métricas de
                  nitidez, contraste y exposición.
                </p>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
                  Extrae inteligentemente los mejores fotogramas eliminando
                  frames redundantes o de baja calidad, optimizando el proceso
                  de reconstrucción.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["MP4", "AVI", "MOV", "MKV"].map((format) => (
                    <span
                      key={format}
                      className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full text-xs sm:text-sm text-cyan-300"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    2. Segmentación IA
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-3 sm:mb-4">
                  YOLO v11 detecta el objeto principal en cada imagen con
                  máscaras de segmentación a nivel de píxel. Identifica y
                  elimina automáticamente fondos complejos y superficies de
                  apoyo.
                </p>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
                  Utiliza métricas de centralidad, área y compacidad para
                  seleccionar el objeto de interés, produciendo máscaras limpias
                  que mejoran drásticamente la calidad del modelo 3D final.
                </p>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {[
                    { label: "Confianza", value: "95%" },
                    { label: "Precisión", value: "Píxel-level" },
                    { label: "Velocidad", value: "Real-time" },
                    { label: "Clases", value: "80+" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-3 sm:p-4"
                    >
                      <p className="text-xs text-purple-300 mb-1">
                        {metric.label}
                      </p>
                      <p className="text-sm sm:text-base font-bold text-white">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="AI Segmentation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                      <span className="text-xs sm:text-sm font-medium">
                        Detección de objetos activa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <div className="relative aspect-video rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 group">
                  <Image
                    src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                    alt="3D Reconstruction"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/80">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                      <span className="text-xs sm:text-sm font-medium">
                        Generando modelo 3D
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Layers className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    3. Reconstrucción 3D
                  </h3>
                </div>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-3 sm:mb-4">
                  COLMAP ejecuta Structure from Motion extrayendo features SIFT,
                  emparejando correspondencias entre imágenes y triangulando
                  puntos 3D con Bundle Adjustment.
                </p>
                <p className="text-sm sm:text-base text-white/60 leading-relaxed mb-4">
                  OpenMVS densifica la nube de puntos, reconstruye la malla 3D
                  con Poisson Surface Reconstruction y texturiza el modelo
                  proyectando las imágenes originales sobre la geometría.
                </p>
                <div className="space-y-2">
                  {[
                    "Feature Extraction (SIFT)",
                    "Feature Matching",
                    "Sparse Reconstruction",
                    "Dense Point Cloud",
                    "Mesh Generation",
                    "Texture Mapping",
                  ].map((step, idx) => (
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 text-xs sm:text-sm text-white/70"
                    >
                      <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-300 font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      {step}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent px-4"
          >
            Resultados
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
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

      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-full blur-2xl sm:blur-3xl opacity-20" />
            <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Stack Tecnológico
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 text-white/70">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    Backend
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• FastAPI - API REST moderna</li>
                    <li>• COLMAP - Structure from Motion</li>
                    <li>• OpenMVS - Multi-View Stereo</li>
                    <li>• YOLO v11 - Segmentación IA</li>
                    <li>• Docker + NVIDIA Toolkit</li>
                    <li>• OpenCV - Procesamiento de imágenes</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                    Frontend
                  </h3>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li>• Next.js 15 - Framework React</li>
                    <li>• TypeScript - Tipado estático</li>
                    <li>• Tailwind CSS - Estilos modernos</li>
                    <li>• Framer Motion - Animaciones</li>
                    <li>• Lucide React - Iconografía</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4"
          >
            Equipo de Desarrollo
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Fabrizzio Vilchez Espinoza",
                linkedin: "https://www.linkedin.com/in/fabrizzio20k/",
                image:
                  "https://media.licdn.com/dms/image/v2/D4E03AQGeSFmBUO3AHA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706490254476?e=1764201600&v=beta&t=5_uA3LEcqgW9PyaIe7gwKTbCzJWg5kY2IcTzKfIcQrE",
              },
              {
                name: "Jeffrey Monja Castro",
                linkedin: "https://www.linkedin.com/in/jeffreymonjacastro/",
                image:
                  "https://media.licdn.com/dms/image/v2/D4E03AQEUV7Lxga0LZA/profile-displayphoto-shrink_400_400/B4EZQjJdX8HkAg-/0/1735756470222?e=1764201600&v=beta&t=Fv8_Sn7TEyKR2xe-YmBIv-uGjpSG0OJlqwbSdDk0BK8",
              },
              {
                name: "Fabricio Chavez Balarezo",
                linkedin:
                  "https://www.linkedin.com/in/fabricio-chavez-4393a02b7/",
                image:
                  "https://media.licdn.com/dms/image/v2/D5603AQFhvfuFsr5Qjw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1709139452483?e=1764201600&v=beta&t=gwdLcWTZb5wGLBhs4OF4udgCa3iFuqO9HLACK-xvflQ",
              },
            ].map((member, i) => (
              <motion.a
                key={i}
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative block"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur opacity-30 group-hover:opacity-100 transition duration-500" />
                <div className="relative h-full bg-black border border-white/10 rounded-3xl p-6 sm:p-8">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 mx-auto mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full blur-md opacity-50 group-hover:opacity-100 transition" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 group-hover:border-white/30 transition">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white text-center mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition">
                    {member.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-sm text-white/60 group-hover:text-cyan-400 transition">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center text-white/40">
          <p className="text-sm sm:text-lg">
            © 2025 REALFUSSION - Fotogrametría de Nueva Generación
          </p>
        </div>
      </footer>
    </div>
  );
}
