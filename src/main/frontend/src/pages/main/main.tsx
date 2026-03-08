import { useState } from 'react';
import heroImage from '../../assets/images/main.png';
import './main.css';

const friends = [
  { name: '김민지', mbti: 'ENFP', emoji: '🎨', status: 'online', lastMessage: '오늘 날씨 좋네요! 🌞', time: '2분 전' },
  { name: '박서준', mbti: 'INFJ', emoji: '🌙', status: 'online', lastMessage: '좋은 책 추천해드릴까요?', time: '5분 전' },
  { name: '이지은', mbti: 'ENFJ', emoji: '🌟', status: 'away', lastMessage: '내일 시간 있으신가요?', time: '10분 전' },
  { name: '최윤호', mbti: 'INTP', emoji: '🔬', status: 'offline', lastMessage: '재미있는 이야기 있어요!', time: '1시간 전' },
];

const stats = [
  { number: '16', label: 'MBTI 유형', emoji: '🎯' },
  { number: '10K+', label: '활동 회원', emoji: '👥' },
  { number: '50K+', label: '매칭 성공', emoji: '💜' },
  { number: '98%', label: '만족도', emoji: '⭐' },
];

const floatingMbtis = [
  { type: 'ENFP', emoji: '🎨', position: 'top-[10%] left-[5%]', delay: '0s', duration: '6s' },
  { type: 'INFJ', emoji: '🌙', position: 'top-[20%] right-[8%]', delay: '1s', duration: '7s' },
  { type: 'INTJ', emoji: '🧠', position: 'top-[60%] left-[3%]', delay: '2s', duration: '8s' },
  { type: 'ENTP', emoji: '💡', position: 'top-[70%] right-[5%]', delay: '0.5s', duration: '7.5s' },
  { type: 'ISFP', emoji: '🎭', position: 'top-[40%] right-[10%]', delay: '1.5s', duration: '6.5s' },
  { type: 'ESTJ', emoji: '⚖️', position: 'top-[80%] left-[8%]', delay: '2.5s', duration: '7s' },
];

export default function Main() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<string | null>(null);

  const handleTextClick = (field: string) => {
    setEditingField(field);
  };

  const handleTextChange = (field: string, value: string) => {
    setHeroTexts(prev => ({ ...prev, [field]: value }));
  };

  const handleTextBlur = () => {
    setEditingField(null);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setEditingField(null);
    }
  };

  return (
    <div className="min-h-screen w-full pt-[76px]" style={{ backgroundImage: "linear-gradient(150.514deg, rgb(245, 243, 255) 0%, rgb(253, 242, 248) 50%, rgb(239, 246, 255) 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">

        {/* Hero Section - MASSIVE IMPACT */}
        <div className="relative py-4 md:py-6 lg:py-8">
          <div className="relative flex justify-center">
            {/* Hero Image - Large & Clean */}
            <div className="relative w-full max-w-5xl">
              {/* Decorative Background Glow - Subtle */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/15 via-pink-400/15 to-blue-400/15 rounded-[60px] blur-3xl opacity-40" />

              {/* Image - No Box, Clean */}
              <div className="relative">
                <img
                  src={heroImage}
                  alt="MBTI 친구 매칭 - INFP와 ENFP 캐릭터"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Stats Section - Closer to Image */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-5xl mx-auto mt-4 md:mt-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className={`bg-white/80 backdrop-blur-md rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-lg transition-all duration-300 border-2 ${
                  hoveredStat === index ? 'border-purple-400 scale-110 shadow-2xl' : 'border-transparent'
                }`}
              >
                <div className="text-2xl md:text-3xl mb-1 md:mb-2">{stat.emoji}</div>
                <div className="bg-clip-text text-transparent bg-gradient-to-r from-[#7f22fe] to-[#4f39f6] text-2xl md:text-3xl lg:text-4xl font-['Arimo:Bold',sans-serif] font-bold mb-1">
                  {stat.number}
                </div>
                <p className="text-[#4a5565] text-xs md:text-sm font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Friends Matching Preview */}
        <div className="pb-12 md:pb-16 lg:pb-20">
          <div className="bg-white/60 backdrop-blur-md rounded-3xl md:rounded-[40px] p-6 md:p-8 lg:p-12 shadow-xl border border-[#ede9fe]">
            <div className="text-center mb-6 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[#101828] mb-3 md:mb-4">
                나와 잘 맞는 친구들 💜
              </h2>
              <p className="text-[#4a5565] text-base md:text-lg lg:text-xl font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif]">
                MBTI 기반으로 매칭된 친구들과 실시간으로 대화하세요
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {friends.map((friend) => (
                <div
                  key={friend.name}
                  className="bg-gradient-to-br from-white to-purple-50/50 rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer border border-purple-100"
                >
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className="relative">
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-2xl md:text-3xl shadow-md">
                        {friend.emoji}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 rounded-full border-2 border-white ${
                        friend.status === 'online' ? 'bg-green-400' :
                        friend.status === 'away' ? 'bg-yellow-400' : 'bg-gray-400'
                      }`} />
                    </div>
                    <span className="text-xs md:text-sm px-3 md:px-4 py-1 md:py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-['Arimo:Bold',sans-serif] font-bold">
                      {friend.mbti}
                    </span>
                  </div>

                  <h3 className="font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-[#101828] text-lg md:text-xl mb-2">
                    {friend.name}
                  </h3>
                  <p className="text-[#4a5565] text-sm md:text-base font-['Arimo:Regular','Noto_Sans_KR:Regular',sans-serif] mb-2 line-clamp-2">
                    {friend.lastMessage}
                  </p>
                  <p className="text-[#9ca3af] text-xs md:text-sm font-['Arimo:Regular',sans-serif]">
                    {friend.time}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8 md:mt-12">
              <button className="bg-gradient-to-r from-[#a684ff] via-[#c27aff] to-[#7c86ff] text-white px-8 md:px-10 py-3 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-['Arimo:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold text-base md:text-lg">
                더 많은 친구 보기 ➜
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}