export type Lang = "fr" | "en";

export const LANGS: Lang[] = ["fr", "en"];
export const DEFAULT_LANG: Lang = "fr";

export type CategoryKey = "comprendre" | "deconstruire" | "reconnaitre" | "mesurer" | "ressources";

export type PageKey =
  | "home"
  | "definition" | "inversion" | "quatre_ages"
  | "contradiction" | "matrice" | "controle" | "philosemitisme" | "bouc"
  | "obsession" | "gauche" | "sionisme" | "memoire" | "sans_juifs"
  | "exil" | "violence" | "canari" | "exception"
  | "ressources"
  | "faq";

export interface Category {
  label: string;
  color: string;
  bg: string;
  icon: string;
  description: string;
}

export interface Page {
  title: string;
  subtitle?: string;
  category: CategoryKey | null;
  order?: number;
  path: string;
}

export interface FaqItem {
  phrase: string;
  mecanisme: string;
  mecanismeColor: string;
  reponse: string[];
  liens: PageKey[];
}

export interface PageWithKey extends Page {
  key: PageKey;
}
