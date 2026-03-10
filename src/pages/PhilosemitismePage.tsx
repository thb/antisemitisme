import { COLORS } from "../data/colors";
import { Section, P, Pair, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const PhilosemitismePage = () => (
  <PageLayout
    title="Le philosémitisme toxique"
    subtitle="Quand l'admiration contient déjà l'accusation"
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
