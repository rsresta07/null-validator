"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNull = isNull;
exports.isUndefined = isUndefined;
exports.isNullish = isNullish;
exports.isNotNullish = isNotNullish;
exports.isEmptyString = isEmptyString;
// Returns error message if value is not null, otherwise null
function isNull(value) {
    return value === null ? null : "Value is not null";
}
// Returns error message if value is not undefined, otherwise null
function isUndefined(value) {
    return value === undefined ? null : "Value is not undefined";
}
// Returns error message if value is not null or undefined, otherwise null
function isNullish(value) {
    return value === null || value === undefined
        ? null
        : "Value is neither null nor undefined";
}
// Returns error message if value is null or undefined, otherwise null
function isNotNullish(value) {
    return value === null || value === undefined
        ? "Value is null or undefined"
        : null;
}
// Returns error message if value is not an empty (trimmed) string, otherwise null
function isEmptyString(value) {
    if (typeof value !== "string") {
        return "Value is not a string";
    }
    return value.trim().length === 0 ? null : "String is not empty";
}
