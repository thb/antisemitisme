import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const SansJuifsPage = () => {
  const lang = useLang();
  const page = getPages(lang).sans_juifs;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="sans_juifs"
    >
      <Section title="The proof by absence">
        <P>One of the most disturbing proofs of the systemic nature of antisemitism is its capacity to thrive in the complete absence of Jews. This fact alone demonstrates that antisemitism is not a reaction to any real experience with Jewish people — it is an autonomous system of thought, a lens for reading the world that requires an invisible, all-powerful enemy.</P>
      </Section>

      <Section title="Three emblematic cases">
        <KeyPoint color={COLORS.reconnaitre} title="Poland" icon="◉">
          After the Shoah, virtually no Jewish community remained in Poland. Yet surveys consistently show high levels of antisemitism. "Jews" there are a conceptual figure, a cultural inheritance of distrust that is transmitted without requiring the slightest contact with actual Jewish people.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Japan" icon="◉">
          Japan has never had a significant Jewish population. Yet The Protocols of the Elders of Zion is a regular bestseller, and the idea of a "global Jewish conspiracy" has a real audience. Antisemitism was imported through contact with Europe, and it functions as an abstract explanatory system with no grounding in lived experience.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Malaysia" icon="◉">
          Mahathir Mohamad, then Prime Minister, publicly declared that "Jews rule the world by proxy" at a summit of the Organisation of Islamic Cooperation — to applause. Malaysia has never had a Jewish community. Antisemitism there is a purely ideological import, disconnected from any local reality.
        </KeyPoint>
      </Section>

      <Section title="What this demonstrates">
        <P>Antisemitism does not need Jews. It needs an explanation for the world's misfortunes. The "Jew" of antisemitism is a conceptual figure, not a real person. It is an autonomous system of thought, a cosmology of conspiracy that requires an invisible enemy in order to function.</P>
        <P bold>This is perhaps the clearest demonstration of the specificity of antisemitism: no other form of racism functions in the complete absence of its target.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This phenomenon confirms the nature of{" "}
          <CrossLink pageKey="definition" /> and{" "}
          <CrossLink pageKey="matrice" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
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
          <CrossLink pageKey="definition" /> et{" "}
          <CrossLink pageKey="matrice" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
