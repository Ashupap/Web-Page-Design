export function Logo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <img 
      src="/logo.png" 
      alt="Vextor Logo" 
      className={`${className} neon-logo-glow object-contain`}
    />
  );
}
