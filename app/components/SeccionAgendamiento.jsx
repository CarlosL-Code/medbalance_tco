"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";

export default function SeccionAgendamiento() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"consulta-nutricional"});
      cal("ui", {
        styles: { branding: { brandColor: "#047857" } }, // Nuestro color var(--teal)
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <motion.section 
      id="reserva"
      className="agendamiento-section"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <div className="agendamiento-header text-center">
          <span className="tagline">Reserva de Horas Rápidas</span>
          <h2>Agenda tu Consulta en Línea</h2>
          <p>Selecciona la fecha y hora que mejor te acomode para tu atención clínica.</p>
        </div>
        
        <div className="cal-embed-wrapper">
          <Cal 
            namespace="consulta-nutricional"
            calLink="agendamiento-clinica/consulta-nutricional"
            style={{width:"100%", height:"100%", overflow:"scroll"}}
            config={{layout: 'month_view'}}
          />
        </div>
      </div>
    </motion.section>
  );
}
