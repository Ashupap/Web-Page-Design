/* Professional flat-style character illustrations — transparent backgrounds */

/* ── PRIYA — Retailer using laptop (smaller, screen angled toward her) ── */
export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pr-outfit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="226" rx="65" ry="4.5" fill="rgba(0,0,0,0.15)" />

      {/* Cross-legged lower body */}
      <path d="M62 180 Q46 184 36 197 Q32 207 48 209 Q64 211 72 196 Q76 187 74 178Z" fill="url(#pr-outfit)" />
      <path d="M120 180 Q136 184 146 197 Q150 207 134 209 Q118 211 110 196 Q106 187 108 178Z" fill="url(#pr-outfit)" />
      <ellipse cx="38" cy="209" rx="14" ry="6" fill="#E8A870" />
      <ellipse cx="144" cy="209" rx="14" ry="6" fill="#E8A870" />

      {/* Torso */}
      <path d="M62 95 Q64 82 100 80 Q136 82 138 95 L140 182 H60Z" fill="url(#pr-outfit)" />
      <path d="M100 80 L93 93 L100 103 L107 93Z" fill="rgba(255,255,255,0.85)" />

      {/* ── LAPTOP — smaller, 76px wide, natural 3/4 perspective ── */}

      {/* Keyboard deck — top surface visible (parallelogram = top-down angle) */}
      <path d="M57 175 L143 175 L148 192 L52 192Z" fill="#1E293B" />
      <path d="M59 173 L141 173 L143 175 L57 175Z" fill="#334155" />
      <rect x="63" y="177" width="74" height="2" rx="1" fill="rgba(255,255,255,0.07)" />
      <rect x="63" y="181" width="74" height="2" rx="1" fill="rgba(255,255,255,0.06)" />
      <rect x="63" y="185" width="74" height="2" rx="1" fill="rgba(255,255,255,0.05)" />
      {/* Trackpad */}
      <rect x="78" y="177" width="44" height="11" rx="2.5" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.13)" strokeWidth="0.6" />
      {/* Hinge */}
      <rect x="57" y="170" width="86" height="5" rx="2" fill="#0F172A" />

      {/* Screen lid back */}
      <rect x="59" y="110" width="82" height="63" rx="6" fill="#0B1628" />
      {/* Screen bezel */}
      <rect x="63" y="114" width="74" height="55" rx="4.5" fill="#1A2540" />
      {/* Display */}
      <rect x="67" y="118" width="66" height="47" rx="3" fill="#060C18" />

      {/* Screen content — compact dashboard */}
      {/* Header */}
      <rect x="69" y="120" width="62" height="8" rx="1.5" fill="rgba(0,180,255,0.07)" />
      <rect x="71" y="122" width="22" height="3.5" rx="1.8" fill="#00C8FF" opacity="0.9" />
      <circle cx="127" cy="124" r="3.5" fill="rgba(0,200,255,0.25)" stroke="rgba(0,200,255,0.5)" strokeWidth="0.7" />
      {/* Stat row */}
      <rect x="69" y="131" width="18" height="14" rx="2.5" fill="rgba(255,107,53,0.12)" stroke="rgba(255,107,53,0.45)" strokeWidth="0.7" />
      <rect x="71" y="133" width="8" height="2" rx="1" fill="rgba(255,107,53,0.6)" />
      <rect x="71" y="137" width="12" height="4" rx="1.2" fill="#FF9933" opacity="0.9" />
      <rect x="91" y="131" width="18" height="14" rx="2.5" fill="rgba(0,200,255,0.09)" stroke="rgba(0,200,255,0.4)" strokeWidth="0.7" />
      <rect x="93" y="133" width="10" height="2" rx="1" fill="rgba(0,200,255,0.6)" />
      <rect x="93" y="137" width="12" height="4" rx="1.2" fill="#00C8FF" opacity="0.88" />
      <rect x="113" y="131" width="18" height="14" rx="2.5" fill="rgba(52,211,153,0.09)" stroke="rgba(52,211,153,0.4)" strokeWidth="0.7" />
      <rect x="115" y="133" width="8" height="2" rx="1" fill="rgba(52,211,153,0.6)" />
      <rect x="115" y="137" width="12" height="4" rx="1.2" fill="#34D399" opacity="0.88" />
      {/* Bar chart */}
      <rect x="70" y="153" width="7" height="9" rx="1.5" fill="#FF9933" opacity="0.7" />
      <rect x="80" y="148" width="7" height="14" rx="1.5" fill="#FF9933" opacity="0.85" />
      <rect x="90" y="144" width="7" height="18" rx="1.5" fill="#FF6B35" />
      <rect x="100" y="150" width="7" height="12" rx="1.5" fill="#FF9933" opacity="0.78" />
      <rect x="110" y="146" width="7" height="16" rx="1.5" fill="#FF9933" />
      <rect x="120" y="142" width="7" height="20" rx="1.5" fill="#FF6B35" />
      <line x1="69" y1="162" x2="133" y2="162" stroke="rgba(255,255,255,0.07)" strokeWidth="0.7" />
      {/* Trend line */}
      <path d="M73 159 L83 154 L93 148 L103 156 L113 150 L123 146" stroke="rgba(0,200,255,0.7)" strokeWidth="1.3" fill="none" />
      <circle cx="123" cy="146" r="2" fill="#00C8FF" />
      <circle cx="123" cy="146" r="4" fill="rgba(0,200,255,0.22)" />
      {/* Screen glow border */}
      <rect x="67" y="118" width="66" height="47" rx="3" fill="none" stroke="rgba(0,200,255,0.2)" strokeWidth="1" />
      {/* Webcam dot */}
      <circle cx="100" cy="116" r="1.8" fill="rgba(255,255,255,0.2)" />

      {/* Arms reaching to keyboard */}
      <path d="M60 165 Q46 169 40 180 L48 186 L64 174Z" fill="url(#pr-outfit)" />
      <ellipse cx="39" cy="182" rx="8" ry="5" fill="#E8A870" />
      <path d="M140 165 Q154 169 160 180 L152 186 L136 174Z" fill="url(#pr-outfit)" />
      <ellipse cx="161" cy="182" rx="8" ry="5" fill="#E8A870" />

      {/* Neck */}
      <rect x="93" y="68" width="14" height="15" rx="7" fill="#E8A870" />

      {/* Head */}
      <ellipse cx="100" cy="52" rx="23" ry="24" fill="#E8A870" />

      {/* Hair — straight bob with fringe */}
      <path d="M78 46 Q78 28 100 26 Q122 28 122 46 Q120 30 100 29 Q80 30 78 46Z" fill="#1A0800" />
      <path d="M78 46 Q76 59 78 70 Q80 75 84 72 Q82 62 82 50Z" fill="#1A0800" />
      <path d="M122 46 Q124 59 122 70 Q120 75 116 72 Q118 62 118 50Z" fill="#1A0800" />
      <path d="M80 43 Q100 37 120 43 Q115 50 100 48 Q85 50 80 43Z" fill="#1A0800" />

      {/* Face */}
      <ellipse cx="90" cy="53" rx="5" ry="4.5" fill="white" />
      <ellipse cx="110" cy="53" rx="5" ry="4.5" fill="white" />
      <ellipse cx="91" cy="54.5" rx="2.8" ry="2.8" fill="#1A0800" />
      <ellipse cx="111" cy="54.5" rx="2.8" ry="2.8" fill="#1A0800" />
      <circle cx="92" cy="53.5" r="1" fill="white" />
      <circle cx="112" cy="53.5" r="1" fill="white" />
      <path d="M84 45.5 Q90 43 96 45" stroke="#1A0800" strokeWidth="1.9" strokeLinecap="round" fill="none" />
      <path d="M104 45 Q110 43 116 45.5" stroke="#1A0800" strokeWidth="1.9" strokeLinecap="round" fill="none" />
      <path d="M99 60 Q97 63 99 65 Q101 65 103 63 Q101 63 99 60Z" fill="rgba(0,0,0,0.09)" />
      <path d="M93 70 Q100 75 107 70" stroke="#B06030" strokeWidth="1.9" strokeLinecap="round" fill="none" />
      <circle cx="77" cy="56" r="3" fill="#7C3AED" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <circle cx="123" cy="56" r="3" fill="#7C3AED" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
    </svg>
  );
}

/* ── RAHUL — Distributor, phone tilted toward his face ── */
export function PersonDistributor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 250" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="rd-suit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B3A6B" />
          <stop offset="100%" stopColor="#0D2040" />
        </linearGradient>
        <linearGradient id="rd-pant" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#243050" />
          <stop offset="100%" stopColor="#141E30" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="90" cy="245" rx="55" ry="5" fill="rgba(0,0,0,0.12)" />

      {/* Shoes */}
      <path d="M58 230 Q50 234 44 236 L68 236 L70 230Z" fill="#0D1117" />
      <path d="M110 230 Q118 234 124 236 L100 236 L98 230Z" fill="#0D1117" />

      {/* Trousers */}
      <path d="M58 168 L52 231 H70 L78 192 L92 192 L100 231 H118 L112 168Z" fill="url(#rd-pant)" />

      {/* Belt */}
      <rect x="56" y="166" width="60" height="8" rx="3" fill="#0A0F1C" />
      <rect x="84" y="167" width="10" height="6" rx="1.5" fill="rgba(0,200,255,0.55)" />

      {/* Blazer body */}
      <path d="M30 118 Q32 94 90 92 Q148 94 150 118 L152 170 H28Z" fill="url(#rd-suit)" />
      <path d="M90 92 L78 108 L90 128 L102 108Z" fill="rgba(255,255,255,0.85)" />
      <path d="M90 112 L86 130 L90 136 L94 130Z" fill="#FF9933" opacity="0.9" />
      <rect x="104" y="120" width="20" height="18" rx="2.5" fill="rgba(0,200,255,0.07)" stroke="rgba(0,200,255,0.25)" strokeWidth="0.8" />
      <path d="M106 120 L110 114 L116 120" fill="rgba(0,200,255,0.45)" />

      {/* Right arm — relaxed */}
      <path d="M150 118 Q165 126 168 148 Q170 164 156 168 L142 166 L138 146Z" fill="url(#rd-suit)" />
      <ellipse cx="162" cy="172" rx="11" ry="8" fill="#C47E4E" />

      {/* Left arm — bent up, holding phone */}
      <path d="M30 118 Q14 125 10 148 Q8 164 24 168 L40 166 L48 138Z" fill="url(#rd-suit)" />

      {/* ── Phone — rotated ~28° toward Rahul's head (upper-right) ── */}
      <g transform="rotate(-28, 20, 112)">
        {/* Phone body */}
        <rect x="2" y="82" width="36" height="60" rx="7" fill="#0A0F1C" stroke="rgba(0,200,255,0.85)" strokeWidth="1.8" />
        {/* Screen */}
        <rect x="5" y="86" width="30" height="50" rx="5" fill="#060C18" />
        {/* Notch */}
        <rect x="14" y="86" width="10" height="3" rx="1.5" fill="#0A0F1C" />
        {/* Screen content */}
        <rect x="8" y="92" width="14" height="3" rx="1.5" fill="rgba(0,200,255,0.6)" />
        <rect x="8" y="98" width="9" height="2.5" rx="1.2" fill="rgba(255,255,255,0.25)" />
        <rect x="8" y="108" width="6" height="20" rx="1.5" fill="rgba(0,200,255,0.3)" />
        <rect x="16" y="103" width="6" height="25" rx="1.5" fill="rgba(0,200,255,0.55)" />
        <rect x="24" y="106" width="6" height="22" rx="1.5" fill="#00F2FF" />
        <rect x="32" y="112" width="4" height="16" rx="1" fill="rgba(0,200,255,0.4)" />
        {/* Notification badge */}
        <circle cx="37" cy="84" r="5.5" fill="#FF9933" />
        <text x="35.5" y="86.2" fontSize="5.5" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>
      </g>

      {/* Hand holding phone */}
      <ellipse cx="16" cy="146" rx="10" ry="7" fill="#C47E4E" />

      {/* Neck */}
      <rect x="82" y="80" width="18" height="18" rx="9" fill="#C47E4E" />

      {/* Head — tilted looking at phone */}
      <g transform="rotate(-12, 90, 72)">
        <ellipse cx="90" cy="58" rx="28" ry="30" fill="#C47E4E" />
        <path d="M63 48 Q62 24 90 22 Q118 24 118 48 Q116 28 90 26 Q64 28 63 48Z" fill="#0F172A" />
        <ellipse cx="78" cy="56" rx="5.5" ry="5.5" fill="white" />
        <ellipse cx="102" cy="56" rx="5.5" ry="5.5" fill="white" />
        <ellipse cx="76" cy="57.5" rx="3" ry="3" fill="#0A0A18" />
        <ellipse cx="100" cy="57.5" rx="3" ry="3" fill="#0A0A18" />
        <circle cx="76.8" cy="56.5" r="1.1" fill="white" />
        <circle cx="100.8" cy="56.5" r="1.1" fill="white" />
        {/* Glasses */}
        <rect x="68" y="50" width="22" height="14" rx="4" fill="none" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <rect x="94" y="50" width="22" height="14" rx="4" fill="none" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <line x1="90" y1="57" x2="94" y2="57" stroke="rgba(0,200,255,0.8)" strokeWidth="1.6" />
        <line x1="66" y1="57" x2="62" y2="55" stroke="rgba(0,200,255,0.65)" strokeWidth="1.2" />
        <line x1="118" y1="57" x2="122" y2="55" stroke="rgba(0,200,255,0.65)" strokeWidth="1.2" />
        <path d="M70 46 Q77 43 84 45.5" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M96 45.5 Q103 43 110 46" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <ellipse cx="90" cy="66" rx="4" ry="3" fill="rgba(0,0,0,0.09)" />
        <path d="M78 76 Q84 79 90 78 Q96 79 102 76" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M80 84 Q90 91 100 84" stroke="#8C4F20" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/* ── MEERA — Manufacturer, relaxing at beach, phone tilted toward her face ── */
export function PersonManufacturer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mf-outfit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6D28D9" />
        </linearGradient>
        <linearGradient id="mf-chair" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="mf-drink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#34D399" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="mf-phonescreen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* ── Beach Lounge Chair ── */}
      <line x1="68" y1="178" x2="55" y2="205" stroke="url(#mf-chair)" strokeWidth="7" strokeLinecap="round" />
      <line x1="200" y1="178" x2="213" y2="205" stroke="url(#mf-chair)" strokeWidth="7" strokeLinecap="round" />
      <line x1="220" y1="148" x2="238" y2="175" stroke="url(#mf-chair)" strokeWidth="7" strokeLinecap="round" />
      <line x1="72" y1="148" x2="58" y2="170" stroke="url(#mf-chair)" strokeWidth="7" strokeLinecap="round" />
      <rect x="60" y="162" width="150" height="20" rx="6" fill="url(#mf-chair)" />
      <line x1="90" y1="162" x2="90" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="120" y1="162" x2="120" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="150" y1="162" x2="150" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="180" y1="162" x2="180" y2="182" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <path d="M192 90 L210 162 L224 158 L206 86Z" fill="url(#mf-chair)" />
      <line x1="195" y1="98" x2="218" y2="96" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="198" y1="112" x2="220" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="201" y1="126" x2="222" y2="124" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <line x1="204" y1="140" x2="224" y2="138" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
      <rect x="58" y="152" width="14" height="32" rx="5" fill="#92400E" opacity="0.8" />
      <rect x="198" y="152" width="14" height="32" rx="5" fill="#92400E" opacity="0.8" />

      {/* Legs stretched on seat */}
      <path d="M80 162 L38 168 L34 178 L82 172Z" fill="url(#mf-outfit)" opacity="0.9" />
      <path d="M110 162 L75 170 L72 180 L114 172Z" fill="url(#mf-outfit)" opacity="0.85" />
      <ellipse cx="32" cy="180" rx="14" ry="7" fill="#C47E4E" />
      <ellipse cx="68" cy="182" rx="14" ry="7" fill="#C47E4E" />
      <path d="M22 178 Q32 173 42 178" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M58 179 Q68 174 78 179" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Torso */}
      <path d="M88 98 Q90 82 140 80 Q190 82 192 98 L194 168 H86Z" fill="url(#mf-outfit)" />
      <path d="M140 80 L132 94 L140 106 L148 94Z" fill="rgba(255,255,255,0.14)" />
      <path d="M86 162 Q140 170 194 162" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" fill="none" />

      {/* Left arm — raised, holding phone */}
      <path d="M88 98 Q66 104 50 92 Q36 80 40 66 L60 60 Q72 80 84 95Z" fill="url(#mf-outfit)" />
      <ellipse cx="42" cy="62" rx="11" ry="8" fill="#C47E4E" />

      {/* ── Phone — rotated ~30° toward Meera's face (upper-right, toward x=140) ── */}
      <g transform="rotate(30, 38, 58)">
        <rect x="22" y="30" width="32" height="56" rx="7" fill="#0A0F1C" stroke="#FF9933" strokeWidth="1.8" />
        <rect x="26" y="34" width="24" height="46" rx="5" fill="#070D18" />
        <rect x="26" y="34" width="24" height="46" rx="5" fill="url(#mf-phonescreen)" />
        {/* Notch */}
        <rect x="34" y="34" width="8" height="3" rx="1.5" fill="#0A0F1C" />
        {/* Screen content */}
        <rect x="28" y="40" width="20" height="16" rx="3" fill="rgba(255,153,51,0.25)" />
        <rect x="29" y="58" width="14" height="2.5" rx="1.2" fill="rgba(255,255,255,0.4)" />
        <rect x="29" y="63" width="10" height="2" rx="1" fill="rgba(255,255,255,0.25)" />
        <rect x="29" y="68" width="18" height="2" rx="1" fill="rgba(255,153,51,0.4)" />
        <rect x="29" y="73" width="12" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
        <path d="M38 43 C38 41 40 40 41 42 C42 40 44 41 44 43 C44 45 41 47 41 47 C41 47 38 45 38 43Z" fill="#EF4444" opacity="0.8" />
      </g>

      {/* Right arm — extended, holding drink */}
      <path d="M192 98 Q214 104 230 118 Q244 132 240 148 L224 152 Q216 138 204 122 L190 106Z" fill="url(#mf-outfit)" />
      <ellipse cx="236" cy="154" rx="12" ry="8" fill="#C47E4E" />

      {/* Tropical drink */}
      <path d="M246 124 L242 160 L264 160 L260 124Z" fill="url(#mf-drink)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <rect x="248" y="132" width="7" height="7" rx="1.5" fill="rgba(255,255,255,0.45)" />
      <rect x="256" y="138" width="5" height="5" rx="1" fill="rgba(255,255,255,0.3)" />
      <ellipse cx="253" cy="125" rx="7" ry="4" fill="#86EFAC" opacity="0.8" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="246" y1="125" x2="260" y2="125" stroke="rgba(255,255,255,0.35)" strokeWidth="0.7" />
      <line x1="260" y1="160" x2="270" y2="114" stroke="#FF9933" strokeWidth="3" strokeLinecap="round" />
      <path d="M268 108 Q276 100 286 102 Q280 112 270 112Z" fill="#FF9933" opacity="0.85" />
      <path d="M268 108 Q260 100 252 104 Q256 112 268 112Z" fill="#FF6B35" opacity="0.85" />
      <circle cx="268" cy="108" r="2.5" fill="#1A0800" />
      <line x1="268" y1="108" x2="270" y2="115" stroke="#1A0800" strokeWidth="1.5" strokeLinecap="round" />

      {/* Neck */}
      <rect x="132" y="68" width="16" height="18" rx="8" fill="#C47E4E" />

      {/* Head */}
      <ellipse cx="140" cy="52" rx="27" ry="28" fill="#C47E4E" />

      {/* Hair */}
      <path d="M114 46 Q113 22 140 20 Q167 22 167 46 Q165 26 140 24 Q115 26 114 46Z" fill="#1A0800" />
      <path d="M114 46 Q108 56 110 68 Q112 78 116 74 Q114 64 116 54Z" fill="#1A0800" />
      <path d="M167 46 Q174 54 176 66 Q175 76 170 76 Q168 66 166 54Z" fill="#1A0800" />
      <ellipse cx="140" cy="26" rx="22" ry="10" fill="#241008" />

      {/* Jhumka earrings */}
      <circle cx="113" cy="58" r="4" fill="#FF9933" />
      <ellipse cx="113" cy="64" rx="3" ry="5" fill="#FF9933" opacity="0.8" />
      <circle cx="167" cy="58" r="4" fill="#FF9933" />
      <ellipse cx="167" cy="64" rx="3" ry="5" fill="#FF9933" opacity="0.8" />

      {/* Bindi */}
      <circle cx="140" cy="40" r="3.5" fill="#FF9933" />
      <circle cx="140" cy="40" r="1.8" fill="#EF4444" />

      {/* Sunglasses */}
      <path d="M116 52 Q123 46 132 48 L132 60 Q123 62 116 58Z" fill="#0D1117" stroke="#FF9933" strokeWidth="1.4" />
      <path d="M148 48 Q157 46 164 52 L164 58 Q157 62 148 60Z" fill="#0D1117" stroke="#FF9933" strokeWidth="1.4" />
      <line x1="132" y1="54" x2="148" y2="54" stroke="#FF9933" strokeWidth="1.4" />
      <line x1="114" y1="54" x2="110" y2="51" stroke="#FF9933" strokeWidth="1.3" />
      <line x1="166" y1="54" x2="170" y2="51" stroke="#FF9933" strokeWidth="1.3" />

      {/* Smile */}
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
