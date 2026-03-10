import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ContradictionPage = () => {
  const lang = useLang();
  const page = getPages(lang).contradiction;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="contradiction"
    >
      <Section title="The perfect logical trap">
        <P>Of all the mechanisms of antisemitism, this one may be the most revealing — and the least analyzed. The Jew is systematically accused of one thing and its exact opposite. This contradictory structure is not an accident: it is the sign that the accusation does not bear on any real behavior, but on a need of the accuser.</P>
      </Section>

      <Section title="The four fundamental contradictions">
        <Pair leftTitle="Communist" left="Marx is Jewish. The Jew is the revolutionary who seeks to destroy the established order. In Nazi Germany, the Jews were behind the Bolshevik revolution." rightTitle="Capitalist" right="Rothschild is Jewish. The Jew is the banker who embodies and exploits the established order. In the USSR, Jews were agents of Western capitalism." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
        <Pair leftTitle="Cosmopolitan" left="A rootless wanderer, a nomad who pledges allegiance to no nation, who corrupts local identities through his very uprootedness." rightTitle="Communitarian" right="A closed network, endogamous, loyal exclusively to his own kind, withdrawn into his community, refusing to mix." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
        <Pair leftTitle="Too assimilated" left="He hides, infiltrates, 'passes as one of us.' The Jew who changes his name and marries a non-Jewish woman is accused of concealment." rightTitle="Not integrated enough" right="Kippah, recognizable name, religious schools. The visible Jew is accused of communitarianism and rejection of the Republic." leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
        <Pair leftTitle="Too powerful" left="He controls the media, finance, governments. He pulls the strings from the shadows. The world is at his feet." rightTitle="Always the victim" right="He complains endlessly, instrumentalizes the Shoah, plays the martyr. 'How can you be victims if you're so powerful?'" leftColor={COLORS.mesurer} rightColor={COLORS.deconstruire} />
      </Section>

      <Section title="The diagnostic test">
        <KeyPoint color={COLORS.deconstruire} title="Detection rule" icon="⬡">
          When someone attributes two mutually exclusive characteristics to a group, it is no longer criticism — it is projection. The group is no longer being described for what it is, but for what the accuser needs it to be.
        </KeyPoint>
        <P>No other group is subjected to this systematic double accusation. It is a reliable diagnostic marker: when the charges are contradictory, they do not describe the target — they reveal the accuser.</P>
        <P>In Nazi Germany, propaganda simultaneously accused Jews of fomenting the Bolshevik revolution AND controlling international capitalism. Stalin's USSR accused them of being agents of Western capitalism. In both cases, the Jew is the enemy — only the angle changes. This is proof that the accusation is not about an observable fact, but about a function: that of the universal scapegoat.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This mechanism manifests in{" "}
          <CrossLink pageKey="controle" /> (the fantasy of power) and{" "}
          <CrossLink pageKey="bouc" /> (Girardian theory).
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
