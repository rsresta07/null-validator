// Returns error message if value is not null, otherwise null
export function isNull(value: unknown): string | null {
  return value === null ? null : "Value is not null";
}

// Returns error message if value is not undefined, otherwise null
export function isUndefined(value: unknown): string | null {
  return value === undefined ? null : "Value is not undefined";
}

// Returns error message if value is not null or undefined, otherwise null
export function isNullish(value: unknown): string | null {
  return value === null || value === undefined
    ? null
    : "Value is neither null nor undefined";
}

// Returns error message if value is null or undefined, otherwise null
export function isNotNullish<T>(value: T): string | null {
  return value === null || value === undefined
    ? "Value is null or undefined"
    : null;
}

// Returns error message if value is not an empty (trimmed) string, otherwise null
export function isEmptyString(value: unknown): string | null {
  if (typeof value !== "string") {
    return "Value is not a string";
  }

  return value.trim().length === 0 ? null : "String is not empty";
}
