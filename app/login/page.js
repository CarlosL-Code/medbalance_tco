"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, User, ArrowRight } from "lucide-react";
import "../dashboard.css";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simular login y redirigir
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <motion.div 
        className="login-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-header">
          <img src="/img/logo-sitio-web.png" alt="MedBalance" className="login-logo" />
          <h2>Portal Clínico</h2>
          <p>Acceso exclusivo para profesionales</p>
        </div>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Usuario / Correo</label>
            <div className="input-with-icon">
              <User size={18} className="input-icon" />
              <input type="text" placeholder="dr.ejemplo@medbalance.cl" required />
            </div>
          </div>
          <div className="form-group">
            <label>Contraseña</label>
            <div className="input-with-icon">
              <Lock size={18} className="input-icon" />
              <input type="password" placeholder="••••••••" required />
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '16px'}} disabled={loading}>
            {loading ? "Verificando..." : (
              <span style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'}}>
                Ingresar <ArrowRight size={18} />
              </span>
            )}
          </button>
        </form>
        
        <div className="login-footer">
          <a href="/">Volver al sitio web principal</a>
        </div>
      </motion.div>
    </div>
  );
}
