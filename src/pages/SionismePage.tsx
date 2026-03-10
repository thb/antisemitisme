import { COLORS } from "../data/colors";
import { Section, P, Quote, KeyPoint, CrossLink } from "../components/ui";
import { PageLayout } from "../components/PageLayout";
import { useLang } from "../i18n/useLang";
import { getPages } from "../data/pages";

export const SionismePage = () => {
  const lang = useLang();
  const page = getPages(lang).sionisme;

  if (lang === "en") return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
      category="reconnaitre"
      pageKey="sionisme"
    >
      <Section title="Three radically different meanings">
        <P>The word "Zionism" has become an instrument of deliberate confusion. Depending on who uses it, it refers to radically different realities:</P>
        <KeyPoint color={COLORS.reconnaitre} title="Meaning 1 — International law" icon="1">
          Support for the existence of the State of Israel and its right to security — a position grounded in international law and basic geopolitical common sense. This is the stance of the vast majority of Jews worldwide and of most democracies.
        </KeyPoint>
        <KeyPoint color={COLORS.deconstruire} title="Meaning 2 — Israeli far right" icon="2">
          Support for territorial expansion and the complete colonization of the West Bank — a far-right Israeli political position that many Jews and Israelis themselves actively oppose.
        </KeyPoint>
        <KeyPoint color={COLORS.mesurer} title="Meaning 3 — Antisemitic fantasy" icon="3">
          Support for a supposed "Jewish world domination" — a conspiracist fantasy recycled from The Protocols of the Elders of Zion, which has nothing to do with actual Zionism.
        </KeyPoint>
        <P>Using the same word for these three realities is no accident. It is a tool of disqualification: by making the word "Zionist" synonymous with "genocidal," it renders untenable the position of any Jew who simply wishes for Israel to exist.</P>
      </Section>

      <Section title="The loyalty test">
        <P>Can one be Jewish and anti-Zionist? The question deserves to be reframed: what other minority would be asked to renounce support for the existence of its country of origin?</P>
        <P>Would one say to an Armenian: "If you support Armenia, you are complicit in its policies"? To an Irish person: "If you support Irish independence, you are complicit with the IRA"?</P>
        <P>Anti-Zionist Jews exist. Their position is respectable. But demanding that every Jew be anti-Zionist in order to be deemed acceptable amounts to imposing a loyalty test that is imposed on no one else.</P>
        <Quote
          text="What other minority would be asked to renounce support for the existence of its country of origin in order to be considered morally acceptable?"
          color={COLORS.reconnaitre}
        />
      </Section>

      <KeyPoint color={COLORS.textMuted} title="See also">
        <span style={{ fontSize: "14px" }}>
          This semantic trap fuels{" "}
          <CrossLink pageKey="gauche" /> and{" "}
          <CrossLink pageKey="obsession" />.
        </span>
      </KeyPoint>
    </PageLayout>
  );

  return (
    <PageLayout
      title={page.title}
      subtitle={page.subtitle}
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
};
