import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const QuatreAgesPage = () => {
  const lang = useLang();
  const page = getPages(lang).quatre_ages;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="comprendre"
      pageKey="quatre_ages"
    >
      <Section title="Antisemitism mutates">
        <P>Antisemitism is not a stable phenomenon. It mutates. Each era gives it a new face while preserving the same underlying architecture. What is striking is the subterranean continuity: in every epoch, antisemitism reformulates itself in the dominant language -- religion in the Middle Ages, science in the nineteenth century, human rights in the twenty-first. It always borrows the most legitimate moral register of its time in order to make itself acceptable.</P>
      </Section>

      <Section title="I. Ancient antisemitism -- Otherness">
        <KeyPoint color={COLORS.comprendre} title="Religious and cultural" icon="I">
          The Greeks and Romans reproach the Jews for their exclusive monotheism, their refusal to participate in the imperial cult, their dietary and ritual particularism. The Jew is the one who refuses to dissolve into the universal. It is an accusation of otherness.
        </KeyPoint>
        <P>In the ancient world, where religious syncretism was the norm, the Jewish refusal to incorporate other deities into their pantheon was perceived as a form of arrogance or misanthropy. The Jews were not hated for what they did, but for what they refused to do: conform.</P>
      </Section>

      <Section title="II. Christian antisemitism -- Deicide">
        <KeyPoint color={COLORS.deconstruire} title="Theological" icon="II">
          The Jew is the deicide people -- those who killed Christ. This accusation, carried through centuries of catechesis, engenders cyclical persecutions: expulsions, forced conversions, pogroms, ghettos. The Jew is the internal enemy of Christendom, the inconvenient witness of a lineage that Christianity seeks simultaneously to claim and to erase.
        </KeyPoint>
        <P>Christianity is born from Judaism, and this lineage is both claimed (the Old Testament is incorporated into the Christian Bible) and a source of unease. The Jew is the living witness of an anteriority that Christianity must at once acknowledge and surpass. Hence the permanent ambivalence: the Jew must survive (as a witness to the old Covenant) but must not prosper (for he rejected the new one).</P>
      </Section>

      <Section title="III. Modern antisemitism -- Race">
        <KeyPoint color={COLORS.mesurer} title="Racial and pseudo-scientific" icon="III">
          In the nineteenth century, the Jew is no longer merely a heretic: he becomes a race, biologically defined and biologically dangerous. This is the era of racial theories, of Gobineau, of Chamberlain, and then of Nazi ideology. Antisemitism becomes "secularised": even the converted, baptised, fully assimilated Jew remains Jewish by blood. There is no longer any escape. The Shoah is the logical culmination of this way of thinking.
        </KeyPoint>
        <P>This is the deadliest turning point. When antisemitism was religious, conversion offered a way out (even if it was often forced). When it becomes racial, there is no longer any escape. The Jew is Jewish by essence, by blood, irremediably. It is this total foreclosure that makes industrial genocide possible.</P>
      </Section>

      <Section title="IV. Contemporary antisemitism -- Geopolitics">
        <KeyPoint color={COLORS.reconnaitre} title="Geopolitical" icon="IV">
          The Jew is now accused of colonialism, apartheid, genocide. The vocabulary changes, but the mechanism remains: the Jew is evil, he must be fought, and any sympathy towards him is suspect.
        </KeyPoint>
        <P>Contemporary antisemitism expresses itself primarily through the Israeli-Palestinian conflict and takes the form of anti-Zionism. The Jew is no longer accused of deicide or racial impurity -- he is accused of colonialism, apartheid, genocide. The vocabulary is that of human rights, the most legitimate moral register of our era.</P>
        <Quote
          text="In every epoch, antisemitism reformulates itself in the dominant language: religion in the Middle Ages, science in the nineteenth century, human rights in the twenty-first. It always borrows the most legitimate moral register of its time in order to make itself acceptable."
          color={COLORS.comprendre}
        />
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          The contemporary age manifests in{" "}
          <CrossLink pageKey="obsession" /> and{" "}
          <CrossLink pageKey="sionisme" />.
          The logic of mutation is found in{" "}
          <CrossLink pageKey="matrice" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="comprendre"
      pageKey="quatre_ages"
    >
      <Section title="L'antisémitisme mute">
        <P>L'antisémitisme n'est pas un phénomène stable. Il mute. Chaque époque lui donne un nouveau visage tout en conservant la même architecture profonde. Ce qui frappe, c'est la continuité souterraine : à chaque époque, l'antisémitisme se reformule dans le langage dominant — religion au Moyen Âge, science au XIXe siècle, droits de l'homme au XXIe. Il emprunte toujours le registre moral le plus légitime de son temps pour se rendre acceptable.</P>
      </Section>

      <Section title="I. L'antisémitisme antique — L'étrangeté">
        <KeyPoint color={COLORS.comprendre} title="Religieux et culturel" icon="I">
          Les Grecs et les Romains reprochent aux Juifs leur monothéisme exclusif, leur refus de participer au culte impérial, leur particularisme alimentaire et rituel. Le Juif est celui qui refuse de se dissoudre dans l'universel. C'est un reproche d'étrangeté.
        </KeyPoint>
        <P>Dans le monde antique, où le syncrétisme religieux est la norme, le refus juif d'intégrer d'autres divinités au panthéon est perçu comme une forme d'arrogance ou de misanthropie. Les Juifs ne sont pas haïs pour ce qu'ils font, mais pour ce qu'ils refusent de faire : se conformer.</P>
      </Section>

      <Section title="II. L'antisémitisme chrétien — Le déicide">
        <KeyPoint color={COLORS.deconstruire} title="Théologique" icon="II">
          Le Juif est le peuple déicide — celui qui a tué le Christ. Cette accusation, portée par des siècles de catéchèse, engendre des persécutions cycliques : expulsions, conversions forcées, pogroms, ghettos. Le Juif est l'ennemi intérieur de la chrétienté, le témoin gênant d'une filiation que le christianisme veut à la fois revendiquer et effacer.
        </KeyPoint>
        <P>Le christianisme naît du judaïsme, et cette filiation est à la fois revendiquée (l'Ancien Testament est intégré à la Bible chrétienne) et source de malaise. Le Juif est le témoin vivant d'une antériorité que le christianisme doit à la fois reconnaître et dépasser. D'où l'ambivalence permanente : le Juif doit survivre (comme témoin de l'ancienne Alliance) mais ne doit pas prospérer (car il a refusé la nouvelle).</P>
      </Section>

      <Section title="III. L'antisémitisme moderne — La race">
        <KeyPoint color={COLORS.mesurer} title="Racial et pseudo-scientifique" icon="III">
          Au XIXe siècle, le Juif n'est plus seulement un hérétique : il devient une race, biologiquement définie et biologiquement dangereuse. C'est l'époque des théories raciales, de Gobineau, de Chamberlain, puis de l'idéologie nazie. L'antisémitisme se « laïcise » : même le Juif converti, baptisé, totalement assimilé, reste juif par le sang. Il n'y a plus d'échappatoire. La Shoah est l'aboutissement logique de cette pensée.
        </KeyPoint>
        <P>C'est le tournant le plus meurtrier. Quand l'antisémitisme était religieux, la conversion offrait une porte de sortie (même si elle était souvent forcée). Quand il devient racial, il n'y a plus d'échappatoire. Le Juif est juif par essence, par le sang, de manière irrémédiable. C'est cette fermeture totale qui rend possible le génocide industriel.</P>
      </Section>

      <Section title="IV. L'antisémitisme contemporain — La géopolitique">
        <KeyPoint color={COLORS.reconnaitre} title="Géopolitique" icon="IV">
          Le Juif est désormais accusé de colonialisme, d'apartheid, de génocide. Le vocabulaire change, mais le mécanisme reste : le Juif est le mal, il faut le combattre, et toute sympathie à son égard est suspecte.
        </KeyPoint>
        <P>L'antisémitisme contemporain s'exprime principalement à travers le conflit israélo-palestinien et prend le visage de l'antisionisme. Le Juif n'est plus accusé de déicide ou d'impureté raciale — il est accusé de colonialisme, d'apartheid, de génocide. Le vocabulaire est celui des droits de l'homme, le registre moral le plus légitime de notre époque.</P>
        <Quote
          text="À chaque époque, l'antisémitisme se reformule dans le langage dominant : religion au Moyen Âge, science au XIXe siècle, droits de l'homme au XXIe. Il emprunte toujours le registre moral le plus légitime de son temps pour se rendre acceptable."
          color={COLORS.comprendre}
        />
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          L'âge contemporain se manifeste dans{" "}
          <CrossLink pageKey="obsession" /> et{" "}
          <CrossLink pageKey="sionisme" />.
          La logique de mutation se retrouve dans{" "}
          <CrossLink pageKey="matrice" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
