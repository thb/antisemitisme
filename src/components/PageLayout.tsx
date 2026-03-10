import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { getCategories } from "../data/categories";
import { getNavigation, getPagePath } from "../data/pages";
import { useLang } from "../i18n/useLang";
import { getUIStrings } from "../i18n/ui";
import type { CategoryKey, PageKey, PageWithKey } from "../data/types";
import { Tag } from "./ui";

const PrevNextCard = ({
  direction,
  page,
  color,
}: {
  direction: "prev" | "next";
  page: PageWithKey;
  color?: string;
}) => {
  const lang = useLang();
  const t = getUIStrings(lang);
  const [h, setH] = useState(false);
  const isPrev = direction === "prev";
  return (
    <Link
      to={getPagePath(lang, page.key)}
      style={{ flex: 1, textDecoration: "none" }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div
        style={{
          background: h ? (color || COLORS.accent) + "08" : COLORS.surface,
          border: `1px solid ${h ? (color || COLORS.accent) + "30" : COLORS.border}`,
          borderRadius: "12px",
          padding: "20px 24px",
          cursor: "pointer",
          transition: "all 0.2s",
          textAlign: isPrev ? "left" : "right",
        }}
      >
        <div
          style={{
            fontSize: "12px",
            color: COLORS.textMuted,
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            marginBottom: "6px",
          }}
        >
          {isPrev ? t.previous : t.next}
        </div>
        <div style={{ color: color || COLORS.accent, fontSize: "15px", fontWeight: 700 }}>
          {page.title}
        </div>
      </div>
    </Link>
  );
};

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  category?: CategoryKey;
  pageKey?: PageKey;
  children: React.ReactNode;
}

export const PageLayout = ({ title, subtitle, category, children, pageKey }: PageLayoutProps) => {
  const lang = useLang();
  const categories = getCategories(lang);
  const cat = category ? categories[category] : null;
  const nav = pageKey ? getNavigation(lang, pageKey) : { prev: null, next: null };

  return (
    <div style={{ paddingTop: "48px", paddingBottom: "60px" }}>
      {cat && category && (
        <div style={{ marginBottom: "16px" }}>
          <Tag category={category} />
        </div>
      )}
      <h1
        style={{
          fontFamily: "'Inter', -apple-system, sans-serif",
          fontSize: "42px",
          color: COLORS.text,
          fontWeight: 800,
          marginBottom: subtitle ? "12px" : "32px",
          lineHeight: 1.15,
          letterSpacing: "-1px",
        }}
      >
        {title}
      </h1>
      {subtitle && (
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "19px",
            marginBottom: "40px",
            lineHeight: 1.6,
            maxWidth: "700px",
          }}
        >
          {subtitle}
        </p>
      )}
      {children}
      {(nav.prev || nav.next) && (
        <div
          style={{
            display: "flex",
            gap: "16px",
            marginTop: "64px",
            paddingTop: "32px",
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          {nav.prev ? (
            <PrevNextCard direction="prev" page={nav.prev} color={cat?.color} />
          ) : (
            <div style={{ flex: 1 }} />
          )}
          {nav.next ? (
            <PrevNextCard direction="next" page={nav.next} color={cat?.color} />
          ) : (
            <div style={{ flex: 1 }} />
          )}
        </div>
      )}
    </div>
  );
};
