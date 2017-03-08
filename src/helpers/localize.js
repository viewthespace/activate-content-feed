/**
 * Easy helper function to pull out EN since EN is the only locale we will be using for myBrookfield
 * @param obj
 * @returns {*}
 */
export default function localize(obj) {
  if (!obj || !obj.en) return '';
  
  return obj.en;
};