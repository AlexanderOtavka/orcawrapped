import { ProcessedOrcaData } from "./types";

export function routeOccurrences(
  data: ProcessedOrcaData[]
): Array<{ line: string; count: number; routeShortName?: string }> {
  const lineRecord = data.reduce<Record<string, number>>((prev, cur) => {
    if (!cur.line) {
      return prev;
    }
    const previousValue = prev[cur.line] || 0;
    prev[cur.line] = previousValue + 1;
    return prev;
  }, {});

  return Object.keys(lineRecord)
    .map((line) => ({
      line,
      count: lineRecord[line],
      routeShortName: data.find((l) => l.line === line)?.routeShortName,
    }))
    .sort((a, b) => b.count - a.count);
}
