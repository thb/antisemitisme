import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { CATEGORIES } from "../data/categories";
import { getCategoryPages, getPagePath } from "../data/pages";
import { Section, P } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import type { CategoryKey } from "../data/types";

const ResourceCard2 = ({ title, author, desc, color }: { title: string; author: string; desc: string; color?: string }) => {
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
      <h4 style={{ color: COLORS.text, fontSize: "16px", margin: "0 0 4px", fontWeight: 700 }}>{title}</h4>
      <p style={{ color: color || COLORS.ressources, fontSize: "13px", margin: "0 0 8px", fontWeight: 700 }}>{author}</p>
      <p style={{ color: COLORS.textSecondary, fontSize: "14px", lineHeight: 1.6, margin: 0 }}>{desc}</p>
    </div>
  );
};

export const RessourcesPage = () => (
  <PageLayout
    title="Ressources"
    subtitle="Ouvrages, études, rapports pour aller plus loin"
    category="ressources"
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
        {(["comprendre", "deconstruire", "reconnaitre", "mesurer"] as CategoryKey[]).map(
          (catKey) => {
            const cat = CATEGORIES[catKey];
            const pages = getCategoryPages(catKey);
            const firstPage = pages[0];
            return (
              <Link
                key={catKey}
                to={firstPage ? getPagePath(firstPage.key) : "/"}
                style={{ textDecoration: "none" }}
              >
                <div
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
                  <div style={{ fontSize: "20px", color: cat.color, marginBottom: "8px" }}>
                    {cat.icon}
                  </div>
                  <h4 style={{ color: cat.color, fontSize: "15px", margin: "0 0 4px", fontWeight: 700 }}>
                    {cat.label}
                  </h4>
                  <p style={{ color: COLORS.textMuted, fontSize: "12px", margin: 0 }}>
                    {pages.length} articles
                  </p>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </Section>
  </PageLayout>
);
