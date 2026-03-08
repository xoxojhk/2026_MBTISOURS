import './footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Copyright */}
          <div className="footer-copyright">
            © 2026 MBTISOUR 💜
          </div>

          {/* Links */}
          <div className="footer-links">
            <div className="footer-link">이용약관</div>
            <div className="footer-link">개인정보</div>
            <div className="footer-link">고객센터</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
