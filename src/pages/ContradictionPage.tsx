import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const ContradictionPage = () => (
  <PageLayout
    title="L'accusation contradictoire"
    subtitle="Le double bind systématique — communiste et capitaliste, cosmopolite et communautariste"
    category="deconstruire"
    pageKey="contradiction"
  >
    <Section title="Le piège logique parfait">
      <P>De tous les mécanismes de l'antisémitisme, celui-ci est peut-être le plus révélateur — et le moins analysé. Le Juif est systématiquement accusé d'une chose et de son contraire exact. Cette structure contradictoire n'est pas un accident : elle est le signe que l'accusation ne porte pas sur un comportement réel, mais sur un besoin de l'accusateur.</P>
    </Section>

    <Section title="Les quatre contradictions fondamentales">
      <Pair leftTitle="Communiste" left="Marx est juif. Le Juif est le révolutionnaire qui veut détruire l'ordre établi. Dans l'Allemagne nazie, les Juifs fomentent la révolution bolchevique." rightTitle="Capitaliste" right="Rothschild est juif. Le Juif est le banquier qui incarne et exploite l'ordre établi. En URSS, les Juifs sont des agents du capitalisme occidental." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
      <Pair leftTitle="Cosmopolite" left="Apatride sans racines, nomade qui ne jure fidélité à aucune nation, qui corrompt les identités locales par son déracinement." rightTitle="Communautariste" right="Réseau fermé, endogame, solidaire exclusivement de ses semblables, replié sur sa communauté, refusant de se mélanger." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
      <Pair leftTitle="Trop assimilé" left="Il se cache, s'infiltre, « se fait passer pour ». Le Juif qui change de nom et épouse une non-juive est accusé de dissimulation." rightTitle="Pas assez intégré" right="Kippa, nom reconnaissable, écoles confessionnelles. Le Juif visible est accusé de communautarisme et de refus de la République." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
      <Pair leftTitle="Trop puissant" left="Il contrôle les médias, la finance, les gouvernements. Il tire les ficelles dans l'ombre. Le monde est à ses pieds." rightTitle="Toujours victime" right="Il se plaint sans cesse, instrumentalise la Shoah, joue les martyrs. « Comment pouvez-vous être victimes si vous êtes si puissants ? »" leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
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
        <CrossLink pageKey="controle" /> (le fantasme du pouvoir) et{" "}
        <CrossLink pageKey="bouc" /> (la théorie girardienne).
      </span>
    </KeyPoint>
  </PageLayout>
);
