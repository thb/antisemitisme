import { COLORS } from "./colors";
import type { Category, CategoryKey, Lang } from "./types";

const CATEGORIES_FR: Record<CategoryKey, Category> = {
  comprendre: {
    label: "Comprendre",
    color: COLORS.comprendre,
    bg: COLORS.comprendreBg,
    icon: "◆",
    description: "La nature et la spécificité de l'antisémitisme",
  },
  deconstruire: {
    label: "Déconstruire",
    color: COLORS.deconstruire,
    bg: COLORS.deconstruireBg,
    icon: "⬡",
    description: "Les mécanismes logiques et psychologiques",
  },
  reconnaitre: {
    label: "Reconnaître",
    color: COLORS.reconnaitre,
    bg: COLORS.reconnaitreBg,
    icon: "◉",
    description: "Les formes contemporaines déguisées",
  },
  mesurer: {
    label: "Mesurer",
    color: COLORS.mesurer,
    bg: COLORS.mesurerBg,
    icon: "▲",
    description: "Les conséquences concrètes",
  },
  ressources: {
    label: "Ressources",
    color: COLORS.ressources,
    bg: COLORS.ressourcesBg,
    icon: "◈",
    description: "Ouvrages, rapports, liens",
  },
};

const CATEGORIES_EN: Record<CategoryKey, Category> = {
  comprendre: {
    label: "Understand",
    color: COLORS.comprendre,
    bg: COLORS.comprendreBg,
    icon: "◆",
    description: "The nature and specificity of antisemitism",
  },
  deconstruire: {
    label: "Deconstruct",
    color: COLORS.deconstruire,
    bg: COLORS.deconstruireBg,
    icon: "⬡",
    description: "Logical and psychological mechanisms",
  },
  reconnaitre: {
    label: "Recognize",
    color: COLORS.reconnaitre,
    bg: COLORS.reconnaitreBg,
    icon: "◉",
    description: "Contemporary disguised forms",
  },
  mesurer: {
    label: "Measure",
    color: COLORS.mesurer,
    bg: COLORS.mesurerBg,
    icon: "▲",
    description: "Concrete consequences",
  },
  ressources: {
    label: "Resources",
    color: COLORS.ressources,
    bg: COLORS.ressourcesBg,
    icon: "◈",
    description: "Books, reports, links",
  },
};

const ALL_CATEGORIES: Record<Lang, Record<CategoryKey, Category>> = {
  fr: CATEGORIES_FR,
  en: CATEGORIES_EN,
};

export function getCategories(lang: Lang): Record<CategoryKey, Category> {
  return ALL_CATEGORIES[lang];
}
