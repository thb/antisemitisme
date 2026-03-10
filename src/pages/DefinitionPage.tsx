import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const DefinitionPage = () => {
  const lang = useLang();
  const page = getPages(lang).definition;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="comprendre"
      pageKey="definition"
    >
      <Section title="What antisemitism is not">
        <P>To understand antisemitism, one must first grasp why the usual frameworks for analysing racism fail to capture it.</P>
        <P>Classical racism -- anti-Black, anti-Arab, anti-Asian -- operates along a descending vertical axis. It ascribes inferiority to its target: intellectual, moral, civilisational. The racist looks down on his victim. He despises her. He regards her as primitive, dangerous in her savagery, incapable of rising.</P>
        <P>Antisemitism works in reverse. It does not look down on the Jew -- it looks up, with a terror laced with fascination. In the antisemitic imagination, the Jew is not the sub-human. He is the malevolent super-human. He is too intelligent, too wealthy, too influential, too organised. He pulls the strings. He manipulates nations. He controls money, the media, governments. He is the invisible architect of the world's misfortune.</P>
        <P>It is this inversion that makes antisemitism both so singular and so difficult to fight. One does not combat in the same way a prejudice that says "you are inferior" and a prejudice that says "you are dangerously superior."</P>
      </Section>

      <Section title="Towards a definition">
        <KeyPoint color={COLORS.comprendre} title="Proposed definition" icon="◆">
          Antisemitism is a system of thought that attributes to Jews -- as a group, a network, a people, or an abstract force -- a malevolent, hidden, and coordinated power held responsible for the world's ills.
        </KeyPoint>
        <P>What distinguishes it from every other prejudice:</P>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", margin: "24px 0" }}>
          <KeyPoint color={COLORS.comprendre} title="Malevolent superiority">
            Where ordinary racism ascribes inferiority, antisemitism ascribes a dangerous superiority. The Jew is not despised -- he is feared.
          </KeyPoint>
          <KeyPoint color={COLORS.deconstruire} title="Total transversality">
            It is the only prejudice that operates across every ideology: far right, far left, Islamism, Christianity, secularism.
          </KeyPoint>
          <KeyPoint color={COLORS.reconnaitre} title="Complete autonomy">
            It does not require the actual presence of Jews to exist. It is a self-sustaining system of thought, not a reaction to lived experience.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Protean nature">
            It mutates with each era, borrowing the dominant moral vocabulary of the age: religion, science, human rights.
          </KeyPoint>
        </div>
      </Section>

      <Section title="A racism without race">
        <P>Antisemitism poses a fundamental classification problem: it does not target a race in the phenotypic sense. An Ashkenazi Jew from Eastern Europe and a Mizrahi Jew from Yemen bear no physical resemblance. Many Jews are not visually identifiable. It is precisely this "invisibility" that feeds the fantasy: the Jew is all the more dangerous because he can blend into the crowd.</P>
        <P>Antisemitism simultaneously -- and contradictorily -- targets a religion (Judaism, though most Jews targeted are not observant), an ethnicity (though Jews come from dozens of different countries), a culture (though Jewish culture is multiple and heterogeneous), a nation (Israel, though antisemitism predates Israel by two millennia), a "network" (though this accusation of clannishness is itself an antisemitic trope).</P>
        <P>One does not know exactly what one hates, but one hates it with certainty. This imprecision is constitutive of antisemitism. It renders it elusive, protean, capable of reformulating itself endlessly.</P>
        <Quote
          text="Antisemitism is not an opinion. It is not even exactly a form of racism. It is a worldview -- the oldest, the most adaptable, and the most murderous that humanity has ever produced."
          color={COLORS.comprendre}
        />
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This theme continues in{" "}
          <CrossLink pageKey="inversion" /> and{" "}
          <CrossLink pageKey="quatre_ages" />.
          For concrete manifestations of this specificity, see{" "}
          <CrossLink pageKey="sans_juifs" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
