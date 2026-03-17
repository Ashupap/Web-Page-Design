export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0D2B5E" />
          <stop offset="100%" stopColor="#0D2B5E" />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00BFFF" />
          <stop offset="100%" stopColor="#00F2FF" />
        </linearGradient>
        <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FF9933" />
          <stop offset="100%" stopColor="#FFB347" />
        </linearGradient>
        <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0A1F4E" />
          <stop offset="100%" stopColor="#142860" />
        </linearGradient>
      </defs>
      {/* Left wing - dark navy */}
      <path
        d="M20 30 L100 170 L80 170 L10 50 Z"
        fill="url(#grad4)"
      />
      {/* Right wing - main dark */}
      <path
        d="M100 170 L185 30 L170 30 L100 150 Z"
        fill="url(#grad1)"
      />
      {/* Cyan streak */}
      <path
        d="M45 30 L165 30 L100 150 L88 150 Z"
        fill="url(#grad2)"
        opacity="0.9"
      />
      {/* White thin stripe */}
      <path
        d="M52 30 L168 30 L100 148 L92 148 Z"
        fill="white"
        opacity="0.25"
      />
      {/* Gold accent streak */}
      <path
        d="M58 30 L170 30 L100 146 L96 146 Z"
        fill="url(#grad3)"
        opacity="0.8"
      />
    </svg>
  );
}
