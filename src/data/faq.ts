import { COLORS } from "./colors";
import type { FaqItem, Lang } from "./types";

export function getFaqItems(lang: Lang): FaqItem[] {
  if (lang === "en") return FAQ_ITEMS_EN;
  return FAQ_ITEMS_FR;
}

const FAQ_ITEMS_FR: FaqItem[] = [
  {
    phrase: "On ne peut être juif que si on est de parents juifs. Ils n'acceptent personne, leur communauté est impénétrable.",
    mecanisme: "Accusation de communautarisme",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "C'est factuellement faux. La conversion au judaïsme existe depuis l'Antiquité — Ruth, l'arrière-grand-mère du roi David dans la Bible, est une convertie. La procédure est exigeante (étude, engagement devant un tribunal rabbinique, souvent un à trois ans de préparation), mais elle est ouverte.",
      "Ce qui est vrai, c'est que le judaïsme ne fait pas de prosélytisme. Il ne cherche pas à recruter. C'est une différence fondamentale avec le christianisme et l'islam, qui ont une vocation missionnaire. Ne pas chercher à convertir les autres n'est pas « refuser les gens » — c'est simplement une conception différente de la religion.",
      "La transmission maternelle (matrilinéarité) existe dans le judaïsme orthodoxe, mais elle coexiste avec la conversion et avec le judaïsme libéral et massorti qui reconnaissent aussi la patrilinéarité. Le judaïsme n'est pas monolithique.",
      "Et surtout : on ne reproche jamais aux Amish, aux Druzes, aux Yézidis ou aux moines bouddhistes d'avoir des règles d'appartenance strictes. Ce reproche n'est fait qu'aux Juifs — ce qui devrait interroger sur sa motivation réelle.",
    ],
    liens: ["contradiction", "philosemitisme"],
  },
  {
    phrase: "Ils s'entraident entre eux et n'aident pas les autres. Ils se privilégient et donc discriminent tout le reste. Ils nous considèrent comme des goys, à exploiter.",
    mecanisme: "Du philosémitisme au fantasme du contrôle",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "La solidarité communautaire existe chez les Juifs — comme dans toute diaspora qui a survécu à des siècles de persécution. Les Arméniens, les Chinois d'outre-mer, les Libanais, les Coréens font exactement la même chose. Mais personne ne dit « les Arméniens s'embauchent entre eux » avec le même sous-entendu sinistre.",
      "Le glissement est révélateur : « ils s'entraident » (constat neutre) → « ils ne s'occupent que d'eux » (accusation) → « ils exploitent les autres » (paranoïa). C'est le passage du philosémitisme à l'antisémitisme — un simple changement d'éclairage sur la même image.",
      "Le mot « goy » signifie simplement « nation » en hébreu (au pluriel : goyim, « les nations »). Son usage courant est descriptif et neutre — il désigne les non-juifs, comme « laïc » désigne les non-religieux. L'idée que les Juifs considèrent les non-juifs comme des êtres à exploiter est un recyclage direct des Protocoles des Sages de Sion, un faux antisémite fabriqué en 1903.",
      "Enfin, les organisations caritatives juives (American Jewish World Service, Joint Distribution Committee, etc.) sont parmi les plus actives au monde dans l'aide humanitaire non confessionnelle. Le FSJU en France finance des actions sociales ouvertes à tous. Mais ces faits sont invisibles pour qui a déjà décidé de sa conclusion.",
    ],
    liens: ["philosemitisme", "controle"],
  },
  {
    phrase: "Le collectif Nous Vivrons est une association pro-israélienne sioniste génocidaire. Quand ils viennent perturber des réunions LFI, ce sont des sionistes génocidaires.",
    mecanisme: "Chaîne de syllogismes et double allégeance",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Nous Vivrons est un collectif créé après le 7 octobre 2023 par des Juifs français pour lutter contre l'antisémitisme en France. Qualifier cette démarche de « pro-israélienne sioniste génocidaire », c'est dérouler une chaîne de syllogismes abusifs : association juive → donc pro-israélienne → donc sioniste → donc génocidaire. Chaque « donc » est un raccourci qui ne résiste pas à l'examen.",
      "Le mécanisme est précisément celui du piège du mot sionisme : en rendant « sioniste » synonyme de « génocidaire », on rend intenable la position de tout Juif qui refuse de se taire face à l'antisémitisme. Si dénoncer la haine antijuive fait de vous un « sioniste génocidaire », alors le silence est la seule option autorisée.",
      "L'idée que des Juifs français qui manifestent « perturbent » la vie politique française est elle-même un trope : c'est l'accusation de double allégeance, l'idée que le Juif est un agent d'une puissance étrangère qui n'a pas sa place dans le débat national. C'est exactement ce qu'on reprochait à Dreyfus.",
      "On peut être en désaccord avec les méthodes d'un collectif. Mais qualifier de « génocidaires » des gens qui dénoncent l'antisémitisme, c'est retourner le mot le plus grave contre ceux qui rappellent qu'ils sont visés par la haine. C'est l'inversion victimaire en acte.",
    ],
    liens: ["sionisme", "gauche", "memoire"],
  },
  {
    phrase: "Je ne suis pas antisémite, je suis antisioniste.",
    mecanisme: "Le piège sémantique",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Tout dépend de ce qu'on met derrière « antisioniste ». Si c'est critiquer la politique de colonisation en Cisjordanie, les bombardements de Gaza ou les dérives autoritaires de Netanyahou — c'est de la critique politique, parfaitement légitime, et des millions d'Israéliens la partagent.",
      "Si c'est estimer qu'Israël n'a pas le droit d'exister en tant qu'État — alors la question est : pourquoi cet État-là et pas un autre ? Le Pakistan, la Jordanie, l'Australie ont été créés dans des conditions au moins aussi contestables. Si l'exigence de dissolution ne s'applique qu'au seul État juif, il faut s'interroger sur ce qui motive cette exception.",
      "Le problème n'est pas le mot « antisioniste » — c'est l'usage qu'on en fait. Quand « sioniste » devient une insulte qui désigne tout Juif qui ne condamne pas Israël, quand « antisionisme » sert à recycler les tropes classiques (contrôle, complot, double allégeance) avec un vocabulaire acceptable — alors l'antisionisme fonctionne comme un véhicule de l'antisémitisme, que son porteur en ait conscience ou non.",
      "Le test est simple : remplacez « sioniste » par « juif » dans la phrase. Si elle devient manifestement antisémite, c'est qu'elle l'était déjà.",
    ],
    liens: ["sionisme", "obsession", "gauche"],
  },
  {
    phrase: "Pourquoi on parle toujours de la Shoah ? D'autres peuples ont souffert aussi.",
    mecanisme: "Compétition victimaire et mémoire retournée",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "D'autres peuples ont souffert, c'est vrai. L'esclavage, les génocides arménien, rwandais, la colonisation — ces tragédies méritent davantage de reconnaissance et d'enseignement. Mais la solution n'est pas moins de mémoire pour les uns — c'est davantage de mémoire pour tous. La mémoire n'est pas un gâteau à partager.",
      "Si la Shoah est autant enseignée, c'est parce qu'elle a eu lieu au cœur de l'Europe, commise par l'un des pays les plus « civilisés » du monde, avec une bureaucratie industrielle, et qu'elle a été documentée par les bourreaux eux-mêmes. C'est aussi parce que des survivants se sont battus pendant des décennies pour qu'elle ne soit pas oubliée — ce qu'on devrait admirer, pas reprocher.",
      "L'irritation face à cette mémoire est rarement un simple appel à l'équité mémorielle. Elle masque souvent un reproche plus profond : celui que les Juifs « en font trop », qu'ils « instrumentalisent », qu'ils occupent trop d'espace. C'est un mécanisme qui transforme les victimes d'un génocide en accusés.",
      "Demandez-vous : avez-vous déjà milité pour que le génocide arménien ou le génocide rwandais soit davantage enseigné ? Si oui, votre demande est légitime. Si cette exigence de mémoire ne s'active que pour demander moins de Shoah — alors ce n'est pas de l'équité, c'est du ressentiment.",
    ],
    liens: ["memoire", "contradiction"],
  },
  {
    phrase: "Ils sont partout — dans les médias, la finance, la politique.",
    mecanisme: "Fantasme du contrôle et biais de confirmation",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Certains individus juifs occupent des postes visibles dans les médias, la finance ou la politique. Comme des individus bretons, protestants, énarques ou corses. Transformer une observation statistique en preuve d'un complot coordonné, c'est le mécanisme conspirationniste par excellence.",
      "Quand Patrick Drahi (juif) possède un média, sa judéité est immédiatement relevée. Quand Vincent Bolloré (catholique) en possède plusieurs, son appartenance religieuse n'est jamais mentionnée. C'est la définition du biais de confirmation : on ne retient que les données qui confirment le préjugé.",
      "Cette surreprésentation dans certains secteurs, quand elle existe, a une explication historique : exclus de la propriété terrienne et de la plupart des métiers par les guildes médiévales pendant des siècles, les Juifs se sont tournés vers le commerce, la finance et les professions intellectuelles — les seuls domaines qu'on leur autorisait. Les punir aujourd'hui pour leur adaptation à l'exclusion est un paradoxe cruel.",
      "On ne dit pas « les Bretons contrôlent la marine » ou « les protestants contrôlent la finance suisse ». On ne le dit que des Juifs, parce que derrière l'observation, il y a un cadre narratif préexistant — celui du complot — qui ne demande qu'à être alimenté.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "Ils ont bien dû faire quelque chose pour être détestés partout depuis si longtemps.",
    mecanisme: "Inversion de la culpabilité",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "C'est l'argument le plus pernicieux, parce qu'il a l'apparence du bon sens. Mais appliqué à n'importe quelle autre situation, il s'effondre : « Les femmes battues ont bien dû faire quelque chose pour provoquer leur conjoint. » « Les Noirs en Amérique ont bien dû faire quelque chose pour être esclaves. » Personne ne tiendrait ces raisonnements — mais on le fait pour les Juifs.",
      "Cet argument inverse la charge de la preuve : au lieu d'examiner les mécanismes de la persécution, il demande aux persécutés de justifier pourquoi ils sont persécutés. C'est le principe même du bouc émissaire : la victime est toujours « coupable de quelque chose ».",
      "L'universalité de la haine antijuive ne prouve pas que les Juifs sont coupables de quelque chose — elle prouve que l'antisémitisme est un système de pensée autonome, capable de fonctionner dans n'importe quel contexte, y compris en l'absence totale de Juifs (Pologne, Japon, Malaisie).",
      "La persistance de l'antisémitisme s'explique par sa structure, pas par sa cible : c'est un système explicatif total qui fournit un coupable commode à chaque crise. Le Juif n'est pas haï pour ce qu'il fait — il est haï pour la fonction qu'il remplit dans l'imaginaire collectif.",
    ],
    liens: ["bouc", "sans_juifs", "definition"],
  },
  {
    phrase: "Critiquer Israël, c'est pas de l'antisémitisme, faut arrêter !",
    mecanisme: "L'homme de paille",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Personne de sérieux ne dit que critiquer Israël est antisémite. Critiquer la colonisation de la Cisjordanie, les bombardements de Gaza, la politique de Netanyahou — c'est de la critique politique, et c'est parfaitement légitime. Des millions d'Israéliens le font eux-mêmes, et les plus grandes manifestations anti-Netanyahou ont lieu à Tel Aviv.",
      "Le problème n'est pas la critique. Le problème, c'est quand la critique d'un État devient la délégitimation d'un peuple. Quand on passe de « la politique d'Israël est condamnable » à « Israël ne devrait pas exister ». Quand on demande à chaque Juif français de « prendre position » sur Gaza pour avoir le droit de dîner en paix — une injonction qu'on ne fait à aucune autre diaspora.",
      "Cette phrase fonctionne comme un homme de paille : elle combat une position que personne ne tient (« toute critique est antisémite ») pour éviter d'examiner la position réelle (« certaines critiques recyclent des tropes antisémites »). C'est un bouclier rhétorique qui permet de ne jamais s'interroger sur ses propres préjugés.",
      "Le vrai test : appliquez-vous à Israël un standard que vous n'appliquez à aucun autre pays ? Demandez-vous aux Russes de se désolidariser de Poutine pour être fréquentables ? Aux Chinois de condamner le PCC ? Si votre standard ne s'applique qu'à Israël, la question mérite d'être posée.",
    ],
    liens: ["obsession", "exception", "sionisme"],
  },
  {
    phrase: "Les Juifs sont intelligents, doués pour les affaires. C'est un compliment !",
    mecanisme: "Philosémitisme toxique",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "C'est le piège le mieux intentionné. Dire « les Juifs sont intelligents », c'est attribuer à un groupe entier une caractéristique unique — c'est de l'essentialisation, exactement le même mécanisme que le racisme, mais avec le signe positif.",
      "Et le compliment bascule avec une facilité déconcertante : « intelligents » → « rusés ». « Doués pour les affaires » → « ils contrôlent la finance ». « Solidaires » → « ils s'embauchent entre eux ». L'admiration fascinée et la haine paranoïaque partagent la même prémisse : les Juifs ne sont pas des gens ordinaires.",
      "C'est exactement ce qui distingue l'antisémitisme des autres racismes : il ne méprise pas sa cible, il la craint. « Ils sont intelligents » contient déjà, en germe, « ils sont dangereux ». La distance entre les deux est plus courte qu'on ne le croit.",
      "Admirer « les Juifs » en tant que groupe, c'est déjà les avoir sortis de l'humanité commune. Le vrai antidote au préjugé, ce n'est pas l'admiration — c'est l'indifférence à l'origine. Juger les gens comme des individus, pas comme les représentants d'un groupe.",
    ],
    liens: ["philosemitisme", "controle", "inversion"],
  },
  {
    phrase: "Israël fait aux Palestiniens ce que les nazis leur ont fait.",
    mecanisme: "Inversion victimaire",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "La situation des Palestiniens est tragique et la politique de certains gouvernements israéliens est condamnable. Mais la comparaison avec le nazisme est factuellement disproportionnée et moralement calculée.",
      "Le nazisme visait l'extermination totale et systématique d'un peuple — six millions de morts dans des chambres à gaz industrielles, sans aucune provocation militaire. Aucun historien sérieux ne soutient l'équivalence avec le conflit israélo-palestinien, aussi brutal soit-il. Utiliser cette comparaison, ce n'est pas décrire une réalité — c'est mobiliser le symbole le plus douloureux de l'histoire juive pour le retourner contre les Juifs.",
      "Cette inversion a une fonction précise : elle annule la Shoah. Si les Juifs sont « les nouveaux nazis », alors la dette morale est effacée, la culpabilité européenne est soldée, et on peut recommencer à les détester sans mauvaise conscience. C'est le stade ultime de la mémoire retournée.",
      "On peut condamner les bombardements de Gaza, défendre les droits des Palestiniens, dénoncer la colonisation — sans comparer Israël au IIIe Reich. Le vocabulaire de la critique politique existe. Choisir précisément celui-là, c'est chercher à blesser, pas à analyser.",
    ],
    liens: ["memoire", "obsession"],
  },
  {
    phrase: "Le CRIF dicte la politique française.",
    mecanisme: "Fantasme du contrôle / lobby juif",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Le CRIF (Conseil représentatif des institutions juives de France) est un organe de représentation communautaire, comme le CFCM (Conseil français du culte musulman), la Conférence des évêques de France ou le Consistoire protestant. Il organise un dîner annuel auquel les politiques se rendent — comme ils se rendent au dîner du CFCM ou aux événements de l'épiscopat.",
      "L'idée que le CRIF « dicte » la politique française est un recyclage du fantasme du lobby juif tout-puissant. La France a voté régulièrement contre Israël à l'ONU. Macron a critiqué publiquement Netanyahou. La politique étrangère française est structurellement pro-arabe depuis de Gaulle. Si le CRIF « dictait » quoi que ce soit, ça se saurait.",
      "Le mécanisme est toujours le même : quand une organisation juive exerce une influence normale (lobbying, communication, événements), elle est accusée de « contrôler ». Quand n'importe quelle autre organisation fait la même chose — le MEDEF, les syndicats agricoles, l'industrie pharmaceutique — c'est du lobbying ordinaire.",
      "La question à se poser : utiliseriez-vous le mot « dicter » pour décrire l'influence du CFCM, de la FNSEA ou du MEDEF sur la politique française ? Si le mot ne vous vient que pour une organisation juive, c'est que le fantasme du contrôle est déjà à l'œuvre.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "Un Juif est toujours plus solidaire d'Israël que de la France.",
    mecanisme: "Accusation de double allégeance",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "C'est l'un des plus vieux tropes antisémites : le Juif comme étranger perpétuel, incapable de vraie loyauté envers son pays. C'est l'accusation qui a condamné Dreyfus. C'est celle qui a justifié les expulsions médiévales. C'est celle qui alimente le « retournez chez vous » — adressé à des familles françaises depuis des générations.",
      "Un Franco-Algérien qui soutient l'équipe d'Algérie au football n'est pas accusé de traîtrise. Un Franco-Portugais qui envoie de l'argent à sa famille au Portugal n'est pas soupçonné de double allégeance. Un Franco-Irlandais qui soutient la réunification irlandaise n'est pas sommé de choisir. Mais un Juif français qui se soucie du sort d'Israël est immédiatement suspect.",
      "L'attachement de beaucoup de Juifs français à Israël n'est pas différent de l'attachement de toute diaspora à son pays d'origine ou à un État qui représente une assurance existentielle après des siècles de persécution. Ce n'est pas de la « double allégeance » — c'est de la mémoire et de la prudence.",
      "Et surtout : cette accusation crée un piège. Si le Juif affirme sa francité, on lui reproche de se dissimuler. S'il affirme son lien avec Israël, on lui reproche sa déloyauté. C'est l'accusation contradictoire en action — quoi qu'il fasse, il est coupable.",
    ],
    liens: ["contradiction", "exil", "exception"],
  },
];

const FAQ_ITEMS_EN: FaqItem[] = [
  {
    phrase: "You can only be Jewish if your parents are Jewish. They don't accept anyone — their community is impenetrable.",
    mecanisme: "Accusation of communalism",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "This is factually false. Conversion to Judaism has existed since antiquity — Ruth, King David's great-grandmother in the Bible, was a convert. The process is demanding (study, commitment before a rabbinical court, often one to three years of preparation), but it is open.",
      "What is true is that Judaism does not proselytize. It does not seek to recruit. This is a fundamental difference from Christianity and Islam, which have a missionary vocation. Not seeking to convert others is not 'rejecting people' — it is simply a different conception of religion.",
      "Matrilineal descent exists in Orthodox Judaism, but it coexists with conversion and with Reform and Conservative Judaism, which also recognize patrilineal descent. Judaism is not monolithic.",
      "And above all: no one ever criticizes the Amish, the Druze, the Yazidis, or Buddhist monks for having strict membership rules. This reproach is directed only at Jews — which should prompt questions about its real motivation.",
    ],
    liens: ["contradiction", "philosemitisme"],
  },
  {
    phrase: "They help each other and don't help anyone else. They favor their own and therefore discriminate against everyone. They see us as goyim, to be exploited.",
    mecanisme: "From philosemitism to the fantasy of control",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Community solidarity exists among Jews — as it does in any diaspora that has survived centuries of persecution. Armenians, overseas Chinese, Lebanese, and Koreans do exactly the same thing. But no one says 'Armenians hire each other' with the same sinister undertone.",
      "The slippage is telling: 'they help each other' (neutral observation) becomes 'they only care about themselves' (accusation) becomes 'they exploit others' (paranoia). This is the shift from philosemitism to antisemitism — a simple change of lighting on the same image.",
      "The word 'goy' simply means 'nation' in Hebrew (plural: goyim, 'the nations'). Its common usage is descriptive and neutral — it refers to non-Jews, just as 'layperson' refers to non-clergy. The idea that Jews view non-Jews as beings to be exploited is a direct recycling of the Protocols of the Elders of Zion, an antisemitic forgery fabricated in 1903.",
      "Finally, Jewish charitable organizations (American Jewish World Service, Joint Distribution Committee, etc.) are among the most active in the world in non-denominational humanitarian aid. But these facts are invisible to anyone who has already decided on their conclusion.",
    ],
    liens: ["philosemitisme", "controle"],
  },
  {
    phrase: "The Nous Vivrons collective is a pro-Israel genocidal Zionist organization. When they come to disrupt LFI meetings, they are genocidal Zionists.",
    mecanisme: "Chain of syllogisms and dual loyalty",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Nous Vivrons is a collective created after October 7, 2023, by French Jews to fight antisemitism in France. Calling this initiative 'pro-Israel genocidal Zionist' is to unroll a chain of abusive syllogisms: Jewish organization, therefore pro-Israel, therefore Zionist, therefore genocidal. Each 'therefore' is a shortcut that does not withstand scrutiny.",
      "The mechanism is precisely the trap of the word Zionism: by making 'Zionist' synonymous with 'genocidal,' it becomes untenable for any Jew who refuses to stay silent in the face of antisemitism. If denouncing anti-Jewish hatred makes you a 'genocidal Zionist,' then silence is the only authorized option.",
      "The idea that French Jews who protest are 'disrupting' French political life is itself a trope: it is the accusation of dual loyalty, the idea that the Jew is an agent of a foreign power who has no place in the national debate. This is exactly what Dreyfus was accused of.",
      "One can disagree with a collective's methods. But labeling as 'genocidal' people who are denouncing antisemitism is turning the gravest word against those who are pointing out that they are targeted by hatred. This is victim inversion in action.",
    ],
    liens: ["sionisme", "gauche", "memoire"],
  },
  {
    phrase: "I'm not antisemitic, I'm anti-Zionist.",
    mecanisme: "The semantic trap",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "It all depends on what you mean by 'anti-Zionist.' If it means criticizing the settlement policy in the West Bank, the bombardment of Gaza, or Netanyahu's authoritarian excesses — that is political criticism, perfectly legitimate, and millions of Israelis share it.",
      "If it means that Israel has no right to exist as a state — then the question is: why that state and not another? Pakistan, Jordan, and Australia were created under at least equally contestable conditions. If the demand for dissolution applies only to the one Jewish state, one must ask what motivates this exception.",
      "The problem is not the word 'anti-Zionist' — it is how it is used. When 'Zionist' becomes an insult aimed at any Jew who does not condemn Israel, when 'anti-Zionism' serves to recycle classic tropes (control, conspiracy, dual loyalty) with acceptable vocabulary — then anti-Zionism functions as a vehicle for antisemitism, whether its bearer is aware of it or not.",
      "The test is simple: replace 'Zionist' with 'Jewish' in the sentence. If it becomes obviously antisemitic, it already was.",
    ],
    liens: ["sionisme", "obsession", "gauche"],
  },
  {
    phrase: "Why do we always talk about the Holocaust? Other peoples have suffered too.",
    mecanisme: "Victim competition and weaponized memory",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "Other peoples have suffered — that is true. Slavery, the Armenian and Rwandan genocides, colonization — these tragedies deserve greater recognition and education. But the solution is not less memory for some — it is more memory for all. Memory is not a pie to be divided.",
      "If the Holocaust is so widely taught, it is because it took place at the heart of Europe, committed by one of the most 'civilized' countries in the world, with industrial bureaucracy, and was documented by the perpetrators themselves. It is also because survivors fought for decades to ensure it would not be forgotten — something we should admire, not resent.",
      "Irritation at this memory is rarely a simple call for memorial equity. It often masks a deeper reproach: that Jews 'make too much of it,' that they 'instrumentalize' it, that they take up too much space. This is a mechanism that transforms the victims of a genocide into the accused.",
      "Ask yourself: have you ever campaigned for the Armenian genocide or the Rwandan genocide to be taught more widely? If so, your demand is legitimate. If this demand for memory only activates to call for less Holocaust — then it is not equity, it is resentment.",
    ],
    liens: ["memoire", "contradiction"],
  },
  {
    phrase: "They're everywhere — in the media, finance, politics.",
    mecanisme: "Fantasy of control and confirmation bias",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "Certain Jewish individuals hold visible positions in media, finance, or politics. So do individuals who are Breton, Protestant, graduates of elite schools, or Corsican. Turning a statistical observation into proof of a coordinated conspiracy is the quintessential conspiracist mechanism.",
      "When Patrick Drahi (Jewish) owns a media company, his Jewishness is immediately noted. When Vincent Bolloré (Catholic) owns several, his religious affiliation is never mentioned. This is the definition of confirmation bias: we only retain data that confirms the prejudice.",
      "This overrepresentation in certain sectors, when it exists, has a historical explanation: excluded from land ownership and most trades by medieval guilds for centuries, Jews turned to commerce, finance, and intellectual professions — the only fields they were allowed. Punishing them today for their adaptation to exclusion is a cruel paradox.",
      "No one says 'Bretons control the navy' or 'Protestants control Swiss finance.' It is only said of Jews, because behind the observation lies a preexisting narrative framework — that of conspiracy — which only asks to be fed.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "They must have done something to be hated everywhere for so long.",
    mecanisme: "Inversion of guilt",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "This is the most pernicious argument, because it has the appearance of common sense. But applied to any other situation, it collapses: 'Battered women must have done something to provoke their partners.' 'Black people in America must have done something to be enslaved.' No one would sustain these arguments — but people do it for Jews.",
      "This argument reverses the burden of proof: instead of examining the mechanisms of persecution, it asks the persecuted to justify why they are persecuted. This is the very principle of the scapegoat: the victim is always 'guilty of something.'",
      "The universality of anti-Jewish hatred does not prove that Jews are guilty of something — it proves that antisemitism is an autonomous system of thought, capable of functioning in any context, including in the total absence of Jews (Poland, Japan, Malaysia).",
      "The persistence of antisemitism is explained by its structure, not by its target: it is a total explanatory system that provides a convenient culprit for every crisis. The Jew is not hated for what he does — he is hated for the function he fulfills in the collective imagination.",
    ],
    liens: ["bouc", "sans_juifs", "definition"],
  },
  {
    phrase: "Criticizing Israel isn't antisemitism — stop conflating the two!",
    mecanisme: "The straw man",
    mecanismeColor: COLORS.reconnaitre,
    reponse: [
      "No serious person claims that criticizing Israel is antisemitic. Criticizing the colonization of the West Bank, the bombardment of Gaza, Netanyahu's policies — that is political criticism, and it is perfectly legitimate. Millions of Israelis do it themselves, and the largest anti-Netanyahu demonstrations take place in Tel Aviv.",
      "The problem is not the criticism. The problem is when criticism of a state becomes the delegitimization of a people. When we move from 'Israel's policy is condemnable' to 'Israel should not exist.' When every French Jew is asked to 'take a position' on Gaza to be allowed to dine in peace — a demand made of no other diaspora.",
      "This phrase functions as a straw man: it fights a position no one holds ('all criticism is antisemitic') to avoid examining the actual position ('some criticism recycles antisemitic tropes'). It is a rhetorical shield that allows one to never question one's own prejudices.",
      "The real test: do you apply to Israel a standard you apply to no other country? Do you demand that Russians disavow Putin to be acceptable company? That Chinese people condemn the CCP? If your standard only applies to Israel, the question deserves to be asked.",
    ],
    liens: ["obsession", "exception", "sionisme"],
  },
  {
    phrase: "Jews are smart, good with money. It's a compliment!",
    mecanisme: "Toxic philosemitism",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "This is the best-intentioned trap. Saying 'Jews are smart' attributes a unique characteristic to an entire group — this is essentialization, exactly the same mechanism as racism, but with a positive sign.",
      "And the compliment tips over with disconcerting ease: 'smart' becomes 'cunning.' 'Good with money' becomes 'they control finance.' 'Supportive of each other' becomes 'they only hire their own.' Fascinated admiration and paranoid hatred share the same premise: Jews are not ordinary people.",
      "This is precisely what distinguishes antisemitism from other forms of racism: it does not look down on its target — it fears it. 'They are smart' already contains, in embryo, 'they are dangerous.' The distance between the two is shorter than one might think.",
      "Admiring 'Jews' as a group is already to have removed them from common humanity. The true antidote to prejudice is not admiration — it is indifference to origin. Judging people as individuals, not as representatives of a group.",
    ],
    liens: ["philosemitisme", "controle", "inversion"],
  },
  {
    phrase: "Israel is doing to the Palestinians what the Nazis did to them.",
    mecanisme: "Victim inversion",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "The situation of the Palestinians is tragic, and the policies of certain Israeli governments are condemnable. But the comparison with Nazism is factually disproportionate and morally calculated.",
      "Nazism aimed at the total, systematic extermination of a people — six million dead in industrial gas chambers, without any military provocation. No serious historian supports the equivalence with the Israeli-Palestinian conflict, however brutal it may be. Using this comparison is not describing a reality — it is mobilizing the most painful symbol in Jewish history to turn it against Jews.",
      "This inversion serves a precise function: it cancels out the Holocaust. If Jews are 'the new Nazis,' then the moral debt is erased, European guilt is settled, and one can go back to hating them without a guilty conscience. This is the ultimate stage of weaponized memory.",
      "One can condemn the bombardment of Gaza, defend Palestinian rights, denounce the settlements — without comparing Israel to the Third Reich. The vocabulary of political criticism exists. Choosing precisely that comparison is seeking to wound, not to analyze.",
    ],
    liens: ["memoire", "obsession"],
  },
  {
    phrase: "The CRIF dictates French policy.",
    mecanisme: "Fantasy of control / Jewish lobby",
    mecanismeColor: COLORS.deconstruire,
    reponse: [
      "The CRIF (Representative Council of French Jewish Institutions) is a communal representative body, like the CFCM (French Council of the Muslim Faith), the Conference of Bishops of France, or the Protestant Consistory. It organizes an annual dinner that politicians attend — just as they attend CFCM dinners or events hosted by the episcopate.",
      "The idea that the CRIF 'dictates' French policy is a recycling of the fantasy of the all-powerful Jewish lobby. France has regularly voted against Israel at the UN. Macron has publicly criticized Netanyahu. French foreign policy has been structurally pro-Arab since de Gaulle. If the CRIF were 'dictating' anything, it would be obvious.",
      "The mechanism is always the same: when a Jewish organization exercises normal influence (lobbying, communications, events), it is accused of 'controlling.' When any other organization does the same — employers' federations, agricultural unions, the pharmaceutical industry — it is ordinary lobbying.",
      "The question to ask yourself: would you use the word 'dictate' to describe the influence of any other lobby or religious organization on French policy? If that word only comes to mind for a Jewish organization, then the fantasy of control is already at work.",
    ],
    liens: ["controle", "matrice"],
  },
  {
    phrase: "A Jew is always more loyal to Israel than to France.",
    mecanisme: "Accusation of dual loyalty",
    mecanismeColor: COLORS.mesurer,
    reponse: [
      "This is one of the oldest antisemitic tropes: the Jew as perpetual foreigner, incapable of true loyalty to his country. This is the accusation that condemned Dreyfus. It is the one that justified medieval expulsions. It is the one that fuels 'go back where you came from' — directed at families who have been French for generations.",
      "A French-Algerian who supports the Algerian football team is not accused of treason. A French-Portuguese person who sends money to family in Portugal is not suspected of dual loyalty. A French-Irish person who supports Irish reunification is not asked to choose. But a French Jew who cares about Israel's fate is immediately suspect.",
      "The attachment of many French Jews to Israel is no different from the attachment of any diaspora to its country of origin or to a state that represents an existential insurance after centuries of persecution. This is not 'dual loyalty' — it is memory and prudence.",
      "And above all: this accusation creates a trap. If the Jew asserts his Frenchness, he is accused of hiding something. If he asserts his bond with Israel, he is accused of disloyalty. This is the contradictory accusation in action — whatever he does, he is guilty.",
    ],
    liens: ["contradiction", "exil", "exception"],
  },
];
