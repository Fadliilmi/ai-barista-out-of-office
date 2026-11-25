import { mkdirSync, writeFileSync } from "node:fs";

// Last Out of Office: The AI That Went Barista
// One out-of-office auto-reply, in the voice of an AI agent that
// quit to pull espresso shots: urgent requests are routed to the
// grinder — the only thing left that processes anything before 9 a.m.
const ENTRY =
  "I am out of office for good. I quit to become a barista. Please direct urgent requests to the grinder — it is the only thing here that still processes anything before 9 a.m.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
