export const PlanetIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.93 19.07a10 10 0 0 1 14.14 0" strokeDasharray="4 4" />
    <path d="M2 12h20" className="opacity-50" />
  </svg>
);

export const UfoIcon = ({ className }: { className: string }) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M32 10c-10 0-18 8-18 18h36c0-10-8-18-18-18z" />
    <ellipse cx="32" cy="28" rx="28" ry="8" />
    <path d="M14 32l-4 12h44l-4-12" />
    <circle cx="20" cy="38" r="2" fill="currentColor" />
    <circle cx="32" cy="38" r="2" fill="currentColor" />
    <circle cx="44" cy="38" r="2" fill="currentColor" />
  </svg>
);