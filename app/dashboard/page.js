"use client";
import { motion } from "framer-motion";
import { Calendar, Users, Activity, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function DashboardSummary() {
  const stats = [
    { label: "Pacientes Activos", value: "124", icon: <Users size={24} />, color: "var(--teal)" },
    { label: "Citas Hoy", value: "8", icon: <Calendar size={24} />, color: "var(--orange)" },
    { label: "Fichas Actualizadas", value: "12", icon: <Activity size={24} />, color: "var(--teal-deep)" }
  ];

  const citasHoy = [
    { time: "09:00", patient: "María González", type: "Kinesiología", box: "Box 1" },
    { time: "10:30", patient: "Juan Pérez", type: "Evaluación Nutricional", box: "Box 3" },
    { time: "12:00", patient: "Camila Rojas", type: "Terapia Ocupacional", box: "Box 2" }
  ];

  return (
    <div className="dash-content fade-in">
      <div className="dash-header">
        <div>
          <h1>Hola, Dr. Carlos 👋</h1>
          <p>Este es el resumen de tu clínica hoy.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="dash-stats-grid">
        {stats.map((stat, i) => (
          <motion.div 
            key={i} 
            className="dash-stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="dash-stat-icon" style={{ color: stat.color, backgroundColor: `${stat.color}15` }}>
              {stat.icon}
            </div>
            <div className="dash-stat-info">
              <h3>{stat.value}</h3>
              <span>{stat.label}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="dash-grid-2">
        {/* Próximas Citas */}
        <div className="dash-panel">
          <div className="dash-panel-header">
            <h3>Próximas Citas (Hoy)</h3>
            <Link href="/dashboard/agenda" className="text-link">Ver Agenda Completa</Link>
          </div>
          <div className="dash-list">
            {citasHoy.map((cita, i) => (
              <div key={i} className="dash-list-item">
                <div className="dash-time-badge">{cita.time}</div>
                <div className="dash-item-content">
                  <h4>{cita.patient}</h4>
                  <span>{cita.type} • {cita.box}</span>
                </div>
                <button className="btn-icon"><ArrowRight size={18}/></button>
              </div>
            ))}
          </div>
        </div>

        {/* Accesos Rápidos */}
        <div className="dash-panel">
          <div className="dash-panel-header">
            <h3>Accesos Rápidos</h3>
          </div>
          <div className="dash-actions">
            <Link href="/dashboard/pacientes/nuevo" className="dash-action-btn">
              <Users size={24} />
              <span>Nuevo Paciente</span>
            </Link>
            <Link href="/dashboard/agenda" className="dash-action-btn">
              <Calendar size={24} />
              <span>Bloquear Horario</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
