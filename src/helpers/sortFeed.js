export default function sortFeed(aLive, bLive) {
  let a = aLive.content;
  let b = bLive.content;
  
  if (a.start.constructor !== Date) a.start = new Date(a.start);
  if (a.end.constructor !== Date) a.end = new Date(a.end);
  if (b.start.constructor !== Date) b.start = new Date(b.start);
  if (b.end.constructor !== Date) b.end = new Date(b.end);
  
  //Both have started already, sort by which ends first
  if (a.start < Date.now() && b.start < Date.now()) {
    return a.end < b.end ? -1 : 1;
  }
  
  //A has started, but b hasn't
  if (a.start < Date.now()) {
    return a.end < b.end ? -1 : 1;
  }
  
  //B has started, but A hasn't
  if (b.start < Date.now()) {
    return b.end < a.end ? 1 : -1;
  }
  
  //Neither has started.
  return a.end < b.end ? -1 : 1;
}