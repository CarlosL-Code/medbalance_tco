"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, Phone, Menu, ShieldCheck, CheckCircle2, 
  ArrowRight, Send, X, Star
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab-psico");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    { id: "tab-psico", label: "Psicología" },
    { id: "tab-kine", label: "Kinesiología" },
    { id: "tab-fono", label: "Fonoaudiología" },
    { id: "tab-nutri", label: "Nutrición" },
    { id: "tab-to", label: "Terapia Ocupacional" },
  ];

  return (
    <main>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-contact">
            <div>
              <MapPin size={16} />
              Ramón Freire 630, Block 8, Of 13, Temuco
            </div>
            <div>
              <Phone size={16} />
              +56 9 2049 4925
            </div>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
            <Star size={16} fill="currentColor" />
            Atención personalizada y convenios Fonasa
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={scrolled ? "scrolled" : ""}>
        <div className="container">
          <div className="header-glass">
            <a href="#" className="brand">
              <img src="/img/logo-sitio-web.png" alt="Clínica MedBalance" />
            </a>
            
            <ul className="nav-menu" style={{ 
              display: menuOpen ? 'flex' : undefined, 
              flexDirection: menuOpen ? 'column' : undefined, 
              position: menuOpen ? 'absolute' : undefined, 
              top: menuOpen ? '100%' : undefined, 
              left: menuOpen ? '0' : undefined, 
              width: menuOpen ? '100%' : undefined, 
              background: menuOpen ? 'var(--white)' : undefined, 
              padding: menuOpen ? '24px' : undefined, 
              boxShadow: menuOpen ? 'var(--shadow-lg)' : undefined,
              borderRadius: menuOpen ? 'var(--radius-lg)' : undefined,
              marginTop: menuOpen ? '16px' : undefined,
              zIndex: 1000
            }}>
              <li><a href="#clinica" onClick={() => setMenuOpen(false)}>Clínica</a></li>
              <li><a href="#servicios" onClick={() => setMenuOpen(false)}>Especialidades</a></li>
              <li><a href="#convenios" onClick={() => setMenuOpen(false)}>Convenios</a></li>
              <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
            </ul>
            <div className="nav-actions">
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{padding: '10px 20px'}}>Reserva AgendaPro</a>
              <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-mesh">
          <div className="hero-blob-1"></div>
          <div className="hero-blob-2"></div>
        </div>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="orbit-container"
          >
            <div className="orbit-glow"></div>
            <div className="orbit-ring ring-1">
              <motion.div 
                className="orbit-node node-1"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                style={{ transformOrigin: "50% 250px" }} 
                // A better approach for real orbit is to animate the ring, but this is a simplified visual.
              >
                <div style={{transform: "rotate(-360deg)"}}><ShieldCheck size={28} /></div>
              </motion.div>
            </div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
            <div className="orbit-center">
              <img src="/img/logo-sitio-web.png" alt="Logo MedBalance" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Booking Form */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
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
              <button type="submit" className="btn btn-primary" style={{width: '100%', height: '52px'}}>
                Agendar Ahora <ArrowRight size={18} />
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Clínica / Nosotros */}
      <section className="nosotros-section" id="clinica">
        <div className="container">
          <div className="clinic-grid">
            <motion.div 
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="clinic-image"
            >
              <img src="/img/kine.png" alt="Clínica MedBalance" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <span className="tagline">Nuestra Clínica</span>
              <h2 style={{fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '24px'}}>Atención integral basada en evidencia.</h2>
              <p style={{color: 'var(--ink-light)', fontSize: '1.15rem', marginBottom: '40px'}}>MedBalance es un moderno centro de salud en Temuco enfocado en la prevención y rehabilitación. Nuestro equipo clínico multidisciplinario trabaja en conjunto para diseñar planes terapéuticos a tu medida.</p>
              
              <div className="clinic-features">
                <div className="feature-box">
                  <div className="feature-icon"><CheckCircle2 size={24} /></div>
                  <h4>Diagnóstico Preciso</h4>
                  <p>Evaluación clínica completa antes de iniciar el tratamiento.</p>
                </div>
                <div className="feature-box">
                  <div className="feature-icon"><ShieldCheck size={24} /></div>
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
                {activeTab === tab.id && (
                  <motion.div layoutId="activeTab" className="tab-active-bg" transition={{type: "spring", stiffness: 300, damping: 30}} />
                )}
                {tab.label}
              </button>
            ))}
          </div>

          <div style={{position: 'relative'}}>
            <AnimatePresence mode="wait">
              {activeTab === "tab-psico" && (
                <motion.div 
                  key="psico"
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
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
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
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
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
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
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
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
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="service-card-premium">
                    <div className="service-image-box contain" style={{background:'#f1f5f9'}}>
                       {/* Placeholder can be an elegant abstract shape or image if available, using the logo as a placeholder for TO is better than an icon */}
                       <img src="/img/logo-sitio-web.png" alt="Terapia Ocupacional" style={{opacity: 0.5, filter: 'grayscale(100%)'}} />
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
        </div>
      </section>

      {/* Equipo Médico */}
      <section className="team-section" id="equipo">
        <div className="container">
          <div className="section-header">
            <span className="tagline">Especialistas</span>
            <h2>Nuestro Equipo Clínico</h2>
            <p>Profesionales altamente calificados dedicados a brindarte la mejor atención con un enfoque integral y humano.</p>
          </div>
          <div className="team-grid">
            
            <div className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-liss-new.png" alt="Liss" /></div>
              <h4>Liss</h4>
              <p>Psicóloga Clínica</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>
            
            <div className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-andrea.jpg" alt="Andrea Retamal Baeza" /></div>
              <h4>Andrea Retamal Baeza</h4>
              <p>Nutricionista</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>
            
            <div className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-eunice-new.jpg" alt="Eunice Lefiqueo" /></div>
              <h4>Eunice Lefiqueo</h4>
              <p>Nutricionista</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>
            
            <div className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-gabriela-new.png" alt="Gabriela Caniullán Coña" /></div>
              <h4>Gabriela Caniullán Coña</h4>
              <p>Fonoaudióloga</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>
            
            <div className="team-card-premium">
              <div className="team-photo-wrapper"><img src="/img/team-valentina.jpg" alt="Valentina Henríquez Millanao" /></div>
              <h4>Valentina Henríquez Millanao</h4>
              <p>Terapeuta Ocupacional</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>

            <div className="team-card-premium">
              <div className="team-photo-wrapper">
                <div style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem', color:'var(--teal)', fontWeight:700, fontFamily:'var(--font-merriweather)', background:'var(--white)'}}>IA</div>
              </div>
              <h4>Ian Arévalo</h4>
              <p>Kinesiólogo</p>
              <a href="https://agendapro.com/site/cl/centrodesaludmedbalance" target="_blank" className="btn btn-outline" style={{width: '100%', marginTop: '24px', padding: '10px', fontSize: '0.9rem'}}>Agendar Hora</a>
            </div>

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
            animate={{ x: [0, -1372] }} // Adjusted for larger card size
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {/* Set 1 */}
            <div className="partner-card"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /></div>
            <div className="partner-card"><img src="/img/city-kombat.png" alt="City Kombat" /></div>
            <div className="partner-card"><img src="/img/elixir-gym.png" alt="Elixir Gym" /></div>
            <div className="partner-card text-card"><h4>Cajas de Compensación</h4><p>Beneficios Corporativos</p></div>
            <div className="partner-card text-card"><h4>Educación Superior</h4><p>Convenio Estudiantes</p></div>
            <div className="partner-card text-card"><h4>Red Salud Local</h4><p>Derivaciones Clínicas</p></div>
            {/* Set 2 (Duplicado) */}
            <div className="partner-card"><img src="/img/logo-fonasa.jpg" alt="Fonasa" /></div>
            <div className="partner-card"><img src="/img/city-kombat.png" alt="City Kombat" /></div>
            <div className="partner-card"><img src="/img/elixir-gym.png" alt="Elixir Gym" /></div>
            <div className="partner-card text-card"><h4>Cajas de Compensación</h4><p>Beneficios Corporativos</p></div>
            <div className="partner-card text-card"><h4>Educación Superior</h4><p>Convenio Estudiantes</p></div>
            <div className="partner-card text-card"><h4>Red Salud Local</h4><p>Derivaciones Clínicas</p></div>
          </motion.div>
        </div>
          
        <div className="container">
          <div style={{textAlign: 'center', marginTop: '80px'}}>
            <a href="https://wa.me/56920494925" className="btn btn-outline" style={{borderColor:'var(--teal)', color:'var(--teal-deep)'}}>
              Establecer Alianza Corporativa <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Formulario Premium */}
      <section className="contact-section" id="contacto">
        <div className="contact-bg-blob"></div>
        <div className="container">
          <div className="section-header">
            <span className="tagline">Atención Personalizada</span>
            <h2>Agenda tu evaluación médica</h2>
            <p>Déjanos tus datos y nuestro equipo clínico se pondrá en contacto contigo a la brevedad.</p>
          </div>
          
          <div className="contact-card">
            <div className="contact-info-panel">
              <div className="panel-bg-glow"></div>
              <h3 style={{fontSize:'2.5rem', marginBottom:'16px', color:'#fff'}}>Hablemos de tu salud</h3>
              <p style={{color:'rgba(255,255,255,0.8)', marginBottom:'48px', fontSize:'1.1rem'}}>Atendemos de lunes a sábado en el corazón de Temuco. Tu bienestar es nuestra absoluta prioridad.</p>
              
              <div className="info-item">
                <div className="info-icon"><MapPin size={24} /></div>
                <div>
                  <span className="info-label">Ubicación Central</span>
                  <p>Ramón Freire 630, Block 8, Of 13</p>
                </div>
              </div>
              <div className="info-item">
                <div className="info-icon"><Phone size={24} /></div>
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
                  <select className="modern-input" required defaultValue="">
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
                  <textarea className="modern-input" placeholder=" " rows="4" required style={{resize: 'none'}}></textarea>
                  <label className="modern-label">¿En qué podemos ayudarte?</label>
                </div>
                <button type="submit" className="btn btn-primary" style={{padding: '20px', fontSize: '1.1rem', width:'100%', justifyContent:'center', borderRadius: 'var(--radius)'}}>
                  Enviar Solicitud Segura <Send size={20} style={{marginLeft: '8px'}} />
                </button>
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
              <a href="#" className="footer-brand">
                <img src="/img/logo-sitio-web.png" alt="MedBalance" />
              </a>
              <p style={{marginBottom:'24px', maxWidth:'300px', fontSize:'0.95rem', lineHeight: '1.8', color: 'var(--ink-light)'}}>Centro de salud integral en Temuco. Nuestro compromiso es tu equilibrio físico y mental a través de un servicio clínico de excelencia.</p>
              <div style={{display:'flex', gap:'16px'}}>
                <a href="https://instagram.com/medbalance_tco" target="_blank" style={{color:'var(--teal-deep)', background: 'var(--surface)', padding: '12px', borderRadius: '50%', border: '1px solid var(--border)'}}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </a>
                <a href="https://wa.me/56920494925" target="_blank" style={{color:'var(--teal-deep)', background: 'var(--surface)', padding: '12px', borderRadius: '50%', border: '1px solid var(--border)'}}>
                  <Phone size={20} />
                </a>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Horarios de Atención</h4>
              <table className="schedule-table">
                <tbody>
                  <tr><td>Lunes a Viernes</td><td>09:00 - 20:00</td></tr>
                  <tr><td>Sábado</td><td>09:00 - 14:00</td></tr>
                  <tr><td>Domingo</td><td>Cerrado</td></tr>
                </tbody>
              </table>
            </div>

            <div className="footer-links">
              <h4>Contacto</h4>
              <ul>
                <li style={{display:'flex',gap:'12px', alignItems: 'flex-start', color:'var(--ink)'}}>
                  <MapPin size={18} color="var(--teal)" style={{marginTop:'4px'}}/> 
                  <span>Ramón Freire 630<br/><span style={{fontSize:'0.85rem', color:'var(--ink-light)'}}>Block 8, Of 13, Temuco</span></span>
                </li>
                <li style={{display:'flex',gap:'12px', alignItems: 'center', marginTop: '16px', color:'var(--ink)'}}>
                  <Phone size={18} color="var(--teal)"/> 
                  <span>+56 9 2049 4925</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} <strong>Clínica MedBalance</strong>. Todos los derechos reservados.</p>
            <p>Desarrollado por <strong>[Tu Nombre/Agencia]</strong></p>
          </div>
        </div>
      </footer>
    </main>
  );
}
