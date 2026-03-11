import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ObsessionPage = () => {
  const lang = useLang();
  const page = getPages(lang).obsession;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="obsession"
    >
      <Section title="A recurring pattern">
        <P>Selective obsession consists of fixating on a subject linked to Jews with an intensity disproportionate to the actual scale of the problem — while similar or far larger phenomena elsewhere are ignored. It is not a matter of the subject being unimportant, but of the disproportion of the gaze.</P>
        <P>This pattern repeats across very different domains: criminal cases, finance, media, geopolitics. Each time, the same mechanism: a real fact is inflated into a systemic obsession, while equivalent or far greater realities generate only a fraction of the attention.</P>
      </Section>

      <Section title="Finance: the Rothschild obsession">
        <P>The Rothschild name has been an antisemitic trope for two centuries. Today, conspiracy theories continue to present this family as masters of global finance. In reality, Rothschild & Co manages around 100 billion euros — substantial, but a drop compared to BlackRock (10,000 billion), Vanguard (8,000 billion), or sovereign wealth funds like Norway's (1,500 billion).</P>
        <P>These actors shape the world economy far more powerfully. Yet there is no "BlackRock controls the world" poster, no documentary about the "Vanguard plan." The obsession targets a name, not a scale of power.</P>
      </Section>

      <Section title="Media: the 'control' myth">
        <P>The idea that "Jews control the media" is a persistent fantasy. In France, the most concentrated media empire belongs to Bolloré (CNews, Canal+, Europe 1, Hachette, JDD). Globally, Murdoch (Fox, Wall Street Journal, The Sun) and Bezos (Washington Post) hold far more influence. These concentrations of power rarely provoke the same obsessive denunciation.</P>
      </Section>

      <Section title="The 'Jewish lobby'">
        <P>CRIF or AIPAC are regularly presented as all-powerful lobbies. Yet the most influential lobbies worldwide are those of the pharmaceutical industry, fossil fuels, big tech, and the arms industry — with budgets and influence that dwarf any Jewish organization. The NRA has blocked gun legislation in the US for decades. Yet it is the "Jewish lobby" that fuels imaginations.</P>
      </Section>

      <Section title="Geopolitics: Israel among other conflicts">
        <P>The Israeli-Palestinian conflict is atrocious. But the intensity of global attention is unmatched: more UN resolutions against Israel than against all other countries combined. Meanwhile, 500,000 dead in Syria, 150,000 in Yemen, the Tigray conflict, the persecution of Uyghurs, the war in the DRC — tragedies that generate only a fraction of the outrage.</P>
        <P>When the US bombs civilians in Iraq, no one demands every American in Paris justify themselves. When Russia razes Mariupol, no one asks every Russian to dissociate from Putin. But every Jew is asked individually: "Do you condemn it?"</P>
      </Section>

      <Section title="The Epstein case and pedophilia">
        <P>The Epstein case is horrific and the crimes are real. But the obsessive media treatment — the "lists", the networks, the insinuations — stands in stark contrast to the general silence on the scale of pedophilia: in France, 160,000 children are victims each year (CIIVISE), overwhelmingly within families. No conspiracy, no "network" — the ordinary horror that generates no outrage.</P>
        <P>Why does one case involving prominent figures produce more media frenzy than 160,000 anonymous victims per year? The question is uncomfortable, but the disproportion speaks for itself.</P>
      </Section>

      <KeyPoint color={COLORS.reconnaitre} title="The uncomfortable question" icon="◉">
        None of these subjects are taboo. Epstein is a criminal, finance can be criticized, media concentration is a real problem, and criticizing Israeli policy is legitimate. The question is not about the subject — it is about the disproportion. When obsession systematically targets what is linked to Jews, while ignoring what is larger but unrelated, this selectivity itself becomes a signal.
      </KeyPoint>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This obsession connects with{" "}
          <CrossLink pageKey="sionisme" /> and{" "}
          <CrossLink pageKey="exception" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="obsession"
    >
      <Section title="Un schéma récurrent">
        <P>L'obsession sélective, c'est se focaliser sur un sujet lié aux Juifs avec une intensité disproportionnée par rapport à l'ampleur réelle du phénomène — tout en ignorant des réalités similaires ou bien plus massives ailleurs. Il ne s'agit pas de dire que le sujet n'est pas important, mais d'interroger la disproportion du regard.</P>
        <P>Ce schéma se répète dans des domaines très différents : affaires judiciaires, finance, médias, géopolitique. À chaque fois, le même mécanisme : un fait réel est gonflé en obsession systémique, tandis que des réalités équivalentes ou bien plus graves ne génèrent qu'une fraction de l'attention.</P>
      </Section>

      <Section title="La finance : l'obsession Rothschild">
        <P>Le nom Rothschild est un trope antisémite depuis deux siècles. Aujourd'hui encore, les théories complotistes présentent cette famille comme les maîtres de la finance mondiale. En réalité, Rothschild & Co gère environ 100 milliards d'euros — considérable, mais une goutte d'eau face à BlackRock (10 000 milliards), Vanguard (8 000 milliards) ou les fonds souverains comme celui de la Norvège (1 500 milliards).</P>
        <P>Ces acteurs façonnent l'économie mondiale de manière bien plus puissante. Pourtant, pas d'affiche « BlackRock contrôle le monde », pas de documentaire sur le « plan Vanguard ». L'obsession cible un nom, pas une échelle de pouvoir.</P>
      </Section>

      <Section title="Les médias : le mythe du « contrôle »">
        <P>L'idée que « les Juifs contrôlent les médias » est un fantasme persistant. En France, l'empire médiatique le plus concentré appartient à Bolloré (CNews, Canal+, Europe 1, Hachette, JDD). À l'échelle mondiale, Murdoch (Fox, Wall Street Journal, The Sun) et Bezos (Washington Post) détiennent une influence bien supérieure. Ces concentrations de pouvoir provoquent rarement la même dénonciation obsessionnelle.</P>
      </Section>

      <Section title="Le « lobby juif »">
        <P>Le CRIF ou l'AIPAC sont régulièrement présentés comme des lobbys tout-puissants. Or les lobbys les plus influents au monde sont ceux de l'industrie pharmaceutique, des énergies fossiles, de la tech et de l'armement — avec des budgets et une influence sans commune mesure avec toute organisation juive. La NRA a bloqué toute législation sur les armes aux États-Unis pendant des décennies. Pourtant, c'est le « lobby juif » qui nourrit les fantasmes.</P>
      </Section>

      <Section title="La géopolitique : Israël parmi les conflits">
        <P>Le conflit israélo-palestinien est atroce. Mais l'intensité de l'attention mondiale est sans équivalent : plus de résolutions de l'ONU contre Israël que contre tous les autres pays réunis. Pendant ce temps, 500 000 morts en Syrie, 150 000 au Yémen, le conflit au Tigré, les persécutions des Ouïghours, la guerre en RDC — des tragédies qui ne génèrent qu'une fraction de l'indignation.</P>
        <P>Quand les États-Unis bombardent des civils en Irak, on ne demande pas à chaque Américain de Paris de se justifier. Quand la Russie rase Marioupol, on ne demande pas à chaque Russe de se désolidariser de Poutine. Mais on demande à chaque Juif, individuellement : « Tu condamnes ? »</P>
      </Section>

      <Section title="L'affaire Epstein et la pédocriminalité">
        <P>L'affaire Epstein est abjecte et les crimes sont réels. Mais le traitement obsessionnel — les « listes », les réseaux, les sous-entendus — contraste avec le silence général sur l'ampleur de la pédocriminalité : en France, 160 000 enfants en sont victimes chaque année (CIIVISE), très majoritairement dans le cadre familial. Pas de complot, pas de « réseau » — l'horreur ordinaire qui ne génère aucune indignation.</P>
        <P>Pourquoi une affaire impliquant des personnalités produit-elle plus de frénésie médiatique que 160 000 victimes anonymes par an ? La question est inconfortable, mais la disproportion parle d'elle-même.</P>
      </Section>

      <KeyPoint color={COLORS.reconnaitre} title="La question qui dérange" icon="◉">
        Aucun de ces sujets n'est tabou. Epstein est un criminel, la finance peut être critiquée, la concentration médiatique est un vrai problème, et critiquer la politique israélienne est légitime. La question n'est pas le sujet — c'est la disproportion. Quand l'obsession cible systématiquement ce qui touche aux Juifs, tout en ignorant ce qui est plus massif mais non lié, cette sélectivité devient elle-même un signal.
      </KeyPoint>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Cette obsession s'articule avec{" "}
          <CrossLink pageKey="sionisme" /> et{" "}
          <CrossLink pageKey="exception" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
