import { useParams } from "react-router-dom";
import type { Lang } from "../data/types";
import { DEFAULT_LANG, LANGS } from "../data/types";

export function useLang(): Lang {
  const { lang } = useParams<{ lang: string }>();
  if (lang && LANGS.includes(lang as Lang)) return lang as Lang;
  return DEFAULT_LANG;
}
