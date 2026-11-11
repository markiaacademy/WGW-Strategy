/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  ArrowRight, 
  ClipboardList, 
  Database, 
  Users, 
  TrendingUp, 
  Search, 
  Target, 
  Map, 
  Settings, 
  MessageSquare, 
  FileText, 
  Monitor, 
  Share2, 
  Calendar, 
  Play, 
  Zap, 
  Activity, 
  ShieldCheck,
  ChevronRight,
  Info
} from "lucide-react";
import { useState } from "react";

const roadmapSteps = [
  { id: 1, title: "Definir alcance y objetivos", desc: "Confirmar desarrollos, autoridad de decisión, presupuesto y metas de venta.", icon: Target, entregable: "Alcance acordado y objetivos por proyecto" },
  { id: 2, title: "Inventariar el material disponible", desc: "Reunir webs, redes, avisos, renders, fotos, planos y reportes.", icon: ClipboardList, entregable: "Inventario con ubicación, responsable y faltantes" },
  { id: 3, title: "Validar información comercial", desc: "Solicitar unidades, superficies, precios, financiación y disponibilidad.", icon: FileText, entregable: "Ficha comercial única validada y fechada" },
  { id: 4, title: "Relevar trayectoria y respaldo", desc: "Documentar obras entregadas, equipo y experiencias de compradores.", icon: ShieldCheck, entregable: "Banco de evidencias para argumentos de venta" },
  { id: 5, title: "Auditar la operación actual", desc: "Revisar cómo llegan consultas, tiempos de respuesta y motivos de pérdida.", icon: Search, entregable: "Diagnóstico del proceso y fallas principales" },
  { id: 6, title: "Analizar mercado y competencia", desc: "Comparar propuestas equivalentes por ubicación, producto y precio.", icon: Activity, entregable: "Mapa competitivo y evaluación de la oferta" },
  { id: 7, title: "Definir públicos y posicionamiento", desc: "Distinguir compradores para vivienda e inversión y criterios de decisión.", icon: Users, entregable: "Segmentos prioritarios y propuesta de valor" },
  { id: 8, title: "Diseñar el plan comercial", desc: "Establecer objetivos por etapa, canales, recursos y presupuesto.", icon: Map, entregable: "Plan de ejecución con responsables y fechas" },
  { id: 9, title: "Organizar el equipo y reglas", desc: "Definir recepción, asignación, negociación e incentivos.", icon: Settings, entregable: "Responsabilidades y reglas comerciales claras" },
  { id: 10, title: "Configurar CRM y medición", desc: "Elegir herramientas, etapas, campos y fuentes de captación.", icon: Database, entregable: "Oportunidades con responsable y estado" },
  { id: 11, title: "Diseñar atención y seguimiento", desc: "Preparar primera respuesta, calificación y secuencias de reactivación.", icon: MessageSquare, entregable: "Protocolo comercial aplicable por el equipo" },
  { id: 12, title: "Producir materiales comerciales", desc: "Unificar argumentos, fichas, brochures y respuestas a objeciones.", icon: FileText, entregable: "Kit comercial digital e impreso vigente" },
  { id: 13, title: "Optimizar experiencia digital", desc: "Revisar web móvil, claridad de información, formularios y WhatsApp.", icon: Monitor, entregable: "Consulta con entrada correcta y continuidad" },
  { id: 14, title: "Ordenar portales y redes", desc: "Corregir avisos, imágenes, CTAs y recorridos hacia contacto.", icon: Share2, entregable: "Presencia coherente con la oferta vigente" },
  { id: 15, title: "Activar distribución y alianzas", desc: "Capacitar comerciales internos y acordar colaboración inmobiliaria.", icon: Zap, entregable: "Red activa con condiciones claras" },
  { id: 16, title: "Preparar reuniones y eventos", desc: "Diseñar presentación, recorrido, materiales y convocatoria.", icon: Calendar, entregable: "Experiencia con siguiente paso definido" },
  { id: 17, title: "Lanzar captación y nutrición", desc: "Activar pauta, contenidos y email según prioridades.", icon: Play, entregable: "Campañas conectadas con capacidad real" },
  { id: 18, title: "Probar el circuito completo", desc: "Verificar entradas, asignación, respuestas y registro.", icon: ShieldCheck, entregable: "Fallas corregidas antes de ampliar inversión" },
  { id: 19, title: "Ejecutar un piloto y ajustar", desc: "Medir calidad de consultas, contacto efectivo y avances.", icon: TrendingUp, entregable: "Primeras decisiones apoyadas en datos" },
  { id: 20, title: "Consolidar gestión continua", desc: "Revisar embudo, desempeño comercial y aprendizajes.", icon: CheckCircle2, entregable: "Rutina de dirección y mejora sostenida" }
];

const checklist = [
  "La oferta publicada coincide con lo que se puede vender.",
  "Cada consulta ingresa al CRM y tiene un responsable.",
  "Tiempos de atención acordados y cobertura cumplida.",
  "Cada oportunidad activa tiene acción y fecha próxima.",
  "El equipo responde objeciones y conduce reuniones.",
  "Alianzas con reglas claras de comisión.",
  "Seguimiento desde origen hasta la venta.",
  "Responsable de vigencia y control de ejecución."
];

export default function App() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-6">
          <a href="/" className="text-xl font-bold tracking-tighter text-slate-900 dark:text-white shrink-0">
            WGW<span className="text-slate-400 dark:text-slate-500 font-normal">.STRATEGY</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 dark:text-slate-400">
            <a href="#roadmap" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">Roadmap</a>
            <a href="#checklist" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">Verificación</a>
            <a href="#empecemos" className="hover:text-slate-900 dark:hover:text-white transition-colors whitespace-nowrap">Empecemos</a>
          </nav>

          <div className="flex items-center gap-4 shrink-0">
            <a href="#empecemos" className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 whitespace-nowrap shadow-lg shadow-slate-900/10">
              Hablemos
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 mb-6 text-xs font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                <TrendingUp className="w-4 h-4" />
                Estructura Comercial de Alto Impacto
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 text-slate-900 dark:text-white">
                Convierte oportunidades en <span className="text-slate-400 dark:text-slate-500">ventas consistentes.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
                Hoja de ruta estratégica para captar, atender y convertir leads inmobiliarios mediante una estructura comercial profesional, medible y escalable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#roadmap" className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 group shadow-xl shadow-slate-900/10 text-center">
                  Comenzar Roadmap
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#empecemos" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl font-semibold hover:bg-slate-50 transition-all dark:bg-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800 text-center">
                  Sobre mi
                </a>
              </div>
              
              <div className="mt-12 flex items-center gap-8 text-slate-400 dark:text-slate-600">
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">20</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Pasos Clave</span>
                </div>
                <div className="w-px h-10 bg-slate-200 dark:bg-slate-800" />
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-slate-900 dark:text-white tabular-nums">100%</span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Enfoque Conversión</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              <img 
                src="/src/assets/images/hero_real_estate_modern_1794417758275.jpg" 
                alt="Luxury real estate development" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <p className="text-sm font-medium mb-1 opacity-80 uppercase tracking-widest">Estado Actual</p>
                <p className="text-lg font-semibold">Transformación de estructura comercial WGW en curso.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 border-y border-slate-100 dark:border-slate-900 bg-slate-50/50 dark:bg-slate-900/20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                Diagnóstico previo: <span className="text-slate-400">la base de la estrategia.</span>
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                Ninguna estructura garantiza ventas si el producto, el precio o las condiciones no resultan competitivos. Nuestra hoja de ruta comienza con la validación de la realidad de la empresa para asegurar que cada acción tenga un impacto real en el negocio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 dark:bg-white flex items-center justify-center mb-4">
                    <ShieldCheck className="w-6 h-6 text-white dark:text-slate-900" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Confianza Alta</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">En la secuencia del plan propuesto para alcanzar la estructura ideal.</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-slate-800 flex items-center justify-center mb-4">
                    <Info className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2">Aplicación Media</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Sujeta al relevamiento detallado del equipo, presupuesto e inventario.</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img 
                src="/src/assets/images/commercial_strategy_meeting_1794417758365.jpg" 
                alt="Strategy meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Hoja de Ruta Estratégica
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Un recorrido de 20 pasos diseñado para construir una estructura comercial capaz de escalar resultados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {roadmapSteps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onMouseEnter={() => setActiveStep(step.id)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-8 rounded-3xl border transition-all duration-300 flex flex-col group ${
                  activeStep === step.id 
                    ? "border-slate-900 bg-slate-900 text-white dark:border-white dark:bg-white dark:text-slate-900 shadow-2xl" 
                    : "border-slate-200 bg-white dark:bg-slate-900 dark:border-slate-800"
                }`}
              >
                <div className={`mb-6 flex items-center justify-between`}>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                    activeStep === step.id ? "bg-white/20 dark:bg-slate-900/10" : "bg-slate-100 dark:bg-slate-800"
                  }`}>
                    <step.icon className={`w-6 h-6 ${activeStep === step.id ? "text-white dark:text-slate-900" : "text-slate-900 dark:text-white"}`} />
                  </div>
                  <span className={`text-4xl font-black opacity-10 tabular-nums ${activeStep === step.id ? "opacity-20" : ""}`}>
                    {String(step.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className={`text-sm mb-6 leading-relaxed flex-grow ${
                  activeStep === step.id ? "text-white/80 dark:text-slate-900/70" : "text-slate-500 dark:text-slate-400"
                }`}>
                  {step.desc}
                </p>
                <div className={`pt-6 border-t ${
                  activeStep === step.id ? "border-white/10 dark:border-slate-900/10" : "border-slate-100 dark:border-slate-800"
                }`}>
                  <p className="text-[10px] uppercase tracking-widest font-bold mb-2 opacity-60">Entregable / Condición</p>
                  <p className="text-xs font-medium">{step.entregable}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Convert Checklist */}
      <section id="checklist" className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-slate-800/20 to-transparent pointer-events-none" />
        
        {/* Centered Content */}
        <div className="mx-auto max-w-7xl px-6 relative z-10 mb-20 lg:mb-32">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              ¿Cuándo estamos listos para <span className="text-slate-500 text-wrap-balance">convertir leads?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              Antes de escalar la inversión en captación, debemos verificar que el circuito sea infalible. Esta es la lista de control crítica:
            </p>
            <div className="space-y-6">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="mt-1 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-white transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 group-hover:text-white" />
                  </div>
                  <p className="text-slate-300 group-hover:text-white transition-colors">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Full-Width Recommendation Block */}
        <div className="relative z-10 w-full">
          <div className="bg-white py-16 lg:py-24 px-6 shadow-2xl">
            <div className="mx-auto max-w-7xl">
              <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-8">Recomendación Final</p>
              <p className="font-semibold italic text-2xl lg:text-5xl leading-tight text-slate-800 text-wrap-balance">
                "Avanzar por etapas y probar el circuito antes de escalar. Si hay urgencia comercial, acciones acotadas en paralelo, pero siempre con seguimiento desde el primer día."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Section - Removed as requested, keeping context if needed but hidden or removed */}
      
      {/* Empecemos Section */}
      <section id="empecemos" className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-white dark:bg-slate-950 rounded-[40px] p-8 lg:p-16 border border-slate-200 dark:border-slate-800 shadow-2xl text-center">
            <div className="mb-10 flex justify-center">
              <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-slate-100 dark:border-slate-800 shadow-xl">
                <img 
                  src="/assets/aistudio/LuciaBeorda-57_7d5ac876.jpg" 
                  alt="Lucía Beorda" 
                  className="w-full h-full object-cover scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-slate-900 dark:text-white">¿Listo para transformar tu estructura?</h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
              <p>
                Hola, soy <span className="text-slate-900 dark:text-white font-bold">Lucía Beorda</span>. Tengo más de 4 años de experiencia en ventas, atención al cliente y gestión comercial en el sector inmobiliario, además de conocimientos en marketing digital.
              </p>
              <p>
                Me considero una persona proactiva, orientada a resultados y con excelentes habilidades de comunicación. Actualmente busco nuevos desafíos profesionales y estoy lista para aportar mi experiencia y contribuir al crecimiento de su empresa.
              </p>
            </div>
            <div className="mt-12 flex justify-center">
              <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200 shadow-xl shadow-slate-900/20">
                Contactar con Lucía
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100 dark:border-slate-900">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-900 dark:text-white font-bold tracking-tighter">
              WGW<span className="text-slate-400 font-normal">.STRATEGY</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-400">
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors">Metodología</a>
            </div>
            <div className="text-sm text-slate-400 tabular-nums">
              © 2026 WGW Strategy. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
