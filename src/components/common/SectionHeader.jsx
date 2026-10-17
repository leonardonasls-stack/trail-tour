import React from 'react';

export default function SectionHeader({
  badge,
  badgeVariant = 'emerald',
  title,
  titleHighlight,
  description,
  align = 'center',
  className = '',
  light = false
}) {
  const alignStyles = {
    center: 'text-center mx-auto',
    left: 'text-left mr-auto',
  };

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignStyles[align]} ${className}`}>
      {badge && (
        <div className="mb-3">
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-widest ${
            badgeVariant === 'orange' || badgeVariant === 'brand'
              ? 'bg-[#FF7900] text-white shadow-sm'
              : badgeVariant === 'green' || badgeVariant === 'emerald'
              ? 'bg-[#65A51C] text-white shadow-sm'
              : badgeVariant === 'amber'
              ? 'bg-amber-500 text-slate-950'
              : 'bg-[#161616] text-white border border-white/10'
          }`}>
            {badge}
          </span>
        </div>
      )}
      
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}{' '}
        {titleHighlight && (
          <span className="text-[#FF7900] block sm:inline">
            {titleHighlight}
          </span>
        )}
      </h2>

      {description && (
        <p className={`mt-4 text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-300' : 'text-slate-600'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
