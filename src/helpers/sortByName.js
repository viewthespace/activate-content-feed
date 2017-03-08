import localize from './localize';

export default function sortByName(a,b) {
  return localize(a.name) < localize(b.name) ? -1 : 1;
}