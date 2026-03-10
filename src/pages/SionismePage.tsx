import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";

export const SionismePage = () => (
  <PageLayout
    title="Le piège du mot sionisme"
    subtitle="Un mot, trois définitions, une confusion volontaire"
    category="reconnaitre"
    pageKey="sionisme"
  >
    <Section title="Trois sens radicalement différents">
      <P>Le mot « sionisme » est devenu un instrument de confusion volontaire. Selon qui l'utilise, il désigne des réalités radicalement différentes :</P>
      <KeyPoint color={COLORS.reconnaitre} title="Sens 1 — Droit international" icon="1">
        Le soutien à l'existence de l'État d'Israël et à son droit à la sécurité — ce qui relève du droit international et du simple bon sens géopolitique. C'est la position de l'immense majorité des Juifs dans le monde, et de la plupart des démocraties.
      </KeyPoint>
      <KeyPoint color={COLORS.deconstruire} title="Sens 2 — Extrême droite israélienne" icon="2">
        Le soutien à l'expansion territoriale et à la colonisation intégrale de la Cisjordanie — ce qui est une position politique d'extrême droite israélienne, que beaucoup de Juifs et d'Israéliens eux-mêmes combattent activement.
      </KeyPoint>
      <KeyPoint color={COLORS.mesurer} title="Sens 3 — Fantasme antisémite" icon="3">
        Le soutien à une supposée « domination mondiale juive » — ce qui est un fantasme conspirationniste recyclé des Protocoles des Sages de Sion, et qui n'a rien à voir avec le sionisme réel.
      </KeyPoint>
      <P>Utiliser le même mot pour ces trois réalités n'est pas un accident. C'est un outil de disqualification : en rendant le mot « sioniste » synonyme de « génocidaire », on rend intenable la position de tout Juif qui souhaite simplement qu'Israël existe.</P>
    </Section>

    <Section title="Le test de loyauté">
      <P>Peut-on être Juif et anti-sioniste ? La question mérite d'être posée autrement : à quelle autre minorité demanderait-on de renoncer à soutenir l'existence de son pays d'origine ?</P>
      <P>Dirait-on à un Arménien : « Si tu soutiens l'Arménie, tu es complice de ses politiques » ? À un Irlandais : « Si tu soutiens l'indépendance de l'Irlande, tu es complice de l'IRA » ?</P>
      <P>Des Juifs anti-sionistes existent. Leur position est respectable. Mais exiger de tout Juif qu'il soit anti-sioniste pour être fréquentable revient à lui imposer un test de loyauté qu'on n'impose à personne d'autre.</P>
      <Quote
        text="À quelle autre minorité demanderait-on de renoncer à soutenir l'existence de son pays d'origine pour être jugée moralement acceptable ?"
        color={COLORS.reconnaitre}
      />
    </Section>

    <KeyPoint color={COLORS.textMuted} title="Voir aussi">
      <span style={{ fontSize: "14px" }}>
        Ce piège sémantique alimente{" "}
        <CrossLink pageKey="gauche" /> et{" "}
        <CrossLink pageKey="obsession" />.
      </span>
    </KeyPoint>
  </PageLayout>
);
