"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Calendar, Settings, LogOut, Menu, X } from "lucide-react";
import "../dashboard.css";

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    { name: "Resumen", path: "/dashboard", icon: <LayoutDashboard size={20} /> },
    { name: "Pacientes", path: "/dashboard/pacientes", icon: <Users size={20} /> },
    { name: "Agenda", path: "/dashboard/agenda", icon: <Calendar size={20} /> },
    { name: "Configuración", path: "/dashboard/config", icon: <Settings size={20} /> },
  ];

  return (
    <div className="dashboard-container">
      {/* Mobile Header */}
      <div className="dash-mobile-header">
        <img src="/img/logo-sitio-web.png" alt="MedBalance" className="dash-logo-sm" />
        <button onClick={() => setSidebarOpen(!sidebarOpen)} className="dash-burger">
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`dash-sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="dash-sidebar-header">
          <img src="/img/logo-sitio-web.png" alt="MedBalance" className="dash-logo" />
        </div>
        
        <div className="dash-user-profile">
          <div className="dash-avatar">DR</div>
          <div className="dash-user-info">
            <strong>Dr. Carlos</strong>
            <span>Kinesiólogo</span>
          </div>
        </div>

        <nav className="dash-nav">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={`dash-nav-item ${pathname === item.path || pathname.startsWith(item.path + '/') && item.path !== '/dashboard' ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon} {item.name}
            </Link>
          ))}
        </nav>

        <div className="dash-sidebar-footer">
          <Link href="/login" className="dash-nav-item logout">
            <LogOut size={20} /> Cerrar Sesión
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dash-main">
        {children}
      </main>
    </div>
  );
}
