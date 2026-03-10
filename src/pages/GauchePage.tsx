import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const GauchePage = () => {
  const lang = useLang();
  const page = getPages(lang).gauche;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="gauche"
    >
      <Section title="An ideological blind spot">
        <P>Antisemitism is traditionally associated with the far right. But there is a left-wing antisemitism that is equally structural, one that cloaks itself in anti-Zionism and the anti-imperialist struggle to recycle classic antisemitic tropes.</P>
        <P>The idea that Jews embody "power," "capital," and "imperialism" is a structurally left-wing antisemitism with a long history. When Proudhon wrote in his notebooks that the Jew is "the enemy of the human race" and that "this race must be sent back to Asia or exterminated," it was a socialist speaking. When Stalin orchestrated the "Doctors' Plot" and persecuted Soviet Jewish intellectuals, it was in the name of communism.</P>
      </Section>

      <Section title="The three-stage slippage">
        <P>Today, left-wing antisemitism takes the form of radical anti-Zionism. The slippage operates in three stages:</P>
        <KeyPoint color={COLORS.reconnaitre} title="1. Legitimate criticism" icon="✓">
          Israel pursues a condemnable settlement policy in the West Bank. Its successive governments have committed acts worthy of criticism. This criticism is not only legitimate but necessary.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="2. Slippage" icon="⚠">
          Israel is a "colonial state," "racist," "genocidal" — intrinsically illegitimate. The Jewish state is no longer criticized for what it does, but for what it is.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="3. Contamination" icon="✕">
          Jews who do not condemn Israel are complicit. Jews who support Israel's existence are oppressors. Jewishness itself becomes suspect.
        </KeyPoint>
        <P bold>The passage from stage 1 to stage 3 is the exact point where political criticism becomes antisemitism. And it is a passage that often occurs without those who cross it being aware of it.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This mechanism connects with{" "}
          <CrossLink pageKey="sionisme" /> and{" "}
          <CrossLink pageKey="inversion" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="gauche"
    >
      <Section title="Un angle mort idéologique">
        <P>L'antisémitisme est traditionnellement associé à l'extrême droite. Mais il existe un antisémitisme de gauche tout aussi structurel, qui se drape dans l'antisionisme et le combat anti-impérialiste pour recycler des tropes antisémites classiques.</P>
        <P>L'idée que les Juifs incarnent le « pouvoir », le « capital », l'« impérialisme » est un antisémitisme structurel de gauche qui a une longue histoire. Quand Proudhon écrit dans ses carnets que le Juif est « l'ennemi du genre humain » et qu'il faut « renvoyer cette race en Asie ou l'exterminer », c'est un socialiste qui parle. Quand Staline organise le « complot des blouses blanches » et persécute les intellectuels juifs soviétiques, c'est au nom du communisme.</P>
      </Section>

      <Section title="Le glissement en trois temps">
        <P>Aujourd'hui, l'antisémitisme de gauche prend le visage de l'antisionisme radical. Le glissement fonctionne en trois temps :</P>
        <KeyPoint color={COLORS.reconnaitre} title="1. Critique légitime" icon="✓">
          Israël mène une politique de colonisation condamnable en Cisjordanie. Ses gouvernements successifs ont commis des actes critiquables. Cette critique est non seulement légitime, mais nécessaire.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="2. Glissement" icon="⚠">
          Israël est un « État colonial », « raciste », « génocidaire » — intrinsèquement illégitime. L'État juif n'est pas critiqué pour ce qu'il fait, mais pour ce qu'il est.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="3. Contamination" icon="✕">
          Les Juifs qui ne condamnent pas Israël sont complices. Les Juifs qui soutiennent l'existence d'Israël sont des oppresseurs. La judéité elle-même devient suspecte.
        </KeyPoint>
        <P bold>Le passage du 1 au 3 est le lieu exact où la critique politique devient antisémitisme. Et c'est un passage qui s'opère souvent sans que ceux qui le franchissent en aient conscience.</P>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Ce mécanisme s'articule avec{" "}
          <CrossLink pageKey="sionisme" /> et{" "}
          <CrossLink pageKey="inversion" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
