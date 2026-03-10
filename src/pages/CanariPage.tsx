import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const CanariPage = () => (
  <PageLayout
    title="Le canari dans la mine"
    subtitle="L'antisémitisme comme indicateur de santé démocratique"
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
