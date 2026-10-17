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
    orange: 'bg-orange-500/10 text-orange-600 border border-orange-500/25 font-bold',
    brand: 'bg-[#FF7900]/15 text-[#E06800] border border-[#FF7900]/30 font-bold',
    green: 'bg-[#65A51C]/15 text-[#4D8014] border border-[#65A51C]/30 font-bold',
    emerald: 'bg-[#65A51C]/15 text-[#4D8014] border border-[#65A51C]/30 font-bold',
    amber: 'bg-amber-500/10 text-amber-700 border border-amber-500/20 font-bold',
    dark: 'bg-[#161616] text-white border border-white/10 font-semibold',
    glass: 'bg-white/20 text-white border border-white/30 backdrop-blur-md shadow-sm',
    // Dificuldades
    facil: 'bg-[#65A51C]/15 text-[#4D8014] border border-[#65A51C]/30 font-bold',
    moderado: 'bg-[#FF7900]/15 text-[#E06800] border border-[#FF7900]/30 font-bold',
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
