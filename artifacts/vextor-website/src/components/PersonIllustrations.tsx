/* Inline SVG person illustrations — zero network cost
   Each person is visually distinct and looking down at their phone */

/* ── PRIYA — Young woman retailer, golden skin, orange kurta, ponytail ── */
export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 210" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pr-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8C00" />
          <stop offset="100%" stopColor="#E06000" />
        </linearGradient>
        <linearGradient id="pr-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="62" cy="205" rx="30" ry="4" fill="rgba(255,153,51,0.18)" />

      {/* Legs / lower body */}
      <path d="M42 158 Q42 190 50 205 H60 Q60 180 62 165 Q64 180 64 205 H74 Q82 190 82 158 Z" fill="url(#pr-body)" opacity="0.85" />

      {/* Kurta body */}
      <path d="M36 108 Q38 92 62 90 Q86 92 88 108 L90 160 H34 Z" fill="url(#pr-body)" />
      {/* Kurta neckline V */}
      <path d="M62 90 L56 104 L62 114 L68 104 Z" fill="rgba(255,255,255,0.18)" />
      {/* Kurta hem detail */}
      <path d="M34 155 Q62 162 90 155 L90 160 H34 Z" fill="rgba(255,255,255,0.1)" />

      {/* Left arm — bent, both hands hold phone */}
      <path d="M36 108 Q20 118 18 136 Q17 148 28 150 L38 148 L40 130 Z" fill="url(#pr-body)" />
      {/* Right arm */}
      <path d="M88 108 Q104 118 106 136 Q107 148 96 150 L86 148 L84 130 Z" fill="url(#pr-body)" />

      {/* Phone held at chest/waist — both hands */}
      <rect x="42" y="138" width="40" height="26" rx="4" fill="#0A1628" stroke="rgba(255,153,51,0.9)" strokeWidth="1.5" />
      <rect x="44" y="140" width="36" height="22" rx="2.5" fill="#040C18" />
      <rect x="44" y="140" width="36" height="22" rx="2.5" fill="url(#pr-screen)" />
      {/* Screen: sales chart */}
      <rect x="46" y="148" width="4" height="9" rx="1" fill="rgba(255,153,51,0.5)" />
      <rect x="52" y="144" width="4" height="13" rx="1" fill="rgba(255,153,51,0.75)" />
      <rect x="58" y="146" width="4" height="11" rx="1" fill="#FF9933" />
      <rect x="64" y="150" width="4" height="7" rx="1" fill="rgba(255,153,51,0.6)" />
      <rect x="70" y="145" width="4" height="12" rx="1" fill="rgba(255,153,51,0.85)" />
      {/* ₹ label */}
      <text x="47" y="145" fontSize="4" fill="rgba(255,153,51,0.8)" fontFamily="sans-serif">₹48K</text>
      {/* Notif dot */}
      <circle cx="79" cy="140" r="3" fill="#00F2FF" />

      {/* Neck — angled forward */}
      <rect x="55" y="76" width="14" height="18" rx="7" fill="#F5C17A" />

      {/* HEAD — tilted downward to look at phone */}
      <g transform="rotate(18, 62, 78)">
        <ellipse cx="62" cy="60" rx="23" ry="26" fill="#F5C17A" />

        {/* Hair base */}
        <path d="M40 54 Q40 32 62 30 Q84 32 84 54 Q82 37 62 35 Q42 37 40 54Z" fill="#2A1506" />
        {/* Ponytail flowing to right */}
        <path d="M80 50 Q95 46 100 58 Q103 68 95 72 Q90 74 84 66 Q82 60 80 50Z" fill="#2A1506" />
        {/* Hair strand */}
        <path d="M84 54 Q88 58 90 65 Q86 63 82 60 Z" fill="#3D2010" />

        {/* Eyes — pupils DOWN (looking at phone) */}
        <ellipse cx="52" cy="60" rx="4" ry="4.5" fill="white" />
        <ellipse cx="72" cy="60" rx="4" ry="4.5" fill="white" />
        {/* Pupils shifted downward */}
        <ellipse cx="52" cy="62.5" rx="2.2" ry="2.5" fill="#1A0800" />
        <ellipse cx="72" cy="62.5" rx="2.2" ry="2.5" fill="#1A0800" />
        <circle cx="53" cy="61.5" r="0.8" fill="white" />
        <circle cx="73" cy="61.5" r="0.8" fill="white" />

        {/* Eyelids — half closed (looking down) */}
        <path d="M48 58 Q52 56 56 58" fill="#F5C17A" stroke="none" />
        <path d="M68 58 Q72 56 76 58" fill="#F5C17A" stroke="none" />

        {/* Eyebrows */}
        <path d="M48 53 Q52 51 56 53" stroke="#2A1506" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M68 53 Q72 51 76 53" stroke="#2A1506" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* Nose */}
        <path d="M61 67 Q59 71 61 73 Q63 73 65 71 Q63 71 61 67Z" fill="rgba(0,0,0,0.09)" />

        {/* Lips — slight smile while looking at phone */}
        <path d="M55 78 Q62 83 69 78" stroke="#C56B30" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M55 78 Q58 79 62 80 Q66 79 69 78" fill="rgba(197,107,48,0.3)" />

        {/* Earring */}
        <circle cx="38" cy="62" r="2" fill="#FF9933" />
      </g>
    </svg>
  );
}

/* ── RAHUL — Stocky man distributor, brown skin, navy suit, glasses ── */
export function PersonDistributor({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 140 220" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="dist-suit" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B3A6B" />
          <stop offset="100%" stopColor="#0D2040" />
        </linearGradient>
        <linearGradient id="dist-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.08" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="70" cy="217" rx="36" ry="5" fill="rgba(0,242,255,0.2)" />

      {/* Trousers */}
      <path d="M46 162 Q44 192 50 213 H63 Q64 188 70 172 Q76 188 77 213 H90 Q96 192 94 162 Z" fill="#0D1F3C" />

      {/* Suit jacket body — wider/stocky */}
      <path d="M30 110 Q32 88 70 86 Q108 88 110 110 L114 165 H26 Z" fill="url(#dist-suit)" />
      {/* White shirt underneath */}
      <path d="M70 86 L60 106 L70 130 L80 106 Z" fill="rgba(255,255,255,0.92)" />
      {/* Suit lapels */}
      <path d="M60 106 L45 128" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      <path d="M80 106 L95 128" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" />
      {/* Tie — cyan */}
      <path d="M70 86 L66 100 L70 118 L74 100 Z" fill="rgba(0,242,255,0.75)" />
      <path d="M66 100 L68 106 L70 104 L72 106 L74 100 L70 98 Z" fill="rgba(0,242,255,0.5)" />

      {/* LEFT arm — bent up, holding phone at chest level */}
      <path d="M30 110 Q12 120 10 142 Q9 158 24 162 L38 160 L42 136 Z" fill="url(#dist-suit)" />
      {/* Right arm — hanging */}
      <path d="M110 110 Q126 122 124 146 Q122 160 108 162 L96 160 L94 136 Z" fill="url(#dist-suit)" />

      {/* Phone — held in left hand at chest level, screen facing user */}
      <rect x="8" y="132" width="32" height="50" rx="5" fill="#080F1C" stroke="rgba(0,242,255,0.9)" strokeWidth="1.8" />
      <rect x="11" y="135" width="26" height="42" rx="3" fill="#030810" />
      <rect x="11" y="135" width="26" height="42" rx="3" fill="url(#dist-screen)" />
      {/* Phone notch */}
      <rect x="21" y="135" width="6" height="2" rx="1" fill="#080F1C" />
      {/* Dashboard on screen */}
      <rect x="13" y="141" width="10" height="2" rx="1" fill="rgba(0,242,255,0.4)" />
      <rect x="13" y="145" width="6" height="1.5" rx="0.75" fill="rgba(0,242,255,0.25)" />
      <rect x="13" y="151" width="4" height="14" rx="1" fill="rgba(0,242,255,0.35)" />
      <rect x="19" y="146" width="4" height="19" rx="1" fill="rgba(0,242,255,0.6)" />
      <rect x="25" y="149" width="4" height="16" rx="1" fill="#00F2FF" />
      <rect x="31" y="153" width="4" height="12" rx="1" fill="rgba(0,242,255,0.45)" />
      {/* Notif badge */}
      <circle cx="37" cy="134" r="4" fill="#FF9933" />
      <text x="35.5" y="136.5" fontSize="4.5" fill="white" fontFamily="sans-serif" fontWeight="bold">2</text>

      {/* Neck */}
      <rect x="62" y="72" width="16" height="20" rx="8" fill="#C47E4E" />

      {/* HEAD — tilted left-downward looking at phone */}
      <g transform="rotate(-20, 70, 80)">
        <ellipse cx="70" cy="58" rx="27" ry="30" fill="#C47E4E" />

        {/* Short dark hair — slight side part */}
        <path d="M44 48 Q44 25 70 23 Q96 25 96 48 Q93 30 70 28 Q47 30 44 48Z" fill="#111827" />
        <path d="M44 50 Q42 44 44 40 Q43 46 46 52Z" fill="#111827" />
        <path d="M96 50 Q98 44 96 40 Q97 46 94 52Z" fill="#111827" />
        {/* Hair side part line */}
        <path d="M65 23 Q66 28 65 34" stroke="#1F2937" strokeWidth="1.5" fill="none" />

        {/* Glasses */}
        <rect x="46" y="53" width="18" height="12" rx="4" fill="none" stroke="rgba(0,242,255,0.7)" strokeWidth="1.5" />
        <rect x="68" y="53" width="18" height="12" rx="4" fill="none" stroke="rgba(0,242,255,0.7)" strokeWidth="1.5" />
        <line x1="64" y1="59" x2="68" y2="59" stroke="rgba(0,242,255,0.7)" strokeWidth="1.5" />
        <line x1="44" y1="59" x2="40" y2="57" stroke="rgba(0,242,255,0.6)" strokeWidth="1.2" />
        <line x1="86" y1="59" x2="90" y2="57" stroke="rgba(0,242,255,0.6)" strokeWidth="1.2" />

        {/* Eyes behind glasses — looking DOWN-LEFT toward phone */}
        <ellipse cx="55" cy="58" rx="4.5" ry="4" fill="white" opacity="0.95" />
        <ellipse cx="77" cy="58" rx="4.5" ry="4" fill="white" opacity="0.95" />
        <ellipse cx="53.5" cy="60" rx="2.5" ry="2.2" fill="#0A0A1A" />
        <ellipse cx="75.5" cy="60" rx="2.5" ry="2.2" fill="#0A0A1A" />
        <circle cx="54" cy="59" r="0.8" fill="white" />
        <circle cx="76" cy="59" r="0.8" fill="white" />

        {/* Eyebrows */}
        <path d="M49 50 Q55 47.5 61 50" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M69 50 Q75 47.5 81 50" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Nose — broad */}
        <path d="M68 66 Q65 72 68 75 Q70 76 72 75 Q75 72 72 66 Q70 65 68 66Z" fill="rgba(0,0,0,0.1)" />

        {/* Moustache */}
        <path d="M60 80 Q65 82 70 81 Q75 82 80 80" stroke="#111827" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Smile */}
        <path d="M62 86 Q70 92 78 86" stroke="#8C4F20" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </g>
    </svg>
  );
}

/* ── MEERA — Mature woman manufacturer, darker skin, purple salwar, bun ── */
export function PersonManufacturer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 130 215" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="mfg-body" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#5B21B6" />
        </linearGradient>
        <linearGradient id="mfg-screen" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="mfg-dupatta" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A855F7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="65" cy="211" rx="28" ry="4" fill="rgba(168,85,247,0.2)" />

      {/* Salwar (trousers) */}
      <path d="M44 158 Q41 190 48 210 H60 Q61 184 65 168 Q69 184 70 210 H82 Q89 190 86 158 Z" fill="#5B21B6" opacity="0.9" />

      {/* Kurta body */}
      <path d="M32 108 Q34 90 65 88 Q96 90 98 108 L100 162 H30 Z" fill="url(#mfg-body)" />
      {/* Kurta neckline — round */}
      <ellipse cx="65" cy="90" rx="10" ry="7" fill="rgba(255,255,255,0.12)" />
      {/* Center button line */}
      <line x1="65" y1="96" x2="65" y2="140" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3,3" />
      {/* Kurta hem detail — embroidery hint */}
      <path d="M30 158 Q65 165 100 158" stroke="rgba(255,215,0,0.35)" strokeWidth="1.5" fill="none" />
      <path d="M30 160 Q65 167 100 160" stroke="rgba(255,215,0,0.2)" strokeWidth="1" fill="none" />

      {/* Dupatta draped over left shoulder */}
      <path d="M32 108 Q20 100 18 118 Q16 130 30 138 Q40 142 44 130 L38 115 Z" fill="url(#mfg-dupatta)" />
      <path d="M18 120 Q10 140 22 158 Q30 168 38 158 L32 140 Q22 135 22 122 Z" fill="url(#mfg-dupatta)" opacity="0.7" />

      {/* Right arm — bent at elbow, hand up holding phone */}
      <path d="M98 108 Q112 116 114 132 Q116 146 104 150 L92 148 L90 130 Z" fill="url(#mfg-body)" />

      {/* Phone — held in right hand, angled, screen visible */}
      <g transform="rotate(-12, 100, 138)">
        <rect x="84" y="124" width="26" height="42" rx="5" fill="#0A0E18" stroke="rgba(168,85,247,0.9)" strokeWidth="1.6" />
        <rect x="87" y="127" width="20" height="34" rx="3" fill="#050810" />
        <rect x="87" y="127" width="20" height="34" rx="3" fill="url(#mfg-screen)" />
        {/* Phone notch */}
        <rect x="94" y="127" width="6" height="2" rx="1" fill="#0A0E18" />
        {/* Alert card */}
        <rect x="88" y="130" width="18" height="8" rx="2" fill="rgba(239,68,68,0.18)" stroke="rgba(239,68,68,0.4)" strokeWidth="0.6" />
        <rect x="89.5" y="131.5" width="4" height="4" rx="0.8" fill="rgba(239,68,68,0.7)" />
        <rect x="95" y="132.5" width="9" height="1.2" rx="0.6" fill="rgba(239,68,68,0.5)" />
        <rect x="95" y="135" width="6" height="1" rx="0.5" fill="rgba(239,68,68,0.3)" />
        {/* Inventory progress bars */}
        <rect x="88" y="142" width="16" height="2" rx="1" fill="rgba(168,85,247,0.2)" />
        <rect x="88" y="142" width="5" height="2" rx="1" fill="#a855f7" />
        <rect x="88" y="146" width="16" height="2" rx="1" fill="rgba(168,85,247,0.2)" />
        <rect x="88" y="146" width="2" height="2" rx="1" fill="#ef4444" />
        <rect x="88" y="150" width="16" height="2" rx="1" fill="rgba(168,85,247,0.2)" />
        <rect x="88" y="150" width="10" height="2" rx="1" fill="#a855f7" />
        {/* Pulse dot */}
        <circle cx="108" cy="128" r="4" fill="#ef4444" />
        <circle cx="108" cy="128" r="2.2" fill="white" />
      </g>

      {/* Neck */}
      <rect x="58" y="76" width="14" height="18" rx="7" fill="#B5713A" />

      {/* HEAD — tilted right-downward looking at phone */}
      <g transform="rotate(15, 65, 72)">
        <ellipse cx="65" cy="58" rx="23" ry="26" fill="#B5713A" />

        {/* Hair — pulled back, bun on top */}
        <path d="M43 52 Q43 30 65 28 Q87 30 87 52 Q85 35 65 33 Q45 35 43 52Z" fill="#1C0E04" />
        {/* Bun */}
        <ellipse cx="65" cy="28" rx="12" ry="9" fill="#1C0E04" />
        <ellipse cx="65" cy="26" rx="8" ry="6" fill="#2A1508" />
        {/* Grey streaks in bun */}
        <path d="M58 22 Q60 28 58 34" stroke="rgba(200,200,200,0.4)" strokeWidth="1.5" fill="none" />
        <path d="M72 22 Q70 28 72 34" stroke="rgba(200,200,200,0.3)" strokeWidth="1.2" fill="none" />
        {/* Side hair strands */}
        <path d="M43 54 Q40 60 43 70" stroke="#1C0E04" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        <path d="M87 54 Q90 60 87 70" stroke="#1C0E04" strokeWidth="4.5" strokeLinecap="round" fill="none" />

        {/* Gold earrings — jhumka style */}
        <circle cx="42" cy="64" r="3" fill="#FF9933" />
        <ellipse cx="42" cy="68" rx="2" ry="3" fill="#FF9933" opacity="0.8" />
        <circle cx="88" cy="64" r="3" fill="#FF9933" />
        <ellipse cx="88" cy="68" rx="2" ry="3" fill="#FF9933" opacity="0.8" />

        {/* Bindi */}
        <circle cx="65" cy="48" r="2.5" fill="#FF9933" />
        <circle cx="65" cy="48" r="1.2" fill="#FF6600" />

        {/* Eyes — looking DOWN-RIGHT toward phone */}
        <ellipse cx="54" cy="60" rx="4" ry="4.5" fill="white" />
        <ellipse cx="76" cy="60" rx="4" ry="4.5" fill="white" />
        {/* Pupils shifted down-right */}
        <ellipse cx="55.5" cy="62.5" rx="2.2" ry="2.5" fill="#0D0500" />
        <ellipse cx="77.5" cy="62.5" rx="2.2" ry="2.5" fill="#0D0500" />
        <circle cx="55.8" cy="61.5" r="0.8" fill="white" />
        <circle cx="77.8" cy="61.5" r="0.8" fill="white" />

        {/* Eyelids — half-closed (looking down) */}
        <path d="M50 58 Q54 56 58 58" fill="#B5713A" />
        <path d="M72 58 Q76 56 80 58" fill="#B5713A" />

        {/* Eyebrows — expressive arches */}
        <path d="M49 53 Q54 50.5 59 53" stroke="#1C0E04" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M71 53 Q76 50.5 81 53" stroke="#1C0E04" strokeWidth="1.8" strokeLinecap="round" fill="none" />

        {/* Nose — defined */}
        <path d="M64 68 Q61 73 64 76 Q66 77 68 76 Q71 73 68 68 Q66 67 64 68Z" fill="rgba(0,0,0,0.1)" />

        {/* Smile — warm */}
        <path d="M56 82 Q65 89 74 82" stroke="#7A3A10" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        <path d="M56 82 Q60 84 65 85 Q70 84 74 82" fill="rgba(120,58,16,0.25)" />
      </g>
    </svg>
  );
}
