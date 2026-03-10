import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { CATEGORIES } from "../data/categories";
import { PAGES, getPagePath } from "../data/pages";
import type { CategoryKey, PageKey } from "../data/types";

export const Tag = ({ category, small }: { category: CategoryKey; small?: boolean }) => {
  const cat = CATEGORIES[category];
  if (!cat) return null;
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      padding: small ? "2px 8px" : "4px 12px", borderRadius: "6px",
      background: cat.bg, color: cat.color,
      fontSize: small ? "11px" : "12px", fontWeight: 700,
      letterSpacing: "0.5px", textTransform: "uppercase",
      border: `1px solid ${cat.color}20`,
    }}>
      <span style={{ fontSize: small ? "8px" : "10px" }}>{cat.icon}</span>
      {cat.label}
    </span>
  );
};

export const Card = ({ pageKey, page }: { pageKey: PageKey; page: { title: string; subtitle?: string; category: string | null } }) => {
  const [hovered, setHovered] = useState(false);
  const cat = page.category ? CATEGORIES[page.category as CategoryKey] : null;
  return (
    <Link to={getPagePath(pageKey)} style={{ textDecoration: "none" }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? (cat?.color || COLORS.accent) + "40" : COLORS.border}`,
        borderRadius: "12px", padding: "28px", cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered ? `0 12px 32px ${COLORS.shadow}, 0 0 0 1px ${(cat?.color || COLORS.accent)}15` : `0 1px 3px ${COLORS.shadow}`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "3px",
          background: cat?.color || COLORS.accent,
          opacity: hovered ? 1 : 0.4, transition: "opacity 0.3s",
        }} />
        {cat && page.category && <Tag category={page.category as CategoryKey} small />}
        <h3 style={{
          fontFamily: "'Inter', -apple-system, sans-serif", fontSize: "18px",
          color: COLORS.text, margin: cat ? "14px 0 8px" : "0 0 8px",
          fontWeight: 700, lineHeight: 1.3,
        }}>{page.title}</h3>
        {page.subtitle && (
          <p style={{ color: COLORS.textSecondary, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{page.subtitle}</p>
        )}
        <div style={{
          marginTop: "16px", color: cat?.color || COLORS.accent,
          fontSize: "13px", fontWeight: 700, letterSpacing: "0.3px",
          display: "flex", alignItems: "center", gap: "4px", transition: "gap 0.2s",
        }}>
          Lire{" "}
          <span style={{ transition: "transform 0.2s", display: "inline-block", transform: hovered ? "translateX(3px)" : "none" }}>→</span>
        </div>
      </div>
    </Link>
  );
};

export const Quote = ({ text, author, source, color }: { text: string; author?: string; source?: string; color?: string }) => (
  <div style={{
    borderLeft: `4px solid ${color || COLORS.accent}`, padding: "20px 28px",
    margin: "32px 0", background: (color || COLORS.accent) + "08", borderRadius: "0 12px 12px 0",
  }}>
    <p style={{
      fontFamily: "'Georgia', serif", fontSize: "17px", fontStyle: "italic",
      color: COLORS.text, lineHeight: 1.8, margin: 0,
    }}>{"\u00AB"} {text} {"\u00BB"}</p>
    {author && (
      <p style={{ color: COLORS.textMuted, fontSize: "13px", marginTop: "12px", marginBottom: 0, fontWeight: 600 }}>
        — {author}
        {source && <span style={{ fontWeight: 400, fontStyle: "italic" }}>, {source}</span>}
      </p>
    )}
  </div>
);

export const KeyPoint = ({ color, title, icon, children }: { color?: string; title?: string; icon?: string; children: React.ReactNode }) => (
  <div style={{
    background: (color || COLORS.accent) + "08",
    border: `1px solid ${(color || COLORS.accent)}18`,
    borderRadius: "12px", padding: "22px 26px", margin: "20px 0",
  }}>
    {title && (
      <h4 style={{
        color: color || COLORS.accent, fontSize: "13px", fontWeight: 800,
        textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px",
        display: "flex", alignItems: "center", gap: "8px",
      }}>
        {icon && <span>{icon}</span>}
        {title}
      </h4>
    )}
    <div style={{ color: COLORS.textSecondary, fontSize: "15px", lineHeight: 1.8 }}>{children}</div>
  </div>
);

export const Pair = ({ left, right, leftTitle, rightTitle, leftColor, rightColor }: {
  left: string; right: string; leftTitle: string; rightTitle: string; leftColor?: string; rightColor?: string;
}) => (
  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
    <div style={{
      background: (leftColor || COLORS.mesurer) + "08",
      border: `1px solid ${(leftColor || COLORS.mesurer)}18`,
      borderRadius: "12px", padding: "22px",
    }}>
      <h4 style={{ color: leftColor || COLORS.mesurer, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px" }}>{leftTitle}</h4>
      <p style={{ color: COLORS.textSecondary, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{left}</p>
    </div>
    <div style={{
      background: (rightColor || COLORS.reconnaitre) + "08",
      border: `1px solid ${(rightColor || COLORS.reconnaitre)}18`,
      borderRadius: "12px", padding: "22px",
    }}>
      <h4 style={{ color: rightColor || COLORS.reconnaitre, fontSize: "12px", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.8px", margin: "0 0 10px" }}>{rightTitle}</h4>
      <p style={{ color: COLORS.textSecondary, fontSize: "14px", lineHeight: 1.7, margin: 0 }}>{right}</p>
    </div>
  </div>
);

export const Section = ({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) => (
  <div id={id} style={{ margin: "48px 0" }}>
    <h2 style={{
      fontFamily: "'Inter', -apple-system, sans-serif", fontSize: "24px",
      color: COLORS.text, fontWeight: 800, marginBottom: "20px", lineHeight: 1.3, letterSpacing: "-0.3px",
    }}>{title}</h2>
    {children}
  </div>
);

export const P = ({ children, bold }: { children: React.ReactNode; bold?: boolean }) => (
  <p style={{
    color: bold ? COLORS.text : COLORS.textSecondary,
    fontSize: "16px", lineHeight: 1.85, marginBottom: "16px",
    fontWeight: bold ? 600 : 400,
  }}>{children}</p>
);

export const CrossLink = ({ pageKey, color }: { pageKey: PageKey; color?: string }) => {
  const page = PAGES[pageKey];
  const [h, setH] = useState(false);
  if (!page) return null;
  const linkColor = color || (page.category ? CATEGORIES[page.category]?.color : undefined) || COLORS.accent;
  return (
    <Link to={getPagePath(pageKey)}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        color: linkColor, fontWeight: 600,
        borderBottom: `1px dashed ${linkColor}50`,
        transition: "all 0.2s", opacity: h ? 0.8 : 1,
        textDecoration: "none",
      }}
    >{page.title}</Link>
  );
};

export const Divider = () => (
  <hr style={{ border: "none", height: "1px", background: COLORS.border, margin: "48px 0" }} />
);

export const NumberStat = ({ number, label, color }: { number: string; label: string; color?: string }) => (
  <div style={{ textAlign: "center" }}>
    <div style={{ fontSize: "36px", fontWeight: 800, color: color || COLORS.accent, lineHeight: 1, marginBottom: "8px" }}>{number}</div>
    <div style={{ fontSize: "13px", color: COLORS.textMuted, lineHeight: 1.4 }}>{label}</div>
  </div>
);

export const Btn = ({ children, onClick, primary }: { children: React.ReactNode; onClick?: () => void; primary?: boolean }) => {
  const [h, setH] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        padding: "13px 28px", borderRadius: "10px", cursor: "pointer",
        fontSize: "15px", fontWeight: 700,
        border: primary ? "none" : `1px solid ${COLORS.border}`,
        background: primary ? (h ? COLORS.accentHover : COLORS.accent) : (h ? COLORS.surfaceHover : COLORS.surface),
        color: primary ? "#FFFFFF" : COLORS.text,
        transition: "all 0.2s",
        boxShadow: primary ? (h ? `0 6px 24px ${COLORS.accent}40` : `0 2px 8px ${COLORS.accent}25`) : "none",
      }}
    >{children}</button>
  );
};
