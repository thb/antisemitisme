import { useState } from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../data/colors";
import { getCategories } from "../data/categories";
import { getCategoryPages, getPagePath } from "../data/pages";
import { useLang } from "../i18n/useLang";
import { getUIStrings } from "../i18n/ui";
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

export const RessourcesPage = () => {
  const lang = useLang();
  const t = getUIStrings(lang);
  const categories = getCategories(lang);

  return (
    <PageLayout
      title={categories.ressources.label}
      subtitle={t.resourcesDesc}
      category="ressources"
      pageKey="ressources"
    >
      <Section title={t.fundamentalBooks}>
        <ResourceCard2
          title="Réflexions sur la question juive"
          author="Jean-Paul Sartre (1946)"
          desc={lang === "en"
            ? "One of the first structural analyses of antisemitism as projection, not reaction. Sartre shows that the antisemite needs the Jew, and that antisemitism is a passion, not an opinion."
            : "L'une des premières analyses structurelles de l'antisémitisme comme projection, pas comme réaction. Sartre montre que l'antisémite a besoin du Juif, et que l'antisémitisme est une passion, pas une opinion."}
        />
        <ResourceCard2
          title="Les origines du totalitarisme"
          author="Hannah Arendt (1951)"
          desc={lang === "en"
            ? "Antisemitism as a structural component of the collapse of European democracies. Arendt analyzes the transition from social antisemitism to political antisemitism, and then to genocidal antisemitism."
            : "L'antisémitisme comme composante structurelle de l'effondrement des démocraties européennes. Arendt analyse le passage de l'antisémitisme social à l'antisémitisme politique, puis génocidaire."}
        />
        <ResourceCard2
          title="Le bouc émissaire"
          author="René Girard (1982)"
          desc={lang === "en"
            ? "The theory of the scapegoat mechanism applied to persecution. Girard explains why societies in crisis structurally need a scapegoat, and why Jews have occupied that position."
            : "La théorie du mécanisme victimaire appliquée aux persécutions. Girard explique pourquoi les sociétés en crise ont structurellement besoin d'un bouc émissaire, et pourquoi les Juifs occupent cette position."}
        />
        <ResourceCard2
          title="Antisemitism: Here and Now"
          author="Deborah Lipstadt (2019)"
          desc={lang === "en"
            ? "An analysis of contemporary forms of antisemitism, from both the left and the right. Lipstadt distinguishes intentional antisemitism from 'soft' antisemitism — the kind that does not recognize itself as such."
            : "Analyse des formes contemporaines de l'antisémitisme, de gauche comme de droite. Lipstadt distingue l'antisémitisme intentionnel de l'antisémitisme « soft » — celui qui ne se reconnaît pas comme tel."}
        />
        <ResourceCard2
          title="People Love Dead Jews"
          author="Dara Horn (2021)"
          desc={lang === "en"
            ? "An incisive essay on how the world prefers Jewish victims to living Jews. Horn shows how Holocaust commemoration can coexist with indifference — or even hostility — toward living Jews."
            : "Essai incisif sur la façon dont le monde préfère les Juifs victimes aux Juifs vivants. Horn montre comment la commémoration de la Shoah peut coexister avec l'indifférence — voire l'hostilité — envers les Juifs vivants."}
        />
        <ResourceCard2
          title="La question juive en Europe"
          author="Karl Marx (1843)"
          desc={lang === "en"
            ? "An ambivalent but foundational text. Marx, himself of Jewish origin, inaugurates a tradition of left-wing critique that, when distorted, would fuel left-wing antisemitism for two centuries."
            : "Un texte ambivalent mais fondateur. Marx, lui-même d'origine juive, inaugure une tradition de critique de gauche qui, déformée, alimentera l'antisémitisme de gauche pendant deux siècles."}
        />
      </Section>

      <Section title={t.studiesReports}>
        <ResourceCard2
          title={lang === "en" ? "Annual Report on Racism and Antisemitism" : "Rapport annuel sur le racisme et l'antisémitisme"}
          author="CNCDH (Commission nationale consultative des droits de l'homme)"
          desc={lang === "en"
            ? "Statistical data on antisemitic acts in France, published annually. The reference source for measuring the evolution of antisemitism in France."
            : "Données statistiques sur les actes antisémites en France, publiées annuellement. La source de référence pour mesurer l'évolution de l'antisémitisme en France."}
          color={COLORS.comprendre}
        />
        <ResourceCard2
          title="Antisemitism Worldwide Report"
          author={lang === "en" ? "Kantor Center, Tel Aviv University" : "Centre Kantor, Université de Tel Aviv"}
          desc={lang === "en"
            ? "The global reference report on the state of antisemitism. Covers all continents and documents annual trends with rigorous methodology."
            : "Le rapport de référence mondial sur l'état de l'antisémitisme. Couvre tous les continents et documente les tendances annuelles avec une méthodologie rigoureuse."}
          color={COLORS.comprendre}
        />
        <ResourceCard2
          title={lang === "en" ? "Working Definition of Antisemitism" : "Définition de travail de l'antisémitisme"}
          author="IHRA (International Holocaust Remembrance Alliance)"
          desc={lang === "en"
            ? "The most widely used international working definition of antisemitism, with concrete examples. Adopted by numerous countries and institutions."
            : "La définition de travail de l'antisémitisme la plus utilisée internationalement, avec ses exemples concrets. Adoptée par de nombreux pays et institutions."}
          color={COLORS.comprendre}
        />
      </Section>

      <Section title={t.navigateGuide}>
        <P>{t.navigateGuideDesc}</P>
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
              const cat = categories[catKey];
              const catPages = getCategoryPages(lang, catKey);
              const firstPage = catPages[0];
              return (
                <Link
                  key={catKey}
                  to={firstPage ? getPagePath(lang, firstPage.key) : "/"}
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
                      {catPages.length} {t.articles}
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
};
