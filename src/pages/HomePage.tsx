import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { getCategories } from "../data/categories";
import { getPages, getCategoryPages, getPagePath } from "../data/pages";
import { useLang } from "../i18n/useLang";
import { getUIStrings } from "../i18n/ui";
import { Card, NumberStat, Btn } from "../components/ui";
import type { CategoryKey } from "../data/types";

export const HomePage = () => {
  const lang = useLang();
  const t = getUIStrings(lang);
  const categories = getCategories(lang);
  const pages = getPages(lang);
  const cats: CategoryKey[] = ["comprendre", "deconstruire", "reconnaitre", "mesurer"];

  return (
    <div>
      {/* Hero */}
      <div style={{ textAlign: "center", padding: "80px 0 64px" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "6px 16px",
            borderRadius: "100px",
            background: COLORS.accent + "10",
            color: COLORS.accent,
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.5px",
            marginBottom: "24px",
          }}
        >
          <span>◆</span> {t.analyticGuide}
        </div>
        <h1
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: "56px",
            fontWeight: 800,
            color: COLORS.text,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-2px",
            maxWidth: "750px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {pages.home.title.split(" ")[0]}{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.comprendre}, ${COLORS.deconstruire})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {pages.home.title.split(" ").slice(1).join(" ")}
          </span>
        </h1>
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "19px",
            lineHeight: 1.7,
            maxWidth: "620px",
            margin: "0 auto 40px",
          }}
        >
          {pages.home.subtitle}
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Link to={getPagePath(lang, "definition")} style={{ textDecoration: "none" }}>
            <Btn primary>{t.startReading}</Btn>
          </Link>
          <Link to={getPagePath(lang, "contradiction")} style={{ textDecoration: "none" }}>
            <Btn>{t.exploreMechanisms}</Btn>
          </Link>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          padding: "32px 40px",
          background: COLORS.surface,
          borderRadius: "16px",
          border: `1px solid ${COLORS.border}`,
          marginBottom: "64px",
          boxShadow: `0 2px 8px ${COLORS.shadow}`,
        }}
      >
        <NumberStat number="4" label={t.thematicCategories} color={COLORS.comprendre} />
        <NumberStat number="17" label={t.deepArticles} color={COLORS.deconstruire} />
        <NumberStat number="2000" label={t.yearsAnalyzed} color={COLORS.reconnaitre} />
        <NumberStat number="3" label={t.sourceEssays} color={COLORS.mesurer} />
      </div>

      {/* Category sections */}
      {cats.map((catKey) => {
        const cat = categories[catKey];
        const catPages = getCategoryPages(lang, catKey);
        return (
          <div key={catKey} style={{ marginBottom: "56px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                marginBottom: "8px",
              }}
            >
              <span
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: cat.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "16px",
                  color: cat.color,
                  fontWeight: 700,
                }}
              >
                {cat.icon}
              </span>
              <h2
                style={{
                  fontFamily: "'Inter', -apple-system, sans-serif",
                  fontSize: "28px",
                  color: COLORS.text,
                  margin: 0,
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                }}
              >
                {cat.label}
              </h2>
            </div>
            <p
              style={{
                color: COLORS.textSecondary,
                fontSize: "16px",
                marginBottom: "24px",
                marginLeft: "50px",
              }}
            >
              {cat.description}
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: catPages.length <= 3 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {catPages.map((p) => (
                <Card key={p.key} pageKey={p.key} page={p} />
              ))}
            </div>
          </div>
        );
      })}

      {/* Ressources card */}
      <div style={{ marginBottom: "56px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "8px",
          }}
        >
          <span
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              background: categories.ressources.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: categories.ressources.color,
              fontWeight: 700,
            }}
          >
            {categories.ressources.icon}
          </span>
          <h2
            style={{
              fontFamily: "'Inter', -apple-system, sans-serif",
              fontSize: "28px",
              color: COLORS.text,
              margin: 0,
              fontWeight: 800,
              letterSpacing: "-0.5px",
            }}
          >
            {categories.ressources.label}
          </h2>
        </div>
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "16px",
            marginBottom: "24px",
            marginLeft: "50px",
          }}
        >
          {t.resourcesDesc}
        </p>
        <Card pageKey="ressources" page={pages.ressources} />
      </div>

      {/* FAQ banner */}
      <Link to={getPagePath(lang, "faq")} style={{ textDecoration: "none" }}>
        <div
          style={{
            margin: "32px 0",
            padding: "36px 40px",
            background: `linear-gradient(135deg, ${COLORS.deconstruire}08, ${COLORS.mesurer}08)`,
            border: `1px solid ${COLORS.deconstruire}25`,
            borderRadius: "16px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "24px",
            transition: "all 0.2s",
          }}
        >
          <span
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: COLORS.deconstruire + "15",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
              flexShrink: 0,
            }}
          >
            💬
          </span>
          <div style={{ flex: 1 }}>
            <h3
              style={{
                fontFamily: "'Inter', -apple-system, sans-serif",
                fontSize: "20px",
                fontWeight: 800,
                color: COLORS.text,
                margin: "0 0 6px",
                letterSpacing: "-0.3px",
              }}
            >
              {t.faqBannerTitle}
            </h3>
            <p
              style={{
                color: COLORS.textSecondary,
                fontSize: "15px",
                margin: 0,
                lineHeight: 1.5,
              }}
            >
              {t.faqBannerDesc}
            </p>
          </div>
          <span
            style={{
              color: COLORS.deconstruire,
              fontSize: "14px",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            {t.readMore} →
          </span>
        </div>
      </Link>

      {/* Why this guide */}
      <div
        style={{
          margin: "64px 0",
          padding: "48px",
          background: COLORS.surface,
          border: `1px solid ${COLORS.border}`,
          borderRadius: "16px",
          textAlign: "center",
          boxShadow: `0 2px 8px ${COLORS.shadow}`,
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: "28px",
            fontWeight: 800,
            color: COLORS.text,
            marginBottom: "20px",
            letterSpacing: "-0.5px",
          }}
        >
          {t.whyThisGuide}
        </h2>
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "17px",
            lineHeight: 1.8,
            maxWidth: "640px",
            margin: "0 auto 16px",
          }}
        >
          {t.whyThisGuideP1}
        </p>
        <p
          style={{
            color: COLORS.textMuted,
            fontSize: "15px",
            lineHeight: 1.7,
            maxWidth: "580px",
            margin: "0 auto",
          }}
        >
          {t.whyThisGuideP2}
        </p>
      </div>
    </div>
  );
};
