import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ViolencePage = () => {
  const lang = useLang();
  const page = getPages(lang).violence;

  if (lang === "en")
    return (
      <PageLayout
        title={page.title}
        subtitle={page.subtitle}
        category="mesurer"
        pageKey="violence"
      >
        <Section title="The numbers speak">
          <P>Relative to their population (approximately 500,000 in France, less than 1% of the total), Jews are subjected to significantly more racist acts than any other minority community. In France, antisemitic acts routinely account for around 40% of all racist incidents, despite Jews comprising less than 1% of the population.</P>
          <P>The usual retort — "Muslims also suffer racist acts" — is true but beside the point. The two realities are not in competition. However, in terms of the ratio of incidents to population, the disproportion is massive and documented annually by the CNCDH (France's National Consultative Commission on Human Rights).</P>
        </Section>

        <Section title="The specific gravity">
          <P>Beyond the statistics, the nature of antisemitic acts in France over the past two decades is striking in its violence. These are not tags spray-painted on walls. They are targeted murders — acts reminiscent of pogroms:</P>
          <KeyPoint color={COLORS.mesurer} title="Ilan Halimi — 2006" icon="▲">
            Kidnapped by the "gang des barbares," tortured for three weeks, and left for dead — because he was Jewish, and therefore "necessarily rich." The fantasy of financial control turned into a death sentence in a suburban basement.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Toulouse — 2012" icon="▲">
            Mohamed Merah shot and killed children and a teacher at a Jewish school. Children. In a school. Targeted for what they were.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Hyper Cacher — 2015" icon="▲">
            Two days after the Charlie Hebdo attack, Amedy Coulibaly took hostages and killed four people in a kosher supermarket. Targeted specifically because they were Jewish.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Sarah Halimi — 2017" icon="▲">
            Thrown from her balcony by her neighbour while he shouted "Allahu Akbar." Her killer was declared not criminally responsible. The case sent shockwaves through the French Jewish community, reinforcing the perception that the justice system had failed them.
          </KeyPoint>
          <KeyPoint color={COLORS.mesurer} title="Mireille Knoll — 2018" icon="▲">
            A Holocaust survivor, aged 85, stabbed and burned in her own apartment by two men, one of them a neighbour she knew. The return of the rawest antisemitic violence, directed against the most vulnerable.
          </KeyPoint>
        </Section>

        <Section title="The weight of the ordinary">
          <P>These murders are the most widely reported cases. But they exist on a continuum of less visible daily violence: insults, threats, assaults, vandalism of synagogues and cemeteries, school bullying. The CNCDH's annual report documents this reality year after year.</P>
        </Section>

        <KeyPoint color={COLORS.textMuted} title="See also">
          <span style={{ fontSize: "14px" }}>
            The daily impact in{" "}
            <CrossLink pageKey="exil" />.
            The political alarm signal in{" "}
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
      pageKey="violence"
    >
      <Section title="Des chiffres qui parlent">
        <P>Proportionnellement à leur population (environ 500 000 en France, soit moins de 1% de la population), les Juifs subissent significativement plus d'actes racistes que toute autre communauté minoritaire. En France, les actes antisémites représentent souvent autour de 40% de l'ensemble des actes racistes, alors que les Juifs représentent moins de 1% de la population.</P>
        <P>La réponse habituelle — « les musulmans aussi subissent des actes racistes » — est vraie mais hors sujet. Les deux réalités ne sont pas en compétition. Cependant, en termes de ratio actes/population, la disproportion est massive et documentée par la CNCDH chaque année.</P>
      </Section>

      <Section title="La gravité spécifique">
        <P>Au-delà des chiffres, la nature des actes antisémites en France ces vingt dernières années frappe par sa violence. Ce ne sont pas des tags sur des murs. Ce sont des meurtres ciblés, des actes qui rappellent les pogroms :</P>
        <KeyPoint color={COLORS.mesurer} title="Ilan Halimi — 2006" icon="▲">
          Kidnappé par le « gang des barbares », torturé pendant trois semaines et laissé pour mort — parce que juif, donc « forcément riche ». Le fantasme du contrôle financier transformé en verdict de mort dans une cave de banlieue.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Toulouse — 2012" icon="▲">
          Mohamed Merah abat des enfants et un enseignant dans une école juive. Des enfants. Dans une école. Ciblés pour ce qu'ils sont.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Hyper Cacher — 2015" icon="▲">
          Deux jours après l'attentat de Charlie Hebdo, Amedy Coulibaly prend en otage et tue quatre personnes dans un supermarché casher. Ciblées spécifiquement parce que juives.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Sarah Halimi — 2017" icon="▲">
          Défenestrée par son voisin aux cris de « Allahu Akbar ». Son meurtrier a été déclaré pénalement irresponsable. L'affaire a provoqué une onde de choc dans la communauté juive française, renforçant le sentiment d'une justice qui faillit.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Mireille Knoll — 2018" icon="▲">
          Rescapée de la Shoah, 85 ans, poignardée et brûlée dans son appartement par deux hommes, dont un voisin qu'elle connaissait. Le retour de la violence antisémite la plus crue, contre les plus vulnérables.
        </KeyPoint>
      </Section>

      <Section title="Le poids de l'ordinaire">
        <P>Ces meurtres sont les cas les plus médiatisés. Mais ils s'inscrivent dans un continuum de violences quotidiennes moins visibles : insultes, menaces, agressions, dégradations de synagogues et de cimetières, harcèlement scolaire. Le rapport annuel de la CNCDH documente cette réalité année après année.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          L'impact quotidien dans{" "}
          <CrossLink pageKey="exil" />.
          Le signal politique dans{" "}
          <CrossLink pageKey="canari" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
