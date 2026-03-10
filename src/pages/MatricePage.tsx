import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const MatricePage = () => (
  <PageLayout
    title="La matrice conspirationniste"
    subtitle="L'antisémitisme comme template originel de tous les complots"
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
