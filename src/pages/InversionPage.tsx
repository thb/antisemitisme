import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const InversionPage = () => (
  <PageLayout
    title="L'inversion fondamentale"
    subtitle="Quand le préjugé attribue une supériorité maléfique"
    category="comprendre"
    pageKey="inversion"
  >
    <Section title="Une haine qui traverse tout le spectre politique">
      <P>La structure inversée de l'antisémitisme a une conséquence majeure : il est compatible avec toutes les idéologies. C'est le seul préjugé qui fonctionne aussi bien à l'extrême droite qu'à l'extrême gauche, aussi bien chez les chrétiens que chez les musulmans, aussi bien dans les régimes capitalistes que communistes.</P>
      <Pair
        leftTitle="Racisme classique"
        left="Attribue une infériorité à sa cible. Le raciste regarde de haut. Le préjugé fonctionne sur le mépris et la domination."
        rightTitle="Antisémitisme"
        right="Attribue une supériorité maléfique. L'antisémite regarde d'en bas, avec terreur et fascination. Le préjugé fonctionne sur la paranoïa."
        leftColor="#8B7355"
        rightColor={COLORS.mesurer}
      />
      <P>L'extrême droite déteste le Juif parce qu'il est l'étranger infiltré, le cosmopolite qui détruit l'identité nationale, le métisseur qui corrompt la race. L'extrême gauche déteste le Juif parce qu'il est le capitaliste, le banquier, l'incarnation du pouvoir et de l'exploitation. Le nationaliste arabe déteste le Juif parce qu'il est le colonisateur. Le complotiste déteste le Juif parce qu'il est le marionnettiste caché.</P>
      <P bold>Chacun projette sur le Juif son propre ennemi. Et le Juif, dans cette mécanique, n'est jamais une personne réelle — il est un écran sur lequel chaque idéologie projette le visage du mal qu'elle combat.</P>
    </Section>

    <Section title="Les quatre projections">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
        <KeyPoint color={COLORS.mesurer} title="L'extrême droite">
          Le Juif est l'étranger infiltré, le cosmopolite sans racines qui détruit les nations et corrompt les identités.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="L'extrême gauche">
          Le Juif est le capitaliste, le banquier, l'incarnation du pouvoir économique et de l'exploitation.
        </KeyPoint>
        <KeyPoint color={COLORS.reconnaitre} title="Le nationalisme arabe">
          Le Juif est le colonisateur, l'impérialiste, l'occupant qui vole la terre.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="Le complotisme">
          Le Juif est le marionnettiste caché, celui qui tire les ficelles derrière chaque événement mondial.
        </KeyPoint>
      </div>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Cette transversalité s'illustre dans{" "}
        <CrossLink pageKey="contradiction" /> et{" "}
        <CrossLink pageKey="gauche" />.
        Pour le mécanisme projectif, voir{" "}
        <CrossLink pageKey="bouc" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
