import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const ExceptionPage = () => (
  <PageLayout
    title="L'exception géopolitique"
    subtitle="Le seul État au monde dont l'existence fait débat"
    category="mesurer"
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
        <CrossLink pageKey="obsession" />.
        Le piège sémantique dans{" "}
        <CrossLink pageKey="sionisme" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
