import { COLORS } from "../data/colors";
import { Section, P, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const MemoirePage = () => {
  const lang = useLang();
  const page = getPages(lang).memoire;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="memoire"
    >
      <Section title="The paradox of commemoration">
        <P>The Shoah is the best-documented, most widely taught, and most commemorated genocide in history. This is a fact. And this fact has, paradoxically, become a vector of antisemitism.</P>
        <P>The reproach takes several forms, all of them revealing:</P>
      </Section>

      <Section title="The four forms of inversion">
        <KeyPoint color={COLORS.mesurer} title="'They make too much of it'" icon="1">
          Jews are accused of commemorating "too much," of saturating the memorial space, of occupying a disproportionate place in the teaching of history. As if the memory of a genocide of six million people had an expiration date.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="'They instrumentalize it'" icon="2">
          The Shoah is said to be a political tool — a shield that silences any criticism of Israel, a form of moral capital to be traded. The idea that Jews "profit" from their own extermination is staggeringly cruel, yet it is extraordinarily widespread.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="'What about us?'" icon="3">
          This is competitive victimhood. Other groups — descendants of enslaved people, colonized peoples, Armenians, Rwandans — feel, sometimes rightly, that their own tragedy is insufficiently recognized. But instead of demanding more memory for themselves, some demand less memory for the Jews. As if memory were a pie to be shared, and one group's portion diminished another's.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Victim-perpetrator inversion" icon="4">
          The ultimate stage: transforming the victims into the executioners. "The Jews are doing to the Palestinians what the Nazis did to them." This comparison, beyond being factually disproportionate, serves a precise function: it cancels out the Shoah. If the Jews are the new Nazis, then the moral debt is erased, European guilt is settled, and one can go back to hating them without a guilty conscience.
        </KeyPoint>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          Victim-perpetrator inversion is a central mechanism of{" "}
          <CrossLink pageKey="obsession" />.
          Competitive memory fuels{" "}
          <CrossLink pageKey="gauche" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
