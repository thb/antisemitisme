import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const CanariPage = () => {
  const lang = useLang();
  const page = getPages(lang).canari;

  if (lang === "en")
    return (
      <PageLayout
        title={page.title}
        subtitle={page.subtitle}
        category="mesurer"
        pageKey="canari"
      >
        <Section title="The historical pattern">
          <P>There is a disturbing historical regularity: when antisemitism rises in a society, the society itself is deteriorating. Jews are not merely victims — they are an indicator. The canary in the coal mine of democracy.</P>
        </Section>

        <Section title="Historical precedents">
          <KeyPoint color={COLORS.comprendre} title="Weimar Germany" icon="→">
            The rise of antisemitism in the 1920s preceded and foreshadowed the democratic collapse of the 1930s. Antisemitism was not an epiphenomenon — it was the symptom of a broader decomposition.
          </KeyPoint>
          <KeyPoint color={COLORS.comprendre} title="France and the Dreyfus Affair" icon="→">
            Antisemitism as the revealer of a profound institutional crisis — French society fractured between republicans and reactionaries, between modernity and tradition.
          </KeyPoint>
          <KeyPoint color={COLORS.comprendre} title="Pre-revolutionary Russia" icon="→">
            The pogroms as a symptom of a regime in decay, channelling popular discontent toward a scapegoat rather than addressing its own contradictions.
          </KeyPoint>
          <KeyPoint color={COLORS.comprendre} title="Karl Lueger's Austria" icon="→">
            The antisemitic mayor of Vienna at the end of the 19th century, from whom Hitler drew direct inspiration. Municipal antisemitism as a laboratory for totalitarianism.
          </KeyPoint>
        </Section>

        <Section title="The contemporary warning">
          <P>The reason is structural. Antisemitism is a symptom of what societies produce when they are in crisis: the need for someone to blame. When institutions falter, when the economy suffers, when the social fabric tears, the scapegoat reflex activates. And Jews, for the reasons described throughout this guide — their in-between position, their visibility-invisibility, their role as a projective surface — are always the first to be targeted.</P>
          <Quote
            text="What begins with the Jews never ends with the Jews."
            color={COLORS.mesurer}
          />
          <P bold>What should concern everyone beyond the Jewish community: the current rise in antisemitic acts across France and Europe is not merely a problem for Jews. It is an alarm signal for all of us.</P>
        </Section>

        <KeyPoint color={COLORS.textMuted} title="See also">
          <span style={{ fontSize: "14px" }}>
            The scapegoat mechanism in{" "}
            <CrossLink pageKey="bouc" />.
            The concrete violence in{" "}
            <CrossLink pageKey="violence" />.
          </span>
        </KeyPoint>
      </PageLayout>
    );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="mesurer"
      pageKey="canari"
    >
      <Section title="La régularité historique">
        <P>Il existe une régularité historique troublante : quand l'antisémitisme monte dans une société, la société elle-même est en train de se dégrader. Les Juifs ne sont pas seulement des victimes — ils sont un indicateur. Le canari dans la mine de la démocratie.</P>
      </Section>

      <Section title="Les précédents historiques">
        <KeyPoint color={COLORS.comprendre} title="Allemagne de Weimar" icon="→">
          La montée de l'antisémitisme dans les années 1920 a précédé et annoncé l'effondrement démocratique des années 1930. L'antisémitisme n'était pas un épiphénomène — il était le symptôme d'une décomposition plus large.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="France de l'affaire Dreyfus" icon="→">
          L'antisémitisme comme révélateur d'une crise institutionnelle profonde — la société française fracturée entre républicains et réactionnaires, entre modernité et tradition.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="Russie pré-révolutionnaire" icon="→">
          Les pogroms comme symptôme d'un régime en décomposition, qui canalise le mécontentement populaire vers un bouc émissaire plutôt que de résoudre ses propres contradictions.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="Autriche de Karl Lueger" icon="→">
          Maire antisémite de Vienne à la fin du XIXe siècle, dont Hitler s'est directement inspiré. L'antisémitisme municipal comme laboratoire du totalitarisme.
        </KeyPoint>
      </Section>

      <Section title="L'alerte contemporaine">
        <P>La raison est structurelle. L'antisémitisme est un symptôme de ce que les sociétés produisent quand elles sont en crise : le besoin d'un coupable. Quand les institutions vacillent, quand l'économie souffre, quand le tissu social se déchire, le réflexe du bouc émissaire s'active. Et les Juifs, pour les raisons décrites tout au long de ce guide — leur position d'entre-deux, leur visibilité-invisibilité, leur rôle de support projectif — sont toujours les premiers visés.</P>
        <Quote
          text="Ce qui commence par les Juifs ne finit jamais par les Juifs."
          color={COLORS.mesurer}
        />
        <P bold>Ce qui devrait inquiéter au-delà de la communauté juive : la montée actuelle des actes antisémites en France et en Europe n'est pas seulement un problème pour les Juifs. C'est un signal d'alarme pour tout le monde.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Le mécanisme du bouc émissaire dans{" "}
          <CrossLink pageKey="bouc" />.
          La violence concrète dans{" "}
          <CrossLink pageKey="violence" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
