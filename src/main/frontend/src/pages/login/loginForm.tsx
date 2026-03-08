import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Mail, Lock } from 'lucide-react';
import { login } from "../../services/auth.service";
import { useAuth } from "../../providers/authProvider";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
try {
      const result = await login(email, password);
      //authLogin(result.token);
      console.log("login result:", result);
      alert("로그인 성공");
      navigate("/");
    } catch (error) {
      if (!result.success) {
          alert(result.message);
          return;
        }
      alert("로그인 실패");
    } finally {
      setIsLoading(false);
    }

  };

  return (
    <>
      {/* Header */}
      <div className="login-header">
        <div className="login-icon">
          <span className="login-emoji">👋</span>
        </div>
        <h2 className="login-title">반가워요!</h2>
        <p className="login-subtitle">친구들이 기다리고 있어요 💬</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="login-form">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="login-input-label">
            이메일
          </label>
          <div className="login-input-wrapper">
            <div className="login-input-icon">
              <Mail />
            </div>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="login-input"
              placeholder="example@email.com"
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="login-input-label">
            비밀번호
          </label>
          <div className="login-input-wrapper">
            <div className="login-input-icon">
              <Lock />
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
              placeholder="••••••••"
            />
          </div>
        </div>

        {/* Remember & Forgot */}
        <div className="login-remember-row">
          <label className="login-remember-label">
            <input type="checkbox" />
            <span>로그인 유지</span>
          </label>
          <a href="#" className="login-forgot-link">
            비밀번호 찾기
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="login-submit-btn"
        >
          {isLoading ? '로그인 중...' : '로그인하기'}
        </button>

        {/* Divider */}
        <div className="login-divider">
          <div className="login-divider-line">
            <div></div>
          </div>
          <div className="login-divider-text">
            <span>간편 로그인</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="login-social-buttons">
          {/* Google */}
          <button
            type="button"
            onClick={() => console.log('Google login')}
            className="login-social-btn"
            title="Google로 로그인"
          >
            <svg viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </button>

          {/* Kakao */}
          <button
            type="button"
            onClick={() => console.log('Kakao login')}
            className="login-social-btn"
            title="카카오톡으로 로그인"
          >
            <svg viewBox="0 0 24 24" fill="#3C1E1E">
              <path d="M12 3C6.477 3 2 6.477 2 10.8c0 2.794 1.877 5.252 4.68 6.656-.198.725-.644 2.394-.743 2.772-.119.454.166.448.349.326.148-.099 2.394-1.639 3.31-2.27.444.061.9.093 1.404.093 5.523 0 10-3.477 10-7.577C22 6.477 17.523 3 12 3z"/>
            </svg>
          </button>
        </div>
      </form>

      {/* Sign Up */}
      <div className="login-signup-link">
        <p>
          아직 회원이 아니신가요? <Link to="/signup">회원가입</Link>
        </p>
      </div>
    </>
  );
}

export default LoginForm;