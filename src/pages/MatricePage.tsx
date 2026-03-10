import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const MatricePage = () => {
  const lang = useLang();
  const page = getPages(lang).matrice;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="matrice"
    >
      <Section title="The mother of all conspiracy theories">
        <P>Antisemitism is the mother of all conspiracy theories. This is not a metaphor — it is a direct and documented lineage.</P>
        <P>The Protocols of the Elders of Zion, fabricated by the Tsarist secret police in the early twentieth century, described an alleged Jewish plan for world domination. This text, proven to be a forgery as early as the 1920s, became the template for every modern conspiracy. Its structure is always the same: a small, secret, ethnically defined group controls world events from the shadows in order to enslave the peoples.</P>
        <P>Before this narrative architecture was projected onto the Illuminati, the Freemasons, the reptilians, or the Davos elites, it was forged upon the Jews. And it always circles back to them.</P>
      </Section>

      <Section title="Contemporary convergences">
        <P>Take any major contemporary conspiracy theory and pull the thread:</P>
        <KeyPoint color={COLORS.deconstruire} title="QAnon" icon="→">
          A pedophile elite controls the world. When you ask who belongs to this elite, the names that keep coming up — Soros, Rothschild, Epstein — are Jewish. The symbols deployed (the blood of children, secret rituals) directly recycle the medieval blood libel accusation, a calumny that provoked massacres of Jewish communities for centuries.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="The 'Great Replacement'" icon="→">
          Who is supposedly organizing the replacement of white European populations with immigrant populations? In Renaud Camus and his epigones, the answer invariably points to "cosmopolitan elites" — a transparent code word for Jews. The Jew is simultaneously the organizer of the replacement and its beneficiary.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Deep State, Great Reset, New World Order" icon="→">
          Each of these theories describes a hidden power that manipulates nations. And each, when you scratch the surface, ultimately converges on antisemitism. "Globalist elites," "international bankers," "shadow architects" — this vocabulary is drawn directly from the Protocols.
        </KeyPoint>
      </Section>

      <Section title="The Epstein affair as a case study">
        <P>The Epstein affair perfectly illustrates this mechanism. Jeffrey Epstein was Jewish. Some of the people involved in his network were as well. But the victims came from all backgrounds, and so did the accomplices — Trump, Clinton, Prince Andrew are not Jewish. Yet in the conspiracy narrative, the affair becomes proof of a "Jewish communal mafia" running a global pedophile ring.</P>
        <KeyPoint color={COLORS.mesurer} title="The revealing mechanism">
          When a criminal is Jewish, his Jewishness becomes the explanatory lens. When a criminal is not Jewish, it is treated as an individual case. This double standard is the engine of conspiracy-driven antisemitism.
        </KeyPoint>
      </Section>

      <Quote
        text="Antisemitism provides conspiracy thinking with its foundational narrative architecture: the idea that an invisible, all-powerful, and malevolent group controls the world. Before being projected onto the Illuminati or reptilians, this architecture was forged upon the Jews."
        color={COLORS.deconstruire}
      />

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          The fantasy of control is explored in detail in{" "}
          <CrossLink pageKey="controle" />.
          For the contradictory accusation that underpins these conspiracies, see{" "}
          <CrossLink pageKey="contradiction" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="matrice"
    >
      <Section title="La mère de toutes les théories du complot">
        <P>L'antisémitisme est la mère de toutes les théories du complot. Ce n'est pas une métaphore — c'est une filiation directe et documentée.</P>
        <P>Les Protocoles des Sages de Sion, rédigés par la police secrète tsariste au début du XXe siècle, décrivent un prétendu plan juif de domination mondiale. Ce texte, prouvé faux dès les années 1920, est devenu le template de toute conspiration moderne. Sa structure est toujours la même : un petit groupe secret, ethniquement défini, contrôle les événements mondiaux dans l'ombre pour asservir les peuples.</P>
        <P>Avant que cette architecture narrative soit projetée sur les Illuminati, les francs-maçons, les reptiliens ou les élites de Davos, elle a été forgée sur les Juifs. Et elle revient toujours vers eux.</P>
      </Section>

      <Section title="Les convergences contemporaines">
        <P>Prenez n'importe quelle grande théorie du complot contemporaine et tirez sur le fil :</P>
        <KeyPoint color={COLORS.deconstruire} title="QAnon" icon="→">
          Une élite pédophile contrôle le monde. Quand on demande qui compose cette élite, les noms qui reviennent — Soros, Rothschild, Epstein — sont juifs. Les symboles mobilisés (le sang des enfants, les rituels secrets) recyclent directement l'accusation médiévale de meurtre rituel, une calomnie qui a provoqué des massacres de communautés juives pendant des siècles.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Le « Grand Remplacement »" icon="→">
          Qui organise le remplacement supposé des populations blanches européennes par des populations immigrées ? Chez Renaud Camus et ses épigones, la réponse pointe invariablement vers des « élites cosmopolites » — terme-code transparent pour les Juifs. Le Juif est à la fois l'organisateur du remplacement et celui qui en profite.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Deep State, Great Reset, Nouvel Ordre Mondial" icon="→">
          Chacune de ces théories décrit un pouvoir caché qui manipule les nations. Et chacune, quand on gratte la surface, finit par converger vers l'antisémitisme. Les « élites mondialistes », les « banquiers internationaux », les « architectes de l'ombre » — ce vocabulaire est directement issu des Protocoles.
        </KeyPoint>
      </Section>

      <Section title="L'affaire Epstein comme cas d'école">
        <P>L'affaire Epstein illustre parfaitement ce mécanisme. Jeffrey Epstein est juif. Certaines des personnes impliquées dans son réseau le sont aussi. Mais les victimes viennent de tous milieux, les complices aussi — Trump, Clinton, le Prince Andrew ne sont pas juifs. Pourtant, dans le récit conspirationniste, l'affaire devient la preuve d'une « mafia communautaire juive » à la tête d'un réseau pédophile mondial.</P>
        <KeyPoint color={COLORS.mesurer} title="Le mécanisme révélateur">
          Quand un criminel est juif, sa judéité est le prisme d'explication. Quand un criminel ne l'est pas, c'est un cas individuel. Ce double standard est le moteur de l'antisémitisme conspirationniste.
        </KeyPoint>
      </Section>

      <Quote
        text="L'antisémitisme fournit au complotisme son architecture narrative fondamentale : l'idée qu'un groupe invisible, surpuissant et maléfique contrôle le monde. Avant d'être projetée sur les Illuminati ou les reptiliens, cette architecture a été forgée sur les Juifs."
        color={COLORS.deconstruire}
      />

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Le fantasme du contrôle est détaillé dans{" "}
          <CrossLink pageKey="controle" />.
          Pour l'accusation contradictoire qui sous-tend ces complots, voir{" "}
          <CrossLink pageKey="contradiction" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
