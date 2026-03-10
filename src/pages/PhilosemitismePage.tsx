import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const PhilosemitismePage = () => {
  const lang = useLang();
  const page = getPages(lang).philosemitisme;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="philosemitisme"
    >
      <Section title="The compliment that traps">
        <P>"Jews are smart." "They have a head for business." "They stick together." "Look at how many Nobel Prizes they've won."</P>
        <P>These phrases are meant as praise. In reality, they are the breeding ground of antisemitism, because they rest on the same mechanism: essentialization. To attribute a positive quality to an entire group is already to treat it as a homogeneous block rather than as a collection of individuals.</P>
      </Section>

      <Section title="The reversal">
        <P>And the compliment flips with disconcerting ease:</P>
        <Pair
          leftTitle="The compliment"
          left="'They're smart.' 'They have a head for business.' 'They stick together.' 'Look at all those Nobel Prizes.'"
          rightTitle="The reversal"
          right="'They're cunning.' 'They control finance.' 'They hire their own.' 'They've infiltrated the institutions.'"
          leftColor={COLORS.reconnaitre}
          rightColor={COLORS.mesurer}
        />
        <P>The passage from philosemitism to antisemitism is not a rupture — it is merely a change of lighting on the same image. Fascinated admiration and paranoid hatred share the same premise: Jews are not ordinary people. And it is precisely this premise that is the problem.</P>
      </Section>

      <Section title="Why 'I admire the Jews' should raise a red flag">
        <P>This is why the statement "I'm not antisemitic — I actually admire the Jews" should alarm rather than reassure. To admire "the Jews" as a group is already to have removed them from common humanity. It is already to have attributed to them a distinct nature — positive for now, but one that can tip over at any moment.</P>
        <KeyPoint color={COLORS.deconstruire} title="The warning signal" icon="⬡">
          Collective admiration is the first stage of the rocket. The second is suspicion. And the third is accusation. The distance between "they're remarkable" and "they're dangerous" is far shorter than one might think.
        </KeyPoint>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          The mechanism of essentialization is also found in{" "}
          <CrossLink pageKey="controle" /> and{" "}
          <CrossLink pageKey="bouc" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="deconstruire"
      pageKey="philosemitisme"
    >
      <Section title="Le compliment qui piège">
        <P>« Les Juifs sont intelligents. » « Ils ont le sens des affaires. » « Ils sont solidaires entre eux. » « Regardez combien de prix Nobel ils ont. »</P>
        <P>Ces phrases se veulent élogieuses. Elles sont en réalité le terreau de l'antisémitisme, parce qu'elles reposent sur le même mécanisme : l'essentialisation. Attribuer à un groupe entier une qualité positive, c'est déjà le traiter comme un bloc homogène plutôt que comme une collection d'individus.</P>
      </Section>

      <Section title="Le basculement">
        <P>Et le compliment se retourne avec une facilité déconcertante :</P>
        <Pair
          leftTitle="Le compliment"
          left="« Ils sont intelligents. » « Ils ont le sens des affaires. » « Ils sont solidaires. » « Regardez combien de prix Nobel. »"
          rightTitle="Le retournement"
          right="« Ils sont rusés. » « Ils contrôlent la finance. » « Ils s'embauchent entre eux. » « Ils ont infiltré les institutions. »"
          leftColor={COLORS.reconnaitre}
          rightColor={COLORS.mesurer}
        />
        <P>Le passage du philosémitisme à l'antisémitisme n'est pas une rupture — c'est un simple changement d'éclairage sur la même image. L'admiration fascinée et la haine paranoïaque partagent une même prémisse : les Juifs ne sont pas des gens ordinaires. Et c'est précisément cette prémisse qui est le problème.</P>
      </Section>

      <Section title="Pourquoi « j'admire les Juifs » doit alerter">
        <P>C'est pour cela que la phrase « je ne suis pas antisémite, j'admire beaucoup les Juifs » devrait alerter plutôt que rassurer. Admirer « les Juifs » en tant que groupe, c'est déjà les avoir sortis de l'humanité commune. C'est déjà leur attribuer une nature distincte — positive pour l'instant, mais qui peut basculer à tout moment.</P>
        <KeyPoint color={COLORS.deconstruire} title="Le signal d'alerte" icon="⬡">
          L'admiration collective est le premier étage de la fusée. Le second, c'est la suspicion. Et le troisième, c'est l'accusation. La distance entre « ils sont formidables » et « ils sont dangereux » est beaucoup plus courte qu'on ne le croit.
        </KeyPoint>
      </Section>

      <KeyPoint color={COLORS.textMuted} title="Voir aussi">
        <span style={{ fontSize: "14px" }}>
          Le mécanisme d'essentialisation se retrouve dans{" "}
          <CrossLink pageKey="controle" /> et{" "}
          <CrossLink pageKey="bouc" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );
};
