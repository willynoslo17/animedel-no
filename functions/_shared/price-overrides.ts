/** Norway market price matching (2026-10-30; 2026-10-31: 10–20 kr under cheapest Norwegian competitor, never below profit floor). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"1460506707603099648": 209, "80E24876-F01F-4BF7-A376-CF5FBA1289D4": 259, "A9E1F273-AA9D-4B89-88E3-07C57993705D": 269, "1365210098162601984": 369, "4D273DAC-0793-4005-86AB-FF9EBA3832C7": 209, "1439414956142497792": 369, "1405342293640220672": 179, "C92DFF9D-53F9-46E9-8FAE-34F61E18125E": 219};
/* 2026-10-30: products without required certification removed from store (owner order). */
export const HIDDEN = new Set<string>(["0128A917-A355-4D8D-AA59-4FAA4F0013AD", "FC14FBC6-7138-4878-99F7-289DBFB9D536", "1650398167256535040", "1634758645298769920", "2602090303381624300", "1361232385315835904", "1879086794454761474", "FE0F0248-5A62-424F-87D5-148C586C8E26"]);
