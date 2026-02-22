export function MBTICharacters() {
    const characters = [
      // Analysts - 분석가형
      { type: 'INTJ', emoji: '🧠', action: '생각중', color: '#8B5CF6', x: 30, y: 30, animation: 'thinking' },
      { type: 'INTP', emoji: '🔬', action: '실험중', color: '#A78BFA', x: 130, y: 30, animation: 'experimenting' },
      { type: 'ENTJ', emoji: '👔', action: '지휘중', color: '#7C3AED', x: 230, y: 30, animation: 'leading' },
      { type: 'ENTP', emoji: '💡', action: '토론중', color: '#6D28D9', x: 330, y: 30, animation: 'debating' },
      
      // Diplomats - 외교관형
      { type: 'INFJ', emoji: '🌙', action: '통찰중', color: '#C084FC', x: 30, y: 130, animation: 'meditating' },
      { type: 'INFP', emoji: '🎨', action: '창작중', color: '#D8B4FE', x: 130, y: 130, animation: 'creating' },
      { type: 'ENFJ', emoji: '✨', action: '응원중', color: '#A855F7', x: 230, y: 130, animation: 'cheering' },
      { type: 'ENFP', emoji: '🎭', action: '열정중', color: '#9333EA', x: 330, y: 130, animation: 'dancing' },
      
      // Sentinels - 관리자형
      { type: 'ISTJ', emoji: '📋', action: '정리중', color: '#818CF8', x: 30, y: 230, animation: 'organizing' },
      { type: 'ISFJ', emoji: '🏠', action: '돌봄중', color: '#A5B4FC', x: 130, y: 230, animation: 'caring' },
      { type: 'ESTJ', emoji: '⚖️', action: '관리중', color: '#6366F1', x: 230, y: 230, animation: 'managing' },
      { type: 'ESFJ', emoji: '🤝', action: '협력중', color: '#4F46E5', x: 330, y: 230, animation: 'cooperating' },
      
      // Explorers - 탐험가형
      { type: 'ISTP', emoji: '🔧', action: '수리중', color: '#60A5FA', x: 30, y: 330, animation: 'fixing' },
      { type: 'ISFP', emoji: '🎵', action: '감상중', color: '#93C5FD', x: 130, y: 330, animation: 'appreciating' },
      { type: 'ESTP', emoji: '🏃', action: '도전중', color: '#3B82F6', x: 230, y: 330, animation: 'running' },
      { type: 'ESFP', emoji: '🎉', action: '즐김중', color: '#2563EB', x: 330, y: 330, animation: 'partying' },
    ];
  
    const getAnimationPath = (animation: string) => {
      switch (animation) {
        case 'thinking':
          return { transform: 'rotate(-5, 50, 50);rotate(5, 50, 50);rotate(-5, 50, 50)', speed: '2s' };
        case 'experimenting':
          return { transform: 'scale(0.95);scale(1.05);scale(0.95)', speed: '1.5s' };
        case 'leading':
          return { y: '0;-8;0', speed: '1.8s' };
        case 'debating':
          return { transform: 'rotate(-10, 50, 50);rotate(10, 50, 50);rotate(-10, 50, 50)', speed: '1.2s' };
        case 'meditating':
          return { opacity: '1;0.6;1', speed: '3s' };
        case 'creating':
          return { transform: 'rotate(0, 50, 50);rotate(15, 50, 50);rotate(-15, 50, 50);rotate(0, 50, 50)', speed: '2.5s' };
        case 'cheering':
          return { y: '0;-10;0;-10;0', speed: '1.5s' };
        case 'dancing':
          return { transform: 'rotate(-15, 50, 50);rotate(15, 50, 50);rotate(-15, 50, 50)', speed: '1s' };
        case 'organizing':
          return { x: '0;2;0;2;0', speed: '2s' };
        case 'caring':
          return { transform: 'scale(1);scale(1.1);scale(1)', speed: '2s' };
        case 'managing':
          return { y: '0;-5;0', speed: '2.5s' };
        case 'cooperating':
          return { transform: 'rotate(-8, 50, 50);rotate(8, 50, 50);rotate(-8, 50, 50)', speed: '2s' };
        case 'fixing':
          return { transform: 'rotate(-20, 50, 50);rotate(0, 50, 50);rotate(-20, 50, 50)', speed: '1.8s' };
        case 'appreciating':
          return { transform: 'scale(1);scale(1.05);scale(0.95);scale(1)', speed: '3s' };
        case 'running':
          return { x: '0;5;0;5;0', y: '0;-3;0;-3;0', speed: '1s' };
        case 'partying':
          return { transform: 'rotate(-20, 50, 50);rotate(20, 50, 50);rotate(-20, 50, 50)', speed: '0.8s' };
        default:
          return { y: '0;-5;0', speed: '2s' };
      }
    };
  
    return (
      <svg
        viewBox="0 0 420 450"
        className="w-full h-full"
        style={{ minHeight: '450px' }}
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#F3E8FF', stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: '#E9D5FF', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#DDD6FE', stopOpacity: 1 }} />
          </linearGradient>
          
          {/* Glow effect */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        <rect width="420" height="450" fill="url(#bgGradient)" rx="16" />
  
        {/* Characters */}
        {characters.map((char) => {
          const anim = getAnimationPath(char.animation);
          return (
            <g key={char.type}>
              {/* Glow background */}
              <circle
                cx={char.x + 35}
                cy={char.y + 35}
                r="32"
                fill={char.color}
                opacity="0.15"
                filter="url(#glow)"
              >
                <animate
                  attributeName="r"
                  values="32;36;32"
                  dur={anim.speed}
                  repeatCount="indefinite"
                />
              </circle>
              
              {/* Main circle */}
              <circle
                cx={char.x + 35}
                cy={char.y + 35}
                r="28"
                fill="white"
                stroke={char.color}
                strokeWidth="2.5"
              />
  
              {/* Emoji with custom animation */}
              <text
                x={char.x + 35}
                y={char.y + 45}
                textAnchor="middle"
                fontSize="28"
              >
                {char.emoji}
                {anim.y && (
                  <animate
                    attributeName="y"
                    values={anim.y.split(';').map(v => char.y + 45 + parseFloat(v)).join(';')}
                    dur={anim.speed}
                    repeatCount="indefinite"
                  />
                )}
                {anim.x && (
                  <animate
                    attributeName="x"
                    values={anim.x.split(';').map(v => char.x + 35 + parseFloat(v)).join(';')}
                    dur={anim.speed}
                    repeatCount="indefinite"
                  />
                )}
                {anim.transform && (
                  <animateTransform
                    attributeName="transform"
                    type={anim.transform.includes('scale') ? 'scale' : 'rotate'}
                    values={anim.transform}
                    dur={anim.speed}
                    repeatCount="indefinite"
                    additive="sum"
                  />
                )}
                {anim.opacity && (
                  <animate
                    attributeName="opacity"
                    values={anim.opacity}
                    dur={anim.speed}
                    repeatCount="indefinite"
                  />
                )}
              </text>
  
              {/* MBTI Type Label */}
              <text
                x={char.x + 35}
                y={char.y + 75}
                textAnchor="middle"
                fill={char.color}
                fontSize="9"
                fontWeight="bold"
              >
                {char.type}
              </text>
              
              {/* Action Label */}
              <text
                x={char.x + 35}
                y={char.y + 87}
                textAnchor="middle"
                fill="#666"
                fontSize="7"
              >
                {char.action}
              </text>
            </g>
          );
        })}
  
        {/* Decorative floating hearts/stars */}
        <text x="380" y="60" fontSize="16" opacity="0.4">💫
          <animate attributeName="y" values="60;50;60" dur="2s" repeatCount="indefinite" />
        </text>
        <text x="20" y="180" fontSize="14" opacity="0.4">⭐
          <animate attributeName="y" values="180;170;180" dur="2.5s" repeatCount="indefinite" />
        </text>
        <text x="390" y="280" fontSize="14" opacity="0.4">✨
          <animate attributeName="y" values="280;270;280" dur="2.2s" repeatCount="indefinite" />
        </text>
        <text x="15" y="380" fontSize="16" opacity="0.4">🌟
          <animate attributeName="y" values="380;370;380" dur="2.8s" repeatCount="indefinite" />
        </text>
      </svg>
    );
  }