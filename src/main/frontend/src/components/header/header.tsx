import './Header.css';
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Logo and Brand */}
          <div className="header-brand">
            {/* Icon */}
            <div className="header-icon">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="header-icon-svg"
              >
                <path
                  d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99999 12.5H4.99999C4.11593 12.5 3.26809 12.8512 2.64297 13.4763C2.01785 14.1014 1.66666 14.9493 1.66666 15.8333V17.5"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.3333 2.60669C14.0481 2.792 14.6812 3.20941 15.1331 3.79341C15.585 4.37741 15.8302 5.09493 15.8302 5.83336C15.8302 6.57178 15.585 7.28931 15.1331 7.8733C14.6812 8.4573 14.0481 8.87471 13.3333 9.06002"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.3333 17.5V15.8333C18.3328 15.0948 18.087 14.3773 17.6345 13.7936C17.182 13.2099 16.5485 12.793 15.8333 12.6083"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.49999 9.16667C9.34094 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34094 2.5 7.49999 2.5C5.65904 2.5 4.16666 3.99238 4.16666 5.83333C4.16666 7.67428 5.65904 9.16667 7.49999 9.16667Z"
                  stroke="white"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Brand Text */}
            <div className="header-text">
              <h1 className="header-title">
                MBTISOUR
              </h1>
              <p className="header-subtitle">
                친구가 필요할 때 💜
              </p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="header-nav">
            <Link to="/login" className="header-btn-login">
              로그인
            </Link>
            <button className="header-btn-signup">
              가입
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}