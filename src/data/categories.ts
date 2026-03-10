import { COLORS } from "./colors";
import type { Category, CategoryKey } from "./types";

export const CATEGORIES: Record<CategoryKey, Category> = {
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
