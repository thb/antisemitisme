import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const ViolencePage = () => (
  <PageLayout
    title="La violence réelle"
    subtitle="Halimi, Toulouse, Hyper Cacher — des chiffres et des noms"
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
