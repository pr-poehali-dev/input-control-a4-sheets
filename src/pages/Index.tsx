import { Divider } from "@/components/ui-doc";
import SectionDefinition from "@/components/SectionDefinition";
import SectionTextiles from "@/components/SectionTextiles";
import SectionConclusion from "@/components/SectionConclusion";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f8f7f4", fontFamily: "'IBM Plex Sans', sans-serif" }}>
      {/* Шапка */}
      <header style={{ backgroundColor: "#0f1f3d" }} className="text-white">
        <div className="max-w-4xl mx-auto px-8 py-12">
          <div className="flex items-center gap-3 mb-8" style={{ opacity: 0.6 }}>
            <div className="w-8 h-px" style={{ backgroundColor: "#f59e0b" }} />
            <span className="font-sans text-xs tracking-[0.3em] uppercase" style={{ color: "#fbbf24" }}>
              Дипломная работа · 2026
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4 max-w-2xl"
            style={{ fontFamily: "'IBM Plex Serif', serif" }}
          >
            Входной контроль материалов и комплектующих на производстве
          </h1>
          <p className="font-sans font-light text-blue-100 text-lg max-w-xl leading-relaxed">
            Анализ теоретических основ, практических методов и рекомендаций по
            организации системы входного контроля
          </p>
          <div className="mt-10 flex flex-wrap gap-6 text-xs font-sans" style={{ opacity: 0.55 }}>
            <span>Раздел I — Определение и теоретические основы</span>
            <span style={{ color: "#fbbf24" }}>·</span>
            <span>Раздел II — Особенности контроля промышленных тканей</span>
            <span style={{ color: "#fbbf24" }}>·</span>
            <span>Раздел III — Выводы и рекомендации</span>
          </div>
        </div>
      </header>

      {/* Основной контент */}
      <main className="max-w-4xl mx-auto px-8 py-16">
        <SectionDefinition />
        <Divider />
        <SectionTextiles />
        <Divider />
        <SectionConclusion />
      </main>

      {/* Подвал */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="max-w-4xl mx-auto px-8 py-6 flex items-center justify-between">
          <p className="font-sans text-xs text-slate-400">
            Входной контроль материалов и комплектующих на производстве
          </p>
          <p className="font-sans text-xs text-slate-400">2026</p>
        </div>
      </footer>
    </div>
  );
}
