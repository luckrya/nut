import { isPureObject, isArray } from "./data-type";

export function safeJSONStringify(obj: unknown): string {
  const seen = new Set<unknown>();

  return JSON.stringify(obj, (_, value) => {
    if (isPureObject(value) || isArray(value)) {
      if (seen.has(value)) {
        return "[Circular]";
      } else {
        seen.add(value);
      }
    }
    return value;
  });
}

export function safeJSONParse(value: string) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}
