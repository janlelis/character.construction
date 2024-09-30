import UNICODE_DATA_NAME from "../../data/name.json"

export function unicodeName(codepoint : number | string) {
  const res = UNICODE_DATA_NAME.NAMES["" + codepoint] as string | undefined
  if(res) {
    return res
  } else if(UNICODE_DATA_NAME.CJK.some((cjk_range) => codepoint >= cjk_range[0] && codepoint <= cjk_range[1])) {
    return `CJK UNIFIED IDEOGRAPH-${parseInt(codepoint, 10).toString(16).toUpperCase().padStart(4,"0")}`
  } else { // TODO hangul
    return "UNKNOWN" // TODO
  }
}