import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const BoucPage = () => (
  <PageLayout
    title="Le bouc émissaire structurel"
    subtitle="La mécanique girardienne — pourquoi toujours les Juifs ?"
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
