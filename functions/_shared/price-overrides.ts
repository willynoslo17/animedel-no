/** Norway market price matching (2026-10-30). Keys are CJ product ids (pid).
 * PRICE_OVERRIDE: regular NOK price aligned to the Norwegian market, never below the profit floor.
 * HIDDEN: profit floor is above the Norwegian market price -> product is hidden (not deleted). */
export const PRICE_OVERRIDE: Record<string, number> = {"1460506707603099648": 209, "80E24876-F01F-4BF7-A376-CF5FBA1289D4": 299};
/* 2026-10-30: products without required certification removed from store (owner order). */
export const HIDDEN = new Set<string>(["0128A917-A355-4D8D-AA59-4FAA4F0013AD", "FC14FBC6-7138-4878-99F7-289DBFB9D536", "1650398167256535040", "1634758645298769920", "2602090303381624300", "1361232385315835904", "1879086794454761474", "FE0F0248-5A62-424F-87D5-148C586C8E26"]);
