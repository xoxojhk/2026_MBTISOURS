import { MBTICharacters } from '../../utils/MBTICharacters';
import LoginForm from './LoginForm';
import './login2.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          {/* Left Side - Image (Desktop only) */}
          <div className="login-left-side">
            <div className="login-image-container">
              <MBTICharacters />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="login-right-side">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;