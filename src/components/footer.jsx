import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <div className="footer-logo"></div>
        <span className="footer-name">Helarte</span>
      </div>

      <div className="footer-info">
        <p>📍 Calle 123 #45-67, Medellín, Colombia</p>
        <p>📞 +57 300 111 2223</p>
        <p>📧 contacto@heladeriahelarte.com</p>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Helarte. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
