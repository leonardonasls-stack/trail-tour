import React from 'react';

export default function Badge({
  children,
  variant = 'default',
  size = 'sm',
  className = '',
  icon: Icon
}) {
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-xs',
    lg: 'px-4 py-2 text-sm',
  };

  const variantStyles = {
    default: 'bg-slate-100 text-slate-800 border border-slate-200',
    emerald: 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20 font-bold',
    amber: 'bg-amber-500/10 text-amber-700 border border-amber-500/20 font-bold',
    orange: 'bg-orange-500/10 text-orange-700 border border-orange-500/20 font-bold',
    dark: 'bg-slate-900/80 text-white border border-slate-700/60 font-semibold',
    glass: 'bg-white/20 text-white border border-white/30 backdrop-blur-md shadow-sm',
    // Dificuldades
    facil: 'bg-emerald-500/15 text-emerald-800 border border-emerald-500/30 font-bold',
    moderado: 'bg-amber-500/15 text-amber-800 border border-amber-500/30 font-bold',
    dificil: 'bg-rose-500/15 text-rose-800 border border-rose-500/30 font-bold',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full uppercase tracking-wider select-none ${sizeStyles[size]} ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      <span>{children}</span>
    </span>
  );
}
