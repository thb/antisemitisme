import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const ObsessionPage = () => (
  <PageLayout
    title="L'obsession sélective"
    subtitle="Le deux poids, deux mesures appliqué à Israël"
    category="reconnaitre"
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
        <CrossLink pageKey="sionisme" /> et{" "}
        <CrossLink pageKey="exception" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
