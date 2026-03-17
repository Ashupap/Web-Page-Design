/* Professional flat-style character illustrations — transparent backgrounds */

/* ── PRIYA — Professional woman focused on laptop ── */
export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 230" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="pr2-top" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B35" />
          <stop offset="100%" stopColor="#E8500A" />
        </linearGradient>
        <linearGradient id="pr2-lap" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1A2540" />
          <stop offset="100%" stopColor="#0D1528" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="100" cy="224" rx="60" ry="6" fill="rgba(0,0,0,0.12)" />

      {/* ── Crossed legs ── */}
      <path d="M55 168 Q32 172 24 188 Q20 198 38 200 Q58 202 68 186 Q74 176 70 166Z" fill="url(#pr2-top)" />
      <path d="M108 168 Q130 172 140 188 Q144 198 126 200 Q106 202 94 186 Q88 176 92 166Z" fill="url(#pr2-top)" />
      {/* Feet */}
      <ellipse cx="32" cy="200" rx="14" ry="7" fill="#D4896A" />
      <ellipse cx="130" cy="200" rx="14" ry="7" fill="#D4896A" />

      {/* ── Laptop ── */}
      {/* Base */}
      <rect x="30" y="158" width="108" height="14" rx="4" fill="#1A2540" />
      {/* Keyboard row */}
      <rect x="34" y="153" width="100" height="8" rx="2" fill="#243050" />
      {/* Screen */}
      <path d="M36 153 L44 100 L128 100 L122 153Z" fill="url(#pr2-lap)" stroke="rgba(0,200,255,0.3)" strokeWidth="1" />
      <path d="M40 151 L47 103 L125 103 L119 151Z" fill="#060E20" />
      {/* Screen glow content */}
      <rect x="49" y="105" width="68" height="44" fill="rgba(255,107,53,0.04)" />
      {/* Code lines */}
      <rect x="51" y="108" width="30" height="2.5" rx="1.2" fill="rgba(255,107,53,0.5)" />
      <rect x="51" y="113" width="22" height="2.5" rx="1.2" fill="rgba(0,200,255,0.35)" />
      <rect x="55" y="118" width="38" height="2.5" rx="1.2" fill="rgba(255,255,255,0.2)" />
      <rect x="55" y="123" width="28" height="2.5" rx="1.2" fill="rgba(255,255,255,0.15)" />
      <rect x="51" y="128" width="18" height="2.5" rx="1.2" fill="rgba(255,107,53,0.4)" />
      <rect x="51" y="133" width="34" height="2.5" rx="1.2" fill="rgba(0,200,255,0.25)" />
      <rect x="55" y="138" width="24" height="2.5" rx="1.2" fill="rgba(255,255,255,0.15)" />
      {/* Chart in corner */}
      <rect x="97" y="109" width="5" height="20" rx="1.5" fill="rgba(255,107,53,0.4)" />
      <rect x="104" y="115" width="5" height="14" rx="1.5" fill="rgba(255,107,53,0.6)" />
      <rect x="111" y="112" width="5" height="17" rx="1.5" fill="rgba(255,107,53,0.8)" />
      {/* Screen cursor glow */}
      <circle cx="79" cy="152" r="2.5" fill="rgba(0,200,255,0.6)" />

      {/* ── Torso — kurta style ── */}
      <path d="M58 108 Q60 90 100 88 Q140 90 142 108 L144 160 H56Z" fill="url(#pr2-top)" />
      {/* Dupatta/scarf across shoulder */}
      <path d="M142 108 Q158 115 162 130 Q164 145 152 148" stroke="#FFB347" strokeWidth="5" strokeLinecap="round" fill="none" opacity="0.7" />
      {/* Neckline */}
      <path d="M100 88 L93 102 L100 112 L107 102Z" fill="rgba(255,255,255,0.12)" />

      {/* ── Left arm — elbow resting on laptop ── */}
      <path d="M58 108 Q40 118 36 140 Q34 155 48 158 L60 156 L64 136Z" fill="url(#pr2-top)" />
      {/* Right arm */}
      <path d="M142 108 Q160 118 164 140 Q166 155 152 158 L140 156 L136 136Z" fill="url(#pr2-top)" />
      {/* Hands */}
      <ellipse cx="40" cy="162" rx="11" ry="7" fill="#D4896A" />
      <ellipse cx="160" cy="162" rx="11" ry="7" fill="#D4896A" />

      {/* ── Neck ── */}
      <rect x="92" y="76" width="16" height="18" rx="8" fill="#D4896A" />

      {/* ── Head ── */}
      <ellipse cx="100" cy="58" rx="26" ry="27" fill="#D4896A" />

      {/* Hair */}
      <path d="M75 52 Q74 28 100 26 Q126 28 126 52 Q124 32 100 30 Q76 32 75 52Z" fill="#1A0800" />
      {/* Bun / ponytail */}
      <path d="M124 44 Q136 38 138 52 Q140 64 130 68 Q120 72 116 60 Q112 50 120 44Z" fill="#1A0800" />

      {/* Eyes — looking at screen */}
      <ellipse cx="88" cy="58" rx="5" ry="5" fill="white" />
      <ellipse cx="112" cy="58" rx="5" ry="5" fill="white" />
      <ellipse cx="89" cy="61" rx="3" ry="3" fill="#1A0800" />
      <ellipse cx="113" cy="61" rx="3" ry="3" fill="#1A0800" />
      <circle cx="89.8" cy="60" r="1.1" fill="white" />
      <circle cx="113.8" cy="60" r="1.1" fill="white" />

      {/* Eyebrows */}
      <path d="M82 50 Q88 47.5 94 49.5" stroke="#1A0800" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M106 49.5 Q112 47.5 118 50" stroke="#1A0800" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M99 66 Q97 70 99 72 Q101 72 103 70 Q101 70 99 66Z" fill="rgba(0,0,0,0.08)" />

      {/* Smile — focused/slight */}
      <path d="M92 76 Q100 80 108 76" stroke="#B06030" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Small gold earrings */}
      <circle cx="74" cy="62" r="3" fill="#FF9933" />
      <circle cx="126" cy="62" r="3" fill="#FF9933" />
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
