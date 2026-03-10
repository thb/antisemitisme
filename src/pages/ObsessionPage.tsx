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
      <Section title="The disproportionate focus on Israel">
        <P>The Israeli-Palestinian conflict is atrocious. Documented war crimes are real and condemnable. But the intensity of the world's gaze on Israel is out of all proportion with the attention paid to other conflicts.</P>
        <P>The civil war in Yemen has killed over 150,000 people and caused one of the worst humanitarian crises of the 21st century. The war in Syria has claimed more than 500,000 lives. The conflict in Tigray, the persecution of the Uyghurs, the war in the DRC — tragedies that generate only a fraction of the outrage, the protests, and the UN resolutions devoted to Israel.</P>
        <KeyPoint color={COLORS.reconnaitre} title="The uncomfortable question" icon="◉">
          The point is not that criticizing Israel is antisemitic. The point is to ask why this country is held to a standard applied to no other. When this selective obsession cannot be explained by the number of victims, nor by the severity of the acts, nor by geographical proximity, what explanation remains?
        </KeyPoint>
      </Section>

      <Section title="Selective silence">
        <P>When the United States bombs civilians in Iraq, Afghanistan, or Syria, criticism exists but never reaches the same degree of intensity. When Russia levels Grozny or Mariupol, no one demands that every Russian person dissociate themselves from Putin. When Saudi Arabia bombs Yemen with Western-supplied weapons, protests are nonexistent.</P>
        <P>The filter of outrage is selective, and that selectivity deserves examination. This is not an argument for prohibiting criticism of Israel — it is an argument for questioning the disproportion of the treatment.</P>
      </Section>

      <Section title="The demand placed on Jews">
        <P>A rarely noted element: when Israel is criticized, every Jewish person is individually asked to take a stance. "Do you condemn it?" This demand is made of no other diaspora. No one asks Russians in France to condemn Putin in order to dine in peace. No one asks Chinese people in France to dissociate themselves from the CCP. But Jews are asked to justify themselves — constantly.</P>
      </Section>

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
      <Section title="Le focus disproportionné sur Israël">
        <P>Le conflit israélo-palestinien est atroce. Les crimes de guerre documentés sont réels et condamnables. Mais l'intensité du regard mondial sur Israël est sans commune mesure avec celle portée sur d'autres conflits.</P>
        <P>La guerre civile au Yémen a fait plus de 150 000 morts et provoqué l'une des pires crises humanitaires du XXIe siècle. La guerre en Syrie a causé plus de 500 000 morts. Le conflit au Tigré, les persécutions des Ouïghours, la guerre en RDC — autant de tragédies qui ne génèrent qu'une fraction de l'indignation, des manifestations, des résolutions de l'ONU consacrées à Israël.</P>
        <KeyPoint color={COLORS.reconnaitre} title="La question qui dérange" icon="◉">
          Il ne s'agit pas de dire que critiquer Israël est antisémite. Il s'agit de se demander pourquoi ce pays est soumis à un standard que l'on n'applique à aucun autre. Quand cette obsession sélective ne peut s'expliquer ni par le nombre de victimes, ni par la gravité des actes, ni par la proximité géographique, que reste-t-il comme explication ?
        </KeyPoint>
      </Section>

      <Section title="Le silence sélectif">
        <P>Quand les États-Unis bombardent des civils en Irak, en Afghanistan ou en Syrie, la critique existe mais n'atteint jamais le même degré de virulence. Quand la Russie rase Grozny ou Marioupol, on ne demande pas à chaque Russe de se désolidariser de Poutine. Quand l'Arabie Saoudite bombarde le Yémen avec des armes occidentales, les manifestations sont inexistantes.</P>
        <P>Le filtre de l'indignation est sélectif, et cette sélectivité mérite d'être interrogée. Ce n'est pas un argument pour interdire la critique d'Israël — c'est un argument pour s'interroger sur la disproportion du traitement.</P>
      </Section>

      <Section title="L'injonction faite aux Juifs">
        <P>Un élément rarement noté : quand Israël est critiqué, on demande à chaque Juif, individuellement, de prendre position. « Tu condamnes ? » Cette injonction n'est faite à aucune autre diaspora. On ne demande pas aux Russes de France de condamner Poutine pour pouvoir dîner en paix. On ne demande pas aux Chinois de France de se désolidariser du PCC. Mais on demande aux Juifs de se justifier — en permanence.</P>
      </Section>

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
