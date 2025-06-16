import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const kpiData = [
  { canal: "Instagram", conversiones: 1200 },
  { canal: "Google Ads", conversiones: 980 },
  { canal: "Email", conversiones: 430 },
  { canal: "Orgánico", conversiones: 600 },
];

export default function CampaignDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 p-8 font-sans text-gray-100">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-extrabold text-yellow-400 drop-shadow-lg">
          Campaña Publicitaria – Mercado Libre
        </h1>
        <p className="mt-2 text-yellow-300 max-w-xl mx-auto">
          Estrategia integral para potenciar las ventas en productos
          tecnológicos.
        </p>
      </header>

      <section className="mb-10 bg-neutral-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4 border-b border-yellow-400 pb-2">
          Objetivo Principal
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Incrementar en un 15% las ventas de productos tecnológicos en Mercado
          Libre Argentina durante un período de 30 días, mediante una campaña
          digital multicanal enfocada en la personalización y optimización
          continua basada en análisis de datos.
        </p>
      </section>

      <section className="mb-10 bg-neutral-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2">
          Estrategias Clave
        </h2>
        <ul className="list-disc list-inside space-y-3 text-yellow-300 text-lg leading-relaxed">
          <li>
            Publicidad en redes sociales segmentada por intereses, edad y
            comportamiento de compra, optimizada con A/B testing constante.
          </li>
          <li>
            Campañas en Google Ads con palabras clave específicas y anuncios
            dinámicos adaptados a tendencias de búsqueda.
          </li>
          <li>
            Email marketing automatizado con descuentos personalizados según
            historial de navegación y compra.
          </li>
          <li>
            Remarketing para usuarios con carritos abandonados, con incentivos
            adicionales para completar la compra.
          </li>
          <li>
            Optimización del checkout para ofrecer envío gratuito y cuotas sin
            interés, mejorando la experiencia de compra.
          </li>
          <li>
            Creación de landing pages específicas con contenido visual
            optimizado para SEO y diseño responsive.
          </li>
          <li>
            Colaboración con influencers tecnológicos para aumentar el alcance y
            confianza de la marca.
          </li>
          <li>
            Integración de contenido generado por usuarios, como reseñas y
            videos de unboxing, para aumentar la credibilidad.
          </li>
          <li>
            Monitoreo en tiempo real mediante dashboards para ajustes ágiles en
            la campaña.
          </li>
        </ul>
      </section>

      <section className="mb-10 bg-neutral-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-6 border-b border-yellow-400 pb-2">
          KPI por Canal
        </h2>
        <div style={{ width: "100%", height: 320 }}>
          <ResponsiveContainer>
            <BarChart
              data={kpiData}
              margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="canal"
                stroke="#facc15"
                tick={{ fill: "#facc15", fontWeight: "bold" }}
              />
              <YAxis
                stroke="#facc15"
                tick={{ fill: "#facc15", fontWeight: "bold" }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#222",
                  borderRadius: 6,
                  borderColor: "#facc15",
                }}
                itemStyle={{ color: "#facc15", fontWeight: "bold" }}
              />
              <Bar
                dataKey="conversiones"
                fill="#facc15"
                radius={[6, 6, 0, 0]}
                barSize={50}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section className="mb-10 bg-neutral-800 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-yellow-400 mb-4 border-b border-yellow-400 pb-2">
          Herramientas Analíticas
        </h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          La campaña se apoya en un conjunto de herramientas digitales para
          optimizar la performance y la experiencia de usuario.{" "}
          <strong>Google Analytics</strong> permite monitorear el tráfico y las
          conversiones, entregando datos esenciales sobre el comportamiento del
          consumidor. <strong>Facebook Pixel</strong> habilita una segmentación
          precisa en redes sociales, ayudando a maximizar la efectividad de las
          campañas. Para comprender mejor la interacción del usuario en el
          sitio, <strong>Hotjar</strong> proporciona mapas de calor y
          grabaciones, lo que facilita la identificación de obstáculos en la
          navegación. Finalmente, <strong>Mixpanel</strong> se encarga de
          analizar embudos y cohortes, brindando insights profundos para la toma
          de decisiones basadas en datos reales.
        </p>
      </section>
    </div>
  );
}
