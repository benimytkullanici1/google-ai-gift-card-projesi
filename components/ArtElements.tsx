import React from 'react';

export const BadgeDecoration: React.FC<{className?: string}> = ({className}) => (
  <svg viewBox="0 0 300 60" className={className} fill="none">
    <path d="M10,30 L40,30" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="45" cy="30" r="2" fill="#D4AF37" />
    <path d="M260,30 L290,30" stroke="#D4AF37" strokeWidth="1" />
    <circle cx="255" cy="30" r="2" fill="#D4AF37" />
    
    <path d="M50,10 H250 V50 H50 Z" stroke="#D4AF37" strokeWidth="1" />
    <path d="M52,12 H248 V48 H52 Z" stroke="#D4AF37" strokeWidth="0.5" opacity="0.6" />
  </svg>
);