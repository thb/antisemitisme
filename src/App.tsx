import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { COLORS } from "./data/colors";
import { Nav } from "./components/Nav";

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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

export default function App() {
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/definition" element={<DefinitionPage />} />
          <Route path="/inversion" element={<InversionPage />} />
          <Route path="/quatre-ages" element={<QuatreAgesPage />} />
          <Route path="/contradiction" element={<ContradictionPage />} />
          <Route path="/matrice" element={<MatricePage />} />
          <Route path="/controle" element={<ControlePage />} />
          <Route path="/philosemitisme" element={<PhilosemitismePage />} />
          <Route path="/bouc-emissaire" element={<BoucPage />} />
          <Route path="/obsession" element={<ObsessionPage />} />
          <Route path="/gauche" element={<GauchePage />} />
          <Route path="/sionisme" element={<SionismePage />} />
          <Route path="/memoire" element={<MemoirePage />} />
          <Route path="/sans-juifs" element={<SansJuifsPage />} />
          <Route path="/exil" element={<ExilPage />} />
          <Route path="/violence" element={<ViolencePage />} />
          <Route path="/canari" element={<CanariPage />} />
          <Route path="/exception" element={<ExceptionPage />} />
          <Route path="/ressources" element={<RessourcesPage />} />
          <Route path="/faq" element={<FaqPage />} />
        </Routes>
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
          Ce guide est un outil d'éducation et de compréhension.
          Il ne prétend pas à l'exhaustivité et ne fait ni propagande, ni défense inconditionnelle d'aucun gouvernement.
          Son objectif est de nommer des mécanismes pour mieux les reconnaître.
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
