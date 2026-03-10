import { COLORS } from "../data/colors";
import { Section, P, NumberStat, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ExilPage = () => {
  const lang = useLang();
  const page = getPages(lang).exil;

  if (lang === "en")
    return (
      <PageLayout
        title={page.title}
        subtitle={page.subtitle}
        category="mesurer"
        pageKey="exil"
      >
        <Section title="Living in hiding">
          <P>There is a dimension of antisemitism that is almost never discussed, precisely because it is invisible by nature: the daily experience of those who endure it.</P>
          <P>In France, many Jews practice what sociologists call "passing" — the deliberate erasure of identity markers in order to go unnoticed. Removing one's kippah on the metro. Not mentioning the name of their children's school. Gallicizing one's first name at work. Avoiding certain neighbourhoods. Not displaying a mezuzah on the front door. Saying "I'm of Polish origin" rather than "I'm Jewish."</P>
          <P>This is not paranoia. It is a rational calculation based on lived experience. And this self-censorship carries a massive psychological cost: living while concealing a part of oneself is a permanent inner exile. You are home, but not quite. You are a citizen, but on alert. You are free, but conditionally.</P>
        </Section>

        <Section title="The silent exodus">
          <P>France is home to approximately 500,000 Jews — the third-largest Jewish community in the world. Since the early 2000s, tens of thousands have left the country, primarily for Israel. In a nation that calls itself the birthplace of human rights, this migratory movement should constitute a national scandal. It is barely mentioned.</P>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "32px 0" }}>
            <NumberStat number="~500K" label="Jews in France (3rd largest community worldwide)" color={COLORS.mesurer} />
            <NumberStat number="~40%" label="of racist acts target Jews (<1% of the population)" color={COLORS.mesurer} />
            <NumberStat number="10K+" label="departures for Israel since 2000" color={COLORS.mesurer} />
          </div>
        </Section>

        <KeyPoint color={COLORS.textMuted} title="See also">
          <span style={{ fontSize: "14px" }}>
            The violence driving this exodus is documented in{" "}
            <CrossLink pageKey="violence" />.
            The collective alarm signal in{" "}
            <CrossLink pageKey="canari" />.
          </span>
        </KeyPoint>
      </PageLayout>
    );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="mesurer"
      pageKey="exil"
    >
      <Section title="Vivre en se cachant">
        <P>Il y a une dimension de l'antisémitisme dont on ne parle presque jamais parce qu'elle est invisible par nature : le quotidien de ceux qui le subissent.</P>
        <P>En France, beaucoup de Juifs vivent en pratiquant ce que les sociologues appellent le « passing » — l'effacement volontaire des signes d'identité pour passer inaperçu. Enlever sa kippa dans le métro. Ne pas dire le nom de l'école de ses enfants. Franciser son prénom au travail. Éviter certains quartiers. Ne pas afficher sa mezouzah sur sa porte d'entrée. Dire « je suis d'origine polonaise » plutôt que « je suis juif ».</P>
        <P>Ce n'est pas de la paranoïa. C'est un calcul rationnel basé sur l'expérience. Et cette autocensure a un coût psychologique massif : vivre en dissimulant une partie de soi, c'est un exil intérieur permanent. On est chez soi, mais pas tout à fait. On est citoyen, mais en veille. On est libre, mais sous conditions.</P>
      </Section>

      <Section title="L'exode silencieux">
        <P>La France compte environ 500 000 Juifs — la troisième communauté mondiale. Depuis les années 2000, des dizaines de milliers ont quitté le pays, principalement pour Israël. Ce mouvement migratoire, dans un pays qui se dit patrie des droits de l'homme, devrait constituer un scandale national. Il est à peine mentionné.</P>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px", padding: "32px 0" }}>
          <NumberStat number="~500K" label="Juifs en France (3e communauté mondiale)" color={COLORS.mesurer} />
          <NumberStat number="~40%" label="des actes racistes visent les Juifs (<1% de la population)" color={COLORS.mesurer} />
          <NumberStat number="10K+" label="départs vers Israël depuis 2000" color={COLORS.mesurer} />
        </div>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          La violence qui motive cet exil est documentée dans{" "}
          <CrossLink pageKey="violence" />.
          Le signal d'alarme collectif dans{" "}
          <CrossLink pageKey="canari" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
