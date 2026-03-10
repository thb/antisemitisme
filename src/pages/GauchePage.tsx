import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const GauchePage = () => (
  <PageLayout
    title="L'antisémitisme de gauche"
    subtitle="Quand l'antisionisme sert de véhicule au préjugé"
    category="reconnaitre"
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
        <CrossLink pageKey="sionisme" /> et{" "}
        <CrossLink pageKey="inversion" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
