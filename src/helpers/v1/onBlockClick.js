import localize from '../localize';

export default function onBlockClick(e, block) {
  if (!(block && block.link && block.link.type)) {
    return;
  }
  
  e.stopPropagation();
  
  let type = block.link.type;
  
  //These are all mobile only link types.
  if (['InApp', 'Channel', 'Content', 'Service', 'Media'].includes(type)) {
    return;
  }
  
  let url = localize(block.link.url);
  
  //make sure the link has the required prefix.
  switch (type) {
    case 'Phone':
      if (!url.startsWith('tel:')) url = 'tel:' + url;
      break;
    case 'Email':
      if (!url.startsWith('mailto:')) url = 'mailto:' + url;
      break;
    case 'Web':
      if (!url.startsWith('http')) url = 'http://' + url;
      break;
  }
  
  window.open(url, '_blank');
};