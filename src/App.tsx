import { Routes, Route, Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { COLORS } from "./data/colors";
import { Nav } from "./components/Nav";
import { useLang } from "./i18n/useLang";
import { getUIStrings } from "./i18n/ui";
import { getPages } from "./data/pages";
import type { PageKey } from "./data/types";
import { LANGS } from "./data/types";

import { HomePage } from "./pages/HomePage";
import { DefinitionPage } from "./pages/DefinitionPage";
import { InversionPage } from "./pages/InversionPage";
import { QuatreAgesPage } from "./pages/QuatreAgesPage";
import { ContradictionPage } from "./pages/ContradictionPage";
import { MatricePage } from "./pages/MatricePage";
import { ControlePage } from "./pages/ControlePage";
import { PhilosemitismePage } from "./pages/PhilosemitismePage";
import { BoucPage } from "./pages/BoucPage";
import { ObsessionPage } from "./pages/ObsessionPage";
import { GauchePage } from "./pages/GauchePage";
import { SionismePage } from "./pages/SionismePage";
import { MemoirePage } from "./pages/MemoirePage";
import { SansJuifsPage } from "./pages/SansJuifsPage";
import { ExilPage } from "./pages/ExilPage";
import { ViolencePage } from "./pages/ViolencePage";
import { CanariPage } from "./pages/CanariPage";
import { ExceptionPage } from "./pages/ExceptionPage";
import { RessourcesPage } from "./pages/RessourcesPage";
import { FaqPage } from "./pages/FaqPage";

const PAGE_COMPONENTS: Record<PageKey, React.ComponentType> = {
  home: HomePage,
  definition: DefinitionPage,
  inversion: InversionPage,
  quatre_ages: QuatreAgesPage,
  contradiction: ContradictionPage,
  matrice: MatricePage,
  controle: ControlePage,
  philosemitisme: PhilosemitismePage,
  bouc: BoucPage,
  obsession: ObsessionPage,
  gauche: GauchePage,
  sionisme: SionismePage,
  memoire: MemoirePage,
  sans_juifs: SansJuifsPage,
  exil: ExilPage,
  violence: ViolencePage,
  canari: CanariPage,
  exception: ExceptionPage,
  ressources: RessourcesPage,
  faq: FaqPage,
};

// Collect all unique slug → component mappings across both languages
function buildRoutes(): { path: string; Component: React.ComponentType }[] {
  const seen = new Set<string>();
  const routes: { path: string; Component: React.ComponentType }[] = [];

  for (const lang of LANGS) {
    const pages = getPages(lang);
    for (const [key, page] of Object.entries(pages) as [PageKey, { path: string }][]) {
      if (key === "home") continue; // handled by index route
      const slug = page.path.slice(1); // remove leading /
      if (!seen.has(slug)) {
        seen.add(slug);
        routes.push({ path: slug, Component: PAGE_COMPONENTS[key] });
      }
    }
  }
  return routes;
}

const ALL_ROUTES = buildRoutes();

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function LangLayout() {
  const lang = useLang();
  const t = getUIStrings(lang);

  return (
    <div
      style={{
        background: COLORS.bg,
        minHeight: "100vh",
        color: COLORS.text,
        fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${COLORS.bg}; }
        ::selection { background: ${COLORS.accent}25; color: ${COLORS.text}; }
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
        ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: ${COLORS.textMuted}; }
        @media (max-width: 768px) {
          h1 { font-size: 32px !important; }
        }
      `}</style>

      <ScrollToTop />
      <Nav />

      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <Outlet />
      </div>

      <footer
        style={{
          borderTop: `1px solid ${COLORS.border}`,
          padding: "40px 32px",
          textAlign: "center",
          background: COLORS.surface,
        }}
      >
        <p
          style={{
            color: COLORS.textMuted,
            fontSize: "14px",
            lineHeight: 1.7,
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          {t.footer}
        </p>
        <div
          style={{
            marginTop: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "5px",
              background: `linear-gradient(135deg, ${COLORS.comprendre}, ${COLORS.deconstruire})`,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "10px",
              fontWeight: 800,
            }}
          >
            א
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 700,
              color: COLORS.textMuted,
            }}
          >
            antisemitisme.guide
          </span>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/fr" replace />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<HomePage />} />
        {ALL_ROUTES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  );
}
