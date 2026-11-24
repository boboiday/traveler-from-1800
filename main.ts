import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "You stand in a market square in 1800, and a farmer holds up a flat stone that shows you the price of wheat in London, a play in Paris, and your mother's face — all at once, all alive.";

const n = [...SENTENCE].length;
if (n < 1 || n > 200 || SENTENCE.trim() !== SENTENCE || SENTENCE.includes("\n") || SENTENCE.includes("\r")) {
  throw new Error("sentence must be a single 1-200 character line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
