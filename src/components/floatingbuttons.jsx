import '../styles/floatingbuttons.css';

export default function FloatingButtons() {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/573001112223"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp"
        title="Contáctanos por WhatsApp"
      >
        🟢
      </a>
      <a
        href="https://www.instagram.com/heladeria.helarte"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn instagram"
        title="Síguenos en Instagram"
      >
        📸
      </a>
    </div>
  );
}
