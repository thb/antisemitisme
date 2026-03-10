import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const DefinitionPage = () => (
  <PageLayout
    title="Définition et spécificité"
    subtitle="Un système de pensée, pas un simple préjugé"
    category="comprendre"
    pageKey="definition"
  >
    <Section title="Ce que l'antisémitisme n'est pas">
      <P>Pour comprendre l'antisémitisme, il faut d'abord comprendre pourquoi les grilles de lecture habituelles du racisme échouent à le saisir.</P>
      <P>Le racisme classique — anti-Noirs, anti-Arabes, anti-Asiatiques — fonctionne sur un axe vertical descendant. Il attribue à sa cible une infériorité : intellectuelle, morale, civilisationnelle. Le raciste regarde sa victime de haut. Il la méprise. Il la considère comme primitive, dangereuse par sa sauvagerie, incapable de s'élever.</P>
      <P>L'antisémitisme fonctionne à l'envers. Il ne regarde pas le Juif de haut — il le regarde d'en bas, avec une terreur mêlée de fascination. Le Juif, dans l'imaginaire antisémite, n'est pas le sous-homme. Il est le sur-homme maléfique. Il est trop intelligent, trop riche, trop influent, trop organisé. Il tire les ficelles. Il manipule les nations. Il contrôle l'argent, les médias, les gouvernements. Il est l'architecte invisible du malheur du monde.</P>
      <P>C'est cette inversion qui rend l'antisémitisme à la fois si singulier et si difficile à combattre. On ne combat pas de la même manière un préjugé qui dit « tu es inférieur » et un préjugé qui dit « tu es dangereusement supérieur ».</P>
    </Section>

    <Section title="Essai de définition">
      <KeyPoint color={COLORS.comprendre} title="Définition proposée" icon="◆">
        L'antisémitisme est un système de pensée qui attribue aux Juifs — en tant que groupe, réseau, peuple ou force abstraite — une puissance maléfique, cachée et coordonnée, responsable des malheurs du monde.
      </KeyPoint>
      <P>Ce qui le distingue de tout autre préjugé :</P>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
        <KeyPoint color={COLORS.comprendre} title="Supériorité maléfique">
          Là où le racisme ordinaire attribue une infériorité, l'antisémitisme attribue une supériorité dangereuse. Le Juif n'est pas méprisé — il est craint.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Transversalité totale">
          C'est le seul préjugé qui fonctionne dans toutes les idéologies : extrême droite, extrême gauche, islamisme, christianisme, laïcisme.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Autonomie complète">
          Il ne nécessite pas la présence réelle de Juifs pour exister. C'est un système de pensée autonome, pas une réaction à une expérience vécue.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Protéiformisme">
          Il mute à chaque époque en empruntant le vocabulaire moral dominant : religion, science, droits de l'homme.
        </KeyPoint>
      </div>
    </Section>

    <Section title="Un racisme sans race">
      <P>L'antisémitisme pose un problème fondamental de classification : il ne vise pas une race au sens phénotypique. Un Juif ashkénaze d'Europe de l'Est et un Juif mizrahi du Yémen ne se ressemblent pas physiquement. Beaucoup de Juifs ne sont pas identifiables visuellement. C'est d'ailleurs cette « invisibilité » qui alimente le fantasme : le Juif est d'autant plus dangereux qu'il peut se fondre dans la masse.</P>
      <P>L'antisémitisme vise simultanément — et de manière contradictoire — une religion (le judaïsme, mais la plupart des Juifs visés ne sont pas pratiquants), une ethnie (mais les Juifs viennent de dizaines de pays différents), une culture (mais la culture juive est multiple et hétérogène), une nation (Israël, mais l'antisémitisme précède Israël de deux millénaires), un « réseau » (mais cette accusation de communautarisme est elle-même un trope antisémite).</P>
      <P>On ne sait pas exactement ce qu'on déteste, mais on le déteste avec certitude. Cette imprécision est constitutive de l'antisémitisme. Elle le rend insaisissable, protéiforme, capable de se reformuler à l'infini.</P>
      <Quote
        text="L'antisémitisme n'est pas une opinion. Ce n'est même pas exactement un racisme. C'est une vision du monde — la plus ancienne, la plus adaptable, et la plus meurtrière que l'humanité ait produite."
        color={COLORS.comprendre}
      />
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce thème se prolonge dans{" "}
        <CrossLink pageKey="inversion" /> et{" "}
        <CrossLink pageKey="quatre_ages" />.
        Pour les manifestations concrètes de cette spécificité, voir{" "}
        <CrossLink pageKey="sans_juifs" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
