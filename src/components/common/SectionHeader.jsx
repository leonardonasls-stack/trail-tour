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
          <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
            badgeVariant === 'emerald'
              ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/20'
              : badgeVariant === 'amber'
              ? 'bg-amber-500/10 text-amber-600 border border-amber-500/20'
              : 'bg-slate-200/60 text-slate-700 border border-slate-300'
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
          <span className="text-emerald-600 block sm:inline">
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
