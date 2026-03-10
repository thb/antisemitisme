import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const InversionPage = () => {
  const lang = useLang();
  const page = getPages(lang).inversion;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="comprendre"
      pageKey="inversion"
    >
      <Section title="A hatred that spans the entire political spectrum">
        <P>The inverted structure of antisemitism has a major consequence: it is compatible with every ideology. It is the only prejudice that functions equally well on the far right and the far left, among Christians and Muslims alike, in capitalist and communist regimes.</P>
        <Pair
          leftTitle="Classical racism"
          left="Ascribes inferiority to its target. The racist looks down. The prejudice operates through contempt and domination."
          rightTitle="Antisemitism"
          right="Ascribes a malevolent superiority. The antisemite looks up, with terror and fascination. The prejudice operates through paranoia."
          leftColor="#8B7355"
          rightColor={COLORS.mesurer}
        />
        <P>The far right hates the Jew because he is the infiltrated foreigner, the cosmopolitan who destroys national identity, the race-mixer who corrupts the bloodline. The far left hates the Jew because he is the capitalist, the banker, the embodiment of power and exploitation. The Arab nationalist hates the Jew because he is the coloniser. The conspiracy theorist hates the Jew because he is the hidden puppeteer.</P>
        <P bold>Each projects onto the Jew their own enemy. And the Jew, in this mechanism, is never a real person -- he is a screen onto which every ideology projects the face of the evil it fights.</P>
      </Section>

      <Section title="The four projections">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          <KeyPoint color={COLORS.mesurer} title="The far right">
            The Jew is the infiltrated foreigner, the rootless cosmopolitan who destroys nations and corrupts identities.
          </KeyPoint>
          <KeyPoint color={COLORS.deconstruire} title="The far left">
            The Jew is the capitalist, the banker, the embodiment of economic power and exploitation.
          </KeyPoint>
          <KeyPoint color={COLORS.reconnaitre} title="Arab nationalism">
            The Jew is the coloniser, the imperialist, the occupier who steals the land.
          </KeyPoint>
          <KeyPoint color={COLORS.comprendre} title="Conspiracy thinking">
            The Jew is the hidden puppeteer, the one pulling the strings behind every world event.
          </KeyPoint>
        </div>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This transversality is illustrated in{" "}
          <CrossLink pageKey="contradiction" /> and{" "}
          <CrossLink pageKey="gauche" />.
          For the projective mechanism, see{" "}
          <CrossLink pageKey="bouc" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
