"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Save, User, Phone, Mail, FileText } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function NuevoPaciente() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    rut: "",
    nombre_completo: "",
    telefono: "",
    email: "",
    alergias: "",
    grupo_sanguineo: "Desconocido"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { data, error } = await supabase
      .from('pacientes')
      .insert([formData])
      .select();

    setLoading(false);
    
    if (error) {
      alert("Error al guardar paciente: " + error.message);
    } else {
      router.push("/dashboard/pacientes");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="dash-content fade-in">
      <div className="dash-breadcrumb">
        <Link href="/dashboard/pacientes" className="back-link">
          <ArrowLeft size={16} /> Volver a Pacientes
        </Link>
      </div>

      <div className="dash-header">
        <h1>Ingresar Nuevo Paciente</h1>
        <p>Añade manualmente un paciente que llegó presencialmente o por teléfono.</p>
      </div>

      <div className="dash-panel" style={{ maxWidth: '800px' }}>
        <form onSubmit={handleSubmit} style={{ padding: '32px' }}>
          
          <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>
            <User size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/>
            Datos Personales
          </h3>
          
          <div className="dash-grid-2" style={{ gap: '16px', marginBottom: '24px' }}>
            <div className="form-group">
              <label>RUT (Ej: 12.345.678-9)</label>
              <input type="text" name="rut" required onChange={handleChange} className="form-input" />
            </div>
            <div className="form-group">
              <label>Nombre Completo</label>
              <input type="text" name="nombre_completo" required onChange={handleChange} className="form-input" />
            </div>
          </div>

          <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginTop: '32px' }}>
            <Phone size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/>
            Datos de Contacto
          </h3>

          <div className="dash-grid-2" style={{ gap: '16px', marginBottom: '24px' }}>
            <div className="form-group">
              <label>Teléfono</label>
              <input type="text" name="telefono" onChange={handleChange} className="form-input" placeholder="+56 9 ..." />
            </div>
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" name="email" onChange={handleChange} className="form-input" />
            </div>
          </div>

          <h3 style={{ marginBottom: '24px', borderBottom: '1px solid var(--border)', paddingBottom: '12px', marginTop: '32px' }}>
            <FileText size={18} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}/>
            Datos Clínicos Básicos
          </h3>

          <div className="dash-grid-2" style={{ gap: '16px', marginBottom: '32px' }}>
            <div className="form-group">
              <label>Grupo Sanguíneo</label>
              <select name="grupo_sanguineo" onChange={handleChange} className="form-input">
                <option value="Desconocido">Desconocido</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>
            <div className="form-group">
              <label>Alergias Conocidas</label>
              <input type="text" name="alergias" onChange={handleChange} className="form-input" placeholder="Ej: Penicilina, Ninguna" />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <Link href="/dashboard/pacientes" className="btn btn-outline">Cancelar</Link>
            <button type="submit" className="btn btn-primary" disabled={loading} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Save size={18} /> {loading ? "Guardando..." : "Guardar Paciente"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
