"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Edit, Save, Plus, FileText, User, Phone, MapPin, Calendar as CalIcon } from "lucide-react";

export default function FichaTecnica({ params }) {
  const [activeTab, setActiveTab] = useState("historial");

  // Datos mockeados
  const paciente = {
    id: params.id,
    name: "María González",
    rut: "18.123.456-7",
    age: 29,
    phone: "+56 9 1234 5678",
    email: "maria.gonzalez@email.com",
    address: "Av. Alemania 123, Temuco",
    bloodType: "O+",
    allergies: "Penicilina"
  };

  const historial = [
    { date: "15/08/2026", type: "Sesión Kinesiología", professional: "Dr. Carlos", notes: "Paciente refiere disminución de dolor lumbar a un 4/10. Se aplican corrientes TENS y ejercicios de estabilización de core." },
    { date: "08/08/2026", type: "Evaluación Kinesiología", professional: "Dr. Carlos", notes: "Evaluación inicial por lumbago agudo. Dolor 8/10. Se indica reposo relativo e inicio de fisioterapia." }
  ];

  return (
    <div className="dash-content fade-in">
      <div className="dash-breadcrumb">
        <Link href="/dashboard/pacientes" className="back-link"><ArrowLeft size={16} /> Volver a Pacientes</Link>
      </div>

      {/* Header Ficha */}
      <div className="ficha-header-card">
        <div className="ficha-avatar">{paciente.name.charAt(0)}</div>
        <div className="ficha-main-info">
          <h1>{paciente.name}</h1>
          <div className="ficha-badges">
            <span className="dash-badge bg-gray">RUT: {paciente.rut}</span>
            <span className="dash-badge bg-gray">{paciente.age} años</span>
            <span className="dash-badge bg-red">Alergia: {paciente.allergies}</span>
          </div>
        </div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <button className="btn btn-outline" style={{display: 'flex', gap: '8px'}}><Edit size={16} /> Editar Perfil</button>
          <button className="btn btn-primary" style={{display: 'flex', gap: '8px', background: 'var(--ink)'}} onClick={() => alert("Función de exportación a PDF en desarrollo.")}>
            <FileText size={16} /> Exportar PDF
          </button>
        </div>
      </div>

      <div className="ficha-grid">
        {/* Sidebar Info */}
        <div className="ficha-sidebar">
          <div className="dash-panel">
            <h3>Datos de Contacto</h3>
            <ul className="info-list">
              <li><Phone size={16} /> {paciente.phone}</li>
              <li><User size={16} /> {paciente.email}</li>
              <li><MapPin size={16} /> {paciente.address}</li>
            </ul>
            <hr className="dash-divider" />
            <h3>Datos Médicos Básicos</h3>
            <ul className="info-list">
              <li><strong>Grupo Sanguíneo:</strong> {paciente.bloodType}</li>
              <li><strong>Enfermedades Crónicas:</strong> Ninguna</li>
            </ul>
          </div>
        </div>

        {/* Main Content */}
        <div className="ficha-main">
          <div className="dash-tabs">
            <button className={`dash-tab ${activeTab === 'historial' ? 'active' : ''}`} onClick={() => setActiveTab('historial')}>
              <FileText size={18} /> Historial Clínico
            </button>
            <button className={`dash-tab ${activeTab === 'archivos' ? 'active' : ''}`} onClick={() => setActiveTab('archivos')}>
              <CalIcon size={18} /> Exámenes / Archivos
            </button>
          </div>

          <div className="dash-panel" style={{borderTopLeftRadius: 0}}>
            {activeTab === 'historial' && (
              <div className="historial-container">
                <div className="flex-between mb-4">
                  <h3>Evolución Clínica</h3>
                  <button className="btn btn-primary btn-sm"><Plus size={16}/> Nueva Evolución</button>
                </div>
                
                <div className="timeline">
                  {historial.map((item, i) => (
                    <div key={i} className="timeline-item">
                      <div className="timeline-dot"></div>
                      <div className="timeline-content">
                        <div className="timeline-header">
                          <h4>{item.type}</h4>
                          <span className="timeline-date">{item.date}</span>
                        </div>
                        <span className="timeline-prof">Atendido por: {item.professional}</span>
                        <p className="timeline-notes">{item.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'archivos' && (
              <div className="archivos-container text-center py-8">
                <FileText size={48} className="text-gray-300 mx-auto mb-4" />
                <p>No hay exámenes ni documentos subidos para este paciente.</p>
                <button className="btn btn-outline mt-4">Subir Documento</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
