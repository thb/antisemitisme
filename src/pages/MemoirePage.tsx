import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const MemoirePage = () => (
  <PageLayout
    title="La mémoire retournée"
    subtitle="Quand le souvenir de la Shoah devient une arme"
    category="reconnaitre"
    pageKey="memoire"
  >
    <Section title="Le paradoxe de la commémoration">
      <P>La Shoah est le génocide le mieux documenté, le plus enseigné, le plus commémoré de l'histoire. C'est un fait. Et ce fait, paradoxalement, est devenu un vecteur d'antisémitisme.</P>
      <P>Le reproche prend plusieurs formes, toutes révélatrices :</P>
    </Section>

    <Section title="Les quatre formes de retournement">
      <KeyPoint color={COLORS.mesurer} title="« Ils en font trop »" icon="1">
        On accuse les Juifs de « trop » commémorer, de saturer l'espace mémoriel, d'occuper une place disproportionnée dans l'enseignement de l'histoire. Comme si la mémoire d'un génocide de six millions de personnes avait une date d'expiration.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="« Ils instrumentalisent »" icon="2">
        La Shoah serait un outil politique — un bouclier permettant de faire taire toute critique d'Israël, un capital moral monnayable. L'idée que les Juifs « profitent » de leur propre extermination est d'une cruauté vertigineuse, mais elle est extraordinairement répandue.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="« Et nous ? »" icon="3">
        C'est la compétition victimaire. D'autres groupes — descendants d'esclaves, peuples colonisés, Arméniens, Rwandais — estiment, parfois à juste titre, que leur propre tragédie est insuffisamment reconnue. Mais au lieu d'exiger davantage de mémoire pour eux-mêmes, certains exigent moins de mémoire pour les Juifs. Comme si la mémoire était un gâteau à partager, et que la part des uns diminuait celle des autres.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="L'inversion victimaire" icon="4">
        Le stade ultime : transformer les victimes en bourreaux. « Les Juifs font aux Palestiniens ce que les nazis leur ont fait. » Cette comparaison, en plus d'être factuellement disproportionnée, a une fonction précise : elle annule la Shoah. Si les Juifs sont les nouveaux nazis, alors la dette morale est effacée, la culpabilité européenne est soldée, et on peut recommencer à les détester sans mauvaise conscience.
      </KeyPoint>
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        L'inversion victimaire est un mécanisme central de{" "}
        <CrossLink pageKey="obsession" />.
        La compétition mémorielle alimente{" "}
        <CrossLink pageKey="gauche" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
