"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab-psico");
  const [menuOpen, setMenuOpen] = useState(false);

  const tabs = [
    { id: "tab-psico", label: "Psicología" },
    { id: "tab-kine", label: "Kinesiología" },
    { id: "tab-fono", label: "Fonoaudiología" },
    { id: "tab-nutri", label: "Nutrición" },
    { id: "tab-to", label: "Terapia Ocup." },
  ];

  return (
    <main>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-contact">
            <div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              Ramón Freire 630, Block 8, Of 13, Temuco
            </div>
            <div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              +56 9 2049 4925
            </div>
          </div>
          <div>Atención personalizada y convenios Fonasa</div>
        </div>
      </div>

      {/* Header */}
      <header>
        <div className="container nav-wrapper">
          <a href="#" className="brand">
            <img src="/img/logo-sitio-web.png" alt="Clínica MedBalance" />
          </a>
          
          <ul className="nav-menu" style={{ display: menuOpen ? 'flex' : undefined, flexDirection: menuOpen ? 'column' : undefined, position: menuOpen ? 'absolute' : undefined, top: menuOpen ? '100%' : undefined, left: menuOpen ? '0' : undefined, width: menuOpen ? '100%' : undefined, background: menuOpen ? 'var(--white)' : undefined, padding: menuOpen ? '20px' : undefined, boxShadow: menuOpen ? 'var(--shadow-md)' : undefined }}>
            <li><a href="#clinica" onClick={() => setMenuOpen(false)}>Clínica</a></li>
            <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Especialidades</a></li>
            <li><a href="#convenios" onClick={() => setMenuOpen(false)}>Convenios</a></li>
            <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
          <div className="nav-actions">
            <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{background:'var(--teal-bg)'}}>Reserva AgendaPro</a>
            <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"></path></svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <span className="tagline">Medicina Preventiva e Integral</span>
            <h1>Tu equilibrio, nuestro mayor compromiso.</h1>
            <p>Expertos en Psicología, Kinesiología, Fonoaudiología, Nutrición y Terapia Ocupacional en el corazón de Temuco. Tu bienestar en manos de profesionales.</p>
            <div className="hero-badges">
              <img src="/img/logo-fonasa.jpg" className="hero-badge-img" alt="Fonasa" />
              <img src="/img/city-kombat.png" className="hero-badge-img" style={{objectFit:'cover', background:'#000', padding:'4px'}} alt="City Kombat" />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="orbit-container"
          >
            <div className="orbit-glow"></div>
            <div className="orbit-ring ring-1">
              <div className="orbit-node node-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg></div>
            </div>
            <div className="orbit-ring ring-2">
              <div className="orbit-node node-2"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg></div>
            </div>
            <div className="orbit-ring ring-3">
              <div className="orbit-node node-3"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M5 22v-5l4-4v-4L6 8"/><path d="M9 13H4"/><path d="M14 22v-4l-4-4"/><path d="M17 17l-3-4 1-5 5 2"/></svg></div>
            </div>
            <div className="orbit-center">
              <img src="/img/logo-sitio-web.png" alt="Logo MedBalance" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Booking Form */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container" id="reserva"
      >
        <div className="booking-card">
          <div className="booking-header">
            <h3>Reserva de Horas Rápidas</h3>
            <p>Selecciona tu especialidad y contáctanos para agendar tu atención médica.</p>
          </div>
          <form className="booking-form" action="https://wa.me/56920494925" method="get" target="_blank">
            <div className="form-group">
              <label>Especialidad</label>
              <select name="text">
                <option value="Hola, necesito agendar hora para Psicología">Psicología</option>
                <option value="Hola, necesito agendar hora para Kinesiología">Kinesiología</option>
                <option value="Hola, necesito agendar hora para Fonoaudiología">Fonoaudiología</option>
                <option value="Hola, necesito agendar hora para Nutrición">Nutrición</option>
                <option value="Hola, necesito agendar hora para Terapia Ocupacional">Terapia Ocupacional</option>
              </select>
            </div>
            <div className="form-group">
              <label>Previsión</label>
              <select>
                <option>Fonasa</option>
                <option>Isapre</option>
                <option>Particular</option>
                <option>Convenio Empresa</option>
              </select>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" style={{width: '100%', height: '46px'}}>Agendar Ahora</button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Clínica / Nosotros */}
      <section className="nosotros-section" id="clinica">
        <div className="container">
          <div className="clinic-grid">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="clinic-image"
            >
              <img src="/img/kine.png" alt="Clínica MedBalance" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="tagline">Nuestra Clínica</span>
              <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Atención integral basada en evidencia.</h2>
              <p style={{color: 'var(--ink-light)', fontSize: '1.1rem', marginBottom: '30px'}}>MedBalance es un moderno centro de salud en Temuco enfocado en la prevención y rehabilitación. Nuestro equipo clínico multidisciplinario trabaja en conjunto para diseñar planes terapéuticos a tu medida.</p>
              
              <div className="clinic-features">
                <div className="feature-box">
                  <div className="feature-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg></div>
                  <h4>Diagnóstico Preciso</h4>
                  <p>Evaluación clínica completa antes de iniciar el tratamiento.</p>
                </div>
                <div className="feature-box">
                  <div className="feature-icon"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                  <h4>Red de Convenios</h4>
                  <p>Valores preferenciales garantizados con Fonasa e Isapres.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Servicios Médicos */}
      <section className="services-section" id="servicios">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Especialidades</span>
            <h2>Servicios Médicos y Valores</h2>
            <p>Selecciona una especialidad para conocer nuestros programas terapéuticos y los valores preferenciales aplicables.</p>
          </div>

          <div className="tabs-nav">
            {tabs.map((tab) => (
              <button 
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`} 
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeTab === "tab-psico" && (
              <motion.div 
                key="psico"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tab-content active"
              >
                <div className="service-card-premium">
                  <div className="service-image-box contain">
                    <img src="/img/psico.png" alt="Psicología Clínica" />
                  </div>
                  <div className="service-details">
                    <h3>Psicología Clínica</h3>
                    <p>Acompañamiento especializado en ansiedad, depresión, regulación emocional y proyecto de vida, utilizando enfoque cognitivo-conductual (TCC) para niños, adolescentes y adultos.</p>
                    
                    <div className="fonasa-alert">
                      <img src="/img/logo-fonasa.jpg" alt="Fonasa" />
                      <span><b>Valor convenio</b> garantizado con certificado Fonasa o derivación interna.</span>
                    </div>

                    <div className="price-list">
                      <div className="price-item">
                        <span className="price-name">Sesión psicológica adulto individual</span>
                        <div className="price-values"><span className="val-part">$30.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Test ADOS-2</span>
                        <div className="price-values"><span className="val-part">$120.000</span><span className="val-conv">$90.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Terapia de pareja (por sesión)</span>
                        <div className="price-values"><span className="val-part">$55.000</span><span className="val-conv">$45.000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-kine" && (
              <motion.div 
                key="kine"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tab-content active"
              >
                <div className="service-card-premium">
                  <div className="service-image-box">
                    <img src="/img/kine.png" alt="Kinesiología" />
                  </div>
                  <div className="service-details">
                    <h3>Kinesiología Deportiva y Rehabilitación</h3>
                    <p>Recuperación funcional, masoterapia clínica y entrenamiento personalizado. Guiamos tu proceso para devolverte la movilidad y el rendimiento físico.</p>
                    <div className="fonasa-alert"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /><span><b>Valor convenio</b> garantizado con certificado Fonasa.</span></div>
                    <div className="price-list">
                      <div className="price-item">
                        <span className="price-name">Sesión de Kinesiología</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Plan 10 Sesiones Kinesiología</span>
                        <div className="price-values"><span className="val-part">$180.000</span><span className="val-conv">$145.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Masoterapia Clínica</span>
                        <div className="price-values"><span className="val-part">$16.000</span><span className="val-conv">$13.000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-fono" && (
              <motion.div 
                key="fono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tab-content active"
              >
                <div className="service-card-premium">
                  <div className="service-image-box">
                    <img src="/img/fono.png" alt="Fonoaudiología" />
                  </div>
                  <div className="service-details">
                    <h3>Fonoaudiología</h3>
                    <p>Evaluación e intervención en patologías del habla, lenguaje y audición. Desde estimulación temprana hasta tratamientos avanzados con equipos clínicos especializados.</p>
                    <div className="fonasa-alert"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /><span><b>Valor convenio</b> garantizado con certificado Fonasa.</span></div>
                    <div className="price-list">
                      <div className="price-item">
                        <span className="price-name">Evaluación Inicial</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Sesión de Intervención</span>
                        <div className="price-values"><span className="val-part">$20.000</span><span className="val-conv">$16.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Otoscopía + Video + Lavado de oídos</span>
                        <div className="price-values"><span className="val-part">$20.000</span><span className="val-conv">$16.000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-nutri" && (
              <motion.div 
                key="nutri"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tab-content active"
              >
                <div className="service-card-premium">
                  <div className="service-image-box">
                    <img src="/img/nutri.png" alt="Nutrición Clínica" />
                  </div>
                  <div className="service-details">
                    <h3>Nutrición y Metabolismo</h3>
                    <p>Planes alimentarios basados en evidencia científica. Evaluaciones de composición corporal para lograr objetivos sostenibles de forma individual o familiar.</p>
                    <div className="fonasa-alert"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /><span><b>Valor convenio</b> garantizado con certificado Fonasa.</span></div>
                    <div className="price-list">
                      <div className="price-item">
                        <span className="price-name">Plan Nutricional Individual</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Evaluación de Composición Corporal</span>
                        <div className="price-values"><span className="val-part">$15.000</span><span className="val-conv">$12.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Plan Dúo</span>
                        <div className="price-values"><span className="val-part">$35.000</span><span className="val-conv">$28.000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "tab-to" && (
              <motion.div 
                key="to"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="tab-content active"
              >
                <div className="service-card-premium">
                  <div className="service-image-box contain" style={{background:'#f1f5f9', display:'flex', alignItems:'center', justifyContent:'center'}}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--teal)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                  </div>
                  <div className="service-details">
                    <h3>Terapia Ocupacional</h3>
                    <p>Evaluación de perfil sensorial y camuflaje social (CAT-Q), enfocada en potenciar la autonomía y participación activa en actividades de la vida diaria.</p>
                    <div className="fonasa-alert"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /><span><b>Valor convenio</b> garantizado con certificado Fonasa.</span></div>
                    <div className="price-list">
                      <div className="price-item">
                        <span className="price-name">Atención de Terapia Ocupacional</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Evaluación e informe CAT-Q</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                      <div className="price-item">
                        <span className="price-name">Evaluación e informe Perfil Sensorial (Dunn)</span>
                        <div className="price-values"><span className="val-part">$25.000</span><span className="val-conv">$20.000</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Equipo Médico */}
      <section className="team-section" id="equipo">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Especialistas</span>
            <h2>Nuestro Equipo Clínico</h2>
            <p>Profesionales dedicados a brindarte la mejor atención con un enfoque integral y humano.</p>
          </div>
          <div className="team-grid">
            
            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-liss-new.png" alt="Liss" /></div>
              <h4>Liss</h4>
              <p>Psicóloga Clínica</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>
            
            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-andrea.jpg" alt="Andrea Retamal Baeza" /></div>
              <h4>Andrea Retamal Baeza</h4>
              <p>Nutricionista</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>
            
            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-eunice-new.jpg" alt="Eunice Lefiqueo" /></div>
              <h4>Eunice Lefiqueo</h4>
              <p>Nutricionista</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>
            
            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-gabriela-new.png" alt="Gabriela Caniullán Coña" /></div>
              <h4>Gabriela Caniullán Coña</h4>
              <p>Fonoaudióloga</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>
            
            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-valentina.jpg" alt="Valentina Henríquez Millanao" /></div>
              <h4>Valentina Henríquez Millanao</h4>
              <p>Terapeuta Ocupacional</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>

            <motion.div whileHover={{ y: -6, boxShadow: "var(--shadow-lg)" }} className="team-card-premium">
              <div className="team-photo-wrapper"><div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'4rem', color:'var(--teal)', fontWeight:700, fontFamily:'var(--font-merriweather)'}}>IA</div></div>
              <h4>Ian Arévalo</h4>
              <p>Kinesiólogo</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="agenda-pro-btn">Agendar Hora</a>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Convenios Premium Marquee */}
      <section className="convenios-section" id="convenios">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Seguros y Convenios</span>
            <h2>Red de Alianzas Médicas</h2>
            <p>Trabajamos en sinergia con instituciones destacadas para brindarte acceso preferencial.</p>
          </div>
        </div>
          
        <div className="marquee-container">
          <motion.div 
            className="marquee-track"
            animate={{ x: [0, -1032] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {/* Set 1 */}
            <div className="partner-card"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /></div>
            <div className="partner-card"><img src="/img/city-kombat.png" alt="City Kombat" /></div>
            <div className="partner-card"><img src="/img/elixir-gym.png" alt="Elixir Gym" /></div>
            <div className="partner-card text-card"><h4>Cajas de Compensación</h4><p>Beneficios Corporativos</p></div>
            <div className="partner-card text-card"><h4>Educación Superior</h4><p>Convenio Estudiantes</p></div>
            <div className="partner-card text-card"><h4>Red Salud Local</h4><p>Derivaciones Clínicas</p></div>
            {/* Set 2 (Duplicado para efecto infinito) */}
            <div className="partner-card"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /></div>
            <div className="partner-card"><img src="/img/city-kombat.png" alt="City Kombat" /></div>
            <div className="partner-card"><img src="/img/elixir-gym.png" alt="Elixir Gym" /></div>
            <div className="partner-card text-card"><h4>Cajas de Compensación</h4><p>Beneficios Corporativos</p></div>
            <div className="partner-card text-card"><h4>Educación Superior</h4><p>Convenio Estudiantes</p></div>
            <div className="partner-card text-card"><h4>Red Salud Local</h4><p>Derivaciones Clínicas</p></div>
          </motion.div>
        </div>
          
        <div className="container">
          <div style={{textAlign: 'center', marginTop: '60px'}}>
            <a href="https://wa.me/56920494925" className="btn btn-outline">Establecer Alianza Corporativa</a>
          </div>
        </div>
      </section>

      {/* Formulario Premium */}
      <section className="contact-section" id="contacto">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Atención Personalizada</span>
            <h2>Agenda tu evaluación médica</h2>
            <p>Déjanos tus datos y nuestro equipo clínico se pondrá en contacto contigo a la brevedad.</p>
          </div>
          <div className="contact-card">
            <div className="contact-info-panel">
              <div className="panel-bg-glow"></div>
              <h3 style={{fontSize:'2rem', marginBottom:'16px', color:'#fff'}}>Hablemos de tu salud</h3>
              <p style={{color:'rgba(255,255,255,0.8)', marginBottom:'40px', fontSize:'1.05rem'}}>Atendemos de lunes a sábado en el corazón de Temuco. Tu bienestar es nuestra prioridad.</p>
              
              <div className="info-item">
                <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
                <div>
                  <span className="info-label">Ubicación</span>
                  <p>Ramón Freire 630, Block 8, Of 13</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                <div>
                  <span className="info-label">WhatsApp Corporativo</span>
                  <p>+56 9 2049 4925</p>
                </div>
              </div>
            </div>
            
            <div className="contact-form-panel">
              <form className="modern-form" action="https://wa.me/56920494925" method="get" target="_blank">
                <div className="form-row">
                  <div className="input-group">
                    <input type="text" className="modern-input" placeholder=" " required name="text" />
                    <label className="modern-label">Nombre Completo</label>
                  </div>
                  <div className="input-group">
                    <input type="tel" className="modern-input" placeholder=" " required />
                    <label className="modern-label">Teléfono</label>
                  </div>
                </div>
                <div className="input-group">
                  <select className="modern-input select-input" required defaultValue="">
                    <option value="" disabled hidden></option>
                    <option>Psicología Clínica</option>
                    <option>Kinesiología</option>
                    <option>Fonoaudiología</option>
                    <option>Nutrición</option>
                    <option>Terapia Ocupacional</option>
                    <option>Consulta General</option>
                  </select>
                  <label className="modern-label">Especialidad de Interés</label>
                </div>
                <div className="input-group">
                  <textarea className="modern-input" placeholder=" " rows="4" required></textarea>
                  <label className="modern-label">¿En qué podemos ayudarte?</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{padding: '18px', fontSize: '1.05rem', width:'100%', justifyContent:'center'}}>Enviar Solicitud Segura <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"></path></svg></button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <a href="#" className="footer-brand"><img src="/img/logo-sitio-web.png" alt="MedBalance" style={{background:'var(--white)', padding:'8px 16px', borderRadius:'8px', objectFit:'contain'}} /></a>
              <p style={{marginBottom:'20px', maxWidth:'300px', fontSize:'0.9rem'}}>Centro de salud integral en Temuco. Nuestro compromiso es tu equilibrio físico y mental.</p>
              <div style={{display:'flex', gap:'16px'}}>
                <a href="https://instagram.com/medbalance_tco" target="_blank" style={{color:'var(--white)', opacity:0.8}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                <a href="https://wa.me/56920494925" target="_blank" style={{color:'var(--white)', opacity:0.8}}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></a>
              </div>
            </div>
            <div className="footer-links">
              <h4>Clínica</h4>
              <ul>
                <li><a href="#clinica">Nosotros</a></li>
                <li><a href="#servicios">Especialidades</a></li>
                <li><a href="#convenios">Seguros y Convenios</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contacto</h4>
              <ul>
                <li style={{display:'flex',gap:'8px',fontSize:'0.9rem'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path></svg> Ramón Freire 630, Block 8, Of 13</li>
                <li style={{display:'flex',gap:'8px',fontSize:'0.9rem'}}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> +56 9 2049 4925</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Clínica MedBalance. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
