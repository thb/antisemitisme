import type { Lang, Page, PageKey, PageWithKey } from "./types";

const PAGES_FR: Record<PageKey, Page> = {
  home: { title: "Comprendre l'antisémitisme", category: null, path: "/" },
  definition: { title: "Définition et spécificité", subtitle: "Un système de pensée, pas un simple préjugé", category: "comprendre", order: 1, path: "/definition" },
  inversion: { title: "L'inversion fondamentale", subtitle: "Quand le préjugé attribue une supériorité maléfique", category: "comprendre", order: 2, path: "/inversion" },
  quatre_ages: { title: "Les quatre âges", subtitle: "Antique, chrétien, moderne, contemporain — une mutation permanente", category: "comprendre", order: 3, path: "/quatre-ages" },
  contradiction: { title: "L'accusation contradictoire", subtitle: "Le double bind systématique — communiste et capitaliste, cosmopolite et communautariste", category: "deconstruire", order: 1, path: "/contradiction" },
  matrice: { title: "La matrice conspirationniste", subtitle: "L'antisémitisme comme template originel de tous les complots", category: "deconstruire", order: 2, path: "/matrice" },
  controle: { title: "Le fantasme du contrôle", subtitle: "Médias, finance, pouvoir — anatomie d'un mythe séculaire", category: "deconstruire", order: 3, path: "/controle" },
  philosemitisme: { title: "Le philosémitisme toxique", subtitle: "Quand l'admiration contient déjà l'accusation", category: "deconstruire", order: 4, path: "/philosemitisme" },
  bouc: { title: "Le bouc émissaire structurel", subtitle: "La mécanique girardienne — pourquoi toujours les Juifs ?", category: "deconstruire", order: 5, path: "/bouc-emissaire" },
  obsession: { title: "L'obsession sélective", subtitle: "Le deux poids, deux mesures appliqué à Israël", category: "reconnaitre", order: 1, path: "/obsession" },
  gauche: { title: "L'antisémitisme de gauche", subtitle: "Quand l'antisionisme sert de véhicule au préjugé", category: "reconnaitre", order: 2, path: "/gauche" },
  sionisme: { title: "Le piège du mot sionisme", subtitle: "Un mot, trois définitions, une confusion volontaire", category: "reconnaitre", order: 3, path: "/sionisme" },
  memoire: { title: "La mémoire retournée", subtitle: "Quand le souvenir de la Shoah devient une arme", category: "reconnaitre", order: 4, path: "/memoire" },
  sans_juifs: { title: "L'antisémitisme sans Juifs", subtitle: "Un système de pensée autonome qui n'a pas besoin de sa cible", category: "reconnaitre", order: 5, path: "/sans-juifs" },
  exil: { title: "L'exil intérieur", subtitle: "Le passing, l'autocensure, l'exode silencieux", category: "mesurer", order: 1, path: "/exil" },
  violence: { title: "La violence réelle", subtitle: "Halimi, Toulouse, Hyper Cacher — des chiffres et des noms", category: "mesurer", order: 2, path: "/violence" },
  canari: { title: "Le canari dans la mine", subtitle: "L'antisémitisme comme indicateur de santé démocratique", category: "mesurer", order: 3, path: "/canari" },
  exception: { title: "L'exception géopolitique", subtitle: "Le seul État au monde dont l'existence fait débat", category: "mesurer", order: 4, path: "/exception" },
  ressources: { title: "Ressources", subtitle: "Ouvrages, études, rapports pour aller plus loin", category: "ressources", order: 1, path: "/ressources" },
  faq: { title: "« Je ne suis pas antisémite, mais… »", subtitle: "12 phrases courantes déconstruites une par une", category: null, path: "/faq" },
};

const PAGES_EN: Record<PageKey, Page> = {
  home: { title: "Understanding antisemitism", category: null, path: "/" },
  definition: { title: "Definition and specificity", subtitle: "A system of thought, not a simple prejudice", category: "comprendre", order: 1, path: "/definition" },
  inversion: { title: "The fundamental inversion", subtitle: "When prejudice attributes a malevolent superiority", category: "comprendre", order: 2, path: "/inversion" },
  quatre_ages: { title: "The four ages", subtitle: "Ancient, Christian, modern, contemporary — a permanent mutation", category: "comprendre", order: 3, path: "/four-ages" },
  contradiction: { title: "The contradictory accusation", subtitle: "The systematic double bind — communist and capitalist, cosmopolitan and communitarian", category: "deconstruire", order: 1, path: "/contradictory-accusation" },
  matrice: { title: "The conspiracist matrix", subtitle: "Antisemitism as the original template for all conspiracies", category: "deconstruire", order: 2, path: "/conspiracist-matrix" },
  controle: { title: "The fantasy of control", subtitle: "Media, finance, power — anatomy of a centuries-old myth", category: "deconstruire", order: 3, path: "/fantasy-of-control" },
  philosemitisme: { title: "Toxic philosemitism", subtitle: "When admiration already contains the accusation", category: "deconstruire", order: 4, path: "/toxic-philosemitism" },
  bouc: { title: "The structural scapegoat", subtitle: "The Girardian mechanism — why always the Jews?", category: "deconstruire", order: 5, path: "/scapegoat" },
  obsession: { title: "Selective obsession", subtitle: "The double standard applied to Israel", category: "reconnaitre", order: 1, path: "/selective-obsession" },
  gauche: { title: "Left-wing antisemitism", subtitle: "When anti-Zionism serves as a vehicle for prejudice", category: "reconnaitre", order: 2, path: "/left-wing" },
  sionisme: { title: "The Zionism word trap", subtitle: "One word, three definitions, a deliberate confusion", category: "reconnaitre", order: 3, path: "/zionism-trap" },
  memoire: { title: "Inverted memory", subtitle: "When the memory of the Shoah becomes a weapon", category: "reconnaitre", order: 4, path: "/inverted-memory" },
  sans_juifs: { title: "Antisemitism without Jews", subtitle: "An autonomous system of thought that doesn't need its target", category: "reconnaitre", order: 5, path: "/without-jews" },
  exil: { title: "Inner exile", subtitle: "Passing, self-censorship, the silent exodus", category: "mesurer", order: 1, path: "/inner-exile" },
  violence: { title: "Real violence", subtitle: "Halimi, Toulouse, Hyper Cacher — numbers and names", category: "mesurer", order: 2, path: "/violence" },
  canari: { title: "The canary in the coal mine", subtitle: "Antisemitism as a democratic health indicator", category: "mesurer", order: 3, path: "/canary" },
  exception: { title: "The geopolitical exception", subtitle: "The only state in the world whose existence is debated", category: "mesurer", order: 4, path: "/geopolitical-exception" },
  ressources: { title: "Resources", subtitle: "Books, studies, reports to go further", category: "ressources", order: 1, path: "/resources" },
  faq: { title: "\"I'm not antisemitic, but…\"", subtitle: "12 common phrases deconstructed one by one", category: null, path: "/faq" },
};

const ALL_PAGES: Record<Lang, Record<PageKey, Page>> = { fr: PAGES_FR, en: PAGES_EN };

export function getPages(lang: Lang): Record<PageKey, Page> {
  return ALL_PAGES[lang];
}

export function getCategoryPages(lang: Lang, cat: string): PageWithKey[] {
  const pages = getPages(lang);
  return (Object.entries(pages) as [PageKey, Page][])
    .filter(([, p]) => p.category === cat)
    .sort((a, b) => (a[1].order ?? 0) - (b[1].order ?? 0))
    .map(([key, page]) => ({ key, ...page }));
}

export function getNavigation(lang: Lang, pageKey: PageKey): { prev: PageWithKey | null; next: PageWithKey | null } {
  const pages = getPages(lang);
  const page = pages[pageKey];
  if (!page?.category) return { prev: null, next: null };
  const catPages = getCategoryPages(lang, page.category);
  const idx = catPages.findIndex((p) => p.key === pageKey);
  return {
    prev: idx > 0 ? catPages[idx - 1]! : null,
    next: idx < catPages.length - 1 ? catPages[idx + 1]! : null,
  };
}

export function getPagePath(lang: Lang, pageKey: PageKey): string {
  const pages = getPages(lang);
  return `/${lang}${pages[pageKey]?.path ?? "/"}`;
}

export function getPageKeyFromPath(pathname: string): { lang: Lang; pageKey: PageKey } {
  // pathname like /fr/definition or /en/faq
  const parts = pathname.replace(/\/$/, "").split("/").filter(Boolean);
  const lang = (parts[0] === "en" ? "en" : "fr") as Lang;
  const pagePath = "/" + parts.slice(1).join("/") || "/";

  const pages = getPages(lang);
  for (const [key, page] of Object.entries(pages) as [PageKey, Page][]) {
    if (page.path === pagePath) return { lang, pageKey: key };
  }
  return { lang, pageKey: "home" };
}
