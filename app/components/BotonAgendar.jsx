"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BotonAgendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "medbalance" });
      
      // Inyectar el botón flotante de Cal.com
      cal("floatingButton", {
        calLink: "agendamiento-clinica", 
        buttonText: "Agendar Hora",
        buttonColor: "#047857", // Nuestro color --teal
        buttonTextColor: "#ffffff",
        buttonPosition: "bottom-right",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: true } // Booleano real
      });
      
      cal("ui", { 
        hideEventTypeDetails: false, 
        layout: "month_view",
        theme: "light",
        styles: { branding: { brandColor: "#047857" } }
      });
    })();
  }, []);
  
  return null; // Este componente inyecta el widget, no renderiza HTML directo
}
