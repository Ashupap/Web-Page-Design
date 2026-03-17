/* Inline SVG person illustrations — zero network cost
   Three distinct scenes: laptop worker, phone-checker, beach chiller */

/* ── PRIYA — Slim woman, sitting cross-legged, focused on laptop ── */
export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pr-kurta" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#D45F00" />
        </linearGradient>
        <linearGradient id="pr-screen" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0.12" />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse cx="80" cy="205" rx="55" ry="5" fill="rgba(255,153,51,0.15)" />

      {/* Sitting cushion/mat */}
      <path d="M28 188 Q80 196 132 188 Q130 198 80 200 Q30 198 28 188Z" fill="rgba(255,153,51,0.1)" stroke="rgba(255,153,51,0.18)" strokeWidth="1" />

      {/* Crossed legs */}
      <path d="M56 158 Q38 162 30 176 Q28 185 42 187 Q58 189 66 175 Q70 166 68 158 Z" fill="url(#pr-kurta)" opacity="0.88" />
      <path d="M104 158 Q122 162 130 176 Q132 185 118 187 Q102 189 94 175 Q90 166 92 158 Z" fill="url(#pr-kurta)" opacity="0.88" />
      <ellipse cx="37" cy="188" rx="13" ry="6" fill="#F5C17A" />
      <ellipse cx="123" cy="188" rx="13" ry="6" fill="#F5C17A" />

      {/* Laptop — keyboard base */}
      <path d="M32 174 L128 174 L132 184 L28 184 Z" fill="#111827" />
      <rect x="33" y="167" width="94" height="8" rx="2" fill="#1F2937" />
      {/* Laptop screen (angled open) */}
      <path d="M36 167 L44 112 L124 112 L118 167 Z" fill="#0D1117" stroke="rgba(0,242,255,0.35)" strokeWidth="1.2" />
      <path d="M39 165 L47 115 L121 115 L115 165 Z" fill="#030C18" />
      <rect x="47" y="115" width="70" height="50" fill="url(#pr-screen)" />
      {/* Chart bars on screen */}
      <rect x="51" y="142" width="6" height="22" rx="1.5" fill="rgba(255,153,51,0.45)" />
      <rect x="59" y="134" width="6" height="30" rx="1.5" fill="rgba(255,153,51,0.65)" />
      <rect x="67" y="126" width="6" height="38" rx="1.5" fill="#FF9933" />
      <rect x="75" y="138" width="6" height="26" rx="1.5" fill="rgba(255,153,51,0.5)" />
      <rect x="83" y="129" width="6" height="35" rx="1.5" fill="rgba(255,153,51,0.8)" />
      <rect x="91" y="136" width="6" height="28" rx="1.5" fill="rgba(255,153,51,0.55)" />
      <rect x="99" y="122" width="6" height="42" rx="1.5" fill="#FF9933" />
      {/* Screen label */}
      <rect x="49" y="116" width="18" height="3" rx="1.5" fill="rgba(255,153,51,0.35)" />
      <rect x="69" y="116" width="10" height="3" rx="1.5" fill="rgba(0,242,255,0.25)" />
      {/* Glow dot on hinge */}
      <circle cx="78" cy="168" r="2.5" fill="rgba(0,242,255,0.5)" />

      {/* Torso — slim, sitting upright, leaning forward slightly */}
      <path d="M54 108 Q56 88 80 86 Q104 88 106 108 L108 160 H52 Z" fill="url(#pr-kurta)" />
      {/* Kurta V-neckline */}
      <path d="M80 86 L74 100 L80 110 L86 100 Z" fill="rgba(255,255,255,0.15)" />
      {/* Subtle embroidery on hem */}
      <path d="M52 154 Q80 160 108 154" stroke="rgba(255,215,0,0.3)" strokeWidth="1.5" fill="none" />

      {/* Left arm — elbow resting on laptop edge */}
      <path d="M54 108 Q38 118 36 138 Q34 152 46 156 L56 154 L60 134 Z" fill="url(#pr-kurta)" />
      {/* Right arm */}
      <path d="M106 108 Q122 118 124 138 Q126 152 114 156 L104 154 L100 134 Z" fill="url(#pr-kurta)" />
      {/* Hands resting near keyboard */}
      <ellipse cx="38" cy="162" rx="10" ry="6" fill="#F5C17A" />
      <ellipse cx="122" cy="162" rx="10" ry="6" fill="#F5C17A" />

      {/* Neck — tilted forward */}
      <rect x="72" y="74" width="16" height="18" rx="8" fill="#F5C17A" />

      {/* Head — tilted downward looking at screen */}
      <g transform="rotate(22, 80, 68)">
        <ellipse cx="80" cy="54" rx="26" ry="28" fill="#F5C17A" />

        {/* Hair base — dark, pulled back */}
        <path d="M55 46 Q55 24 80 22 Q105 24 105 46 Q103 28 80 26 Q57 28 55 46Z" fill="#1C0A02" />
        {/* Ponytail to right */}
        <path d="M102 42 Q116 36 122 50 Q126 62 116 68 Q106 72 100 60 Q96 52 102 42Z" fill="#1C0A02" />
        <path d="M104 46 Q108 52 108 62 Q104 60 102 55 Z" fill="#2E1508" />

        {/* Eyes — looking DOWN at screen, pupils low */}
        <ellipse cx="68" cy="56" rx="5" ry="5" fill="white" />
        <ellipse cx="92" cy="56" rx="5" ry="5" fill="white" />
        <ellipse cx="69" cy="59.5" rx="2.8" ry="2.8" fill="#1A0800" />
        <ellipse cx="93" cy="59.5" rx="2.8" ry="2.8" fill="#1A0800" />
        <circle cx="69.8" cy="58.5" r="1" fill="white" />
        <circle cx="93.8" cy="58.5" r="1" fill="white" />

        {/* Eyebrows — slightly furrowed, focused */}
        <path d="M63 48 Q68 45.5 73 47" stroke="#1C0A02" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M87 47 Q92 45.5 97 48" stroke="#1C0A02" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M79 64 Q77 69 79 71 Q81 71 83 69 Q81 69 79 64Z" fill="rgba(0,0,0,0.09)" />

        {/* Focused half-open mouth */}
        <path d="M73 78 Q80 82 87 78" stroke="#C56B30" strokeWidth="1.6" strokeLinecap="round" fill="none" />

        {/* Small gold earrings */}
        <circle cx="54" cy="58" r="3" fill="#FF9933" />
        <circle cx="106" cy="58" r="3" fill="#FF9933" />
      </g>
    </svg>
  );
}

/* ── RAHUL — Broad-shouldered man, standing, checking mobile at face level ── */
export function PersonDistributor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="dist-shirt" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B3A6B" />
          <stop offset="100%" stopColor="#0D2040" />
        </linearGradient>
        <linearGradient id="dist-pant" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1F2937" />
          <stop offset="100%" stopColor="#111827" />
        </linearGradient>
        <linearGradient id="dist-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="75" cy="218" rx="40" ry="5" fill="rgba(0,242,255,0.18)" />

      {/* Shoes */}
      <path d="M50 204 Q44 208 40 210 L60 210 L62 204 Z" fill="#111827" />
      <path d="M100 204 Q106 208 110 210 L90 210 L88 204 Z" fill="#111827" />

      {/* Trousers — straight leg */}
      <path d="M50 155 L46 205 H62 L68 172 L82 172 L88 205 H104 L100 155 Z" fill="url(#dist-pant)" />
      {/* Trouser crease */}
      <line x1="55" y1="158" x2="52" y2="204" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
      <line x1="95" y1="158" x2="98" y2="204" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

      {/* Belt */}
      <rect x="48" y="154" width="56" height="7" rx="2" fill="#0D1117" />
      <rect x="72" y="155" width="8" height="5" rx="1" fill="rgba(0,242,255,0.5)" />

      {/* Shirt body — wide shoulders */}
      <path d="M28 112 Q30 88 75 86 Q120 88 122 112 L124 158 H26 Z" fill="url(#dist-shirt)" />
      {/* Shirt collar */}
      <path d="M75 86 L64 102 L75 118 L86 102 Z" fill="rgba(255,255,255,0.88)" />
      {/* Shirt button placket */}
      <line x1="75" y1="86" x2="75" y2="154" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      {/* Shirt pocket */}
      <rect x="84" y="114" width="18" height="16" rx="2" fill="rgba(0,242,255,0.08)" stroke="rgba(0,242,255,0.2)" strokeWidth="0.8" />
      <line x1="93" y1="114" x2="93" y2="130" stroke="rgba(0,242,255,0.15)" strokeWidth="0.6" />
      {/* Pocket pen */}
      <rect x="89" y="112" width="2" height="8" rx="1" fill="rgba(0,242,255,0.6)" />

      {/* RIGHT arm — down at side, relaxed */}
      <path d="M122 112 Q136 120 138 140 Q140 158 126 162 L114 160 L110 140 Z" fill="url(#dist-shirt)" />
      <ellipse cx="132" cy="166" rx="10" ry="7" fill="#C47E4E" />

      {/* LEFT arm — bent at elbow, raised, holding phone at face level */}
      <path d="M28 112 Q12 118 8 140 Q6 155 20 160 L34 158 L42 130 Z" fill="url(#dist-shirt)" />
      {/* Forearm going up */}
      <path d="M20 160 Q14 150 12 130 L28 118 Q36 130 34 158 Z" fill="url(#dist-shirt)" opacity="0.6" />

      {/* Phone in left hand — held at face level */}
      <g transform="rotate(-5, 22, 108)">
        <rect x="6" y="82" width="34" height="56" rx="6" fill="#0A0F1C" stroke="rgba(0,242,255,0.95)" strokeWidth="2" />
        <rect x="9" y="86" width="28" height="46" rx="4" fill="#030810" />
        <rect x="9" y="86" width="28" height="46" rx="4" fill="url(#dist-screen)" />
        {/* Phone notch */}
        <rect x="18" y="86" width="8" height="2.5" rx="1.25" fill="#0A0F1C" />
        {/* Dashboard content */}
        <rect x="11" y="92" width="12" height="2.5" rx="1.25" fill="rgba(0,242,255,0.5)" />
        <rect x="11" y="97" width="8" height="2" rx="1" fill="rgba(0,242,255,0.3)" />
        <rect x="11" y="104" width="5" height="18" rx="1.5" fill="rgba(0,242,255,0.35)" />
        <rect x="18" y="99" width="5" height="23" rx="1.5" fill="rgba(0,242,255,0.6)" />
        <rect x="25" y="102" width="5" height="20" rx="1.5" fill="#00F2FF" />
        <rect x="32" y="108" width="3" height="14" rx="1" fill="rgba(0,242,255,0.45)" />
        {/* Notification badge */}
        <circle cx="38" cy="85" r="5" fill="#FF9933" />
        <text x="36.5" y="87.5" fontSize="5" fill="white" fontFamily="sans-serif" fontWeight="bold">3</text>
      </g>

      {/* Neck */}
      <rect x="67" y="73" width="18" height="18" rx="9" fill="#C47E4E" />

      {/* HEAD — tilted LEFT toward phone at eye level */}
      <g transform="rotate(-18, 75, 68)">
        <ellipse cx="75" cy="54" rx="28" ry="30" fill="#C47E4E" />

        {/* Short hair — neat, dark with subtle side part */}
        <path d="M48 44 Q48 20 75 18 Q102 20 102 44 Q100 24 75 22 Q50 24 48 44Z" fill="#0F172A" />
        <path d="M48 46 Q46 40 48 35 Q47 42 50 48Z" fill="#0F172A" />
        <path d="M102 46 Q104 40 102 35 Q103 42 100 48Z" fill="#0F172A" />
        {/* Side part */}
        <path d="M69 18 Q70 24 68 32" stroke="#1E293B" strokeWidth="2" fill="none" />

        {/* Eyes — looking LEFT toward phone, pupils shifted */}
        <ellipse cx="62" cy="54" rx="5" ry="5" fill="white" />
        <ellipse cx="86" cy="54" rx="5" ry="5" fill="white" />
        {/* Pupils shifted left */}
        <ellipse cx="60" cy="55.5" rx="2.8" ry="2.8" fill="#0A0A18" />
        <ellipse cx="84" cy="55.5" rx="2.8" ry="2.8" fill="#0A0A18" />
        <circle cx="60.8" cy="54.5" r="1" fill="white" />
        <circle cx="84.8" cy="54.5" r="1" fill="white" />

        {/* Glasses — rectangular, techy */}
        <rect x="54" y="49" width="20" height="13" rx="3" fill="none" stroke="rgba(0,242,255,0.75)" strokeWidth="1.5" />
        <rect x="78" y="49" width="20" height="13" rx="3" fill="none" stroke="rgba(0,242,255,0.75)" strokeWidth="1.5" />
        <line x1="74" y1="55.5" x2="78" y2="55.5" stroke="rgba(0,242,255,0.75)" strokeWidth="1.5" />
        <line x1="52" y1="55.5" x2="48" y2="53" stroke="rgba(0,242,255,0.6)" strokeWidth="1.2" />
        <line x1="100" y1="55.5" x2="104" y2="53" stroke="rgba(0,242,255,0.6)" strokeWidth="1.2" />

        {/* Eyebrows — raised, curious */}
        <path d="M56 46 Q62 43 68 46" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <path d="M80 46 Q86 43 92 46" stroke="#0F172A" strokeWidth="2.2" strokeLinecap="round" fill="none" />

        {/* Nose — broad */}
        <ellipse cx="75" cy="64" rx="4" ry="3" fill="rgba(0,0,0,0.1)" />

        {/* Moustache — thick */}
        <path d="M64 74 Q70 77 75 76 Q80 77 86 74" stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M67 82 Q75 89 83 82" stroke="#8C4F20" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/* ── MEERA — Relaxed woman, chilling on beach, sunglasses, arms spread ── */
export function PersonManufacturer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 190" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mfg-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0A192F" />
          <stop offset="100%" stopColor="#0F2E5A" />
        </linearGradient>
        <linearGradient id="mfg-sea" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0077B6" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#023E8A" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="mfg-sand" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C19A6B" />
          <stop offset="100%" stopColor="#A0785A" />
        </linearGradient>
        <linearGradient id="mfg-outfit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
      </defs>

      {/* Sky background */}
      <rect x="0" y="0" width="200" height="120" rx="8" fill="url(#mfg-sky)" />

      {/* Sun */}
      <circle cx="165" cy="28" r="18" fill="#FF9933" opacity="0.9" />
      <circle cx="165" cy="28" r="13" fill="#FFB347" />
      {/* Sun rays */}
      <line x1="165" y1="4" x2="165" y2="10" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="165" y1="46" x2="165" y2="52" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="141" y1="28" x2="147" y2="28" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="183" y1="28" x2="189" y2="28" stroke="#FF9933" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="148" y1="11" x2="152" y2="15" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
      <line x1="178" y1="41" x2="182" y2="45" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
      <line x1="148" y1="45" x2="152" y2="41" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />
      <line x1="178" y1="15" x2="182" y2="11" stroke="#FF9933" strokeWidth="2" strokeLinecap="round" />

      {/* Clouds */}
      <ellipse cx="35" cy="22" rx="22" ry="10" fill="rgba(255,255,255,0.08)" />
      <ellipse cx="50" cy="18" rx="16" ry="8" fill="rgba(255,255,255,0.06)" />
      <ellipse cx="110" cy="30" rx="18" ry="8" fill="rgba(255,255,255,0.06)" />

      {/* Sea */}
      <path d="M0 90 Q25 82 50 90 Q75 98 100 90 Q125 82 150 90 Q175 98 200 90 L200 125 H0 Z" fill="url(#mfg-sea)" />
      {/* Wave highlights */}
      <path d="M0 90 Q25 82 50 90 Q75 98 100 90 Q125 82 150 90 Q175 98 200 90" stroke="rgba(0,242,255,0.35)" strokeWidth="1.5" fill="none" />
      <path d="M10 96 Q35 88 60 96 Q85 104 110 96 Q135 88 160 96 Q180 102 200 98" stroke="rgba(0,242,255,0.2)" strokeWidth="1" fill="none" />

      {/* Sand */}
      <path d="M0 118 Q50 112 100 118 Q150 124 200 118 L200 190 H0 Z" fill="url(#mfg-sand)" />
      {/* Sand texture dots */}
      <circle cx="20" cy="130" r="1.5" fill="rgba(255,255,255,0.1)" />
      <circle cx="60" cy="142" r="1" fill="rgba(255,255,255,0.08)" />
      <circle cx="150" cy="135" r="1.5" fill="rgba(255,255,255,0.1)" />
      <circle cx="180" cy="148" r="1" fill="rgba(255,255,255,0.08)" />

      {/* Beach mat */}
      <rect x="18" y="130" width="150" height="22" rx="4" fill="#5B21B6" opacity="0.6" />
      {/* Mat stripes */}
      <rect x="18" y="130" width="150" height="3.5" rx="1" fill="rgba(255,215,0,0.25)" />
      <rect x="18" y="137" width="150" height="3.5" rx="1" fill="rgba(255,215,0,0.15)" />
      <rect x="18" y="144" width="150" height="3.5" rx="1" fill="rgba(255,215,0,0.25)" />

      {/* PERSON — wide body, reclining/sitting, arms spread open */}

      {/* Left arm — extended out to left, relaxed */}
      <path d="M52 112 Q30 108 16 112 Q8 116 10 126 Q12 134 24 132 L44 126 L56 120 Z" fill="url(#mfg-outfit)" />
      <ellipse cx="11" cy="128" rx="9" ry="7" fill="#B5713A" />

      {/* Right arm — extended out to right, holding coconut */}
      <path d="M128 112 Q150 106 168 110 Q178 114 176 124 Q174 132 162 130 L138 124 L124 118 Z" fill="url(#mfg-outfit)" />
      <ellipse cx="174" cy="126" rx="10" ry="8" fill="#B5713A" />
      {/* Coconut in right hand */}
      <circle cx="180" cy="122" r="10" fill="#5C3D11" />
      <circle cx="180" cy="122" r="7" fill="#6B4423" />
      {/* Straw */}
      <line x1="180" y1="112" x2="183" y2="98" stroke="rgba(255,153,51,0.8)" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="183" cy="96" r="2" fill="#FF9933" />

      {/* Body — seated, rounded (curvy/fuller figure) */}
      <path d="M52 112 Q54 95 90 92 Q126 95 128 112 L130 146 H50 Z" fill="url(#mfg-outfit)" />
      {/* Kurta neckline */}
      <path d="M90 92 L84 104 L90 112 L96 104 Z" fill="rgba(255,255,255,0.15)" />
      {/* Bottom hem detail */}
      <path d="M50 142 Q90 150 130 142" stroke="rgba(255,215,0,0.35)" strokeWidth="1.5" fill="none" />

      {/* Legs stretched forward (feet toward viewer) */}
      <path d="M52 140 L28 148 L24 158 L50 155 Q58 150 60 142 Z" fill="url(#mfg-outfit)" opacity="0.85" />
      <path d="M128 140 L152 148 L158 158 L132 155 Q122 150 120 142 Z" fill="url(#mfg-outfit)" opacity="0.85" />
      {/* Feet/sandals */}
      <ellipse cx="26" cy="161" rx="14" ry="6" fill="#B5713A" />
      <ellipse cx="156" cy="161" rx="14" ry="6" fill="#B5713A" />
      {/* Sandal straps */}
      <path d="M16 159 Q26 155 36 159" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <path d="M146 159 Q156 155 166 159" stroke="#FF9933" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* Neck — short, relaxed */}
      <rect x="83" y="79" width="14" height="16" rx="7" fill="#B5713A" />

      {/* HEAD — upright, looking slightly up/forward, happy and relaxed */}
      <ellipse cx="90" cy="62" rx="26" ry="28" fill="#B5713A" />

      {/* Hair — bun on top, relaxed strands */}
      <path d="M65 56 Q65 33 90 31 Q115 33 115 56 Q113 37 90 35 Q67 37 65 56Z" fill="#1C0A02" />
      {/* Bun */}
      <ellipse cx="90" cy="30" rx="14" ry="10" fill="#1C0A02" />
      <ellipse cx="90" cy="28" rx="10" ry="7" fill="#2A1206" />
      {/* Loose strand blowing in breeze */}
      <path d="M113 50 Q124 42 128 30 Q130 22 122 20" stroke="#1C0A02" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M113 54 Q120 46 122 36" stroke="#2A1206" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Gold jhumka earrings */}
      <circle cx="64" cy="66" r="3.5" fill="#FF9933" />
      <ellipse cx="64" cy="71" rx="2.5" ry="4" fill="#FF9933" opacity="0.85" />
      <circle cx="116" cy="66" r="3.5" fill="#FF9933" />
      <ellipse cx="116" cy="71" rx="2.5" ry="4" fill="#FF9933" opacity="0.85" />

      {/* Bindi */}
      <circle cx="90" cy="50" r="3" fill="#FF9933" />
      <circle cx="90" cy="50" r="1.5" fill="#FF4500" />

      {/* SUNGLASSES — big, stylish */}
      <rect x="68" y="56" width="22" height="14" rx="7" fill="#0D1117" stroke="#FF9933" strokeWidth="1.5" />
      <rect x="93" y="56" width="22" height="14" rx="7" fill="#0D1117" stroke="#FF9933" strokeWidth="1.5" />
      <line x1="90" y1="63" x2="93" y2="63" stroke="#FF9933" strokeWidth="1.5" />
      <line x1="66" y1="63" x2="62" y2="60" stroke="#FF9933" strokeWidth="1.5" />
      <line x1="117" y1="63" x2="121" y2="60" stroke="#FF9933" strokeWidth="1.5" />
      {/* Lens shimmer */}
      <ellipse cx="76" cy="61" rx="5" ry="3" fill="rgba(0,242,255,0.12)" />
      <ellipse cx="101" cy="61" rx="5" ry="3" fill="rgba(0,242,255,0.12)" />

      {/* Big happy smile */}
      <path d="M76 78 Q90 90 104 78" stroke="#7A3A10" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <path d="M76 78 Q82 84 90 86 Q98 84 104 78" fill="rgba(120,58,16,0.3)" />

      {/* Nose — rounded */}
      <ellipse cx="90" cy="71" rx="4" ry="3" fill="rgba(0,0,0,0.1)" />

      {/* Cheek blush — happy */}
      <ellipse cx="70" cy="74" rx="7" ry="4" fill="rgba(239,68,68,0.12)" />
      <ellipse cx="110" cy="74" rx="7" ry="4" fill="rgba(239,68,68,0.12)" />
    </svg>
  );
}
