
export default function getBrowserPrefix() {
  let body = null;
  
  try {
    //See if document and body is even set.
    body = document.body;
  } catch (err) {
    return '';
  }
  
  if (body.style['-webkit-transform'] !== undefined) {
    return '-webkit-';
  } else if (body.style['-moz-transform'] !== undefined) {
    return '-moz-';
  } else if (body.style['-ie-transform'] !== undefined) {
    return '-ie-';
  } else if (body.style['-o-transform'] !== undefined) {
    return '-o-';
  }
  
  return '';
}