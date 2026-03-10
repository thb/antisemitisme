import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { CATEGORIES } from "../data/categories";
import { PAGES, getCategoryPages } from "../data/pages";
import { Card, NumberStat, Btn } from "../components/ui";
import type { CategoryKey } from "../data/types";

export const HomePage = () => {
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
          <Link to="/definition" style={{ textDecoration: "none" }}>
            <Btn primary>Commencer la lecture</Btn>
          </Link>
          <Link to="/contradiction" style={{ textDecoration: "none" }}>
            <Btn>Explorer les mécanismes</Btn>
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
        <Card pageKey="ressources" page={PAGES.ressources} />
      </div>

      {/* FAQ banner */}
      <Link to="/faq" style={{ textDecoration: "none" }}>
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
