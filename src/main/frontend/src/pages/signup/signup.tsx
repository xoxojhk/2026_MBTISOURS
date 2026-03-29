import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { User, Mail, Lock, CheckCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { signup } from "../../Services/auth.service";
import "./signup.css";

// 정규식 정의 (기존 소스 활용)
const regexName = /^[가-힣]{2,20}$/;
const regexNickname = /^[가-힣a-zA-Z0-9]{2,10}$/;
const regexEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const regexPw = /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[a-z\d@$!%*?&]{8,20}$/;

const SignupPage = () => {
  const navigate = useNavigate();
  
  // 1. 페이지 모드 (agree: 약관동의, join: 정보입력)
  const [mode, setMode] = useState<"agree" | "join">("agree");
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  
  // 2. 폼 데이터
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nickname: "",
  });

  // 3. 에러 메시지 및 유효성 상태
  const [msg, setMsg] = useState({ name: "", email: "", password: "", confirm: "", nickname: "" });
  const [isLoading, setIsLoading] = useState(false);

  // 약관 데이터
  const termsList = [
    { id: 1, title: "[필수] 이용 약관 동의", content: "MBTISOUR 서비스 이용을 위한 약관입니다..." },
    { id: 2, title: "[필수] 개인정보 수집 및 이용 동의", content: "서비스 제공을 위해 최소한의 정보를 수집합니다..." },
  ];

  /* --- 약관 동의 로직 --- */
  const handleAllCheck = (checked: boolean) => {
    setCheckedItems(checked ? termsList.map(t => t.id) : []);
  };

  const handleSingleCheck = (checked: boolean, id: number) => {
    setCheckedItems(prev => checked ? [...prev, id] : prev.filter(item => item !== id));
  };

  const onClickNext = () => {
    if (checkedItems.includes(1) && checkedItems.includes(2)) {
      setMode("join");
    } else {
      alert("필수 항목에 동의해야 합니다.");
    }
  };

  /* --- 입력 및 유효성 검사 로직 --- */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));

    // 실시간 유효성 검사
    switch (name) {
      case "name":
        setMsg(p => ({ ...p, name: regexName.test(value) ? "" : "한글 2~20자로 입력하세요." }));
        break;
      case "email":
        setMsg(p => ({ ...p, email: regexEmail.test(value) ? "" : "올바른 이메일 형식이 아닙니다." }));
        break;
      case "password":
        setMsg(p => ({ ...p, password: regexPw.test(value) ? "" : "영문, 숫자, 특수문자 포함 8~20자" }));
        break;
      case "confirmPassword":
        setMsg(p => ({ ...p, confirm: value === form.password ? "" : "비밀번호가 일치하지 않습니다." }));
        break;
      case "nickname":
        setMsg(p => ({ ...p, nickname: regexNickname.test(value) ? "" : "2~10자(한글/영문/숫자)" }));
        break;
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (Object.values(msg).some(m => m !== "")) return alert("입력값을 확인해주세요.");
    
    setIsLoading(true);
    try {
      await signup(form.name, form.email, form.password);
      alert("회원가입이 완료되었습니다!");
      navigate("/login");
    } catch (error) {
      alert("회원가입 중 에러가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-wrapper">
        <div className="signup-card">
          {/* Left Side (Illustration) */}
          <div className="signup-left-side">
            <div className="signup-emoji-bg">{mode === 'agree' ? '📜' : '🚀'}</div>
            <h2 className="text-2xl font-bold text-violet-800 mb-2">
              {mode === 'agree' ? '약관 동의' : '정보 입력'}
            </h2>
            <p className="text-gray-500 whitespace-pre-line">
              {mode === 'agree' 
                ? "서비스 이용을 위해\n약관에 동의해주세요." 
                : "반가워요!\n나머지 정보를 입력해주세요."}
            </p>
          </div>

          {/* Right Side (Form) */}
          <div className="signup-right-side">
            {mode === "agree" ? (
              /* --- 1단계: 약관 동의 --- */
              <div className="flex flex-col h-full justify-center">
                <div className="signup-header">
                  <div className="signup-icon"><ShieldCheck className="text-white" /></div>
                  <h1 className="signup-title">이용 약관</h1>
                </div>
                
                <div className="space-y-4 mb-6">
                  <label className="flex items-center gap-2 p-3 bg-violet-50 rounded-xl cursor-pointer">
                    <input type="checkbox" 
                      checked={checkedItems.length === termsList.length}
                      onChange={(e) => handleAllCheck(e.target.checked)}
                      className="w-4 h-4 accent-violet-600" />
                    <span className="font-bold text-violet-900">전체 동의하기</span>
                  </label>
                  
                  {termsList.map(term => (
                    <div key={term.id} className="border-b border-violet-100 pb-2">
                      <label className="flex items-center justify-between cursor-pointer mb-1">
                        <span className="text-sm font-medium">{term.title}</span>
                        <input type="checkbox" 
                          checked={checkedItems.includes(term.id)}
                          onChange={(e) => handleSingleCheck(e.target.checked, term.id)}
                          className="accent-violet-600" />
                      </label>
                      <div className="text-[10px] text-gray-400 h-12 overflow-y-auto bg-gray-50 p-2 rounded">
                        {term.content}
                      </div>
                    </div>
                  ))}
                </div>

                <button onClick={onClickNext} className="signup-submit-btn">다음 단계로</button>
              </div>
            ) : (
              /* --- 2단계: 정보 입력 --- */
              <>
                <div className="signup-header">
                  <div className="signup-icon"><User className="text-white" /></div>
                  <h1 className="signup-title">회원정보 입력</h1>
                </div>

                <form className="signup-form" onSubmit={handleSubmit}>
                  <InputField label="이름" name="name" icon={<User />} value={form.name} onChange={handleChange} msg={msg.name} placeholder="홍길동" />
                  <InputField label="이메일" name="email" icon={<Mail />} value={form.email} onChange={handleChange} msg={msg.email} placeholder="example@mail.com" />
                  <InputField label="닉네임" name="nickname" icon={<CheckCircle />} value={form.nickname} onChange={handleChange} msg={msg.nickname} placeholder="멋진닉네임" />
                  <InputField label="비밀번호" name="password" type="password" icon={<Lock />} value={form.password} onChange={handleChange} msg={msg.password} placeholder="영문/숫자/특문 조합" />
                  <InputField label="비밀번호 확인" name="confirmPassword" type="password" icon={<Lock />} value={form.confirmPassword} onChange={handleChange} msg={msg.confirm} placeholder="비밀번호 재입력" />

                  <button type="submit" disabled={isLoading} className="signup-submit-btn">
                    {isLoading ? "처리 중..." : "가입하기"}
                  </button>
                </form>
              </>
            )}
            
            <div className="signup-footer">
              이미 계정이 있으신가요? <Link to="/login" className="signup-link">로그인</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 재사용 가능한 입력 필드 컴포넌트
const InputField = ({ label, name, icon, value, onChange, msg, type = "text", placeholder }: any) => (
  <div>
    <label className="signup-input-label">{label}</label>
    <div className="signup-input-wrapper">
      <div className="signup-input-icon">{icon}</div>
      <input type={type} name={name} value={value} onChange={onChange} className="signup-input" placeholder={placeholder} required />
    </div>
    {msg && <p className="text-[10px] text-red-500 ml-1 mt-0.5">{msg}</p>}
  </div>
);

export default SignupPage;