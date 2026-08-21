"use client";

import { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { motion } from "framer-motion";

export default function SeccionAgendamiento() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"medbalance"});
      cal("ui", {
        styles: { branding: { brandColor: "#047857" } }, // Nuestro color var(--teal)
        hideEventTypeDetails: false,
        layout: "month_view",
        theme: "light"
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
          <p>Selecciona el servicio y profesional que mejor se adapte a tus necesidades para comenzar tu tratamiento.</p>
        </div>
        
        <div className="cal-embed-wrapper">
          <Cal 
            namespace="medbalance"
            calLink="agendamiento-clinica"
            style={{width:"100%", height:"100%", overflow:"scroll"}}
            config={{layout: 'month_view', theme: 'light'}}
          />
        </div>
      </div>
    </motion.section>
  );
}
