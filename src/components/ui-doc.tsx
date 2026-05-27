import Icon from "@/components/ui/icon";

export const Section = ({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="flex items-baseline gap-4 mb-6">
      <span className="font-sans font-semibold text-xs tracking-[0.2em] uppercase text-amber-600 opacity-80">
        {number}
      </span>
      <div className="flex-1 h-px bg-slate-300" />
    </div>
    <h2 className="font-serif text-3xl font-bold text-slate-900 mb-8 leading-tight">
      {title}
    </h2>
    {children}
  </section>
);

export const Para = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={`font-sans text-base leading-[1.9] text-slate-700 mb-5 ${className}`}>
    {children}
  </p>
);

export const HighlightBox = ({
  icon,
  title,
  text,
}: {
  icon: string;
  title: string;
  text: string;
}) => (
  <div className="flex gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200 mb-4">
    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
      <Icon name={icon} fallback="CircleAlert" size={18} className="text-amber-700" />
    </div>
    <div>
      <p className="font-sans font-semibold text-slate-900 text-sm mb-1">{title}</p>
      <p className="font-sans text-sm text-slate-600 leading-relaxed">{text}</p>
    </div>
  </div>
);

export const StageCard = ({
  num,
  title,
  desc,
}: {
  num: number;
  title: string;
  desc: string;
}) => (
  <div className="relative flex gap-5 pb-8">
    <div className="flex flex-col items-center">
      <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 z-10">
        <span className="text-white font-sans font-semibold text-sm">{num}</span>
      </div>
      <div className="w-px flex-1 bg-slate-200 mt-2" />
    </div>
    <div className="pt-1 pb-2">
      <p className="font-sans font-semibold text-slate-900 text-sm mb-1">{title}</p>
      <p className="font-sans text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const RecommendCard = ({
  icon,
  text,
}: {
  icon: string;
  text: string;
}) => (
  <div className="flex items-start gap-3 p-4 rounded-xl border border-amber-200 bg-amber-50">
    <Icon name={icon} fallback="CircleAlert" size={16} className="text-amber-700 mt-0.5 flex-shrink-0" />
    <p className="font-sans text-sm text-slate-700 leading-relaxed">{text}</p>
  </div>
);

export const Divider = () => (
  <div className="flex items-center gap-6 my-16">
    <div className="flex-1 h-px bg-slate-200" />
    <div className="w-2 h-2 rounded-full bg-amber-500" />
    <div className="flex-1 h-px bg-slate-200" />
  </div>
);
