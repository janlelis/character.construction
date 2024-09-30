import UNICODE_DATA_NUMERIC_VALUE from "../../data/numeric_value.json"

export function unicodeNumericValue(codepoint) {
  return UNICODE_DATA_NUMERIC_VALUE["" + codepoint] as string
}