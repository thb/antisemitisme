import type { Page, PageKey, PageWithKey } from "./types";

export const PAGES: Record<PageKey, Page> = {
  home: { title: "Comprendre l'antisémitisme", category: null, path: "/" },

  // COMPRENDRE
  definition: {
    title: "Définition et spécificité",
    subtitle: "Un système de pensée, pas un simple préjugé",
    category: "comprendre",
    order: 1,
    path: "/definition",
  },
  inversion: {
    title: "L'inversion fondamentale",
    subtitle: "Quand le préjugé attribue une supériorité maléfique",
    category: "comprendre",
    order: 2,
    path: "/inversion",
  },
  quatre_ages: {
    title: "Les quatre âges",
    subtitle: "Antique, chrétien, moderne, contemporain — une mutation permanente",
    category: "comprendre",
    order: 3,
    path: "/quatre-ages",
  },

  // DÉCONSTRUIRE
  contradiction: {
    title: "L'accusation contradictoire",
    subtitle: "Le double bind systématique — communiste et capitaliste, cosmopolite et communautariste",
    category: "deconstruire",
    order: 1,
    path: "/contradiction",
  },
  matrice: {
    title: "La matrice conspirationniste",
    subtitle: "L'antisémitisme comme template originel de tous les complots",
    category: "deconstruire",
    order: 2,
    path: "/matrice",
  },
  controle: {
    title: "Le fantasme du contrôle",
    subtitle: "Médias, finance, pouvoir — anatomie d'un mythe séculaire",
    category: "deconstruire",
    order: 3,
    path: "/controle",
  },
  philosemitisme: {
    title: "Le philosémitisme toxique",
    subtitle: "Quand l'admiration contient déjà l'accusation",
    category: "deconstruire",
    order: 4,
    path: "/philosemitisme",
  },
  bouc: {
    title: "Le bouc émissaire structurel",
    subtitle: "La mécanique girardienne — pourquoi toujours les Juifs ?",
    category: "deconstruire",
    order: 5,
    path: "/bouc-emissaire",
  },

  // RECONNAÎTRE
  obsession: {
    title: "L'obsession sélective",
    subtitle: "Le deux poids, deux mesures appliqué à Israël",
    category: "reconnaitre",
    order: 1,
    path: "/obsession",
  },
  gauche: {
    title: "L'antisémitisme de gauche",
    subtitle: "Quand l'antisionisme sert de véhicule au préjugé",
    category: "reconnaitre",
    order: 2,
    path: "/gauche",
  },
  sionisme: {
    title: "Le piège du mot sionisme",
    subtitle: "Un mot, trois définitions, une confusion volontaire",
    category: "reconnaitre",
    order: 3,
    path: "/sionisme",
  },
  memoire: {
    title: "La mémoire retournée",
    subtitle: "Quand le souvenir de la Shoah devient une arme",
    category: "reconnaitre",
    order: 4,
    path: "/memoire",
  },
  sans_juifs: {
    title: "L'antisémitisme sans Juifs",
    subtitle: "Un système de pensée autonome qui n'a pas besoin de sa cible",
    category: "reconnaitre",
    order: 5,
    path: "/sans-juifs",
  },

  // MESURER
  exil: {
    title: "L'exil intérieur",
    subtitle: "Le passing, l'autocensure, l'exode silencieux",
    category: "mesurer",
    order: 1,
    path: "/exil",
  },
  violence: {
    title: "La violence réelle",
    subtitle: "Halimi, Toulouse, Hyper Cacher — des chiffres et des noms",
    category: "mesurer",
    order: 2,
    path: "/violence",
  },
  canari: {
    title: "Le canari dans la mine",
    subtitle: "L'antisémitisme comme indicateur de santé démocratique",
    category: "mesurer",
    order: 3,
    path: "/canari",
  },
  exception: {
    title: "L'exception géopolitique",
    subtitle: "Le seul État au monde dont l'existence fait débat",
    category: "mesurer",
    order: 4,
    path: "/exception",
  },

  // RESSOURCES
  ressources: {
    title: "Ressources",
    subtitle: "Ouvrages, études, rapports pour aller plus loin",
    category: "ressources",
    order: 1,
    path: "/ressources",
  },

  // FAQ
  faq: {
    title: "« Je ne suis pas antisémite, mais… »",
    subtitle: "12 phrases courantes déconstruites une par une",
    category: null,
    path: "/faq",
  },
};

export function getCategoryPages(cat: string): PageWithKey[] {
  return (Object.entries(PAGES) as [PageKey, Page][])
    .filter(([, p]) => p.category === cat)
    .sort((a, b) => (a[1].order ?? 0) - (b[1].order ?? 0))
    .map(([key, page]) => ({ key, ...page }));
}

export function getNavigation(pageKey: PageKey): { prev: PageWithKey | null; next: PageWithKey | null } {
  const page = PAGES[pageKey];
  if (!page?.category) return { prev: null, next: null };
  const pages = getCategoryPages(page.category);
  const idx = pages.findIndex((p) => p.key === pageKey);
  return {
    prev: idx > 0 ? pages[idx - 1]! : null,
    next: idx < pages.length - 1 ? pages[idx + 1]! : null,
  };
}

export function getPagePath(pageKey: PageKey): string {
  return PAGES[pageKey]?.path ?? "/";
}
