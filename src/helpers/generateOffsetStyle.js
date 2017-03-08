
export default function generateOffsetStyle(branding) {
  return `fill:${branding.offsetColor}; stroke:${branding.offsetColor}; border-color: ${branding.offsetColor}; background-color: ${branding.offsetBackground}; color: ${branding.offsetColor};`;
}