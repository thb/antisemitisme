import { useState, useEffect, useRef, useCallback } from "react";

// ============================================================
// DESIGN SYSTEM — Inspired by eventsourcing.dev
// Light theme, vibrant category colors, clean typography
// ============================================================

const COLORS = {
  // Base
  bg: "#FAFBFC",
  bgAlt: "#F1F3F6",
  surface: "#FFFFFF",
  surfaceHover: "#F7F8FA",
  border: "#E2E6EC",
  borderLight: "#EEF0F4",

  // Text
  text: "#1A1D26",
  textSecondary: "#4A5068",
  textMuted: "#7C8298",

  // Category colors — vibrant and distinct
  comprendre: "#4F6BED",    // Indigo blue
  deconstruire: "#E67E22",  // Warm orange
  reconnaitre: "#27AE60",   // Emerald green
  mesurer: "#E74C3C",       // Crimson red
  ressources: "#8E44AD",    // Purple

  // Category backgrounds (light tints)
  comprendreBg: "#EEF1FD",
  deconstruireBg: "#FDF0E4",
  reconnaitreBg: "#E8F8EE",
  mesurerBg: "#FDE8E6",
  ressourcesBg: "#F3EAF8",

  // Accents
  accent: "#4F6BED",
  accentHover: "#3D56D4",
  gold: "#D4A853",
  shadow: "rgba(26, 29, 38, 0.08)",
  shadowDark: "rgba(26, 29, 38, 0.16)",
};

const CATEGORIES = {
  comprendre: {
    label: "Comprendre",
    color: COLORS.comprendre,
    bg: COLORS.comprendreBg,
    icon: "◆",
    description: "La nature et la spécificité de l'antisémitisme",
  },
  deconstruire: {
    label: "Déconstruire",
    color: COLORS.deconstruire,
    bg: COLORS.deconstruireBg,
    icon: "⬡",
    description: "Les mécanismes logiques et psychologiques",
  },
  reconnaitre: {
    label: "Reconnaître",
    color: COLORS.reconnaitre,
    bg: COLORS.reconnaitreBg,
    icon: "◉",
    description: "Les formes contemporaines déguisées",
  },
  mesurer: {
    label: "Mesurer",
    color: COLORS.mesurer,
    bg: COLORS.mesurerBg,
    icon: "▲",
    description: "Les conséquences concrètes",
  },
  ressources: {
    label: "Ressources",
    color: COLORS.ressources,
    bg: COLORS.ressourcesBg,
    icon: "◈",
    description: "Ouvrages, rapports, liens",
  },
};

// ============================================================
// PAGE DEFINITIONS — Narrative structure
// ============================================================

const PAGES = {
  home: { title: "Comprendre l'antisémitisme", category: null },

  // COMPRENDRE
  definition: {
    title: "Définition et spécificité",
    subtitle: "Un système de pensée, pas un simple préjugé",
    category: "comprendre",
    order: 1,
  },
  inversion: {
    title: "L'inversion fondamentale",
    subtitle: "Quand le préjugé attribue une supériorité maléfique",
    category: "comprendre",
    order: 2,
  },
  quatre_ages: {
    title: "Les quatre âges",
    subtitle: "Antique, chrétien, moderne, contemporain — une mutation permanente",
    category: "comprendre",
    order: 3,
  },

  // DÉCONSTRUIRE
  contradiction: {
    title: "L'accusation contradictoire",
    subtitle: "Le double bind systématique — communiste et capitaliste, cosmopolite et communautariste",
    category: "deconstruire",
    order: 1,
  },
  matrice: {
    title: "La matrice conspirationniste",
    subtitle: "L'antisémitisme comme template originel de tous les complots",
    category: "deconstruire",
    order: 2,
  },
  controle: {
    title: "Le fantasme du contrôle",
    subtitle: "Médias, finance, pouvoir — anatomie d'un mythe séculaire",
    category: "deconstruire",
    order: 3,
  },
  philosemitisme: {
    title: "Le philosémitisme toxique",
    subtitle: "Quand l'admiration contient déjà l'accusation",
    category: "deconstruire",
    order: 4,
  },
  bouc: {
    title: "Le bouc émissaire structurel",
    subtitle: "La mécanique girardienne — pourquoi toujours les Juifs ?",
    category: "deconstruire",
    order: 5,
  },

  // RECONNAÎTRE
  obsession: {
    title: "L'obsession sélective",
    subtitle: "Le deux poids, deux mesures appliqué à Israël",
    category: "reconnaitre",
    order: 1,
  },
  gauche: {
    title: "L'antisémitisme de gauche",
    subtitle: "Quand l'antisionisme sert de véhicule au préjugé",
    category: "reconnaitre",
    order: 2,
  },
  sionisme: {
    title: "Le piège du mot sionisme",
    subtitle: "Un mot, trois définitions, une confusion volontaire",
    category: "reconnaitre",
    order: 3,
  },
  memoire: {
    title: "La mémoire retournée",
    subtitle: "Quand le souvenir de la Shoah devient une arme",
    category: "reconnaitre",
    order: 4,
  },
  sans_juifs: {
    title: "L'antisémitisme sans Juifs",
    subtitle: "Un système de pensée autonome qui n'a pas besoin de sa cible",
    category: "reconnaitre",
    order: 5,
  },

  // MESURER
  exil: {
    title: "L'exil intérieur",
    subtitle: "Le passing, l'autocensure, l'exode silencieux",
    category: "mesurer",
    order: 1,
  },
  violence: {
    title: "La violence réelle",
    subtitle: "Halimi, Toulouse, Hyper Cacher — des chiffres et des noms",
    category: "mesurer",
    order: 2,
  },
  canari: {
    title: "Le canari dans la mine",
    subtitle: "L'antisémitisme comme indicateur de santé démocratique",
    category: "mesurer",
    order: 3,
  },
  exception: {
    title: "L'exception géopolitique",
    subtitle: "Le seul État au monde dont l'existence fait débat",
    category: "mesurer",
    order: 4,
  },

  // RESSOURCES
  ressources: {
    title: "Ressources",
    subtitle: "Ouvrages, études, rapports pour aller plus loin",
    category: "ressources",
    order: 1,
  },

  // FAQ — standalone page, no category
  faq: {
    title: "« Je ne suis pas antisémite, mais… »",
    subtitle: "12 phrases courantes déconstruites une par une",
    category: null,
  },
};

// Get pages for a category in order
const getCategoryPages = (cat) =>
  Object.entries(PAGES)
    .filter(([, p]) => p.category === cat)
    .sort((a, b) => (a[1].order || 0) - (b[1].order || 0))
    .map(([key, page]) => ({ key, ...page }));

// Get prev/next within category
const getNavigation = (pageKey) => {
  const page = PAGES[pageKey];
  if (!page?.category) return { prev: null, next: null };
  const pages = getCategoryPages(page.category);
  const idx = pages.findIndex((p) => p.key === pageKey);
  return {
    prev: idx > 0 ? pages[idx - 1] : null,
    next: idx < pages.length - 1 ? pages[idx + 1] : null,
  };
};

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const Tag = ({ category, small }) => {
  const cat = CATEGORIES[category];
  if (!cat) return null;
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        padding: small ? "2px 8px" : "4px 12px",
        borderRadius: "6px",
        background: cat.bg,
        color: cat.color,
        fontSize: small ? "11px" : "12px",
        fontWeight: 700,
        letterSpacing: "0.5px",
        textTransform: "uppercase",
        border: `1px solid ${cat.color}20`,
      }}
    >
      <span style={{ fontSize: small ? "8px" : "10px" }}>{cat.icon}</span>
      {cat.label}
    </span>
  );
};

const Card = ({ pageKey, page, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const cat = page.category ? CATEGORIES[page.category] : null;
  return (
    <div
      onClick={() => onClick(pageKey)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${hovered ? (cat?.color || COLORS.accent) + "40" : COLORS.border}`,
        borderRadius: "12px",
        padding: "28px",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        transform: hovered ? "translateY(-3px)" : "none",
        boxShadow: hovered
          ? `0 12px 32px ${COLORS.shadow}, 0 0 0 1px ${(cat?.color || COLORS.accent)}15`
          : `0 1px 3px ${COLORS.shadow}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: cat?.color || COLORS.accent,
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s",
        }}
      />
      {cat && <Tag category={page.category} small />}
      <h3
        style={{
          fontFamily: "'Inter', -apple-system, sans-serif",
          fontSize: "18px",
          color: COLORS.text,
          margin: cat ? "14px 0 8px" : "0 0 8px",
          fontWeight: 700,
          lineHeight: 1.3,
        }}
      >
        {page.title}
      </h3>
      {page.subtitle && (
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "14px",
            lineHeight: 1.6,
            margin: 0,
          }}
        >
          {page.subtitle}
        </p>
      )}
      <div
        style={{
          marginTop: "16px",
          color: cat?.color || COLORS.accent,
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.3px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          transition: "gap 0.2s",
        }}
      >
        Lire{" "}
        <span
          style={{
            transition: "transform 0.2s",
            display: "inline-block",
            transform: hovered ? "translateX(3px)" : "none",
          }}
        >
          →
        </span>
      </div>
    </div>
  );
};

const Quote = ({ text, author, source, color }) => (
  <div
    style={{
      borderLeft: `4px solid ${color || COLORS.accent}`,
      padding: "20px 28px",
      margin: "32px 0",
      background: (color || COLORS.accent) + "08",
      borderRadius: "0 12px 12px 0",
    }}
  >
    <p
      style={{
        fontFamily: "'Georgia', serif",
        fontSize: "17px",
        fontStyle: "italic",
        color: COLORS.text,
        lineHeight: 1.8,
        margin: 0,
      }}
    >
      « {text} »
    </p>
    {author && (
      <p
        style={{
          color: COLORS.textMuted,
          fontSize: "13px",
          marginTop: "12px",
          marginBottom: 0,
          fontWeight: 600,
        }}
      >
        — {author}
        {source && (
          <span style={{ fontWeight: 400, fontStyle: "italic" }}>
            , {source}
          </span>
        )}
      </p>
    )}
  </div>
);

const KeyPoint = ({ color, title, icon, children }) => (
  <div
    style={{
      background: (color || COLORS.accent) + "08",
      border: `1px solid ${(color || COLORS.accent)}18`,
      borderRadius: "12px",
      padding: "22px 26px",
      margin: "20px 0",
    }}
  >
    {title && (
      <h4
        style={{
          color: color || COLORS.accent,
          fontSize: "13px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          margin: "0 0 10px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {icon && <span>{icon}</span>}
        {title}
      </h4>
    )}
    <div style={{ color: COLORS.textSecondary, fontSize: "15px", lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

const Pair = ({
  left,
  right,
  leftTitle,
  rightTitle,
  leftColor,
  rightColor,
}) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "16px",
      margin: "24px 0",
    }}
  >
    <div
      style={{
        background: (leftColor || COLORS.mesurer) + "08",
        border: `1px solid ${(leftColor || COLORS.mesurer)}18`,
        borderRadius: "12px",
        padding: "22px",
      }}
    >
      <h4
        style={{
          color: leftColor || COLORS.mesurer,
          fontSize: "12px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          margin: "0 0 10px",
        }}
      >
        {leftTitle}
      </h4>
      <p
        style={{
          color: COLORS.textSecondary,
          fontSize: "14px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {left}
      </p>
    </div>
    <div
      style={{
        background: (rightColor || COLORS.reconnaitre) + "08",
        border: `1px solid ${(rightColor || COLORS.reconnaitre)}18`,
        borderRadius: "12px",
        padding: "22px",
      }}
    >
      <h4
        style={{
          color: rightColor || COLORS.reconnaitre,
          fontSize: "12px",
          fontWeight: 800,
          textTransform: "uppercase",
          letterSpacing: "0.8px",
          margin: "0 0 10px",
        }}
      >
        {rightTitle}
      </h4>
      <p
        style={{
          color: COLORS.textSecondary,
          fontSize: "14px",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {right}
      </p>
    </div>
  </div>
);

const Section = ({ title, children, id }) => (
  <div id={id} style={{ margin: "48px 0" }}>
    <h2
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        fontSize: "24px",
        color: COLORS.text,
        fontWeight: 800,
        marginBottom: "20px",
        lineHeight: 1.3,
        letterSpacing: "-0.3px",
      }}
    >
      {title}
    </h2>
    {children}
  </div>
);

const P = ({ children, bold }) => (
  <p
    style={{
      color: bold ? COLORS.text : COLORS.textSecondary,
      fontSize: "16px",
      lineHeight: 1.85,
      marginBottom: "16px",
      fontWeight: bold ? 600 : 400,
    }}
  >
    {children}
  </p>
);

const CrossLink = ({ pageKey, navigate, color }) => {
  const page = PAGES[pageKey];
  const [h, setH] = useState(false);
  if (!page) return null;
  return (
    <span
      onClick={() => navigate(pageKey)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        color: color || CATEGORIES[page.category]?.color || COLORS.accent,
        cursor: "pointer",
        fontWeight: 600,
        borderBottom: `1px dashed ${(color || CATEGORIES[page.category]?.color || COLORS.accent)}50`,
        transition: "all 0.2s",
        opacity: h ? 0.8 : 1,
      }}
    >
      {page.title}
    </span>
  );
};

const Divider = () => (
  <hr
    style={{
      border: "none",
      height: "1px",
      background: COLORS.border,
      margin: "48px 0",
    }}
  />
);

const NumberStat = ({ number, label, color }) => (
  <div style={{ textAlign: "center" }}>
    <div
      style={{
        fontSize: "36px",
        fontWeight: 800,
        color: color || COLORS.accent,
        lineHeight: 1,
        marginBottom: "8px",
      }}
    >
      {number}
    </div>
    <div
      style={{ fontSize: "13px", color: COLORS.textMuted, lineHeight: 1.4 }}
    >
      {label}
    </div>
  </div>
);

// ============================================================
// NAVIGATION
// ============================================================

const Nav = ({ currentPage, navigate }) => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const catEntries = [
    ["comprendre", getCategoryPages("comprendre")],
    ["deconstruire", getCategoryPages("deconstruire")],
    ["reconnaitre", getCategoryPages("reconnaitre")],
    ["mesurer", getCategoryPages("mesurer")],
  ];

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
        <div
          onClick={() => navigate("home")}
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
          }}
        >
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: `linear-gradient(135deg, ${COLORS.comprendre}, ${COLORS.deconstruire})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "14px",
              fontWeight: 800,
            }}
          >
            א
          </span>
          <span style={{ fontSize: "15px" }}>antisemitisme.guide</span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "2px",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          {catEntries.map(([catKey, pages]) => {
            const cat = CATEGORIES[catKey];
            const isActive =
              pages.some((p) => p.key === currentPage);
            return (
              <div
                key={catKey}
                style={{ position: "relative" }}
                onMouseEnter={() => setMenuOpen(catKey)}
                onMouseLeave={() => setMenuOpen(null)}
              >
                <NavLink
                  active={isActive}
                  color={cat.color}
                  onClick={() => navigate(pages[0]?.key)}
                >
                  {cat.label} ▾
                </NavLink>
                {menuOpen === catKey && (
                  <Dropdown
                    pages={pages}
                    navigate={navigate}
                    catColor={cat.color}
                    currentPage={currentPage}
                  />
                )}
              </div>
            );
          })}
          <NavLink
            onClick={() => navigate("ressources")}
            active={currentPage === "ressources"}
            color={COLORS.ressources}
          >
            Ressources
          </NavLink>
          <NavLink
            onClick={() => navigate("faq")}
            active={currentPage === "faq"}
            color={COLORS.deconstruire}
          >
            FAQ
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ children, onClick, active, color }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "8px 14px",
        borderRadius: "8px",
        cursor: "pointer",
        color: active ? color : hovered ? COLORS.text : COLORS.textSecondary,
        background: active
          ? color + "10"
          : hovered
          ? COLORS.surfaceHover
          : "transparent",
        fontWeight: active ? 700 : 500,
        transition: "all 0.2s",
        whiteSpace: "nowrap",
        fontSize: "14px",
      }}
    >
      {children}
    </span>
  );
};

const Dropdown = ({ pages, navigate, catColor, currentPage }) => (
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
      <DropdownItem
        key={p.key}
        page={p}
        onClick={() => navigate(p.key)}
        active={currentPage === p.key}
        catColor={catColor}
      />
    ))}
  </div>
);

const DropdownItem = ({ page, onClick, active, catColor }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
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
  );
};

// ============================================================
// PAGE LAYOUT with prev/next navigation
// ============================================================

const PageLayout = ({ title, subtitle, category, children, navigate, pageKey }) => {
  const cat = category ? CATEGORIES[category] : null;
  const nav = pageKey ? getNavigation(pageKey) : { prev: null, next: null };

  return (
    <div style={{ paddingTop: "48px", paddingBottom: "60px" }}>
      {cat && (
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

      {/* Prev / Next navigation */}
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
            <PrevNextCard
              direction="prev"
              page={nav.prev}
              onClick={() => navigate(nav.prev.key)}
              color={cat?.color}
            />
          ) : (
            <div style={{ flex: 1 }} />
          )}
          {nav.next ? (
            <PrevNextCard
              direction="next"
              page={nav.next}
              onClick={() => navigate(nav.next.key)}
              color={cat?.color}
            />
          ) : (
            <div style={{ flex: 1 }} />
          )}
        </div>
      )}
    </div>
  );
};

const PrevNextCard = ({ direction, page, onClick, color }) => {
  const [h, setH] = useState(false);
  const isPrev = direction === "prev";
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        flex: 1,
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
        {isPrev ? "← Précédent" : "Suivant →"}
      </div>
      <div
        style={{
          color: color || COLORS.accent,
          fontSize: "15px",
          fontWeight: 700,
        }}
      >
        {page.title}
      </div>
    </div>
  );
};

// ============================================================
// HOME PAGE
// ============================================================

const HomePage = ({ navigate }) => {
  const cats = ["comprendre", "deconstruire", "reconnaitre", "mesurer"];

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
          <span>◆</span> Guide analytique
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
          Comprendre{" "}
          <span
            style={{
              background: `linear-gradient(135deg, ${COLORS.comprendre}, ${COLORS.deconstruire})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            l'antisémitisme
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
          Anatomie d'un système de pensée vieux de deux millénaires.
          Ses mécanismes, ses mutations, ses formes contemporaines, ses conséquences.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
          <Btn onClick={() => navigate("definition")} primary>
            Commencer la lecture
          </Btn>
          <Btn onClick={() => navigate("contradiction")}>
            Explorer les mécanismes
          </Btn>
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
        <NumberStat number="4" label="Catégories thématiques" color={COLORS.comprendre} />
        <NumberStat number="17" label="Articles de fond" color={COLORS.deconstruire} />
        <NumberStat number="2000" label="Ans d'histoire analysés" color={COLORS.reconnaitre} />
        <NumberStat number="3" label="Essais sources" color={COLORS.mesurer} />
      </div>

      {/* Category sections */}
      {cats.map((catKey) => {
        const cat = CATEGORIES[catKey];
        const pages = getCategoryPages(catKey);
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
                gridTemplateColumns: pages.length <= 3 ? "repeat(3, 1fr)" : "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {pages.map((p) => (
                <Card key={p.key} pageKey={p.key} page={p} onClick={navigate} />
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
              background: CATEGORIES.ressources.bg,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "16px",
              color: CATEGORIES.ressources.color,
              fontWeight: 700,
            }}
          >
            {CATEGORIES.ressources.icon}
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
            Ressources
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
          Ouvrages, rapports, liens pour aller plus loin
        </p>
        <div onClick={() => navigate("ressources")} style={{ cursor: "pointer" }}>
          <Card
            pageKey="ressources"
            page={PAGES.ressources}
            onClick={navigate}
          />
        </div>
      </div>

      {/* FAQ banner */}
      <div
        onClick={() => navigate("faq")}
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
            « Je ne suis pas antisémite, mais… »
          </h3>
          <p
            style={{
              color: COLORS.textSecondary,
              fontSize: "15px",
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            12 phrases entendues au quotidien, déconstruites une par une. Du dîner de famille aux réseaux sociaux.
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
          Lire →
        </span>
      </div>

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
          Pourquoi ce guide ?
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
          L'antisémitisme prospère dans le flou, l'implicite, le non-dit.
          Ce guide existe pour nommer les mécanismes — un par un, pièce par pièce —
          afin que la prochaine fois que quelqu'un dit « je ne suis pas antisémite, mais… »,
          on sache exactement quel engrenage vient de se mettre en marche.
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
          Le ton est analytique, pas militant. On décortique des mécanismes, on ne fait pas de propagande.
          Tout est documenté, sourcé, vérifiable.
        </p>
      </div>
    </div>
  );
};

const Btn = ({ children, onClick, primary }) => {
  const [h, setH] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        padding: "13px 28px",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "15px",
        fontWeight: 700,
        border: primary ? "none" : `1px solid ${COLORS.border}`,
        background: primary
          ? h
            ? COLORS.accentHover
            : COLORS.accent
          : h
          ? COLORS.surfaceHover
          : COLORS.surface,
        color: primary ? "#FFFFFF" : COLORS.text,
        transition: "all 0.2s",
        boxShadow: primary
          ? h
            ? `0 6px 24px ${COLORS.accent}40`
            : `0 2px 8px ${COLORS.accent}25`
          : "none",
      }}
    >
      {children}
    </button>
  );
};

// ============================================================
// CONTENT PAGES — COMPRENDRE
// ============================================================

const DefinitionPage = ({ navigate }) => (
  <PageLayout
    title="Définition et spécificité"
    subtitle="Un système de pensée, pas un simple préjugé"
    category="comprendre"
    navigate={navigate}
    pageKey="definition"
  >
    <Section title="Ce que l'antisémitisme n'est pas">
      <P>Pour comprendre l'antisémitisme, il faut d'abord comprendre pourquoi les grilles de lecture habituelles du racisme échouent à le saisir.</P>
      <P>Le racisme classique — anti-Noirs, anti-Arabes, anti-Asiatiques — fonctionne sur un axe vertical descendant. Il attribue à sa cible une infériorité : intellectuelle, morale, civilisationnelle. Le raciste regarde sa victime de haut. Il la méprise. Il la considère comme primitive, dangereuse par sa sauvagerie, incapable de s'élever.</P>
      <P>L'antisémitisme fonctionne à l'envers. Il ne regarde pas le Juif de haut — il le regarde d'en bas, avec une terreur mêlée de fascination. Le Juif, dans l'imaginaire antisémite, n'est pas le sous-homme. Il est le sur-homme maléfique. Il est trop intelligent, trop riche, trop influent, trop organisé. Il tire les ficelles. Il manipule les nations. Il contrôle l'argent, les médias, les gouvernements. Il est l'architecte invisible du malheur du monde.</P>
      <P>C'est cette inversion qui rend l'antisémitisme à la fois si singulier et si difficile à combattre. On ne combat pas de la même manière un préjugé qui dit « tu es inférieur » et un préjugé qui dit « tu es dangereusement supérieur ».</P>
    </Section>

    <Section title="Essai de définition">
      <KeyPoint color={COLORS.comprendre} title="Définition proposée" icon="◆">
        L'antisémitisme est un système de pensée qui attribue aux Juifs — en tant que groupe, réseau, peuple ou force abstraite — une puissance maléfique, cachée et coordonnée, responsable des malheurs du monde.
      </KeyPoint>
      <P>Ce qui le distingue de tout autre préjugé :</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
        <KeyPoint color={COLORS.comprendre} title="Supériorité maléfique">
          Là où le racisme ordinaire attribue une infériorité, l'antisémitisme attribue une supériorité dangereuse. Le Juif n'est pas méprisé — il est craint.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Transversalité totale">
          C'est le seul préjugé qui fonctionne dans toutes les idéologies : extrême droite, extrême gauche, islamisme, christianisme, laïcisme.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Autonomie complète">
          Il ne nécessite pas la présence réelle de Juifs pour exister. C'est un système de pensée autonome, pas une réaction à une expérience vécue.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Protéiformisme">
          Il mute à chaque époque en empruntant le vocabulaire moral dominant : religion, science, droits de l'homme.
        </KeyPoint>
      </div>
    </Section>

    <Section title="Un racisme sans race">
      <P>L'antisémitisme pose un problème fondamental de classification : il ne vise pas une race au sens phénotypique. Un Juif ashkénaze d'Europe de l'Est et un Juif mizrahi du Yémen ne se ressemblent pas physiquement. Beaucoup de Juifs ne sont pas identifiables visuellement. C'est d'ailleurs cette « invisibilité » qui alimente le fantasme : le Juif est d'autant plus dangereux qu'il peut se fondre dans la masse.</P>
      <P>L'antisémitisme vise simultanément — et de manière contradictoire — une religion (le judaïsme, mais la plupart des Juifs visés ne sont pas pratiquants), une ethnie (mais les Juifs viennent de dizaines de pays différents), une culture (mais la culture juive est multiple et hétérogène), une nation (Israël, mais l'antisémitisme précède Israël de deux millénaires), un « réseau » (mais cette accusation de communautarisme est elle-même un trope antisémite).</P>
      <P>On ne sait pas exactement ce qu'on déteste, mais on le déteste avec certitude. Cette imprécision est constitutive de l'antisémitisme. Elle le rend insaisissable, protéiforme, capable de se reformuler à l'infini.</P>
      <Quote
        text="L'antisémitisme n'est pas une opinion. Ce n'est même pas exactement un racisme. C'est une vision du monde — la plus ancienne, la plus adaptable, et la plus meurtrière que l'humanité ait produite."
        color={COLORS.comprendre}
      />
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce thème se prolonge dans{" "}
        <CrossLink pageKey="inversion" navigate={navigate} /> et{" "}
        <CrossLink pageKey="quatre_ages" navigate={navigate} />.
        Pour les manifestations concrètes de cette spécificité, voir{" "}
        <CrossLink pageKey="sans_juifs" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const InversionPage = ({ navigate }) => (
  <PageLayout
    title="L'inversion fondamentale"
    subtitle="Quand le préjugé attribue une supériorité maléfique"
    category="comprendre"
    navigate={navigate}
    pageKey="inversion"
  >
    <Section title="Une haine qui traverse tout le spectre politique">
      <P>La structure inversée de l'antisémitisme a une conséquence majeure : il est compatible avec toutes les idéologies. C'est le seul préjugé qui fonctionne aussi bien à l'extrême droite qu'à l'extrême gauche, aussi bien chez les chrétiens que chez les musulmans, aussi bien dans les régimes capitalistes que communistes.</P>

      <Pair
        leftTitle="Racisme classique"
        left="Attribue une infériorité à sa cible. Le raciste regarde de haut. Le préjugé fonctionne sur le mépris et la domination."
        rightTitle="Antisémitisme"
        right="Attribue une supériorité maléfique. L'antisémite regarde d'en bas, avec terreur et fascination. Le préjugé fonctionne sur la paranoïa."
        leftColor="#8B7355"
        rightColor={COLORS.mesurer}
      />

      <P>L'extrême droite déteste le Juif parce qu'il est l'étranger infiltré, le cosmopolite qui détruit l'identité nationale, le métisseur qui corrompt la race. L'extrême gauche déteste le Juif parce qu'il est le capitaliste, le banquier, l'incarnation du pouvoir et de l'exploitation. Le nationaliste arabe déteste le Juif parce qu'il est le colonisateur. Le complotiste déteste le Juif parce qu'il est le marionnettiste caché.</P>
      <P bold>Chacun projette sur le Juif son propre ennemi. Et le Juif, dans cette mécanique, n'est jamais une personne réelle — il est un écran sur lequel chaque idéologie projette le visage du mal qu'elle combat.</P>
    </Section>

    <Section title="Les quatre projections">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <KeyPoint color={COLORS.mesurer} title="L'extrême droite">
          Le Juif est l'étranger infiltré, le cosmopolite sans racines qui détruit les nations et corrompt les identités.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="L'extrême gauche">
          Le Juif est le capitaliste, le banquier, l'incarnation du pouvoir économique et de l'exploitation.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Le nationalisme arabe">
          Le Juif est le colonisateur, l'impérialiste, l'occupant qui vole la terre.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="Le complotisme">
          Le Juif est le marionnettiste caché, celui qui tire les ficelles derrière chaque événement mondial.
        </KeyPoint>
      </div>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Cette transversalité s'illustre dans{" "}
        <CrossLink pageKey="contradiction" navigate={navigate} /> et{" "}
        <CrossLink pageKey="gauche" navigate={navigate} />.
        Pour le mécanisme projectif, voir{" "}
        <CrossLink pageKey="bouc" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const QuatreAgesPage = ({ navigate }) => (
  <PageLayout
    title="Les quatre âges"
    subtitle="Antique, chrétien, moderne, contemporain — une mutation permanente"
    category="comprendre"
    navigate={navigate}
    pageKey="quatre_ages"
  >
    <Section title="L'antisémitisme mute">
      <P>L'antisémitisme n'est pas un phénomène stable. Il mute. Chaque époque lui donne un nouveau visage tout en conservant la même architecture profonde. Ce qui frappe, c'est la continuité souterraine : à chaque époque, l'antisémitisme se reformule dans le langage dominant — religion au Moyen Âge, science au XIXe siècle, droits de l'homme au XXIe. Il emprunte toujours le registre moral le plus légitime de son temps pour se rendre acceptable.</P>
    </Section>

    <Section title="I. L'antisémitisme antique — L'étrangeté">
      <KeyPoint color={COLORS.comprendre} title="Religieux et culturel" icon="I">
        Les Grecs et les Romains reprochent aux Juifs leur monothéisme exclusif, leur refus de participer au culte impérial, leur particularisme alimentaire et rituel. Le Juif est celui qui refuse de se dissoudre dans l'universel. C'est un reproche d'étrangeté.
      </KeyPoint>
      <P>Dans le monde antique, où le syncrétisme religieux est la norme, le refus juif d'intégrer d'autres divinités au panthéon est perçu comme une forme d'arrogance ou de misanthropie. Les Juifs ne sont pas haïs pour ce qu'ils font, mais pour ce qu'ils refusent de faire : se conformer.</P>
    </Section>

    <Section title="II. L'antisémitisme chrétien — Le déicide">
      <KeyPoint color={COLORS.deconstruire} title="Théologique" icon="II">
        Le Juif est le peuple déicide — celui qui a tué le Christ. Cette accusation, portée par des siècles de catéchèse, engendre des persécutions cycliques : expulsions, conversions forcées, pogroms, ghettos. Le Juif est l'ennemi intérieur de la chrétienté, le témoin gênant d'une filiation que le christianisme veut à la fois revendiquer et effacer.
      </KeyPoint>
      <P>Le christianisme naît du judaïsme, et cette filiation est à la fois revendiquée (l'Ancien Testament est intégré à la Bible chrétienne) et source de malaise. Le Juif est le témoin vivant d'une antériorité que le christianisme doit à la fois reconnaître et dépasser. D'où l'ambivalence permanente : le Juif doit survivre (comme témoin de l'ancienne Alliance) mais ne doit pas prospérer (car il a refusé la nouvelle).</P>
    </Section>

    <Section title="III. L'antisémitisme moderne — La race">
      <KeyPoint color={COLORS.mesurer} title="Racial et pseudo-scientifique" icon="III">
        Au XIXe siècle, le Juif n'est plus seulement un hérétique : il devient une race, biologiquement définie et biologiquement dangereuse. C'est l'époque des théories raciales, de Gobineau, de Chamberlain, puis de l'idéologie nazie. L'antisémitisme se « laïcise » : même le Juif converti, baptisé, totalement assimilé, reste juif par le sang. Il n'y a plus d'échappatoire. La Shoah est l'aboutissement logique de cette pensée.
      </KeyPoint>
      <P>C'est le tournant le plus meurtrier. Quand l'antisémitisme était religieux, la conversion offrait une porte de sortie (même si elle était souvent forcée). Quand il devient racial, il n'y a plus d'échappatoire. Le Juif est juif par essence, par le sang, de manière irrémédiable. C'est cette fermeture totale qui rend possible le génocide industriel.</P>
    </Section>

    <Section title="IV. L'antisémitisme contemporain — La géopolitique">
      <KeyPoint color={COLORS.reconnaitre} title="Géopolitique" icon="IV">
        Le Juif est désormais accusé de colonialisme, d'apartheid, de génocide. Le vocabulaire change, mais le mécanisme reste : le Juif est le mal, il faut le combattre, et toute sympathie à son égard est suspecte.
      </KeyPoint>
      <P>L'antisémitisme contemporain s'exprime principalement à travers le conflit israélo-palestinien et prend le visage de l'antisionisme. Le Juif n'est plus accusé de déicide ou d'impureté raciale — il est accusé de colonialisme, d'apartheid, de génocide. Le vocabulaire est celui des droits de l'homme, le registre moral le plus légitime de notre époque.</P>
      <Quote
        text="À chaque époque, l'antisémitisme se reformule dans le langage dominant : religion au Moyen Âge, science au XIXe siècle, droits de l'homme au XXIe. Il emprunte toujours le registre moral le plus légitime de son temps pour se rendre acceptable."
        color={COLORS.comprendre}
      />
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        L'âge contemporain se manifeste dans{" "}
        <CrossLink pageKey="obsession" navigate={navigate} /> et{" "}
        <CrossLink pageKey="sionisme" navigate={navigate} />.
        La logique de mutation se retrouve dans{" "}
        <CrossLink pageKey="matrice" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

// ============================================================
// CONTENT PAGES — DÉCONSTRUIRE
// ============================================================

const ContradictionPage = ({ navigate }) => (
  <PageLayout
    title="L'accusation contradictoire"
    subtitle="Le double bind systématique — communiste et capitaliste, cosmopolite et communautariste"
    category="deconstruire"
    navigate={navigate}
    pageKey="contradiction"
  >
    <Section title="Le piège logique parfait">
      <P>De tous les mécanismes de l'antisémitisme, celui-ci est peut-être le plus révélateur — et le moins analysé. Le Juif est systématiquement accusé d'une chose et de son contraire exact. Cette structure contradictoire n'est pas un accident : elle est le signe que l'accusation ne porte pas sur un comportement réel, mais sur un besoin de l'accusateur.</P>
    </Section>

    <Section title="Les quatre contradictions fondamentales">
      <Pair
        leftTitle="Communiste"
        left="Marx est juif. Le Juif est le révolutionnaire qui veut détruire l'ordre établi. Dans l'Allemagne nazie, les Juifs fomentent la révolution bolchevique."
        rightTitle="Capitaliste"
        right="Rothschild est juif. Le Juif est le banquier qui incarne et exploite l'ordre établi. En URSS, les Juifs sont des agents du capitalisme occidental."
        leftColor={COLORS.mesurer}
        rightColor={COLORS.deconstruire}
      />
      <Pair
        leftTitle="Cosmopolite"
        left="Apatride sans racines, nomade qui ne jure fidélité à aucune nation, qui corrompt les identités locales par son déracinement."
        rightTitle="Communautariste"
        right="Réseau fermé, endogame, solidaire exclusivement de ses semblables, replié sur sa communauté, refusant de se mélanger."
        leftColor={COLORS.mesurer}
        rightColor={COLORS.deconstruire}
      />
      <Pair
        leftTitle="Trop assimilé"
        left="Il se cache, s'infiltre, « se fait passer pour ». Le Juif qui change de nom et épouse une non-juive est accusé de dissimulation."
        rightTitle="Pas assez intégré"
        right="Kippa, nom reconnaissable, écoles confessionnelles. Le Juif visible est accusé de communautarisme et de refus de la République."
        leftColor={COLORS.mesurer}
        rightColor={COLORS.deconstruire}
      />
      <Pair
        leftTitle="Trop puissant"
        left="Il contrôle les médias, la finance, les gouvernements. Il tire les ficelles dans l'ombre. Le monde est à ses pieds."
        rightTitle="Toujours victime"
        right="Il se plaint sans cesse, instrumentalise la Shoah, joue les martyrs. « Comment pouvez-vous être victimes si vous êtes si puissants ? »"
        leftColor={COLORS.mesurer}
        rightColor={COLORS.deconstruire}
      />
    </Section>

    <Section title="Le test diagnostique">
      <KeyPoint color={COLORS.deconstruire} title="Règle de détection" icon="⬡">
        Quand quelqu'un attribue à un groupe deux caractéristiques mutuellement exclusives, ce n'est plus de la critique — c'est de la projection. Le groupe n'est plus décrit pour ce qu'il est, mais pour ce dont l'accusateur a besoin qu'il soit.
      </KeyPoint>
      <P>Aucun autre groupe ne subit cette double accusation systématique. C'est un marqueur diagnostique fiable : quand les reproches sont contradictoires, ils ne décrivent pas la cible — ils révèlent l'accusateur.</P>
      <P>Dans l'Allemagne nazie, la propagande accusait simultanément les Juifs de fomenter la révolution bolchevique ET de contrôler le capitalisme international. L'URSS de Staline les accusait d'être des agents du capitalisme occidental. Dans les deux cas, le Juif est l'ennemi — seul l'angle change. C'est la preuve que l'accusation ne porte pas sur un fait observable, mais sur une fonction : celle de bouc émissaire universel.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce mécanisme s'incarne dans{" "}
        <CrossLink pageKey="controle" navigate={navigate} /> (le fantasme du pouvoir) et{" "}
        <CrossLink pageKey="bouc" navigate={navigate} /> (la théorie girardienne).
      </span>
    </KeyPoint>
  </PageLayout>
);

const MatricePage = ({ navigate }) => (
  <PageLayout
    title="La matrice conspirationniste"
    subtitle="L'antisémitisme comme template originel de tous les complots"
    category="deconstruire"
    navigate={navigate}
    pageKey="matrice"
  >
    <Section title="La mère de toutes les théories du complot">
      <P>L'antisémitisme est la mère de toutes les théories du complot. Ce n'est pas une métaphore — c'est une filiation directe et documentée.</P>
      <P>Les Protocoles des Sages de Sion, rédigés par la police secrète tsariste au début du XXe siècle, décrivent un prétendu plan juif de domination mondiale. Ce texte, prouvé faux dès les années 1920, est devenu le template de toute conspiration moderne. Sa structure est toujours la même : un petit groupe secret, ethniquement défini, contrôle les événements mondiaux dans l'ombre pour asservir les peuples.</P>
      <P>Avant que cette architecture narrative soit projetée sur les Illuminati, les francs-maçons, les reptiliens ou les élites de Davos, elle a été forgée sur les Juifs. Et elle revient toujours vers eux.</P>
    </Section>

    <Section title="Les convergences contemporaines">
      <P>Prenez n'importe quelle grande théorie du complot contemporaine et tirez sur le fil :</P>
      <KeyPoint color={COLORS.deconstruire} title="QAnon" icon="→">
        Une élite pédophile contrôle le monde. Quand on demande qui compose cette élite, les noms qui reviennent — Soros, Rothschild, Epstein — sont juifs. Les symboles mobilisés (le sang des enfants, les rituels secrets) recyclent directement l'accusation médiévale de meurtre rituel, une calomnie qui a provoqué des massacres de communautés juives pendant des siècles.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="Le « Grand Remplacement »" icon="→">
        Qui organise le remplacement supposé des populations blanches européennes par des populations immigrées ? Chez Renaud Camus et ses épigones, la réponse pointe invariablement vers des « élites cosmopolites » — terme-code transparent pour les Juifs. Le Juif est à la fois l'organisateur du remplacement et celui qui en profite.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="Deep State, Great Reset, Nouvel Ordre Mondial" icon="→">
        Chacune de ces théories décrit un pouvoir caché qui manipule les nations. Et chacune, quand on gratte la surface, finit par converger vers l'antisémitisme. Les « élites mondialistes », les « banquiers internationaux », les « architectes de l'ombre » — ce vocabulaire est directement issu des Protocoles.
      </KeyPoint>
    </Section>

    <Section title="L'affaire Epstein comme cas d'école">
      <P>L'affaire Epstein illustre parfaitement ce mécanisme. Jeffrey Epstein est juif. Certaines des personnes impliquées dans son réseau le sont aussi. Mais les victimes viennent de tous milieux, les complices aussi — Trump, Clinton, le Prince Andrew ne sont pas juifs. Pourtant, dans le récit conspirationniste, l'affaire devient la preuve d'une « mafia communautaire juive » à la tête d'un réseau pédophile mondial.</P>
      <KeyPoint color={COLORS.mesurer} title="Le mécanisme révélateur">
        Quand un criminel est juif, sa judéité est le prisme d'explication. Quand un criminel ne l'est pas, c'est un cas individuel. Ce double standard est le moteur de l'antisémitisme conspirationniste.
      </KeyPoint>
    </Section>

    <Quote
      text="L'antisémitisme fournit au complotisme son architecture narrative fondamentale : l'idée qu'un groupe invisible, surpuissant et maléfique contrôle le monde. Avant d'être projetée sur les Illuminati ou les reptiliens, cette architecture a été forgée sur les Juifs."
      color={COLORS.deconstruire}
    />

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Le fantasme du contrôle est détaillé dans{" "}
        <CrossLink pageKey="controle" navigate={navigate} />.
        Pour l'accusation contradictoire qui sous-tend ces complots, voir{" "}
        <CrossLink pageKey="contradiction" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const ControlePage = ({ navigate }) => (
  <PageLayout
    title="Le fantasme du contrôle"
    subtitle="Médias, finance, pouvoir — anatomie d'un mythe séculaire"
    category="deconstruire"
    navigate={navigate}
    pageKey="controle"
  >
    <Section title="Un mythe structurant et ancien">
      <P>L'accusation selon laquelle « les Juifs contrôlent tout » — les banques, les médias, la politique — est le pilier central de l'antisémitisme moderne. Elle prend sa source dans les Protocoles des Sages de Sion, un faux fabriqué par la police secrète tsariste au début du XXe siècle, et reste aujourd'hui l'un des textes les plus diffusés au monde.</P>
      <P>En France, cela se traduit par l'idée que « le CRIF dirige la France », que « les Rothschild contrôlent la finance », que les Juifs sont surreprésentés dans les médias et le cinéma et qu'ils « s'embauchent entre eux ».</P>
    </Section>

    <Section title="Ce que cette accusation révèle">
      <KeyPoint color={COLORS.deconstruire} title="De l'observation au complot" icon="1">
        La réussite visible de certains individus juifs dans certains secteurs est réelle. Mais transformer une observation statistique en preuve d'un complot coordonné est précisément le mécanisme conspirationniste. On ne dit pas « les Bretons contrôlent la marine » ou « les protestants contrôlent la finance suisse », même si des surreprésentations existent pour des raisons historiques et sociologiques évidentes.
      </KeyPoint>
      <KeyPoint color={COLORS.comprendre} title="L'explication historique" icon="2">
        Exclus de la propriété terrienne pendant des siècles, interdits de la plupart des métiers par les guildes médiévales, les Juifs se sont tournés vers le commerce, la finance, les professions intellectuelles — les seuls métiers qu'on leur autorisait. Les punir aujourd'hui pour leur adaptation à l'exclusion qu'ils ont subie est un paradoxe cruel.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Le biais de confirmation" icon="3">
        Quand un individu juif réussit, sa judéité est mobilisée comme explication. Quand un non-juif réussit, son origine n'est jamais mentionnée. C'est la définition même du biais de confirmation : on ne retient que les données qui confirment le préjugé, et on ignore toutes les autres.
      </KeyPoint>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce fantasme alimente{" "}
        <CrossLink pageKey="matrice" navigate={navigate} /> et se manifeste dans{" "}
        <CrossLink pageKey="obsession" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const PhilosemitismePage = ({ navigate }) => (
  <PageLayout
    title="Le philosémitisme toxique"
    subtitle="Quand l'admiration contient déjà l'accusation"
    category="deconstruire"
    navigate={navigate}
    pageKey="philosemitisme"
  >
    <Section title="Le compliment qui piège">
      <P>« Les Juifs sont intelligents. » « Ils ont le sens des affaires. » « Ils sont solidaires entre eux. » « Regardez combien de prix Nobel ils ont. »</P>
      <P>Ces phrases se veulent élogieuses. Elles sont en réalité le terreau de l'antisémitisme, parce qu'elles reposent sur le même mécanisme : l'essentialisation. Attribuer à un groupe entier une qualité positive, c'est déjà le traiter comme un bloc homogène plutôt que comme une collection d'individus.</P>
    </Section>

    <Section title="Le basculement">
      <P>Et le compliment se retourne avec une facilité déconcertante :</P>
      <Pair
        leftTitle="Le compliment"
        left="« Ils sont intelligents. » « Ils ont le sens des affaires. » « Ils sont solidaires. » « Regardez combien de prix Nobel. »"
        rightTitle="Le retournement"
        right="« Ils sont rusés. » « Ils contrôlent la finance. » « Ils s'embauchent entre eux. » « Ils ont infiltré les institutions. »"
        leftColor={COLORS.reconnaitre}
        rightColor={COLORS.mesurer}
      />
      <P>Le passage du philosémitisme à l'antisémitisme n'est pas une rupture — c'est un simple changement d'éclairage sur la même image. L'admiration fascinée et la haine paranoïaque partagent une même prémisse : les Juifs ne sont pas des gens ordinaires. Et c'est précisément cette prémisse qui est le problème.</P>
    </Section>

    <Section title="Pourquoi « j'admire les Juifs » doit alerter">
      <P>C'est pour cela que la phrase « je ne suis pas antisémite, j'admire beaucoup les Juifs » devrait alerter plutôt que rassurer. Admirer « les Juifs » en tant que groupe, c'est déjà les avoir sortis de l'humanité commune. C'est déjà leur attribuer une nature distincte — positive pour l'instant, mais qui peut basculer à tout moment.</P>
      <KeyPoint color={COLORS.deconstruire} title="Le signal d'alerte" icon="⬡">
        L'admiration collective est le premier étage de la fusée. Le second, c'est la suspicion. Et le troisième, c'est l'accusation. La distance entre « ils sont formidables » et « ils sont dangereux » est beaucoup plus courte qu'on ne le croit.
      </KeyPoint>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Le mécanisme d'essentialisation se retrouve dans{" "}
        <CrossLink pageKey="controle" navigate={navigate} /> et{" "}
        <CrossLink pageKey="bouc" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const BoucPage = ({ navigate }) => (
  <PageLayout
    title="Le bouc émissaire structurel"
    subtitle="La mécanique girardienne — pourquoi toujours les Juifs ?"
    category="deconstruire"
    navigate={navigate}
    pageKey="bouc"
  >
    <Section title="La théorie de René Girard">
      <P>René Girard offre un cadre explicatif éclairant. Pour Girard, toute société en crise a besoin d'un bouc émissaire — un individu ou un groupe sur lequel décharger la violence collective pour restaurer l'unité du groupe.</P>
      <P>Le bouc émissaire idéal doit remplir deux conditions apparemment contradictoires : être suffisamment intégré à la société pour être visible et accessible, et suffisamment différent pour être désignable comme « autre ».</P>
      <KeyPoint color={COLORS.deconstruire} title="La position structurelle des Juifs" icon="⬡">
        Les Juifs remplissent structurellement ces deux conditions depuis des siècles. Partout où ils vivent, ils sont à la fois dedans et dehors. Intégrés mais identifiables. Proches mais distincts. Ils occupent la position parfaite du bouc émissaire girardien, et ce n'est pas un accident — c'est le produit de siècles d'exclusion partielle qui les a maintenus dans cet entre-deux.
      </KeyPoint>
    </Section>

    <Section title="Le refus simultané de la singularité et de l'universalité">
      <P>On refuse aux Juifs simultanément la singularité et l'universalité :</P>
      <Pair
        leftTitle="Refus de la singularité"
        left="« Votre souffrance n'est pas spéciale, d'autres ont souffert aussi. » « Arrêtez avec la Shoah. » « Vous n'avez pas le monopole de la souffrance. »"
        rightTitle="Refus de l'universalité"
        right="« Vous êtes un groupe à part, communautaire, qui ne s'intègre pas. » « Vous n'êtes pas comme nous. » « Vous restez entre vous. »"
        leftColor={COLORS.comprendre}
        rightColor={COLORS.comprendre}
      />
      <P>On leur refuse le droit à un État (« colonisateurs ») et simultanément le droit d'être apatrides (« retournez chez vous »). Où exactement ? Cette question reste systématiquement sans réponse, parce que la question n'attend pas de réponse — elle est performative. Elle exprime un rejet, pas une interrogation.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Le mécanisme de crise sociale se mesure dans{" "}
        <CrossLink pageKey="canari" navigate={navigate} />.
        La contradiction structurelle est détaillée dans{" "}
        <CrossLink pageKey="contradiction" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

// ============================================================
// CONTENT PAGES — RECONNAÎTRE
// ============================================================

const ObsessionPage = ({ navigate }) => (
  <PageLayout
    title="L'obsession sélective"
    subtitle="Le deux poids, deux mesures appliqué à Israël"
    category="reconnaitre"
    navigate={navigate}
    pageKey="obsession"
  >
    <Section title="Le focus disproportionné sur Israël">
      <P>Le conflit israélo-palestinien est atroce. Les crimes de guerre documentés sont réels et condamnables. Mais l'intensité du regard mondial sur Israël est sans commune mesure avec celle portée sur d'autres conflits.</P>
      <P>La guerre civile au Yémen a fait plus de 150 000 morts et provoqué l'une des pires crises humanitaires du XXIe siècle. La guerre en Syrie a causé plus de 500 000 morts. Le conflit au Tigré, les persécutions des Ouïghours, la guerre en RDC — autant de tragédies qui ne génèrent qu'une fraction de l'indignation, des manifestations, des résolutions de l'ONU consacrées à Israël.</P>
      <KeyPoint color={COLORS.reconnaitre} title="La question qui dérange" icon="◉">
        Il ne s'agit pas de dire que critiquer Israël est antisémite. Il s'agit de se demander pourquoi ce pays est soumis à un standard que l'on n'applique à aucun autre. Quand cette obsession sélective ne peut s'expliquer ni par le nombre de victimes, ni par la gravité des actes, ni par la proximité géographique, que reste-t-il comme explication ?
      </KeyPoint>
    </Section>

    <Section title="Le silence sélectif">
      <P>Quand les États-Unis bombardent des civils en Irak, en Afghanistan ou en Syrie, la critique existe mais n'atteint jamais le même degré de virulence. Quand la Russie rase Grozny ou Marioupol, on ne demande pas à chaque Russe de se désolidariser de Poutine. Quand l'Arabie Saoudite bombarde le Yémen avec des armes occidentales, les manifestations sont inexistantes.</P>
      <P>Le filtre de l'indignation est sélectif, et cette sélectivité mérite d'être interrogée. Ce n'est pas un argument pour interdire la critique d'Israël — c'est un argument pour s'interroger sur la disproportion du traitement.</P>
    </Section>

    <Section title="L'injonction faite aux Juifs">
      <P>Un élément rarement noté : quand Israël est critiqué, on demande à chaque Juif, individuellement, de prendre position. « Tu condamnes ? » Cette injonction n'est faite à aucune autre diaspora. On ne demande pas aux Russes de France de condamner Poutine pour pouvoir dîner en paix. On ne demande pas aux Chinois de France de se désolidariser du PCC. Mais on demande aux Juifs de se justifier — en permanence.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Cette obsession s'articule avec{" "}
        <CrossLink pageKey="sionisme" navigate={navigate} /> et{" "}
        <CrossLink pageKey="exception" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const GauchePage = ({ navigate }) => (
  <PageLayout
    title="L'antisémitisme de gauche"
    subtitle="Quand l'antisionisme sert de véhicule au préjugé"
    category="reconnaitre"
    navigate={navigate}
    pageKey="gauche"
  >
    <Section title="Un angle mort idéologique">
      <P>L'antisémitisme est traditionnellement associé à l'extrême droite. Mais il existe un antisémitisme de gauche tout aussi structurel, qui se drape dans l'antisionisme et le combat anti-impérialiste pour recycler des tropes antisémites classiques.</P>
      <P>L'idée que les Juifs incarnent le « pouvoir », le « capital », l'« impérialisme » est un antisémitisme structurel de gauche qui a une longue histoire. Quand Proudhon écrit dans ses carnets que le Juif est « l'ennemi du genre humain » et qu'il faut « renvoyer cette race en Asie ou l'exterminer », c'est un socialiste qui parle. Quand Staline organise le « complot des blouses blanches » et persécute les intellectuels juifs soviétiques, c'est au nom du communisme.</P>
    </Section>

    <Section title="Le glissement en trois temps">
      <P>Aujourd'hui, l'antisémitisme de gauche prend le visage de l'antisionisme radical. Le glissement fonctionne en trois temps :</P>
      <KeyPoint color={COLORS.reconnaitre} title="1. Critique légitime" icon="✓">
        Israël mène une politique de colonisation condamnable en Cisjordanie. Ses gouvernements successifs ont commis des actes critiquables. Cette critique est non seulement légitime, mais nécessaire.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="2. Glissement" icon="⚠">
        Israël est un « État colonial », « raciste », « génocidaire » — intrinsèquement illégitime. L'État juif n'est pas critiqué pour ce qu'il fait, mais pour ce qu'il est.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="3. Contamination" icon="✕">
        Les Juifs qui ne condamnent pas Israël sont complices. Les Juifs qui soutiennent l'existence d'Israël sont des oppresseurs. La judéité elle-même devient suspecte.
      </KeyPoint>
      <P bold>Le passage du 1 au 3 est le lieu exact où la critique politique devient antisémitisme. Et c'est un passage qui s'opère souvent sans que ceux qui le franchissent en aient conscience.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce mécanisme s'articule avec{" "}
        <CrossLink pageKey="sionisme" navigate={navigate} /> et{" "}
        <CrossLink pageKey="inversion" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const SionismePage = ({ navigate }) => (
  <PageLayout
    title="Le piège du mot sionisme"
    subtitle="Un mot, trois définitions, une confusion volontaire"
    category="reconnaitre"
    navigate={navigate}
    pageKey="sionisme"
  >
    <Section title="Trois sens radicalement différents">
      <P>Le mot « sionisme » est devenu un instrument de confusion volontaire. Selon qui l'utilise, il désigne des réalités radicalement différentes :</P>
      <KeyPoint color={COLORS.reconnaitre} title="Sens 1 — Droit international" icon="1">
        Le soutien à l'existence de l'État d'Israël et à son droit à la sécurité — ce qui relève du droit international et du simple bon sens géopolitique. C'est la position de l'immense majorité des Juifs dans le monde, et de la plupart des démocraties.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="Sens 2 — Extrême droite israélienne" icon="2">
        Le soutien à l'expansion territoriale et à la colonisation intégrale de la Cisjordanie — ce qui est une position politique d'extrême droite israélienne, que beaucoup de Juifs et d'Israéliens eux-mêmes combattent activement.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Sens 3 — Fantasme antisémite" icon="3">
        Le soutien à une supposée « domination mondiale juive » — ce qui est un fantasme conspirationniste recyclé des Protocoles des Sages de Sion, et qui n'a rien à voir avec le sionisme réel.
      </KeyPoint>
      <P>Utiliser le même mot pour ces trois réalités n'est pas un accident. C'est un outil de disqualification : en rendant le mot « sioniste » synonyme de « génocidaire », on rend intenable la position de tout Juif qui souhaite simplement qu'Israël existe.</P>
    </Section>

    <Section title="Le test de loyauté">
      <P>Peut-on être Juif et anti-sioniste ? La question mérite d'être posée autrement : à quelle autre minorité demanderait-on de renoncer à soutenir l'existence de son pays d'origine ?</P>
      <P>Dirait-on à un Arménien : « Si tu soutiens l'Arménie, tu es complice de ses politiques » ? À un Irlandais : « Si tu soutiens l'indépendance de l'Irlande, tu es complice de l'IRA » ?</P>
      <P>Des Juifs anti-sionistes existent. Leur position est respectable. Mais exiger de tout Juif qu'il soit anti-sioniste pour être fréquentable revient à lui imposer un test de loyauté qu'on n'impose à personne d'autre.</P>
      <Quote
        text="À quelle autre minorité demanderait-on de renoncer à soutenir l'existence de son pays d'origine pour être jugée moralement acceptable ?"
        color={COLORS.reconnaitre}
      />
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce piège sémantique alimente{" "}
        <CrossLink pageKey="gauche" navigate={navigate} /> et{" "}
        <CrossLink pageKey="obsession" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const MemoirePage = ({ navigate }) => (
  <PageLayout
    title="La mémoire retournée"
    subtitle="Quand le souvenir de la Shoah devient une arme"
    category="reconnaitre"
    navigate={navigate}
    pageKey="memoire"
  >
    <Section title="Le paradoxe de la commémoration">
      <P>La Shoah est le génocide le mieux documenté, le plus enseigné, le plus commémoré de l'histoire. C'est un fait. Et ce fait, paradoxalement, est devenu un vecteur d'antisémitisme.</P>
      <P>Le reproche prend plusieurs formes, toutes révélatrices :</P>
    </Section>

    <Section title="Les quatre formes de retournement">
      <KeyPoint color={COLORS.mesurer} title="« Ils en font trop »" icon="1">
        On accuse les Juifs de « trop » commémorer, de saturer l'espace mémoriel, d'occuper une place disproportionnée dans l'enseignement de l'histoire. Comme si la mémoire d'un génocide de six millions de personnes avait une date d'expiration.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="« Ils instrumentalisent »" icon="2">
        La Shoah serait un outil politique — un bouclier permettant de faire taire toute critique d'Israël, un capital moral monnayable. L'idée que les Juifs « profitent » de leur propre extermination est d'une cruauté vertigineuse, mais elle est extraordinairement répandue.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="« Et nous ? »" icon="3">
        C'est la compétition victimaire. D'autres groupes — descendants d'esclaves, peuples colonisés, Arméniens, Rwandais — estiment, parfois à juste titre, que leur propre tragédie est insuffisamment reconnue. Mais au lieu d'exiger davantage de mémoire pour eux-mêmes, certains exigent moins de mémoire pour les Juifs. Comme si la mémoire était un gâteau à partager, et que la part des uns diminuait celle des autres.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="L'inversion victimaire" icon="4">
        Le stade ultime : transformer les victimes en bourreaux. « Les Juifs font aux Palestiniens ce que les nazis leur ont fait. » Cette comparaison, en plus d'être factuellement disproportionnée, a une fonction précise : elle annule la Shoah. Si les Juifs sont les nouveaux nazis, alors la dette morale est effacée, la culpabilité européenne est soldée, et on peut recommencer à les détester sans mauvaise conscience.
      </KeyPoint>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        L'inversion victimaire est un mécanisme central de{" "}
        <CrossLink pageKey="obsession" navigate={navigate} />.
        La compétition mémorielle alimente{" "}
        <CrossLink pageKey="gauche" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const SansJuifsPage = ({ navigate }) => (
  <PageLayout
    title="L'antisémitisme sans Juifs"
    subtitle="Un système de pensée autonome qui n'a pas besoin de sa cible"
    category="reconnaitre"
    navigate={navigate}
    pageKey="sans_juifs"
  >
    <Section title="La preuve par l'absence">
      <P>L'une des preuves les plus troublantes de la nature systémique de l'antisémitisme est sa capacité à prospérer en l'absence totale de Juifs. Ce fait, à lui seul, démontre que l'antisémitisme n'est pas une réaction à un vécu réel avec des personnes juives — c'est un système de pensée autonome, une grille de lecture du monde qui a besoin d'un ennemi invisible et tout-puissant.</P>
    </Section>

    <Section title="Trois cas emblématiques">
      <KeyPoint color={COLORS.reconnaitre} title="Pologne" icon="◉">
        Après la Shoah, il ne reste quasiment plus de communauté juive en Pologne. Pourtant, les sondages montrent des taux d'antisémitisme élevés. Les « Juifs » y sont un personnage conceptuel, un héritage culturel de défiance qui se transmet sans avoir besoin du moindre contact avec des personnes juives réelles.
      </KeyPoint>
      <KeyPoint color={COLORS.reconnaitre} title="Japon" icon="◉">
        Le Japon n'a jamais eu de population juive significative. Pourtant, les Protocoles des Sages de Sion sont un best-seller régulier, et l'idée d'un « complot juif mondial » a une audience réelle. L'antisémitisme y a été importé par les contacts avec l'Europe, et il fonctionne comme un système explicatif abstrait, sans aucun ancrage dans l'expérience.
      </KeyPoint>
      <KeyPoint color={COLORS.reconnaitre} title="Malaisie" icon="◉">
        Mahathir Mohamad, Premier ministre, a déclaré publiquement que « les Juifs gouvernent le monde par procuration » devant un sommet de l'Organisation de la conférence islamique — sous les applaudissements. La Malaisie n'a jamais eu de communauté juive. L'antisémitisme y est une importation idéologique pure, déconnectée de toute réalité locale.
      </KeyPoint>
    </Section>

    <Section title="Ce que cela démontre">
      <P>L'antisémitisme n'a pas besoin de Juifs. Il a besoin d'une explication au malheur du monde. Le « Juif » de l'antisémitisme est un personnage conceptuel, pas une personne réelle. C'est un système de pensée autonome, une cosmologie du complot qui a besoin d'un ennemi invisible pour fonctionner.</P>
      <P bold>C'est peut-être la démonstration la plus claire de la spécificité de l'antisémitisme : aucun autre racisme ne fonctionne en l'absence totale de sa cible.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce phénomène confirme la nature de{" "}
        <CrossLink pageKey="definition" navigate={navigate} /> et{" "}
        <CrossLink pageKey="matrice" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

// ============================================================
// CONTENT PAGES — MESURER
// ============================================================

const ExilPage = ({ navigate }) => (
  <PageLayout
    title="L'exil intérieur"
    subtitle="Le passing, l'autocensure, l'exode silencieux"
    category="mesurer"
    navigate={navigate}
    pageKey="exil"
  >
    <Section title="Vivre en se cachant">
      <P>Il y a une dimension de l'antisémitisme dont on ne parle presque jamais parce qu'elle est invisible par nature : le quotidien de ceux qui le subissent.</P>
      <P>En France, beaucoup de Juifs vivent en pratiquant ce que les sociologues appellent le « passing » — l'effacement volontaire des signes d'identité pour passer inaperçu. Enlever sa kippa dans le métro. Ne pas dire le nom de l'école de ses enfants. Franciser son prénom au travail. Éviter certains quartiers. Ne pas afficher sa mezouzah sur sa porte d'entrée. Dire « je suis d'origine polonaise » plutôt que « je suis juif ».</P>
      <P>Ce n'est pas de la paranoïa. C'est un calcul rationnel basé sur l'expérience. Et cette autocensure a un coût psychologique massif : vivre en dissimulant une partie de soi, c'est un exil intérieur permanent. On est chez soi, mais pas tout à fait. On est citoyen, mais en veille. On est libre, mais sous conditions.</P>
    </Section>

    <Section title="L'exode silencieux">
      <P>La France compte environ 500 000 Juifs — la troisième communauté mondiale. Depuis les années 2000, des dizaines de milliers ont quitté le pays, principalement pour Israël. Ce mouvement migratoire, dans un pays qui se dit patrie des droits de l'homme, devrait constituer un scandale national. Il est à peine mentionné.</P>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
          padding: "32px 0",
        }}
      >
        <NumberStat number="~500K" label="Juifs en France (3e communauté mondiale)" color={COLORS.mesurer} />
        <NumberStat number="~40%" label="des actes racistes visent les Juifs (<1% de la population)" color={COLORS.mesurer} />
        <NumberStat number="10K+" label="départs vers Israël depuis 2000" color={COLORS.mesurer} />
      </div>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        La violence qui motive cet exil est documentée dans{" "}
        <CrossLink pageKey="violence" navigate={navigate} />.
        Le signal d'alarme collectif dans{" "}
        <CrossLink pageKey="canari" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const ViolencePage = ({ navigate }) => (
  <PageLayout
    title="La violence réelle"
    subtitle="Halimi, Toulouse, Hyper Cacher — des chiffres et des noms"
    category="mesurer"
    navigate={navigate}
    pageKey="violence"
  >
    <Section title="Des chiffres qui parlent">
      <P>Proportionnellement à leur population (environ 500 000 en France, soit moins de 1% de la population), les Juifs subissent significativement plus d'actes racistes que toute autre communauté minoritaire. En France, les actes antisémites représentent souvent autour de 40% de l'ensemble des actes racistes, alors que les Juifs représentent moins de 1% de la population.</P>
      <P>La réponse habituelle — « les musulmans aussi subissent des actes racistes » — est vraie mais hors sujet. Les deux réalités ne sont pas en compétition. Cependant, en termes de ratio actes/population, la disproportion est massive et documentée par la CNCDH chaque année.</P>
    </Section>

    <Section title="La gravité spécifique">
      <P>Au-delà des chiffres, la nature des actes antisémites en France ces vingt dernières années frappe par sa violence. Ce ne sont pas des tags sur des murs. Ce sont des meurtres ciblés, des actes qui rappellent les pogroms :</P>
      <KeyPoint color={COLORS.mesurer} title="Ilan Halimi — 2006" icon="▲">
        Kidnappé par le « gang des barbares », torturé pendant trois semaines et laissé pour mort — parce que juif, donc « forcément riche ». Le fantasme du contrôle financier transformé en verdict de mort dans une cave de banlieue.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Toulouse — 2012" icon="▲">
        Mohamed Merah abat des enfants et un enseignant dans une école juive. Des enfants. Dans une école. Ciblés pour ce qu'ils sont.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Hyper Cacher — 2015" icon="▲">
        Deux jours après l'attentat de Charlie Hebdo, Amedy Coulibaly prend en otage et tue quatre personnes dans un supermarché casher. Ciblées spécifiquement parce que juives.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Sarah Halimi — 2017" icon="▲">
        Défenestrée par son voisin aux cris de « Allahu Akbar ». Son meurtrier a été déclaré pénalement irresponsable. L'affaire a provoqué une onde de choc dans la communauté juive française, renforçant le sentiment d'une justice qui faillit.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Mireille Knoll — 2018" icon="▲">
        Rescapée de la Shoah, 85 ans, poignardée et brûlée dans son appartement par deux hommes, dont un voisin qu'elle connaissait. Le retour de la violence antisémite la plus crue, contre les plus vulnérables.
      </KeyPoint>
    </Section>

    <Section title="Le poids de l'ordinaire">
      <P>Ces meurtres sont les cas les plus médiatisés. Mais ils s'inscrivent dans un continuum de violences quotidiennes moins visibles : insultes, menaces, agressions, dégradations de synagogues et de cimetières, harcèlement scolaire. Le rapport annuel de la CNCDH documente cette réalité année après année.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        L'impact quotidien dans{" "}
        <CrossLink pageKey="exil" navigate={navigate} />.
        Le signal politique dans{" "}
        <CrossLink pageKey="canari" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const CanariPage = ({ navigate }) => (
  <PageLayout
    title="Le canari dans la mine"
    subtitle="L'antisémitisme comme indicateur de santé démocratique"
    category="mesurer"
    navigate={navigate}
    pageKey="canari"
  >
    <Section title="La régularité historique">
      <P>Il existe une régularité historique troublante : quand l'antisémitisme monte dans une société, la société elle-même est en train de se dégrader. Les Juifs ne sont pas seulement des victimes — ils sont un indicateur. Le canari dans la mine de la démocratie.</P>
    </Section>

    <Section title="Les précédents historiques">
      <KeyPoint color={COLORS.comprendre} title="Allemagne de Weimar" icon="→">
        La montée de l'antisémitisme dans les années 1920 a précédé et annoncé l'effondrement démocratique des années 1930. L'antisémitisme n'était pas un épiphénomène — il était le symptôme d'une décomposition plus large.
      </KeyPoint>
      <KeyPoint color={COLORS.comprendre} title="France de l'affaire Dreyfus" icon="→">
        L'antisémitisme comme révélateur d'une crise institutionnelle profonde — la société française fracturée entre républicains et réactionnaires, entre modernité et tradition.
      </KeyPoint>
      <KeyPoint color={COLORS.comprendre} title="Russie pré-révolutionnaire" icon="→">
        Les pogroms comme symptôme d'un régime en décomposition, qui canalise le mécontentement populaire vers un bouc émissaire plutôt que de résoudre ses propres contradictions.
      </KeyPoint>
      <KeyPoint color={COLORS.comprendre} title="Autriche de Karl Lueger" icon="→">
        Maire antisémite de Vienne à la fin du XIXe siècle, dont Hitler s'est directement inspiré. L'antisémitisme municipal comme laboratoire du totalitarisme.
      </KeyPoint>
    </Section>

    <Section title="L'alerte contemporaine">
      <P>La raison est structurelle. L'antisémitisme est un symptôme de ce que les sociétés produisent quand elles sont en crise : le besoin d'un coupable. Quand les institutions vacillent, quand l'économie souffre, quand le tissu social se déchire, le réflexe du bouc émissaire s'active. Et les Juifs, pour les raisons décrites tout au long de ce guide — leur position d'entre-deux, leur visibilité-invisibilité, leur rôle de support projectif — sont toujours les premiers visés.</P>
      <Quote
        text="Ce qui commence par les Juifs ne finit jamais par les Juifs."
        color={COLORS.mesurer}
      />
      <P bold>Ce qui devrait inquiéter au-delà de la communauté juive : la montée actuelle des actes antisémites en France et en Europe n'est pas seulement un problème pour les Juifs. C'est un signal d'alarme pour tout le monde.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Le mécanisme du bouc émissaire dans{" "}
        <CrossLink pageKey="bouc" navigate={navigate} />.
        La violence concrète dans{" "}
        <CrossLink pageKey="violence" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

const ExceptionPage = ({ navigate }) => (
  <PageLayout
    title="L'exception géopolitique"
    subtitle="Le seul État au monde dont l'existence fait débat"
    category="mesurer"
    navigate={navigate}
    pageKey="exception"
  >
    <Section title="Une question simple">
      <P>Posons une question simple : combien d'États voient leur droit à exister remis en question dans le débat international ? La réponse est un. Israël.</P>
    </Section>

    <Section title="La comparaison qui éclaire">
      <KeyPoint color={COLORS.mesurer} title="Pakistan (1947)" icon="▲">
        Créé par une partition sanglante qui a déplacé 15 millions de personnes et tué entre un et deux millions d'individus. Personne ne remet en question le droit du Pakistan à exister.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Jordanie" icon="▲">
        Découpée artificiellement par les Britanniques sur un territoire qui n'avait jamais constitué un État historique. Son existence n'est jamais questionnée.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="USA, Canada, Australie" icon="▲">
        Fondés sur la dépossession, le déplacement et souvent le génocide de peuples autochtones. Personne ne propose de les dissoudre.
      </KeyPoint>
      <P>Israël, fondé en 1948, est le seul État au monde dont le droit à l'existence fait l'objet d'un débat permanent dans les instances internationales, les campus universitaires et les manifestations de rue.</P>
    </Section>

    <Section title="La charge de la preuve inversée">
      <P>On peut trouver la politique des gouvernements israéliens détestable. On peut condamner la colonisation de la Cisjordanie. On peut défendre un État palestinien. Mais « à bas Israël » et « à bas la politique d'Israël » ne sont pas la même phrase — et la première implique que les sept millions de Juifs qui y vivent devraient aller... où exactement ?</P>
      <KeyPoint color={COLORS.mesurer} title="La question décisive" icon="▲">
        Quand cette exigence de dissolution ne s'applique qu'à un seul État, et que cet État est le seul État juif au monde, la charge de la preuve s'inverse : c'est à ceux qui tiennent cette position d'expliquer pourquoi leur standard ne s'applique qu'ici.
      </KeyPoint>
    </Section>

    <Section title="L'instrumentalisation par certains gouvernements">
      <P>Il faut aborder ce point avec honnêteté : certains gouvernements israéliens, notamment sous Netanyahou, instrumentalisent l'accusation d'antisémitisme pour faire taire toute critique légitime. Cela a un effet pervers : en criant au loup trop souvent, on décrédibilise l'accusation quand elle est fondée. Cette instrumentalisation est elle-même un problème — mais elle ne rend pas l'antisémitisme moins réel. Les deux phénomènes coexistent.</P>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        L'obsession sélective dans{" "}
        <CrossLink pageKey="obsession" navigate={navigate} />.
        Le piège sémantique dans{" "}
        <CrossLink pageKey="sionisme" navigate={navigate} />.
      </span>
    </KeyPoint>
  </PageLayout>
);

// ============================================================
// RESSOURCES PAGE
// ============================================================

const ResourceCard2 = ({ title, author, desc, color }) => {
  const [h, setH] = useState(false);
  return (
    <div
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        background: COLORS.surface,
        border: `1px solid ${h ? (color || COLORS.ressources) + "30" : COLORS.border}`,
        borderRadius: "12px",
        padding: "22px 24px",
        marginBottom: "12px",
        transition: "all 0.2s",
        borderLeft: `4px solid ${color || COLORS.ressources}`,
      }}
    >
      <h4
        style={{
          color: COLORS.text,
          fontSize: "16px",
          margin: "0 0 4px",
          fontWeight: 700,
        }}
      >
        {title}
      </h4>
      <p
        style={{
          color: color || COLORS.ressources,
          fontSize: "13px",
          margin: "0 0 8px",
          fontWeight: 700,
        }}
      >
        {author}
      </p>
      <p
        style={{
          color: COLORS.textSecondary,
          fontSize: "14px",
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        {desc}
      </p>
    </div>
  );
};

const RessourcesPage = ({ navigate }) => (
  <PageLayout
    title="Ressources"
    subtitle="Ouvrages, études, rapports pour aller plus loin"
    category="ressources"
    navigate={navigate}
    pageKey="ressources"
  >
    <Section title="Ouvrages fondamentaux">
      <ResourceCard2
        title="Réflexions sur la question juive"
        author="Jean-Paul Sartre (1946)"
        desc="L'une des premières analyses structurelles de l'antisémitisme comme projection, pas comme réaction. Sartre montre que l'antisémite a besoin du Juif, et que l'antisémitisme est une passion, pas une opinion."
      />
      <ResourceCard2
        title="Les origines du totalitarisme"
        author="Hannah Arendt (1951)"
        desc="L'antisémitisme comme composante structurelle de l'effondrement des démocraties européennes. Arendt analyse le passage de l'antisémitisme social à l'antisémitisme politique, puis génocidaire."
      />
      <ResourceCard2
        title="Le bouc émissaire"
        author="René Girard (1982)"
        desc="La théorie du mécanisme victimaire appliquée aux persécutions. Girard explique pourquoi les sociétés en crise ont structurellement besoin d'un bouc émissaire, et pourquoi les Juifs occupent cette position."
      />
      <ResourceCard2
        title="Antisemitism: Here and Now"
        author="Deborah Lipstadt (2019)"
        desc="Analyse des formes contemporaines de l'antisémitisme, de gauche comme de droite. Lipstadt distingue l'antisémitisme intentionnel de l'antisémitisme « soft » — celui qui ne se reconnaît pas comme tel."
      />
      <ResourceCard2
        title="People Love Dead Jews"
        author="Dara Horn (2021)"
        desc="Essai incisif sur la façon dont le monde préfère les Juifs victimes aux Juifs vivants. Horn montre comment la commémoration de la Shoah peut coexister avec l'indifférence — voire l'hostilité — envers les Juifs vivants."
      />
      <ResourceCard2
        title="La question juive en Europe"
        author="Karl Marx (1843)"
        desc="Un texte ambivalent mais fondateur. Marx, lui-même d'origine juive, inaugure une tradition de critique de gauche qui, déformée, alimentera l'antisémitisme de gauche pendant deux siècles."
      />
    </Section>

    <Section title="Études et rapports">
      <ResourceCard2
        title="Rapport annuel sur le racisme et l'antisémitisme"
        author="CNCDH (Commission nationale consultative des droits de l'homme)"
        desc="Données statistiques sur les actes antisémites en France, publiées annuellement. La source de référence pour mesurer l'évolution de l'antisémitisme en France."
        color={COLORS.comprendre}
      />
      <ResourceCard2
        title="Antisemitism Worldwide Report"
        author="Centre Kantor, Université de Tel Aviv"
        desc="Le rapport de référence mondial sur l'état de l'antisémitisme. Couvre tous les continents et documente les tendances annuelles avec une méthodologie rigoureuse."
        color={COLORS.comprendre}
      />
      <ResourceCard2
        title="Définition de travail de l'antisémitisme"
        author="IHRA (International Holocaust Remembrance Alliance)"
        desc="La définition de travail de l'antisémitisme la plus utilisée internationalement, avec ses exemples concrets. Adoptée par de nombreux pays et institutions."
        color={COLORS.comprendre}
      />
    </Section>

    <Section title="Naviguer dans ce guide">
      <P>Ce guide est structuré en quatre catégories complémentaires, conçues comme un parcours de lecture :</P>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {["comprendre", "deconstruire", "reconnaitre", "mesurer"].map(
          (catKey) => {
            const cat = CATEGORIES[catKey];
            const pages = getCategoryPages(catKey);
            return (
              <div
                key={catKey}
                onClick={() => navigate(pages[0]?.key)}
                style={{
                  background: cat.bg,
                  border: `1px solid ${cat.color}20`,
                  borderRadius: "12px",
                  padding: "20px",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.2s",
                }}
              >
                <div
                  style={{
                    fontSize: "20px",
                    color: cat.color,
                    marginBottom: "8px",
                  }}
                >
                  {cat.icon}
                </div>
                <h4
                  style={{
                    color: cat.color,
                    fontSize: "15px",
                    margin: "0 0 4px",
                    fontWeight: 700,
                  }}
                >
                  {cat.label}
                </h4>
                <p
                  style={{
                    color: COLORS.textMuted,
                    fontSize: "12px",
                    margin: 0,
                  }}
                >
                  {pages.length} articles
                </p>
              </div>
            );
          }
        )}
      </div>
    </Section>
  </PageLayout>
);

// ============================================================
// FAQ PAGE — « Je ne suis pas antisémite, mais… »
// ============================================================

const FAQ_ITEMS = [
  {
    phrase: "On ne peut être juif que si on est de parents juifs. Ils n'acceptent personne, leur communauté est impénétrable.",
    mecanisme: "Accusation de communautarisme",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "C'est factuellement faux. La conversion au judaïsme existe depuis l'Antiquité — Ruth, l'arrière-grand-mère du roi David dans la Bible, est une convertie. La procédure est exigeante (étude, engagement devant un tribunal rabbinique, souvent un à trois ans de préparation), mais elle est ouverte.",
      "Ce qui est vrai, c'est que le judaïsme ne fait pas de prosélytisme. Il ne cherche pas à recruter. C'est une différence fondamentale avec le christianisme et l'islam, qui ont une vocation missionnaire. Ne pas chercher à convertir les autres n'est pas « refuser les gens » — c'est simplement une conception différente de la religion.",
      "La transmission maternelle (matrilinéarité) existe dans le judaïsme orthodoxe, mais elle coexiste avec la conversion et avec le judaïsme libéral et massorti qui reconnaissent aussi la patrilinéarité. Le judaïsme n'est pas monolithique.",
      "Et surtout : on ne reproche jamais aux Amish, aux Druzes, aux Yézidis ou aux moines bouddhistes d'avoir des règles d'appartenance strictes. Ce reproche n'est fait qu'aux Juifs — ce qui devrait interroger sur sa motivation réelle.",
    ],
    liens: ["contradiction", "philosemitisme"],
  },
  {
    phrase: "Ils s'entraident entre eux et n'aident pas les autres. Ils se privilégient et donc discriminent tout le reste. Ils nous considèrent comme des goys, à exploiter.",
    mecanisme: "Du philosémitisme au fantasme du contrôle",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "La solidarité communautaire existe chez les Juifs — comme dans toute diaspora qui a survécu à des siècles de persécution. Les Arméniens, les Chinois d'outre-mer, les Libanais, les Coréens font exactement la même chose. Mais personne ne dit « les Arméniens s'embauchent entre eux » avec le même sous-entendu sinistre.",
      "Le glissement est révélateur : « ils s'entraident » (constat neutre) → « ils ne s'occupent que d'eux » (accusation) → « ils exploitent les autres » (paranoïa). C'est le passage du philosémitisme à l'antisémitisme — un simple changement d'éclairage sur la même image.",
      "Le mot « goy » signifie simplement « nation » en hébreu (au pluriel : goyim, « les nations »). Son usage courant est descriptif et neutre — il désigne les non-juifs, comme « laïc » désigne les non-religieux. L'idée que les Juifs considèrent les non-juifs comme des êtres à exploiter est un recyclage direct des Protocoles des Sages de Sion, un faux antisémite fabriqué en 1903.",
      "Enfin, les organisations caritatives juives (American Jewish World Service, Joint Distribution Committee, etc.) sont parmi les plus actives au monde dans l'aide humanitaire non confessionnelle. Le FSJU en France finance des actions sociales ouvertes à tous. Mais ces faits sont invisibles pour qui a déjà décidé de sa conclusion.",
    ],
    liens: ["philosemitisme", "controle"],
  },
  {
    phrase: "Le collectif Nous Vivrons est une association pro-israélienne sioniste génocidaire. Quand ils viennent perturber des réunions LFI, ce sont des sionistes génocidaires.",
    mecanisme: "Chaîne de syllogismes et double allégeance",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Nous Vivrons est un collectif créé après le 7 octobre 2023 par des Juifs français pour lutter contre l'antisémitisme en France. Qualifier cette démarche de « pro-israélienne sioniste génocidaire », c'est dérouler une chaîne de syllogismes abusifs : association juive → donc pro-israélienne → donc sioniste → donc génocidaire. Chaque « donc » est un raccourci qui ne résiste pas à l'examen.",
      "Le mécanisme est précisément celui du piège du mot sionisme : en rendant « sioniste » synonyme de « génocidaire », on rend intenable la position de tout Juif qui refuse de se taire face à l'antisémitisme. Si dénoncer la haine antijuive fait de vous un « sioniste génocidaire », alors le silence est la seule option autorisée.",
      "L'idée que des Juifs français qui manifestent « perturbent » la vie politique française est elle-même un trope : c'est l'accusation de double allégeance, l'idée que le Juif est un agent d'une puissance étrangère qui n'a pas sa place dans le débat national. C'est exactement ce qu'on reprochait à Dreyfus.",
      "On peut être en désaccord avec les méthodes d'un collectif. Mais qualifier de « génocidaires » des gens qui dénoncent l'antisémitisme, c'est retourner le mot le plus grave contre ceux qui rappellent qu'ils sont visés par la haine. C'est l'inversion victimaire en acte.",
    ],
    liens: ["sionisme", "gauche", "memoire"],
  },
  {
    phrase: "Je ne suis pas antisémite, je suis antisioniste.",
    mecanisme: "Le piège sémantique",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Tout dépend de ce qu'on met derrière « antisioniste ». Si c'est critiquer la politique de colonisation en Cisjordanie, les bombardements de Gaza ou les dérives autoritaires de Netanyahou — c'est de la critique politique, parfaitement légitime, et des millions d'Israéliens la partagent.",
      "Si c'est estimer qu'Israël n'a pas le droit d'exister en tant qu'État — alors la question est : pourquoi cet État-là et pas un autre ? Le Pakistan, la Jordanie, l'Australie ont été créés dans des conditions au moins aussi contestables. Si l'exigence de dissolution ne s'applique qu'au seul État juif, il faut s'interroger sur ce qui motive cette exception.",
      "Le problème n'est pas le mot « antisioniste » — c'est l'usage qu'on en fait. Quand « sioniste » devient une insulte qui désigne tout Juif qui ne condamne pas Israël, quand « antisionisme » sert à recycler les tropes classiques (contrôle, complot, double allégeance) avec un vocabulaire acceptable — alors l'antisionisme fonctionne comme un véhicule de l'antisémitisme, que son porteur en ait conscience ou non.",
      "Le test est simple : remplacez « sioniste » par « juif » dans la phrase. Si elle devient manifestement antisémite, c'est qu'elle l'était déjà.",
    ],
    liens: ["sionisme", "obsession", "gauche"],
  },
  {
    phrase: "Pourquoi on parle toujours de la Shoah ? D'autres peuples ont souffert aussi.",
    mecanisme: "Compétition victimaire et mémoire retournée",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "D'autres peuples ont souffert, c'est vrai. L'esclavage, les génocides arménien, rwandais, la colonisation — ces tragédies méritent davantage de reconnaissance et d'enseignement. Mais la solution n'est pas moins de mémoire pour les uns — c'est davantage de mémoire pour tous. La mémoire n'est pas un gâteau à partager.",
      "Si la Shoah est autant enseignée, c'est parce qu'elle a eu lieu au cœur de l'Europe, commise par l'un des pays les plus « civilisés » du monde, avec une bureaucratie industrielle, et qu'elle a été documentée par les bourreaux eux-mêmes. C'est aussi parce que des survivants se sont battus pendant des décennies pour qu'elle ne soit pas oubliée — ce qu'on devrait admirer, pas reprocher.",
      "L'irritation face à cette mémoire est rarement un simple appel à l'équité mémorielle. Elle masque souvent un reproche plus profond : celui que les Juifs « en font trop », qu'ils « instrumentalisent », qu'ils occupent trop d'espace. C'est un mécanisme qui transforme les victimes d'un génocide en accusés.",
      "Demandez-vous : avez-vous déjà milité pour que le génocide arménien ou le génocide rwandais soit davantage enseigné ? Si oui, votre demande est légitime. Si cette exigence de mémoire ne s'active que pour demander moins de Shoah — alors ce n'est pas de l'équité, c'est du ressentiment.",
    ],
    liens: ["memoire", "contradiction"],
  },
  {
    phrase: "Ils sont partout — dans les médias, la finance, la politique.",
    mecanisme: "Fantasme du contrôle et biais de confirmation",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Certains individus juifs occupent des postes visibles dans les médias, la finance ou la politique. Comme des individus bretons, protestants, énarques ou corses. Transformer une observation statistique en preuve d'un complot coordonné, c'est le mécanisme conspirationniste par excellence.",
      "Quand Patrick Drahi (juif) possède un média, sa judéité est immédiatement relevée. Quand Vincent Bolloré (catholique) en possède plusieurs, son appartenance religieuse n'est jamais mentionnée. C'est la définition du biais de confirmation : on ne retient que les données qui confirment le préjugé.",
      "Cette surreprésentation dans certains secteurs, quand elle existe, a une explication historique : exclus de la propriété terrienne et de la plupart des métiers par les guildes médiévales pendant des siècles, les Juifs se sont tournés vers le commerce, la finance et les professions intellectuelles — les seuls domaines qu'on leur autorisait. Les punir aujourd'hui pour leur adaptation à l'exclusion est un paradoxe cruel.",
      "On ne dit pas « les Bretons contrôlent la marine » ou « les protestants contrôlent la finance suisse ». On ne le dit que des Juifs, parce que derrière l'observation, il y a un cadre narratif préexistant — celui du complot — qui ne demande qu'à être alimenté.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "Ils ont bien dû faire quelque chose pour être détestés partout depuis si longtemps.",
    mecanisme: "Inversion de la culpabilité",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "C'est l'argument le plus pernicieux, parce qu'il a l'apparence du bon sens. Mais appliqué à n'importe quelle autre situation, il s'effondre : « Les femmes battues ont bien dû faire quelque chose pour provoquer leur conjoint. » « Les Noirs en Amérique ont bien dû faire quelque chose pour être esclaves. » Personne ne tiendrait ces raisonnements — mais on le fait pour les Juifs.",
      "Cet argument inverse la charge de la preuve : au lieu d'examiner les mécanismes de la persécution, il demande aux persécutés de justifier pourquoi ils sont persécutés. C'est le principe même du bouc émissaire : la victime est toujours « coupable de quelque chose ».",
      "L'universalité de la haine antijuive ne prouve pas que les Juifs sont coupables de quelque chose — elle prouve que l'antisémitisme est un système de pensée autonome, capable de fonctionner dans n'importe quel contexte, y compris en l'absence totale de Juifs (Pologne, Japon, Malaisie).",
      "La persistance de l'antisémitisme s'explique par sa structure, pas par sa cible : c'est un système explicatif total qui fournit un coupable commode à chaque crise. Le Juif n'est pas haï pour ce qu'il fait — il est haï pour la fonction qu'il remplit dans l'imaginaire collectif.",
    ],
    liens: ["bouc", "sans_juifs", "definition"],
  },
  {
    phrase: "Critiquer Israël, c'est pas de l'antisémitisme, faut arrêter !",
    mecanisme: "L'homme de paille",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Personne de sérieux ne dit que critiquer Israël est antisémite. Critiquer la colonisation de la Cisjordanie, les bombardements de Gaza, la politique de Netanyahou — c'est de la critique politique, et c'est parfaitement légitime. Des millions d'Israéliens le font eux-mêmes, et les plus grandes manifestations anti-Netanyahou ont lieu à Tel Aviv.",
      "Le problème n'est pas la critique. Le problème, c'est quand la critique d'un État devient la délégitimation d'un peuple. Quand on passe de « la politique d'Israël est condamnable » à « Israël ne devrait pas exister ». Quand on demande à chaque Juif français de « prendre position » sur Gaza pour avoir le droit de dîner en paix — une injonction qu'on ne fait à aucune autre diaspora.",
      "Cette phrase fonctionne comme un homme de paille : elle combat une position que personne ne tient (« toute critique est antisémite ») pour éviter d'examiner la position réelle (« certaines critiques recyclent des tropes antisémites »). C'est un bouclier rhétorique qui permet de ne jamais s'interroger sur ses propres préjugés.",
      "Le vrai test : appliquez-vous à Israël un standard que vous n'appliquez à aucun autre pays ? Demandez-vous aux Russes de se désolidariser de Poutine pour être fréquentables ? Aux Chinois de condamner le PCC ? Si votre standard ne s'applique qu'à Israël, la question mérite d'être posée.",
    ],
    liens: ["obsession", "exception", "sionisme"],
  },
  {
    phrase: "Les Juifs sont intelligents, doués pour les affaires. C'est un compliment !",
    mecanisme: "Philosémitisme toxique",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "C'est le piège le mieux intentionné. Dire « les Juifs sont intelligents », c'est attribuer à un groupe entier une caractéristique unique — c'est de l'essentialisation, exactement le même mécanisme que le racisme, mais avec le signe positif.",
      "Et le compliment bascule avec une facilité déconcertante : « intelligents » → « rusés ». « Doués pour les affaires » → « ils contrôlent la finance ». « Solidaires » → « ils s'embauchent entre eux ». L'admiration fascinée et la haine paranoïaque partagent la même prémisse : les Juifs ne sont pas des gens ordinaires.",
      "C'est exactement ce qui distingue l'antisémitisme des autres racismes : il ne méprise pas sa cible, il la craint. « Ils sont intelligents » contient déjà, en germe, « ils sont dangereux ». La distance entre les deux est plus courte qu'on ne le croit.",
      "Admirer « les Juifs » en tant que groupe, c'est déjà les avoir sortis de l'humanité commune. Le vrai antidote au préjugé, ce n'est pas l'admiration — c'est l'indifférence à l'origine. Juger les gens comme des individus, pas comme les représentants d'un groupe.",
    ],
    liens: ["philosemitisme", "controle", "inversion"],
  },
  {
    phrase: "Israël fait aux Palestiniens ce que les nazis leur ont fait.",
    mecanisme: "Inversion victimaire",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "La situation des Palestiniens est tragique et la politique de certains gouvernements israéliens est condamnable. Mais la comparaison avec le nazisme est factuellement disproportionnée et moralement calculée.",
      "Le nazisme visait l'extermination totale et systématique d'un peuple — six millions de morts dans des chambres à gaz industrielles, sans aucune provocation militaire. Aucun historien sérieux ne soutient l'équivalence avec le conflit israélo-palestinien, aussi brutal soit-il. Utiliser cette comparaison, ce n'est pas décrire une réalité — c'est mobiliser le symbole le plus douloureux de l'histoire juive pour le retourner contre les Juifs.",
      "Cette inversion a une fonction précise : elle annule la Shoah. Si les Juifs sont « les nouveaux nazis », alors la dette morale est effacée, la culpabilité européenne est soldée, et on peut recommencer à les détester sans mauvaise conscience. C'est le stade ultime de la mémoire retournée.",
      "On peut condamner les bombardements de Gaza, défendre les droits des Palestiniens, dénoncer la colonisation — sans comparer Israël au IIIe Reich. Le vocabulaire de la critique politique existe. Choisir précisément celui-là, c'est chercher à blesser, pas à analyser.",
    ],
    liens: ["memoire", "obsession"],
  },
  {
    phrase: "Le CRIF dicte la politique française.",
    mecanisme: "Fantasme du contrôle / lobby juif",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Le CRIF (Conseil représentatif des institutions juives de France) est un organe de représentation communautaire, comme le CFCM (Conseil français du culte musulman), la Conférence des évêques de France ou le Consistoire protestant. Il organise un dîner annuel auquel les politiques se rendent — comme ils se rendent au dîner du CFCM ou aux événements de l'épiscopat.",
      "L'idée que le CRIF « dicte » la politique française est un recyclage du fantasme du lobby juif tout-puissant. La France a voté régulièrement contre Israël à l'ONU. Macron a critiqué publiquement Netanyahou. La politique étrangère française est structurellement pro-arabe depuis de Gaulle. Si le CRIF « dictait » quoi que ce soit, ça se saurait.",
      "Le mécanisme est toujours le même : quand une organisation juive exerce une influence normale (lobbying, communication, événements), elle est accusée de « contrôler ». Quand n'importe quelle autre organisation fait la même chose — le MEDEF, les syndicats agricoles, l'industrie pharmaceutique — c'est du lobbying ordinaire.",
      "La question à se poser : utiliseriez-vous le mot « dicter » pour décrire l'influence du CFCM, de la FNSEA ou du MEDEF sur la politique française ? Si le mot ne vous vient que pour une organisation juive, c'est que le fantasme du contrôle est déjà à l'œuvre.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "Un Juif est toujours plus solidaire d'Israël que de la France.",
    mecanisme: "Accusation de double allégeance",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "C'est l'un des plus vieux tropes antisémites : le Juif comme étranger perpétuel, incapable de vraie loyauté envers son pays. C'est l'accusation qui a condamné Dreyfus. C'est celle qui a justifié les expulsions médiévales. C'est celle qui alimente le « retournez chez vous » — adressé à des familles françaises depuis des générations.",
      "Un Franco-Algérien qui soutient l'équipe d'Algérie au football n'est pas accusé de traîtrise. Un Franco-Portugais qui envoie de l'argent à sa famille au Portugal n'est pas soupçonné de double allégeance. Un Franco-Irlandais qui soutient la réunification irlandaise n'est pas sommé de choisir. Mais un Juif français qui se soucie du sort d'Israël est immédiatement suspect.",
      "L'attachement de beaucoup de Juifs français à Israël n'est pas différent de l'attachement de toute diaspora à son pays d'origine ou à un État qui représente une assurance existentielle après des siècles de persécution. Ce n'est pas de la « double allégeance » — c'est de la mémoire et de la prudence.",
      "Et surtout : cette accusation crée un piège. Si le Juif affirme sa francité, on lui reproche de se dissimuler. S'il affirme son lien avec Israël, on lui reproche sa déloyauté. C'est l'accusation contradictoire en action — quoi qu'il fasse, il est coupable.",
    ],
    liens: ["contradiction", "exil", "exception"],
  },
];

const FaqItem = ({ item, index, navigate, isOpen, onToggle }) => {
  const cat = item.mecanismeColor;

  return (
    <div
      style={{
        background: COLORS.surface,
        border: `1px solid ${isOpen ? cat + "40" : COLORS.border}`,
        borderRadius: "12px",
        marginBottom: "16px",
        overflow: "hidden",
        transition: "all 0.3s",
        boxShadow: isOpen ? `0 4px 20px ${COLORS.shadow}` : "none",
      }}
    >
      {/* Header — the phrase */}
      <div
        onClick={onToggle}
        style={{
          padding: "24px 28px",
          cursor: "pointer",
          display: "flex",
          alignItems: "flex-start",
          gap: "16px",
          background: isOpen ? cat + "06" : "transparent",
          transition: "background 0.2s",
        }}
      >
        <span
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "8px",
            background: cat + "15",
            color: cat,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 800,
            flexShrink: 0,
            marginTop: "2px",
          }}
        >
          {index + 1}
        </span>
        <div style={{ flex: 1 }}>
          <p
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "17px",
              fontStyle: "italic",
              color: COLORS.text,
              lineHeight: 1.6,
              margin: 0,
            }}
          >
            « {item.phrase} »
          </p>
          <div
            style={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                display: "inline-block",
                padding: "3px 10px",
                borderRadius: "6px",
                background: cat + "12",
                color: cat,
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.3px",
                textTransform: "uppercase",
              }}
            >
              {item.mecanisme}
            </span>
          </div>
        </div>
        <span
          style={{
            fontSize: "20px",
            color: COLORS.textMuted,
            transition: "transform 0.3s",
            transform: isOpen ? "rotate(180deg)" : "none",
            flexShrink: 0,
            marginTop: "4px",
          }}
        >
          ▾
        </span>
      </div>

      {/* Body — the deconstruction */}
      {isOpen && (
        <div
          style={{
            padding: "0 28px 28px",
            paddingLeft: "76px",
            borderTop: `1px solid ${COLORS.borderLight}`,
          }}
        >
          <div style={{ paddingTop: "24px" }}>
            {item.reponse.map((para, i) => (
              <p
                key={i}
                style={{
                  color: COLORS.textSecondary,
                  fontSize: "15px",
                  lineHeight: 1.85,
                  marginBottom: i < item.reponse.length - 1 ? "14px" : "0",
                }}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Cross-links */}
          {item.liens && item.liens.length > 0 && (
            <div
              style={{
                marginTop: "20px",
                paddingTop: "16px",
                borderTop: `1px dashed ${COLORS.border}`,
                display: "flex",
                flexWrap: "wrap",
                gap: "8px",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  color: COLORS.textMuted,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                Pour aller plus loin :
              </span>
              {item.liens.map((lien) => {
                const page = PAGES[lien];
                if (!page) return null;
                const linkCat = page.category ? CATEGORIES[page.category] : null;
                return (
                  <span
                    key={lien}
                    onClick={() => navigate(lien)}
                    style={{
                      padding: "4px 12px",
                      borderRadius: "6px",
                      background: (linkCat?.color || COLORS.accent) + "10",
                      color: linkCat?.color || COLORS.accent,
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    {page.title}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const FaqPage = ({ navigate }) => {
  const [openItems, setOpenItems] = useState({});

  const toggle = (i) =>
    setOpenItems((prev) => ({ ...prev, [i]: !prev[i] }));

  const openAll = () => {
    const all = {};
    FAQ_ITEMS.forEach((_, i) => { all[i] = true; });
    setOpenItems(all);
  };

  const closeAll = () => setOpenItems({});

  return (
    <div style={{ paddingTop: "48px", paddingBottom: "60px" }}>
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          padding: "4px 12px",
          borderRadius: "6px",
          background: COLORS.deconstruire + "10",
          color: COLORS.deconstruire,
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "0.5px",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        ⬡ Déconstruire en pratique
      </div>
      <h1
        style={{
          fontFamily: "'Inter', -apple-system, sans-serif",
          fontSize: "42px",
          color: COLORS.text,
          fontWeight: 800,
          marginBottom: "12px",
          lineHeight: 1.15,
          letterSpacing: "-1px",
        }}
      >
        « Je ne suis pas antisémite, mais… »
      </h1>
      <p
        style={{
          color: COLORS.textSecondary,
          fontSize: "19px",
          marginBottom: "16px",
          lineHeight: 1.6,
          maxWidth: "700px",
        }}
      >
        12 phrases courantes, entendues au dîner, au bureau, sur les réseaux — déconstruites une par une. Pas pour accuser, mais pour comprendre ce qui se joue derrière les mots.
      </p>
      <p
        style={{
          color: COLORS.textMuted,
          fontSize: "15px",
          marginBottom: "40px",
          lineHeight: 1.7,
          maxWidth: "640px",
        }}
      >
        Chaque phrase est reliée aux mécanismes analysés dans le reste du guide.
        Cliquez sur une phrase pour lire sa déconstruction.
      </p>

      {/* Open/Close all */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "24px",
        }}
      >
        <button
          onClick={openAll}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface,
            color: COLORS.textSecondary,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Tout déplier
        </button>
        <button
          onClick={closeAll}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            border: `1px solid ${COLORS.border}`,
            background: COLORS.surface,
            color: COLORS.textSecondary,
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Tout replier
        </button>
      </div>

      {FAQ_ITEMS.map((item, i) => (
        <FaqItem
          key={i}
          item={item}
          index={i}
          navigate={navigate}
          isOpen={!!openItems[i]}
          onToggle={() => toggle(i)}
        />
      ))}

      {/* Bottom note */}
      <div
        style={{
          marginTop: "48px",
          padding: "32px",
          background: COLORS.bgAlt,
          borderRadius: "12px",
          border: `1px solid ${COLORS.border}`,
        }}
      >
        <h3
          style={{
            fontSize: "16px",
            fontWeight: 700,
            color: COLORS.text,
            marginBottom: "12px",
          }}
        >
          Une phrase vous interpelle ?
        </h3>
        <p
          style={{
            color: COLORS.textSecondary,
            fontSize: "15px",
            lineHeight: 1.8,
            margin: 0,
          }}
        >
          Si vous avez entendu — ou prononcé — certaines de ces phrases, ce n'est pas un verdict.
          L'antisémitisme fonctionne par des mécanismes culturels profonds que nous absorbons sans en avoir conscience.
          Reconnaître un mécanisme, ce n'est pas s'accuser — c'est commencer à s'en libérer.
          Chaque phrase de cette page renvoie vers les articles du guide qui analysent le mécanisme sous-jacent en profondeur.
        </p>
      </div>
    </div>
  );
};

// ============================================================
// MAIN APP
// ============================================================

const PAGE_MAP = {
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

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const navigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const PageComponent = PAGE_MAP[currentPage] || HomePage;

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

      <Nav currentPage={currentPage} navigate={navigate} />

      <div
        style={{
          maxWidth: "960px",
          margin: "0 auto",
          padding: "0 32px",
        }}
      >
        <PageComponent navigate={navigate} />
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
