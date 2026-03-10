import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ExceptionPage = () => {
  const lang = useLang();
  const page = getPages(lang).exception;

  if (lang === "en")
    return (
      <PageLayout
        title={page.title}
        subtitle={page.subtitle}
        category="mesurer"
        pageKey="exception"
      >
        <Section title="A simple question">
          <P>Let us pose a simple question: how many states see their right to exist challenged in international debate? The answer is one. Israel.</P>
        </Section>

        <Section title="The comparison that illuminates">
          <KeyPoint color={COLORS.mesurer} title="Pakistan (1947)" icon="▲">
            Created through a bloody partition that displaced 15 million people and killed between one and two million. No one questions Pakistan's right to exist.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Jordan" icon="▲">
            Artificially carved out by the British on a territory that had never constituted a historical state. Its existence is never questioned.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="USA, Canada, Australia" icon="▲">
            Founded on the dispossession, displacement, and often genocide of indigenous peoples. No one proposes dissolving them.
          </KeyPoint>
          <P>Israel, founded in 1948, is the only state in the world whose right to exist is the subject of permanent debate in international bodies, on university campuses, and at street protests.</P>
        </Section>

        <Section title="The reversed burden of proof">
          <P>One can find the policies of Israeli governments detestable. One can condemn the colonisation of the West Bank. One can advocate for a Palestinian state. But "down with Israel" and "down with Israel's policies" are not the same sentence — and the former implies that the seven million Jews living there should go... where exactly?</P>
          <KeyPoint color={COLORS.mesurer} title="The decisive question" icon="▲">
            When this demand for dissolution applies to only one state, and that state happens to be the only Jewish state in the world, the burden of proof is reversed: it falls to those who hold this position to explain why their standard applies here and nowhere else.
          </KeyPoint>
        </Section>

        <Section title="Instrumentalisation by certain governments">
          <P>This point must be addressed honestly: certain Israeli governments, particularly under Netanyahu, have instrumentalised the accusation of antisemitism to silence legitimate criticism. This has a perverse effect: by crying wolf too often, the accusation is discredited precisely when it is warranted. This instrumentalisation is itself a problem — but it does not make antisemitism any less real. Both phenomena coexist.</P>
        </Section>

        <KeyPoint color={COLORS.textMuted} title="See also">
          <span style={{ fontSize: "14px" }}>
            Selective obsession in{" "}
            <CrossLink pageKey="obsession" />.
            The semantic trap in{" "}
            <CrossLink pageKey="sionisme" />.
          </span>
        </KeyPoint>
      </PageLayout>
    );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
