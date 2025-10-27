export default function MisionVisionValores() {
  return (
    <section className="text-neutral-900 dark:text-white py-16 px-6 max-w-6xl mx-auto rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-12 uppercase">
        Misión, Visión y Valores
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Misión */}
        <div
          className="
            p-6 rounded-lg shadow-md hover:scale-105 transition
            bg-gray-200 text-neutral-900 border border-neutral-200
            dark:bg-[#262626] dark:text-white dark:border-cyan-500/30
          "
          style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
        >
          <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
            Nuestra Misión
          </h3>
          <p className="text-justify text-neutral-700 dark:text-gray-300">
            En systech queremos brindar soluciones integrales de tecnología que mantengan equipos y sistemas funcionando al máximo 
            mediante mantenimiento y reparación de computadoras e impresoras, y desarrollo de aplicaciones web y móviles
            con calidad técnica para negocios o proyectos escolares, seguridad de la información y un servicio rápido y transparente.
          </p>
        </div>

        {/* Visión */}
        <div
          className="
            p-6 rounded-lg shadow-md hover:scale-105 transition
            bg-gray-200 text-neutral-900 border border-neutral-200
            dark:bg-[#262626] dark:text-white dark:border-cyan-500/30
          "
          style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
        >
          <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
            Nuestra Visión
          </h3>
          <p className="text-justify text-neutral-700 dark:text-gray-300">
            Ser la empresa de referencia en soluciones TI más confiables e innovadoras en nuestra región, reconocida por elevar la continuidad operativa
            de nuestros clientes y transformar sus procesos con software a la medida, soporte proactivo y una experiencia de servicio excepcional.
          </p>
        </div>

        {/* Valores */}
        <div
          className="
            p-6 rounded-lg shadow-md hover:scale-105 transition
            bg-gray-200 text-neutral-900 border border-neutral-200
            dark:bg-[#262626] dark:text-white dark:border-cyan-500/30
          "
          style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
        >
          <h3 className="text-xl font-semibold mb-3 text-cyan-600 dark:text-cyan-400">
            Nuestros Valores
          </h3>
          <ul className="list-disc list-inside space-y-1 text-left text-neutral-700 dark:text-gray-300">
            <li> Ética y transparencia: diagnósticos claros, presupuestos honestos y comunicación directa.</li>
            <li>Calidad técnica: procedimientos estandarizados, pruebas y control de calidad en cada entrega.</li>
            <li>Enfoque al cliente: entendemos la necesidad, priorizamos el tiempo de actividad y cumplimos plazos.</li>
            <li>Seguridad de la información: confidencialidad, respaldos y buenas prácticas de ciberseguridad.</li>
            <li>Innovación continua: aprendizaje constante, uso de herramientas modernas y mejora permanente.</li>
            <li>Responsabilidad ambiental: manejo adecuado de residuos electrónicos y piezas reemplazadas.</li>
            <li>Colaboración y respeto: trabajo en equipo y trato digno con clientes y aliados.</li>
            <li>Educación al usuario: entregamos recomendaciones y capacitación básica para prevenir fallas.</li>
            <li>Cumplimiento y garantías: servicio documentado, garantía real y seguimiento postventa.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
