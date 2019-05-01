export function convertHeadingToName (heading) {
  return heading.trim().toLowerCase().replace(/ /g, '_')
}
