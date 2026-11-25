import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const target = join(outDir, "entry.txt");
const text = "The invite's title was the question, the body was the answer, and the meeting itself was the punishment.";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(target, text, "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}

void here;
