"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Cpu, Video, Layers, Camera } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const galleryImages = Array(20).fill(
    "https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
  );

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <nav className="fixed top-0 w-full z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center gap-3">
          <div className="w-8 h-8 bg-stone-800 flex items-center justify-center">
            <Camera className="w-4 h-4 text-white" strokeWidth={2} />
          </div>
          <span className="text-sm font-light tracking-widest text-stone-800 uppercase">
            REALFUSSION
          </span>
        </div>
      </nav>

      <section className="relative pt-28 pb-16 px-4 sm:px-6">
        <motion.div
          style={{ opacity }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl font-light text-stone-800 mb-3 tracking-tight"
          >
            REALFUSSION
          </motion.h1>

          <div className="w-16 h-px bg-stone-300 mx-auto mb-6" />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm text-stone-600 mb-8 font-light"
          >
            Fotogrametría Acelerada por GPU
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xs text-stone-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light"
          >
            Sistema completo que transforma videos o colecciones de fotografías
            en modelos 3D precisos y texturizados. Eliminación automática de
            fondos y superficies con inteligencia artificial.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { label: "Procesamiento", value: "Minutos" },
              { label: "Tecnología IA", value: "YOLO v11" },
              { label: "Aceleración", value: "GPU CUDA" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white border border-stone-200 p-4 text-center"
              >
                <p className="text-xs text-stone-400 mb-1 uppercase tracking-wide font-light">
                  {stat.label}
                </p>
                <p className="text-sm font-light text-stone-700">
                  {stat.value}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-tight">
            Tecnologías Integradas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Camera,
                title: "YOLO v11",
                desc: "Segmentación inteligente que detecta y elimina automáticamente fondos, mesas y superficies de apoyo del modelo final.",
                features: [
                  "Detección de objetos",
                  "Máscaras precisas",
                  "Filtrado automático",
                ],
              },
              {
                icon: Box,
                title: "COLMAP + OpenMVS",
                desc: "Pipeline profesional de Structure from Motion y Multi-View Stereo para reconstrucción 3D de alta precisión.",
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
                features: [
                  "Paralelización GPU",
                  "NVIDIA Container",
                  "Velocidad 10x",
                ],
              },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-stone-50 border border-stone-200 p-6"
              >
                <div className="w-10 h-10 bg-stone-800 flex items-center justify-center mb-4">
                  <tech.icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-light text-stone-800 mb-3">
                  {tech.title}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed mb-4 font-light">
                  {tech.desc}
                </p>
                <div className="space-y-1">
                  {tech.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-stone-500"
                    >
                      <div className="w-1 h-1 bg-stone-400" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-tight">
            Pipeline de Procesamiento
          </h2>

          <div className="space-y-10 max-w-5xl mx-auto">
            {[
              {
                icon: Video,
                num: "1",
                title: "Entrada de Video",
                desc: "El sistema acepta videos en múltiples formatos (MP4, AVI, MOV). Analiza automáticamente cada frame evaluando métricas de nitidez, contraste y exposición.",
                detail:
                  "Extrae inteligentemente los mejores fotogramas eliminando frames redundantes o de baja calidad, optimizando el proceso de reconstrucción.",
              },
              {
                icon: Camera,
                num: "2",
                title: "Segmentación IA",
                desc: "YOLO v11 detecta el objeto principal en cada imagen con máscaras de segmentación a nivel de píxel. Identifica y elimina automáticamente fondos complejos y superficies de apoyo.",
                detail:
                  "Utiliza métricas de centralidad, área y compacidad para seleccionar el objeto de interés, produciendo máscaras limpias que mejoran drásticamente la calidad del modelo 3D final.",
              },
              {
                icon: Layers,
                num: "3",
                title: "Reconstrucción 3D",
                desc: "COLMAP ejecuta Structure from Motion extrayendo features SIFT, emparejando correspondencias entre imágenes y triangulando puntos 3D con Bundle Adjustment.",
                detail:
                  "OpenMVS densifica la nube de puntos, reconstruye la malla 3D con Poisson Surface Reconstruction y texturiza el modelo proyectando las imágenes originales sobre la geometría.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-stone-800 flex items-center justify-center">
                      <step.icon
                        className="w-4 h-4 text-white"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-sm font-light text-stone-800">
                      {step.num}. {step.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-600 font-light leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <p className="text-xs text-stone-500 font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative aspect-video bg-stone-200 border border-stone-200 overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1689308271305-58e75832289b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-tight">
            Características Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-stone-50 border border-stone-200 p-6">
              <h3 className="text-sm font-light text-stone-800 mb-4 uppercase tracking-widest">
                Entrada
              </h3>
              <ul className="space-y-2 text-xs text-stone-600 font-light">
                <li>• Formatos de video: MP4, AVI, MOV, MKV</li>
                <li>• Colecciones de fotografías: JPG, PNG, TIFF</li>
                <li>• Análisis automático de calidad de frames</li>
                <li>• Extracción inteligente de fotogramas óptimos</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6">
              <h3 className="text-sm font-light text-stone-800 mb-4 uppercase tracking-widest">
                Procesamiento
              </h3>
              <ul className="space-y-2 text-xs text-stone-600 font-light">
                <li>• Segmentación por instancia con YOLO v11</li>
                <li>• Máscaras binarias a nivel de píxel</li>
                <li>• Eliminación automática de fondos y superficies</li>
                <li>• Aceleración GPU CUDA para SIFT</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6">
              <h3 className="text-sm font-light text-stone-800 mb-4 uppercase tracking-widest">
                Salida
              </h3>
              <ul className="space-y-2 text-xs text-stone-600 font-light">
                <li>• Modelos 3D en formato OBJ, PLY, FBX</li>
                <li>• Mallas texturizadas de alta resolución</li>
                <li>• Nubes de puntos densas y sparse</li>
                <li>• Geometría optimizada para visualización</li>
              </ul>
            </div>

            <div className="bg-stone-50 border border-stone-200 p-6">
              <h3 className="text-sm font-light text-stone-800 mb-4 uppercase tracking-widest">
                Infraestructura
              </h3>
              <ul className="space-y-2 text-xs text-stone-600 font-light">
                <li>• Contenedorización con Docker</li>
                <li>• NVIDIA Container Toolkit para GPU</li>
                <li>• API REST con FastAPI</li>
                <li>• Procesamiento paralelo optimizado</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-tight">
            Galería de Resultados
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.01 }}
                className="relative aspect-square bg-stone-200 overflow-hidden border border-stone-200"
              >
                <Image
                  src={img}
                  alt={`Resultado ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-white border-t border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="bg-stone-50 border border-stone-200 p-8">
            <h2 className="text-xl font-light text-stone-800 mb-6 tracking-tight">
              Stack Tecnológico
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3 font-light">
                  Backend
                </p>
                <ul className="space-y-1 text-xs text-stone-600 font-light">
                  <li>FastAPI - API REST moderna</li>
                  <li>COLMAP - Structure from Motion</li>
                  <li>OpenMVS - Multi-View Stereo</li>
                  <li>YOLO v11 - Segmentación IA</li>
                  <li>Docker + NVIDIA Toolkit</li>
                  <li>OpenCV - Procesamiento de imágenes</li>
                </ul>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone-500 mb-3 font-light">
                  Frontend
                </p>
                <ul className="space-y-1 text-xs text-stone-600 font-light">
                  <li>Next.js 15 - Framework React</li>
                  <li>TypeScript - Tipado estático</li>
                  <li>Tailwind CSS - Estilos modernos</li>
                  <li>Framer Motion - Animaciones</li>
                  <li>Lucide React - Iconografía</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 px-4 sm:px-6 bg-stone-50 border-t border-stone-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-light text-stone-800 mb-10 text-center tracking-tight">
            Equipo de Desarrollo
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
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
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-stone-200 p-6 text-center hover:bg-stone-50 transition-colors"
              >
                <div className="relative w-20 h-20 mx-auto mb-3 bg-stone-200 overflow-hidden border border-stone-200">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xs font-light text-stone-800 mb-1">
                  {member.name}
                </h3>
                <div className="flex items-center justify-center gap-1 text-xs text-stone-400">
                  <svg
                    className="w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 sm:px-6 bg-white border-t border-stone-200 text-center">
        <p className="text-xs text-stone-400 font-light">
          © 2025 REALFUSSION - Fotogrametría de Nueva Generación
        </p>
      </footer>
    </div>
  );
}
