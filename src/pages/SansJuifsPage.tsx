import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const SansJuifsPage = () => (
  <PageLayout
    title="L'antisémitisme sans Juifs"
    subtitle="Un système de pensée autonome qui n'a pas besoin de sa cible"
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
