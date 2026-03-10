import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../data/colors";
import { getCategories } from "../data/categories";
import { getCategoryPages, getPagePath, getPageKeyFromPath } from "../data/pages";
import { useLang } from "../i18n/useLang";
import type { CategoryKey, PageKey, PageWithKey } from "../data/types";

const NavLink = ({
  children,
  to,
  active,
  color,
}: {
  children: React.ReactNode;
  to: string;
  active: boolean;
  color: string;
}) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        color: active ? color : hovered ? COLORS.text : COLORS.textSecondary,
        background: active ? color + "10" : hovered ? COLORS.surfaceHover : "transparent",
        fontWeight: active ? 700 : 500,
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        fontSize: "14px",
        textDecoration: "none",
      }}
    >
      {children}
    </Link>
  );
};

const Dropdown = ({
  pages,
  catColor,
  currentPageKey,
  lang,
}: {
  pages: PageWithKey[];
  catColor: string;
  currentPageKey: PageKey;
  lang: string;
}) => (
  <div
    style={{
      position: "absolute",
      top: "calc(100% + 4px)",
      left: "-8px",
      background: COLORS.surface,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "12px",
      padding: "8px",
      minWidth: "320px",
      boxShadow: `0 16px 48px ${COLORS.shadowDark}`,
      zIndex: 200,
    }}
  >
    {pages.map((p) => (
      <DropdownItem key={p.key} page={p} active={currentPageKey === p.key} catColor={catColor} lang={lang} />
    ))}
  </div>
);

const DropdownItem = ({
  page,
  active,
  catColor,
  lang,
}: {
  page: PageWithKey;
  active: boolean;
  catColor: string;
  lang: string;
}) => {
  const [h, setH] = useState(false);
  return (
    <Link
      to={getPagePath(lang as any, page.key)}
      style={{ textDecoration: "none", display: "block" }}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
    >
      <div
        style={{
          padding: "12px 16px",
          borderRadius: "8px",
          cursor: "pointer",
          background: active ? catColor + "10" : h ? COLORS.surfaceHover : "transparent",
          transition: "background 0.15s",
          borderLeft: active ? `3px solid ${catColor}` : "3px solid transparent",
        }}
      >
        <div
          style={{
            color: active ? catColor : COLORS.text,
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {page.title}
        </div>
        {page.subtitle && (
          <div
            style={{
              color: COLORS.textMuted,
              fontSize: "12px",
              marginTop: "3px",
              lineHeight: 1.4,
            }}
          >
            {page.subtitle}
          </div>
        )}
      </div>
    </Link>
  );
};

const NAV_CATEGORIES: CategoryKey[] = ["comprendre", "deconstruire", "reconnaitre", "mesurer"];

export const Nav = () => {
  const lang = useLang();
  const [menuOpen, setMenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { pageKey: currentPageKey } = getPageKeyFromPath(location.pathname);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const categories = getCategories(lang);

  const catEntries: [CategoryKey, PageWithKey[]][] = NAV_CATEGORIES.map((catKey) => [
    catKey,
    getCategoryPages(lang, catKey),
  ]);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: scrolled ? "rgba(250,251,252,0.95)" : COLORS.bg,
        backdropFilter: "blur(16px)",
        borderBottom: `1px solid ${scrolled ? COLORS.border : "transparent"}`,
        padding: "0 32px",
        transition: "all 0.3s",
        boxShadow: scrolled ? `0 1px 8px ${COLORS.shadow}` : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          height: "60px",
          gap: "8px",
        }}
      >
        <Link
          to={`/${lang}`}
          style={{
            fontFamily: "'Inter', -apple-system, sans-serif",
            fontSize: "15px",
            fontWeight: 800,
            color: COLORS.text,
            cursor: "pointer",
            whiteSpace: "nowrap",
            marginRight: "32px",
            letterSpacing: "-0.3px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          <span style={{
            fontSize: "15px",
            background: `linear-gradient(135deg, ${COLORS.comprendre}, ${COLORS.deconstruire})`,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>antisemitisme</span>
        </Link>

        <div style={{ display: "flex", gap: "2px", alignItems: "center", fontSize: "14px" }}>
          {catEntries.map(([catKey, pages]) => {
            const cat = categories[catKey];
            const isActive = pages.some((p) => p.key === currentPageKey);
            const firstPage = pages[0];
            return (
              <div
                key={catKey}
                style={{ position: "relative" }}
                onMouseEnter={() => setMenuOpen(catKey)}
                onMouseLeave={() => setMenuOpen(null)}
              >
                <NavLink
                  to={firstPage ? getPagePath(lang, firstPage.key) : `/${lang}`}
                  active={isActive}
                  color={cat.color}
                >
                  {cat.label} {"\u25BE"}
                </NavLink>
                {menuOpen === catKey && (
                  <Dropdown pages={pages} catColor={cat.color} currentPageKey={currentPageKey} lang={lang} />
                )}
              </div>
            );
          })}
          <NavLink to={getPagePath(lang, "ressources")} active={currentPageKey === "ressources"} color={COLORS.ressources}>
            {categories.ressources.label}
          </NavLink>
          <NavLink to={getPagePath(lang, "faq")} active={currentPageKey === "faq"} color={COLORS.deconstruire}>
            FAQ
          </NavLink>
        </div>

        <div style={{ marginLeft: "auto", display: "flex", gap: "4px", alignItems: "center" }}>
          <Link
            to={getPagePath("fr", currentPageKey)}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: lang === "fr" ? 700 : 500,
              color: lang === "fr" ? COLORS.accent : COLORS.textMuted,
              background: lang === "fr" ? COLORS.accent + "10" : "transparent",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            FR
          </Link>
          <Link
            to={getPagePath("en", currentPageKey)}
            style={{
              padding: "4px 8px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: lang === "en" ? 700 : 500,
              color: lang === "en" ? COLORS.accent : COLORS.textMuted,
              background: lang === "en" ? COLORS.accent + "10" : "transparent",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            EN
          </Link>
        </div>
      </div>
    </nav>
  );
};
