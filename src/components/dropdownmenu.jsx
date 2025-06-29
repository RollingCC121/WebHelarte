import React, { useState, useRef, useEffect } from "react";
import "../styles/dropdownmenu.css";

const menuItems = [
  {
    icon: "🎁",
    title: "Combos",
    description: "Ofertas especiales",
    section: "combos",
  },
  {
    icon: "🍭",
    title: "Sabores",
    description: "Nuestros productos",
    section: "sabores",
  },
  {
    icon: "ℹ️",
    title: "Sobre Nosotros",
    description: "Nuestra historia",
    section: "nosotros",
  },
];

export default function CompactDropdownMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("combos");
  const menuRef = useRef();

  // Cerrar menú al hacer clic fuera o presionar Escape
  useEffect(() => {
    function handleClickOutside(e) {
      if (open && menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  // Scroll suave a la sección correspondiente
  const handleMenuClick = (e, section) => {
    e.preventDefault();
    setActive(section);
    setOpen(false);
    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="menu-button-container" ref={menuRef}>
      <button
        className={`header-menu-btn${open ? " active" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
      >
        ☰
      </button>
      <div className={`dropdown-menu${open ? " active" : ""}`}>
        <nav className="menu-items">
          {menuItems.map((item) => (
            <a
              href={`#${item.section}`}
              key={item.section}
              className={`menu-item${
                active === item.section ? " active" : ""
              }`}
              onClick={(e) => handleMenuClick(e, item.section)}
            >
              <div className="menu-item-icon">{item.icon}</div>
              <div className="menu-item-content">
                <div className="menu-item-title">{item.title}</div>
                <div className="menu-item-description">
                  {item.description}
                </div>
              </div>
              <div className="menu-item-arrow">→</div>
            </a>
          ))}
        </nav>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="menu-backdrop active"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}