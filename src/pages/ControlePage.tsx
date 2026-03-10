import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const ControlePage = () => {
  const lang = useLang();
  const page = getPages(lang).controle;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="controle"
    >
      <Section title="A structuring and ancient myth">
        <P>The accusation that "the Jews control everything" — banks, media, politics — is the central pillar of modern antisemitism. It originates in the Protocols of the Elders of Zion, a forgery fabricated by the Tsarist secret police in the early twentieth century, and remains one of the most widely circulated texts in the world today.</P>
        <P>In France, this translates into the belief that "the CRIF runs France," that "the Rothschilds control finance," that Jews are overrepresented in media and film, and that they "hire their own."</P>
      </Section>

      <Section title="What this accusation reveals">
        <KeyPoint color={COLORS.deconstruire} title="From observation to conspiracy" icon="1">
          The visible success of certain Jewish individuals in certain sectors is real. But transforming a statistical observation into proof of a coordinated conspiracy is precisely the conspiracist mechanism. No one says "the Bretons control the navy" or "Protestants control Swiss finance," even though overrepresentation exists in those cases for obvious historical and sociological reasons.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="The historical explanation" icon="2">
          Excluded from land ownership for centuries, barred from most trades by medieval guilds, Jews turned to commerce, finance, and the intellectual professions — the only occupations they were permitted to practice. To punish them today for their adaptation to the very exclusion they suffered is a cruel paradox.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Confirmation bias" icon="3">
          When a Jewish individual succeeds, his Jewishness is invoked as the explanation. When a non-Jewish individual succeeds, his origins are never mentioned. This is the very definition of confirmation bias: one retains only the data that confirms the prejudice and ignores everything else.
        </KeyPoint>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This fantasy fuels{" "}
          <CrossLink pageKey="matrice" /> and manifests in{" "}
          <CrossLink pageKey="obsession" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="controle"
    >
      <Section title="Un mythe structurant et ancien">
        <P>L'accusation selon laquelle « les Juifs contrôlent tout » — les banques, les médias, la politique — est le pilier central de l'antisémitisme moderne. Elle prend sa source dans les Protocoles des Sages de Sion, un faux fabriqué par la police secrète tsariste au début du XXe siècle, et reste aujourd'hui l'un des textes les plus diffusés au monde.</P>
        <P>En France, cela se traduit par l'idée que « le CRIF dirige la France », que « les Rothschild contrôlent la finance », que les Juifs sont surreprésentés dans les médias et le cinéma et qu'ils « s'embauchent entre eux ».</P>
      </Section>

      <Section title="Ce que cette accusation révèle">
        <KeyPoint color={COLORS.deconstruire} title="De l'observation au complot" icon="1">
          La réussite visible de certains individus juifs dans certains secteurs est réelle. Mais transformer une observation statistique en preuve d'un complot coordonné est précisément le mécanisme conspirationniste. On ne dit pas « les Bretons contrôlent la marine » ou « les protestants contrôlent la finance suisse », même si des surreprésentations existent pour des raisons historiques et sociologiques évidentes.
        </KeyPoint>
        <KeyPoint color={COLORS.comprendre} title="L'explication historique" icon="2">
          Exclus de la propriété terrienne pendant des siècles, interdits de la plupart des métiers par les guildes médiévales, les Juifs se sont tournés vers le commerce, la finance, les professions intellectuelles — les seuls métiers qu'on leur autorisait. Les punir aujourd'hui pour leur adaptation à l'exclusion qu'ils ont subie est un paradoxe cruel.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Le biais de confirmation" icon="3">
          Quand un individu juif réussit, sa judéité est mobilisée comme explication. Quand un non-juif réussit, son origine n'est jamais mentionnée. C'est la définition même du biais de confirmation : on ne retient que les données qui confirment le préjugé, et on ignore toutes les autres.
        </KeyPoint>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Ce fantasme alimente{" "}
          <CrossLink pageKey="matrice" /> et se manifeste dans{" "}
          <CrossLink pageKey="obsession" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
