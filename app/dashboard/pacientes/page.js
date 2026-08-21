"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Filter, ChevronRight, FileText } from "lucide-react";

export default function PacientesList() {
  const [searchTerm, setSearchTerm] = useState("");

  const pacientes = [
    { id: 1, name: "María González", rut: "18.123.456-7", lastVisit: "15/08/2026", type: "Kinesiología" },
    { id: 2, name: "Juan Pérez", rut: "12.345.678-9", lastVisit: "20/08/2026", type: "Nutrición" },
    { id: 3, name: "Camila Rojas", rut: "19.987.654-3", lastVisit: "21/08/2026", type: "Terapia Ocupacional" },
    { id: 4, name: "Luis Tapia", rut: "15.555.444-2", lastVisit: "10/08/2026", type: "Psicología" }
  ];

  const filtered = pacientes.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.rut.includes(searchTerm));

  return (
    <div className="dash-content fade-in">
      <div className="dash-header flex-between">
        <div>
          <h1>Directorio de Pacientes</h1>
          <p>Gestiona las fichas clínicas e historial de tus pacientes.</p>
        </div>
        <Link href="/dashboard/pacientes/nuevo" className="btn btn-primary">Nuevo Paciente</Link>
      </div>

      <div className="dash-panel">
        <div className="dash-filters">
          <div className="dash-search">
            <Search size={18} />
            <input 
              type="text" 
              placeholder="Buscar por Nombre o RUT..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="btn btn-outline" style={{padding: '8px 16px', display:'flex', gap:'8px'}}>
            <Filter size={18} /> Filtros
          </button>
        </div>

        <div className="dash-table-wrapper">
          <table className="dash-table">
            <thead>
              <tr>
                <th>Paciente</th>
                <th>RUT</th>
                <th>Última Atención</th>
                <th>Especialidad</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.name}</strong></td>
                  <td>{p.rut}</td>
                  <td>{p.lastVisit}</td>
                  <td><span className="dash-badge">{p.type}</span></td>
                  <td>
                    <Link href={`/dashboard/pacientes/${p.id}`} className="btn-icon text-teal">
                      <FileText size={18} /> Ver Ficha
                    </Link>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center" style={{padding: '32px', color: 'var(--ink-light)'}}>
                    No se encontraron pacientes
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
