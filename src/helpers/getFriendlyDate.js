import moment from 'moment';

export default function friendlyDate(instance) {
  if (!instance) return '';
  
  let start = new moment(instance.start);
  let end = new moment(instance.end);
  let today = new moment().startOf('day');
  let diff = start.diff(today, 'days', true);
  let endDiff = end.diff(today, 'days', true);
  
  if (start > new moment()) {
    if (diff < 1) {
      return 'starts ' + start.fromNow();
    } else if (diff < 2) {
      return 'starts tomorrow';
    } else if (diff < 6) {
      return 'starts ' + start.format('dddd');
    } else {
      return 'starts ' + start.fromNow();
    }
  } else if (endDiff > 0) {
    if (endDiff < 1) {
      return 'ends ' + end.fromNow();
    } else if (endDiff < 2) {
      return 'ends tomorrow';
    } else if (endDiff < 6) {
      return 'ends ' + end.format('dddd');
    } else {
      return 'ends ' + end.fromNow();
    }
  } else {
    return 'ended ' + end.fromNow();
  }
}