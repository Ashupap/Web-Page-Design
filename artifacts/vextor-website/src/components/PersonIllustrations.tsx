/* Inline SVG person illustrations — zero network cost */

export function PersonRetailer({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow */}
      <ellipse cx="60" cy="196" rx="32" ry="4" fill="rgba(0,242,255,0.15)" />

      {/* Body / blazer */}
      <path
        d="M28 130 Q30 110 60 108 Q90 110 92 130 L96 185 H24 Z"
        fill="url(#retailerBodyGrad)"
      />
      {/* Blazer lapels */}
      <path d="M60 108 L50 125 L60 140 L70 125 Z" fill="rgba(255,153,51,0.25)" />
      <path d="M55 108 L44 128" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <path d="M65 108 L76 128" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />

      {/* Neck */}
      <rect x="53" y="90" width="14" height="22" rx="7" fill="#FBBF7B" />

      {/* Head */}
      <ellipse cx="60" cy="72" rx="24" ry="27" fill="#FBBF7B" />

      {/* Hair — ponytail */}
      <path d="M37 62 Q36 48 60 46 Q84 48 83 62 Q84 50 80 46 Q60 35 40 46 Z" fill="#3D2B1F" />
      <path d="M80 58 Q88 65 85 78 Q82 68 78 64 Z" fill="#3D2B1F" />

      {/* Eyes */}
      <ellipse cx="51" cy="72" rx="3.5" ry="4" fill="white" />
      <ellipse cx="69" cy="72" rx="3.5" ry="4" fill="white" />
      <ellipse cx="51" cy="73" rx="2" ry="2.5" fill="#2D1B00" />
      <ellipse cx="69" cy="73" rx="2" ry="2.5" fill="#2D1B00" />
      <circle cx="52" cy="72" r="0.7" fill="white" />
      <circle cx="70" cy="72" r="0.7" fill="white" />

      {/* Eyebrows */}
      <path d="M47 67 Q51 65 55 67" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M65 67 Q69 65 73 67" stroke="#3D2B1F" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M59 77 Q57 82 59 84 Q61 84 63 82 Q61 82 59 77Z" fill="rgba(0,0,0,0.1)" />

      {/* Smile */}
      <path d="M53 88 Q60 93 67 88" stroke="#C17A40" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Left arm holding phone */}
      <path
        d="M28 130 Q18 140 20 158 Q22 165 30 162 Q35 160 38 150 L40 138 Z"
        fill="url(#retailerBodyGrad)"
      />
      {/* Right arm */}
      <path
        d="M92 130 Q102 140 100 158 Q98 165 90 162 Q85 160 82 150 L80 138 Z"
        fill="url(#retailerBodyGrad)"
      />

      {/* Phone in right hand */}
      <rect x="82" y="142" width="22" height="36" rx="4" fill="#0D1B2E" stroke="rgba(0,242,255,0.6)" strokeWidth="1.2" />
      <rect x="84" y="145" width="18" height="28" rx="2" fill="#061525" />
      {/* Phone screen glow */}
      <rect x="84" y="145" width="18" height="28" rx="2" fill="url(#screenGradRetailer)" opacity="0.8" />
      {/* Mini chart on screen */}
      <rect x="86" y="150" width="2" height="8" rx="1" fill="rgba(255,153,51,0.6)" />
      <rect x="89" y="147" width="2" height="11" rx="1" fill="rgba(255,153,51,0.8)" />
      <rect x="92" y="149" width="2" height="9" rx="1" fill="rgba(255,153,51,0.6)" />
      <rect x="95" y="145" width="2" height="13" rx="1" fill="#FF9933" />
      <rect x="98" y="148" width="2" height="10" rx="1" fill="rgba(255,153,51,0.7)" />
      {/* Notification dot */}
      <circle cx="100" cy="144" r="3" fill="#00F2FF" />

      <defs>
        <linearGradient id="retailerBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#CC7700" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="screenGradRetailer" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FF9933" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#FF9933" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PersonDistributor({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow */}
      <ellipse cx="60" cy="196" rx="36" ry="4.5" fill="rgba(0,242,255,0.2)" />

      {/* Body / suit */}
      <path
        d="M24 132 Q26 110 60 107 Q94 110 96 132 L100 188 H20 Z"
        fill="url(#distBodyGrad)"
      />
      {/* Suit lapels */}
      <path d="M60 107 L48 126 L60 145 L72 126 Z" fill="rgba(0,242,255,0.15)" />
      <path d="M56 107 L43 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
      <path d="M64 107 L77 130" stroke="rgba(255,255,255,0.15)" strokeWidth="1.2" />
      {/* Tie */}
      <path d="M60 107 L57 120 L60 132 L63 120 Z" fill="rgba(0,242,255,0.5)" />

      {/* Neck */}
      <rect x="53" y="88" width="14" height="23" rx="7" fill="#D4956A" />

      {/* Head */}
      <ellipse cx="60" cy="70" rx="25" ry="28" fill="#D4956A" />

      {/* Hair */}
      <path d="M36 60 Q37 42 60 40 Q83 42 84 60 Q82 46 60 44 Q38 46 36 60Z" fill="#1A1A2E" />
      <path d="M36 62 Q35 56 37 52 Q36 58 38 64Z" fill="#1A1A2E" />
      <path d="M84 62 Q85 56 83 52 Q84 58 82 64Z" fill="#1A1A2E" />

      {/* Eyes */}
      <ellipse cx="50" cy="70" rx="4" ry="4.5" fill="white" />
      <ellipse cx="70" cy="70" rx="4" ry="4.5" fill="white" />
      <ellipse cx="50" cy="71" rx="2.2" ry="2.8" fill="#1A1A2E" />
      <ellipse cx="70" cy="71" rx="2.2" ry="2.8" fill="#1A1A2E" />
      <circle cx="51" cy="70" r="0.8" fill="white" />
      <circle cx="71" cy="70" r="0.8" fill="white" />

      {/* Eyebrows */}
      <path d="M45 63 Q50 61 55 63" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M65 63 Q70 61 75 63" stroke="#1A1A2E" strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <ellipse cx="60" cy="78" rx="3" ry="2" fill="rgba(0,0,0,0.08)" />

      {/* Confident smile */}
      <path d="M52 87 Q60 94 68 87" stroke="#A0623A" strokeWidth="1.8" strokeLinecap="round" fill="none" />

      {/* Left arm — raised, holding phone */}
      <path
        d="M24 132 Q12 128 10 145 Q9 158 20 162 Q28 164 34 152 L38 138 Z"
        fill="url(#distBodyGrad)"
      />
      {/* Right arm */}
      <path
        d="M96 132 Q108 135 108 150 Q108 162 98 163 Q90 164 86 155 L82 140 Z"
        fill="url(#distBodyGrad)"
      />

      {/* Phone in left hand */}
      <rect x="8" y="138" width="24" height="40" rx="4.5" fill="#0A1628" stroke="rgba(0,242,255,0.8)" strokeWidth="1.5" />
      <rect x="10.5" y="141" width="19" height="32" rx="2.5" fill="#05101E" />
      {/* Screen content */}
      <rect x="10.5" y="141" width="19" height="32" rx="2.5" fill="url(#screenGradDist)" opacity="0.9" />
      {/* Dashboard bars */}
      <rect x="12" y="155" width="3" height="10" rx="1" fill="rgba(0,242,255,0.4)" />
      <rect x="16" y="150" width="3" height="15" rx="1" fill="rgba(0,242,255,0.6)" />
      <rect x="20" y="153" width="3" height="12" rx="1" fill="#00F2FF" />
      <rect x="24" y="157" width="3" height="8" rx="1" fill="rgba(0,242,255,0.5)" />
      {/* Revenue text hint */}
      <rect x="12" y="144" width="8" height="2" rx="1" fill="rgba(0,242,255,0.3)" />
      <rect x="12" y="148" width="5" height="1.5" rx="0.75" fill="rgba(0,242,255,0.2)" />
      {/* Notification pulse */}
      <circle cx="30" cy="140" r="3.5" fill="#FF9933" />
      <circle cx="30" cy="140" r="2" fill="white" />

      <defs>
        <linearGradient id="distBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0D2040" />
        </linearGradient>
        <linearGradient id="screenGradDist" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#00F2FF" stopOpacity="0.07" />
          <stop offset="100%" stopColor="#00F2FF" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function PersonManufacturer({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shadow */}
      <ellipse cx="60" cy="196" rx="30" ry="4" fill="rgba(168,85,247,0.15)" />

      {/* Body / kurta top */}
      <path
        d="M30 128 Q32 108 60 106 Q88 108 90 128 L93 185 H27 Z"
        fill="url(#mfgBodyGrad)"
      />
      {/* Kurta neckline detail */}
      <path d="M60 106 L55 116 L60 122 L65 116 Z" fill="rgba(255,255,255,0.15)" />
      <path d="M57 106 L57 130" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />

      {/* Neck */}
      <rect x="54" y="90" width="12" height="20" rx="6" fill="#E8A878" />

      {/* Head */}
      <ellipse cx="60" cy="72" rx="22" ry="25" fill="#E8A878" />

      {/* Hair — bun style */}
      <path d="M39 66 Q40 46 60 44 Q80 46 81 66 Q80 50 60 47 Q40 50 39 66Z" fill="#2C1A0E" />
      {/* Bun */}
      <ellipse cx="60" cy="44" rx="10" ry="8" fill="#2C1A0E" />
      <ellipse cx="60" cy="42" rx="7" ry="5" fill="#3D2410" />
      {/* Side strands */}
      <path d="M39 66 Q37 72 40 80" stroke="#2C1A0E" strokeWidth="4" strokeLinecap="round" fill="none" />
      <path d="M81 66 Q83 72 80 80" stroke="#2C1A0E" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* Earring */}
      <circle cx="38" cy="74" r="2.5" fill="#FF9933" opacity="0.9" />
      <circle cx="82" cy="74" r="2.5" fill="#FF9933" opacity="0.9" />

      {/* Eyes */}
      <ellipse cx="52" cy="72" rx="3.5" ry="4" fill="white" />
      <ellipse cx="68" cy="72" rx="3.5" ry="4" fill="white" />
      <ellipse cx="52" cy="73" rx="2" ry="2.5" fill="#1A0A00" />
      <ellipse cx="68" cy="73" rx="2" ry="2.5" fill="#1A0A00" />
      <circle cx="53" cy="72" r="0.7" fill="white" />
      <circle cx="69" cy="72" r="0.7" fill="white" />

      {/* Eyebrows — expressive */}
      <path d="M48 66 Q52 64 56 66" stroke="#2C1A0E" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M64 66 Q68 64 72 66" stroke="#2C1A0E" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Bindi */}
      <circle cx="60" cy="61" r="2" fill="#FF9933" />

      {/* Nose */}
      <path d="M59 78 Q57 82 59 84 Q61 84 63 82 Q61 82 59 78Z" fill="rgba(0,0,0,0.08)" />

      {/* Smile */}
      <path d="M54 87 Q60 92 66 87" stroke="#B06535" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Left arm */}
      <path
        d="M30 128 Q20 138 22 154 Q24 162 33 160 Q40 158 42 146 L44 134 Z"
        fill="url(#mfgBodyGrad)"
      />
      {/* Right arm — holding phone */}
      <path
        d="M90 128 Q100 138 98 154 Q96 162 88 160 Q80 158 78 148 L76 134 Z"
        fill="url(#mfgBodyGrad)"
      />

      {/* Phone in right hand */}
      <rect x="78" y="144" width="21" height="34" rx="4" fill="#0D1628" stroke="rgba(168,85,247,0.7)" strokeWidth="1.3" />
      <rect x="80" y="147" width="17" height="27" rx="2" fill="#060E1A" />
      {/* Screen glow */}
      <rect x="80" y="147" width="17" height="27" rx="2" fill="url(#screenGradMfg)" opacity="0.9" />
      {/* Alert notification */}
      <rect x="81" y="149" width="15" height="6" rx="2" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.3)" strokeWidth="0.5" />
      <rect x="82.5" y="150.5" width="3" height="3" rx="0.5" fill="rgba(239,68,68,0.6)" />
      <rect x="87" y="151" width="7" height="1" rx="0.5" fill="rgba(239,68,68,0.4)" />
      <rect x="87" y="153" width="5" height="1" rx="0.5" fill="rgba(239,68,68,0.25)" />
      {/* Inventory bars */}
      <rect x="81" y="159" width="13" height="1.5" rx="0.75" fill="rgba(168,85,247,0.25)" />
      <rect x="81" y="159" width="4" height="1.5" rx="0.75" fill="#a855f7" />
      <rect x="81" y="163" width="13" height="1.5" rx="0.75" fill="rgba(168,85,247,0.25)" />
      <rect x="81" y="163" width="2" height="1.5" rx="0.75" fill="#ef4444" />
      {/* Pulse dot */}
      <circle cx="97" cy="146" r="3" fill="#ef4444" />

      <defs>
        <linearGradient id="mfgBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6B21A8" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#4C1D95" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="screenGradMfg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.02" />
        </linearGradient>
      </defs>
    </svg>
  );
}
