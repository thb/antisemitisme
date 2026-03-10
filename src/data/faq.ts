import { COLORS } from "./colors";
import type { FaqItem } from "./types";

export const FAQ_ITEMS: FaqItem[] = [
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
