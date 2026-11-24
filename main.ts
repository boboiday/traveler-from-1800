import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "It is a library with no walls, where every book in the world sits upon one table and any man may read any page and speak to its author at once.";

const n = [...SENTENCE].length;
if (n < 1 || n > 200 || SENTENCE.trim() !== SENTENCE) {
  throw new Error("sentence must be a single 1-200 character line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE, "utf8");
