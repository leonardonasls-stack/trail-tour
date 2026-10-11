import React from 'react';

export default function GlassCard({
  children,
  variant = 'light',
  className = '',
  hoverEffect = true,
  ...props
}) {
  const variantStyles = {
    light: 'glass-card text-slate-800',
    dark: 'glass-card-dark text-white',
    subtle: 'bg-white/60 backdrop-blur-md border border-white/40 shadow-sm text-slate-800',
    borderGlow: 'bg-slate-900/80 backdrop-blur-md border border-amber-500/30 shadow-glass-dark text-white',
  };

  const hoverClasses = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-glass-hover transition-all duration-300'
    : 'transition-all duration-300';

  return (
    <div
      className={`rounded-2xl overflow-hidden ${variantStyles[variant] || variantStyles.light} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
