import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  target,
  rel,
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none min-h-[48px]";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3.5 text-sm",
    lg: "px-8 py-4 text-base shadow-md",
  };

  const variantStyles = {
    primary: "bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-700/30 focus:ring-emerald-600 hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-slate-900 hover:bg-slate-800 text-white shadow-md shadow-slate-950/20 focus:ring-slate-900 hover:-translate-y-0.5",
    accent: "bg-amber-400 hover:bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/25 focus:ring-amber-500 hover:-translate-y-0.5",
    outline: "bg-white/90 hover:bg-white text-slate-900 border border-slate-300 hover:border-slate-400 backdrop-blur-sm shadow-sm focus:ring-slate-400 hover:-translate-y-0.5",
    outlineDark: "bg-slate-900/40 hover:bg-slate-900/80 text-white border border-white/20 hover:border-white/40 backdrop-blur-sm focus:ring-white/30",
    whatsapp: "bg-emerald-700 hover:bg-emerald-800 text-white shadow-lg shadow-emerald-700/30 focus:ring-emerald-500 hover:-translate-y-0.5 font-bold",
    glass: "bg-white/20 hover:bg-white/30 text-white border border-white/30 backdrop-blur-md shadow-glass hover:shadow-glass-hover focus:ring-white/50",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5 mr-2 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5 ml-2 shrink-0" />}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedStyles}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={combinedStyles}
      {...props}
    >
      {content}
    </button>
  );
}
