import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const ControlePage = () => (
  <PageLayout
    title="Le fantasme du contrôle"
    subtitle="Médias, finance, pouvoir — anatomie d'un mythe séculaire"
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
