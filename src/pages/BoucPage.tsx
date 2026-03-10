import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const BoucPage = () => {
  const lang = useLang();
  const page = getPages(lang).bouc;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="bouc"
    >
      <Section title="The theory of René Girard">
        <P>René Girard offers an illuminating explanatory framework. For Girard, every society in crisis needs a scapegoat — an individual or group onto which collective violence can be discharged in order to restore the unity of the group.</P>
        <P>The ideal scapegoat must satisfy two seemingly contradictory conditions: being sufficiently integrated into society to be visible and accessible, and sufficiently different to be designatable as "other."</P>
        <KeyPoint color={COLORS.deconstruire} title="The structural position of Jews" icon="⬡">
          Jews have structurally fulfilled both of these conditions for centuries. Everywhere they live, they are simultaneously inside and outside. Integrated yet identifiable. Close yet distinct. They occupy the perfect position of the Girardian scapegoat, and this is no accident — it is the product of centuries of partial exclusion that maintained them in this in-between.
        </KeyPoint>
      </Section>

      <Section title="The simultaneous denial of singularity and universality">
        <P>Jews are simultaneously denied both singularity and universality:</P>
        <Pair
          leftTitle="Denial of singularity"
          left="'Your suffering isn't special — others have suffered too.' 'Enough with the Shoah.' 'You don't have a monopoly on suffering.'"
          rightTitle="Denial of universality"
          right="'You're a group apart, communitarian, unwilling to integrate.' 'You're not like us.' 'You keep to yourselves.'"
          leftColor={COLORS.comprendre}
          rightColor={COLORS.comprendre}
        />
        <P>They are denied the right to a state ("colonizers") and simultaneously denied the right to be stateless ("go back where you came from"). Where, exactly? This question systematically goes unanswered, because it does not expect an answer — it is performative. It expresses rejection, not inquiry.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          The mechanism of social crisis is measured in{" "}
          <CrossLink pageKey="canari" />.
          The structural contradiction is detailed in{" "}
          <CrossLink pageKey="contradiction" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="bouc"
    >
      <Section title="La théorie de René Girard">
        <P>René Girard offre un cadre explicatif éclairant. Pour Girard, toute société en crise a besoin d'un bouc émissaire — un individu ou un groupe sur lequel décharger la violence collective pour restaurer l'unité du groupe.</P>
        <P>Le bouc émissaire idéal doit remplir deux conditions apparemment contradictoires : être suffisamment intégré à la société pour être visible et accessible, et suffisamment différent pour être désignable comme « autre ».</P>
        <KeyPoint color={COLORS.deconstruire} title="La position structurelle des Juifs" icon="⬡">
          Les Juifs remplissent structurellement ces deux conditions depuis des siècles. Partout où ils vivent, ils sont à la fois dedans et dehors. Intégrés mais identifiables. Proches mais distincts. Ils occupent la position parfaite du bouc émissaire girardien, et ce n'est pas un accident — c'est le produit de siècles d'exclusion partielle qui les a maintenus dans cet entre-deux.
        </KeyPoint>
      </Section>

      <Section title="Le refus simultané de la singularité et de l'universalité">
        <P>On refuse aux Juifs simultanément la singularité et l'universalité :</P>
        <Pair
          leftTitle="Refus de la singularité"
          left="« Votre souffrance n'est pas spéciale, d'autres ont souffert aussi. » « Arrêtez avec la Shoah. » « Vous n'avez pas le monopole de la souffrance. »"
          rightTitle="Refus de l'universalité"
          right="« Vous êtes un groupe à part, communautaire, qui ne s'intègre pas. » « Vous n'êtes pas comme nous. » « Vous restez entre vous. »"
          leftColor={COLORS.comprendre}
          rightColor={COLORS.comprendre}
        />
        <P>On leur refuse le droit à un État (« colonisateurs ») et simultanément le droit d'être apatrides (« retournez chez vous »). Où exactement ? Cette question reste systématiquement sans réponse, parce que la question n'attend pas de réponse — elle est performative. Elle exprime un rejet, pas une interrogation.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Le mécanisme de crise sociale se mesure dans{" "}
          <CrossLink pageKey="canari" />.
          La contradiction structurelle est détaillée dans{" "}
          <CrossLink pageKey="contradiction" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
