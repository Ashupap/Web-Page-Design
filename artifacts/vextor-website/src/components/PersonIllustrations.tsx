/* Professional flat-style character illustrations — transparent backgrounds */

/* ── PRIYA — Professional woman, large glowing laptop front and center ── */
export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 260" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pr3-jacket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891B2" />
          <stop offset="100%" stopColor="#0E7490" />
        </linearGradient>
        <linearGradient id="pr3-screen" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#050D1E" />
          <stop offset="100%" stopColor="#081525" />
        </linearGradient>
        <linearGradient id="pr3-screenglow" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#FF6B35" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00C8FF" stopOpacity="0.06" />
        </linearGradient>
        <filter id="pr3-glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="120" cy="254" rx="80" ry="6" fill="rgba(0,0,0,0.13)" />

      {/* ── Legs / Lower body ── */}
      {/* Left leg forward */}
      <path d="M78 210 Q56 214 44 228 Q38 238 56 240 Q76 242 88 226 Q94 216 88 208Z" fill="url(#pr3-jacket)" />
      {/* Right leg */}
      <path d="M145 210 Q166 214 178 228 Q184 238 166 240 Q146 242 134 226 Q128 216 134 208Z" fill="url(#pr3-jacket)" />
      {/* Feet */}
      <ellipse cx="50" cy="240" rx="16" ry="7" fill="#E8A870" />
      <ellipse cx="172" cy="240" rx="16" ry="7" fill="#E8A870" />

      {/* ── LAPTOP — the star of the show ── */}

      {/* Keyboard base with perspective */}
      <path d="M22 210 L218 210 L225 235 L15 235Z" fill="#1E2D45" />
      {/* Keyboard surface */}
      <path d="M26 208 L214 208 L218 210 L22 210Z" fill="#243652" />
      {/* Key rows (subtle) */}
      <rect x="30" y="212" width="180" height="3" rx="1.5" fill="rgba(255,255,255,0.06)" />
      <rect x="30" y="217" width="180" height="3" rx="1.5" fill="rgba(255,255,255,0.05)" />
      <rect x="30" y="222" width="180" height="3" rx="1.5" fill="rgba(255,255,255,0.04)" />
      {/* Trackpad */}
      <rect x="90" y="214" width="60" height="14" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="0.6" />
      {/* Hinge */}
      <rect x="22" y="205" width="196" height="6" rx="2" fill="#162030" />

      {/* Screen back (lid) */}
      <rect x="24" y="95" width="192" height="114" rx="8" fill="#162030" />
      {/* Screen bezel */}
      <rect x="28" y="99" width="184" height="106" rx="6" fill="#1A2540" />
      {/* Screen display area */}
      <rect x="32" y="103" width="176" height="98" rx="4" fill="url(#pr3-screen)" />
      {/* Screen background glow */}
      <rect x="32" y="103" width="176" height="98" rx="4" fill="url(#pr3-screenglow)" />

      {/* ── Screen content — dashboard ── */}
      {/* Top bar */}
      <rect x="34" y="105" width="172" height="12" rx="2" fill="rgba(0,180,255,0.07)" />
      <rect x="38" y="108" width="40" height="5" rx="2.5" fill="#00C8FF" opacity="0.8" />
      <rect x="82" y="109" width="24" height="3" rx="1.5" fill="rgba(255,255,255,0.2)" />
      <rect x="110" y="109" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.15)" />
      {/* User avatar icon top-right */}
      <circle cx="196" cy="111" r="5" fill="rgba(0,200,255,0.2)" stroke="rgba(0,200,255,0.4)" strokeWidth="0.8" />

      {/* Metric cards row */}
      <rect x="34" y="121" width="52" height="28" rx="4" fill="rgba(255,107,53,0.1)" stroke="rgba(255,107,53,0.3)" strokeWidth="0.8" />
      <rect x="38" y="124" width="18" height="3" rx="1.5" fill="rgba(255,107,53,0.6)" />
      <rect x="38" y="130" width="30" height="7" rx="2" fill="rgba(255,107,53,0)" />
      <text x="38" y="138" fontSize="9" fill="#FF9933" fontFamily="sans-serif" fontWeight="bold">₹2.4L</text>

      <rect x="92" y="121" width="52" height="28" rx="4" fill="rgba(0,200,255,0.08)" stroke="rgba(0,200,255,0.25)" strokeWidth="0.8" />
      <rect x="96" y="124" width="22" height="3" rx="1.5" fill="rgba(0,200,255,0.5)" />
      <text x="96" y="138" fontSize="9" fill="#00C8FF" fontFamily="sans-serif" fontWeight="bold">+18%</text>

      <rect x="150" y="121" width="52" height="28" rx="4" fill="rgba(52,211,153,0.08)" stroke="rgba(52,211,153,0.25)" strokeWidth="0.8" />
      <rect x="154" y="124" width="20" height="3" rx="1.5" fill="rgba(52,211,153,0.5)" />
      <text x="154" y="138" fontSize="9" fill="#34D399" fontFamily="sans-serif" fontWeight="bold">142</text>

      {/* Bar chart */}
      <line x1="36" y1="154" x2="36" y2="193" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      <line x1="36" y1="193" x2="200" y2="193" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {/* Bars — tall and vibrant */}
      <rect x="40" y="176" width="14" height="17" rx="2.5" fill="#FF9933" opacity="0.75" />
      <rect x="58" y="165" width="14" height="28" rx="2.5" fill="#FF9933" opacity="0.9" />
      <rect x="76" y="157" width="14" height="36" rx="2.5" fill="#FF6B35" />
      <rect x="94" y="168" width="14" height="25" rx="2.5" fill="#FF9933" opacity="0.8" />
      <rect x="112" y="160" width="14" height="33" rx="2.5" fill="#FF9933" />
      <rect x="130" y="154" width="14" height="39" rx="2.5" fill="#FF6B35" />
      <rect x="148" y="163" width="14" height="30" rx="2.5" fill="#FF9933" opacity="0.85" />
      <rect x="166" y="159" width="14" height="34" rx="2.5" fill="#FF9933" />
      <rect x="184" y="155" width="14" height="38" rx="2.5" fill="#FF6B35" />
      {/* Chart line overlay */}
      <path d="M47 184 L65 173 L83 161 L101 175 L119 164 L137 158 L155 170 L173 163 L191 159" stroke="rgba(0,200,255,0.6)" strokeWidth="1.5" fill="none" strokeDasharray="3,2" />
      {/* Cursor glow */}
      <circle cx="137" cy="158" r="3.5" fill="#00C8FF" opacity="0.9" />
      <circle cx="137" cy="158" r="7" fill="rgba(0,200,255,0.2)" />

      {/* Screen edge glow */}
      <rect x="32" y="103" width="176" height="98" rx="4" fill="none" stroke="rgba(0,200,255,0.18)" strokeWidth="1" />
      {/* Screen glare highlight */}
      <path d="M34 105 L120 105 L100 115 L34 115Z" fill="rgba(255,255,255,0.025)" />

      {/* Notch (webcam) */}
      <circle cx="120" cy="101" r="2.5" fill="rgba(255,255,255,0.15)" />

      {/* ── Character — visible above screen ── */}

      {/* Left arm reaching to keyboard */}
      <path d="M44 175 Q28 178 22 195 L30 200 L50 185Z" fill="url(#pr3-jacket)" />
      <ellipse cx="22" cy="198" rx="10" ry="6" fill="#E8A870" />
      {/* Right arm */}
      <path d="M196 175 Q212 178 218 195 L210 200 L190 185Z" fill="url(#pr3-jacket)" />
      <ellipse cx="218" cy="198" rx="10" ry="6" fill="#E8A870" />

      {/* Torso — visible at sides and above laptop */}
      <path d="M58 120 Q60 100 120 98 Q180 100 182 120 L184 212 H56Z" fill="url(#pr3-jacket)" />
      {/* White collar */}
      <path d="M120 98 L112 112 L120 122 L128 112Z" fill="rgba(255,255,255,0.9)" />
      {/* Jacket lapels */}
      <path d="M112 112 L68 130 L60 180" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />
      <path d="M128 112 L172 130 L180 180" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" fill="none" />

      {/* Neck */}
      <rect x="112" y="84" width="16" height="18" rx="8" fill="#E8A870" />

      {/* ── Head — new character ── */}
      <ellipse cx="120" cy="68" rx="28" ry="29" fill="#E8A870" />

      {/* Hair — straight black bob with fringe */}
      {/* Top and sides */}
      <path d="M93 62 Q92 36 120 34 Q148 36 148 62 Q146 40 120 38 Q94 40 93 62Z" fill="#1A0800" />
      {/* Bob cut sides — straight */}
      <path d="M93 62 L90 82 Q92 90 96 88 L96 62Z" fill="#1A0800" />
      <path d="M148 62 L150 82 Q148 90 144 88 L144 62Z" fill="#1A0800" />
      {/* Fringe/bangs across forehead */}
      <path d="M95 52 Q120 46 145 52 Q140 60 120 58 Q100 60 95 52Z" fill="#1A0800" />

      {/* Eyes — wide, almond shaped */}
      <ellipse cx="106" cy="66" rx="6" ry="5.5" fill="white" />
      <ellipse cx="134" cy="66" rx="6" ry="5.5" fill="white" />
      {/* Pupils */}
      <ellipse cx="107" cy="67.5" rx="3.2" ry="3.2" fill="#1A0800" />
      <ellipse cx="135" cy="67.5" rx="3.2" ry="3.2" fill="#1A0800" />
      <circle cx="108" cy="66.5" r="1.2" fill="white" />
      <circle cx="136" cy="66.5" r="1.2" fill="white" />

      {/* Eyebrows — neat, arched */}
      <path d="M99 57 Q106 54 113 56" stroke="#1A0800" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M127 56 Q134 54 141 57" stroke="#1A0800" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M119 75 Q117 79 119 81 Q121 81 123 79 Q121 79 119 75Z" fill="rgba(0,0,0,0.08)" />

      {/* Smile — warm and focused */}
      <path d="M110 87 Q120 93 130 87" stroke="#B56030" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M110 87 Q115 91 120 92 Q125 91 130 87" fill="rgba(181,96,48,0.15)" />

      {/* Stud earrings — teal */}
      <circle cx="92" cy="71" r="3.5" fill="#0891B2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
      <circle cx="148" cy="71" r="3.5" fill="#0891B2" stroke="rgba(255,255,255,0.4)" strokeWidth="0.8" />
    </svg>
  );
}

/* ── RAHUL — Professional man, checking phone with confidence ── */
export function PersonDistributor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="rd2-suit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B3A6B" />
          <stop offset="100%" stopColor="#0D2040" />
        </linearGradient>
        <linearGradient id="rd2-pant" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#243050" />
          <stop offset="100%" stopColor="#141E30" />
        </linearGradient>
        <linearGradient id="rd2-phone" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#0044AA" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="90" cy="245" rx="55" ry="5" fill="rgba(0,0,0,0.12)" />

      {/* ── Shoes ── */}
      <path d="M58 230 Q50 234 44 236 L68 236 L70 230Z" fill="#0D1117" />
      <path d="M110 230 Q118 234 124 236 L100 236 L98 230Z" fill="#0D1117" />

      {/* ── Trousers ── */}
      <path d="M58 168 L52 231 H70 L78 192 L92 192 L100 231 H118 L112 168Z" fill="url(#rd2-pant)" />

      {/* ── Belt ── */}
      <rect x="56" y="166" width="60" height="8" rx="3" fill="#0A0F1C" />
      <rect x="84" y="167" width="10" height="6" rx="1.5" fill="rgba(0,200,255,0.55)" />

      {/* ── Shirt / Blazer body ── */}
      <path d="M30 118 Q32 94 90 92 Q148 94 150 118 L152 170 H28Z" fill="url(#rd2-suit)" />
      {/* Lapels */}
      <path d="M90 92 L78 108 L90 128 L102 108Z" fill="rgba(255,255,255,0.85)" />
      {/* Tie */}
      <path d="M90 112 L86 130 L90 136 L94 130Z" fill="#FF9933" opacity="0.9" />
      {/* Pocket */}
      <rect x="104" y="120" width="20" height="18" rx="2.5" fill="rgba(0,200,255,0.07)" stroke="rgba(0,200,255,0.25)" strokeWidth="0.8" />
      {/* Pocket square */}
      <path d="M106 120 L110 114 L116 120" fill="rgba(0,200,255,0.45)" />

      {/* ── Right arm — down, relaxed ── */}
      <path d="M150 118 Q165 126 168 148 Q170 164 156 168 L142 166 L138 146Z" fill="url(#rd2-suit)" />
      <ellipse cx="162" cy="172" rx="11" ry="8" fill="#C47E4E" />

      {/* ── Left arm — bent, raised, holding phone ── */}
      <path d="M30 118 Q14 125 10 148 Q8 164 24 168 L40 166 L48 138Z" fill="url(#rd2-suit)" />

      {/* Phone in left hand */}
      <rect x="2" y="82" width="36" height="60" rx="7" fill="#0A0F1C" stroke="rgba(0,200,255,0.9)" strokeWidth="2" />
      <rect x="5" y="86" width="30" height="50" rx="5" fill="#060C18" />
      <rect x="5" y="86" width="30" height="50" rx="5" fill="url(#rd2-phone)" />
      {/* Notch */}
      <rect x="14" y="86" width="10" height="3" rx="1.5" fill="#0A0F1C" />
      {/* App content on screen */}
      <rect x="8" y="92" width="14" height="3" rx="1.5" fill="rgba(0,200,255,0.6)" />
      <rect x="8" y="98" width="9" height="2.5" rx="1.2" fill="rgba(255,255,255,0.25)" />
      <rect x="8" y="108" width="6" height="20" rx="1.5" fill="rgba(0,200,255,0.3)" />
      <rect x="16" y="103" width="6" height="25" rx="1.5" fill="rgba(0,200,255,0.55)" />
      <rect x="24" y="106" width="6" height="22" rx="1.5" fill="#00F2FF" />
      <rect x="32" y="112" width="4" height="16" rx="1" fill="rgba(0,200,255,0.4)" />
      {/* Notification */}
      <circle cx="37" cy="84" r="5.5" fill="#FF9933" />
      <text x="35.5" y="86.2" fontSize="5.5" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>
      {/* Hand */}
      <ellipse cx="16" cy="146" rx="10" ry="7" fill="#C47E4E" />

      {/* ── Neck ── */}
      <rect x="82" y="80" width="18" height="18" rx="9" fill="#C47E4E" />

      {/* ── Head ── */}
      <g transform="rotate(-12, 90, 72)">
        <ellipse cx="90" cy="58" rx="28" ry="30" fill="#C47E4E" />

        {/* Hair */}
        <path d="M63 48 Q62 24 90 22 Q118 24 118 48 Q116 28 90 26 Q64 28 63 48Z" fill="#0F172A" />

        {/* Eyes */}
        <ellipse cx="78" cy="56" rx="5.5" ry="5.5" fill="white" />
        <ellipse cx="102" cy="56" rx="5.5" ry="5.5" fill="white" />
        <ellipse cx="76" cy="57.5" rx="3" ry="3" fill="#0A0A18" />
        <ellipse cx="100" cy="57.5" rx="3" ry="3" fill="#0A0A18" />
        <circle cx="76.8" cy="56.5" r="1.1" fill="white" />
        <circle cx="100.8" cy="56.5" r="1.1" fill="white" />

        {/* Glasses — rectangular */}
        <rect x="68" y="50" width="22" height="14" rx="4" fill="none" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <rect x="94" y="50" width="22" height="14" rx="4" fill="none" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <line x1="90" y1="57" x2="94" y2="57" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <line x1="66" y1="57" x2="62" y2="55" stroke="rgba(0,200,255,0.65)" strokeWidth="1.2" />
        <line x1="118" y1="57" x2="122" y2="55" stroke="rgba(0,200,255,0.65)" strokeWidth="1.2" />

        {/* Eyebrows */}
        <path d="M70 46 Q77 43 84 45.5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M96 45.5 Q103 43 110 46" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <ellipse cx="90" cy="66" rx="4" ry="3" fill="rgba(0,0,0,0.09)" />

        {/* Moustache */}
        <path d="M78 76 Q84 79 90 78 Q96 79 102 76" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M80 84 Q90 91 100 84" stroke="#8C4F20" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/* ── MEERA — Relaxed professional, sitting in beach lounge chair, drink + phone ── */
export function PersonManufacturer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mf2-outfit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="mf2-chair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="mf2-drink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="mf2-phonescreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* ── Beach Lounge Chair ── */}
      {/* Chair legs — front pair */}
      <line x1="68" y1="178" x2="55" y2="205" stroke="url(#mf2-chair)" strokeWidth="7" strokeLinecap="round" />
      <line x1="200" y1="178" x2="213" y2="205" stroke="url(#mf2-chair)" strokeWidth="7" strokeLinecap="round" />
      {/* Chair legs — back pair (shorter, angled) */}
      <line x1="220" y1="148" x2="238" y2="175" stroke="url(#mf2-chair)" strokeWidth="7" strokeLinecap="round" />
      <line x1="72" y1="148" x2="58" y2="170" stroke="url(#mf2-chair)" strokeWidth="7" strokeLinecap="round" />

      {/* Chair seat — horizontal slatted surface */}
      <rect x="60" y="162" width="150" height="20" rx="6" fill="url(#mf2-chair)" />
      {/* Seat slats */}
      <line x1="90" y1="162" x2="90" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="120" y1="162" x2="120" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="150" y1="162" x2="150" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="180" y1="162" x2="180" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Chair backrest — angled upward to the right */}
      <path d="M192 90 L210 162 L224 158 L206 86Z" fill="url(#mf2-chair)" rx="4" />
      {/* Backrest slats */}
      <line x1="195" y1="98" x2="218" y2="96" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="198" y1="112" x2="220" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="201" y1="126" x2="222" y2="124" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="204" y1="140" x2="224" y2="138" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

      {/* Armrests */}
      <rect x="58" y="152" width="14" height="32" rx="5" fill="#92400E" opacity="0.8" />
      <rect x="198" y="152" width="14" height="32" rx="5" fill="#92400E" opacity="0.8" />

      {/* ── Person sitting in chair ── */}

      {/* Legs stretched forward/outward on seat */}
      {/* Left leg */}
      <path d="M80 162 L38 168 L34 178 L82 172Z" fill="url(#mf2-outfit)" opacity="0.9" />
      {/* Right leg */}
      <path d="M110 162 L75 170 L72 180 L114 172Z" fill="url(#mf2-outfit)" opacity="0.85" />
      {/* Feet */}
      <ellipse cx="32" cy="180" rx="14" ry="7" fill="#C47E4E" />
      <ellipse cx="68" cy="182" rx="14" ry="7" fill="#C47E4E" />
      {/* Sandal straps */}
      <path d="M22 178 Q32 173 42 178" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M58 179 Q68 174 78 179" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Torso — resting back against backrest */}
      <path d="M88 98 Q90 82 140 80 Q190 82 192 98 L194 168 H86Z" fill="url(#mf2-outfit)" />
      {/* Neckline */}
      <path d="M140 80 L132 94 L140 106 L148 94Z" fill="rgba(255,255,255,0.14)" />
      {/* Hem detail */}
      <path d="M86 162 Q140 170 194 162" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" fill="none" />

      {/* ── Left arm — raised, holding phone ── */}
      <path d="M88 98 Q66 104 50 92 Q36 80 40 66 L60 60 Q72 80 84 95Z" fill="url(#mf2-outfit)" />
      {/* Hand holding phone */}
      <ellipse cx="42" cy="62" rx="11" ry="8" fill="#C47E4E" />

      {/* Phone in left hand */}
      <rect x="22" y="30" width="32" height="56" rx="7" fill="#0A0F1C" stroke="#FF9933" strokeWidth="1.8" />
      <rect x="26" y="34" width="24" height="46" rx="5" fill="#070D18" />
      <rect x="26" y="34" width="24" height="46" rx="5" fill="url(#mf2-phonescreen)" />
      {/* Notch */}
      <rect x="34" y="34" width="8" height="3" rx="1.5" fill="#0A0F1C" />
      {/* Screen content — social media / photos */}
      <rect x="28" y="40" width="20" height="16" rx="3" fill="rgba(255,153,51,0.25)" />
      <rect x="29" y="58" width="14" height="2.5" rx="1.2" fill="rgba(255,255,255,0.4)" />
      <rect x="29" y="63" width="10" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
      <rect x="29" y="68" width="18" height="2" rx="1" fill="rgba(255,153,51,0.4)" />
      <rect x="29" y="73" width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      {/* Like heart icon */}
      <path d="M38 43 C38 41 40 40 41 42 C42 40 44 41 44 43 C44 45 41 47 41 47 C41 47 38 45 38 43Z" fill="#EF4444" opacity="0.8" />

      {/* ── Right arm — extended, holding drink ── */}
      <path d="M192 98 Q214 104 230 118 Q244 132 240 148 L224 152 Q216 138 204 122 L190 106Z" fill="url(#mf2-outfit)" />
      {/* Hand */}
      <ellipse cx="236" cy="154" rx="12" ry="8" fill="#C47E4E" />

      {/* Tropical drink in right hand — tall glass */}
      <path d="M246 124 L242 160 L264 160 L260 124Z" fill="url(#mf2-drink)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Ice cubes */}
      <rect x="248" y="132" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.45)" />
      <rect x="256" y="138" width="5" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
      {/* Lime slice */}
      <ellipse cx="253" cy="125" rx="7" ry="4" fill="#86EFAC" opacity="0.8" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="246" y1="125" x2="260" y2="125" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" />
      {/* Straw */}
      <line x1="260" y1="160" x2="270" y2="114" stroke="#FF9933" strokeWidth="3" strokeLinecap="round" />
      {/* Umbrella */}
      <path d="M268 108 Q276 100 286 102 Q280 112 270 112Z" fill="#FF9933" opacity="0.85" />
      <path d="M268 108 Q260 100 252 104 Q256 112 268 112Z" fill="#FF6B35" opacity="0.85" />
      <circle cx="268" cy="108" r="2.5" fill="#1A0800" />
      <line x1="268" y1="108" x2="270" y2="115" stroke="#1A0800" strokeWidth="1.5" strokeLinecap="round" />

      {/* ── Neck ── */}
      <rect x="132" y="68" width="16" height="18" rx="8" fill="#C47E4E" />

      {/* ── Head ── */}
      <ellipse cx="140" cy="52" rx="27" ry="28" fill="#C47E4E" />

      {/* Hair — wavy/curly, loose */}
      <path d="M114 46 Q113 22 140 20 Q167 22 167 46 Q165 26 140 24 Q115 26 114 46Z" fill="#1A0800" />
      {/* Flowing hair sides */}
      <path d="M114 46 Q108 56 110 68 Q112 78 116 74 Q114 64 116 54Z" fill="#1A0800" />
      <path d="M167 46 Q174 54 176 66 Q175 76 170 76 Q168 66 166 54Z" fill="#1A0800" />
      {/* Hair volume on top */}
      <ellipse cx="140" cy="26" rx="22" ry="10" fill="#241008" />

      {/* Gold jhumka earrings */}
      <circle cx="113" cy="58" r="4" fill="#FF9933" />
      <ellipse cx="113" cy="64" rx="3" ry="5" fill="#FF9933" opacity="0.8" />
      <circle cx="167" cy="58" r="4" fill="#FF9933" />
      <ellipse cx="167" cy="64" rx="3" ry="5" fill="#FF9933" opacity="0.8" />

      {/* Bindi */}
      <circle cx="140" cy="40" r="3.5" fill="#FF9933" />
      <circle cx="140" cy="40" r="1.8" fill="#EF4444" />

      {/* SUNGLASSES — wide cat-eye style */}
      <path d="M116 52 Q123 46 132 48 L132 60 Q123 62 116 58Z" fill="#0D1117" stroke="#FF9933" strokeWidth="1.4" />
      <path d="M148 48 Q157 46 164 52 L164 58 Q157 62 148 60Z" fill="#0D1117" stroke="#FF9933" strokeWidth="1.4" />
      <line x1="132" y1="54" x2="148" y2="54" stroke="#FF9933" strokeWidth="1.4" />
      <line x1="114" y1="54" x2="110" y2="51" stroke="#FF9933" strokeWidth="1.3" />
      <line x1="166" y1="54" x2="170" y2="51" stroke="#FF9933" strokeWidth="1.3" />
      {/* Lens glare */}
      <ellipse cx="122" cy="52" rx="5" ry="3" fill="rgba(0,242,255,0.1)" />
      <ellipse cx="156" cy="52" rx="5" ry="3" fill="rgba(0,242,255,0.1)" />

      {/* Big relaxed smile */}
      <path d="M126 72 Q140 83 154 72" stroke="#7A3A10" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M126 72 Q133 78 140 80 Q147 78 154 72" fill="rgba(120,58,16,0.25)" />

      {/* Nose */}
      <ellipse cx="140" cy="64" rx="4" ry="3" fill="rgba(0,0,0,0.09)" />

      {/* Cheek blush */}
      <ellipse cx="118" cy="66" rx="8" ry="4.5" fill="rgba(239,100,68,0.14)" />
      <ellipse cx="162" cy="66" rx="8" ry="4.5" fill="rgba(239,100,68,0.14)" />
    </svg>
  );
}
