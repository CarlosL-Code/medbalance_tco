"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Filter, ChevronRight, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function PacientesList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadPacientes() {
      const { data, error } = await supabase
        .from('pacientes')
        .select('*')
        .order('fecha_creacion', { ascending: false });
      
      if (!error && data) {
        setPacientes(data);
      }
      setLoading(false);
    }
    loadPacientes();
  }, []);

  const filtered = pacientes.filter(p => 
    p.nombre_completo.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.rut.includes(searchTerm)
  );

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
              {loading ? (
                <tr>
                  <td colSpan="5" className="text-center" style={{padding: '32px', color: 'var(--ink-light)'}}>
                    Cargando pacientes...
                  </td>
                </tr>
              ) : filtered.map(p => (
                <tr key={p.id}>
                  <td><strong>{p.nombre_completo}</strong></td>
                  <td>{p.rut}</td>
                  <td>-</td>
                  <td><span className="dash-badge">-</span></td>
                  <td>
                    <Link href={`/dashboard/pacientes/${p.id}`} className="btn-icon text-teal">
                      <FileText size={18} /> Ver Ficha
                    </Link>
                  </td>
                </tr>
              ))}
              {!loading && filtered.length === 0 && (
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
