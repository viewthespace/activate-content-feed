import getBlockStyle from '../helpers/v1/getBlockStyle';
import localize from '../helpers/localize';
import getMediaUrl from '../helpers/getMediaUrl';
import getFontScale from '../helpers/getFontScale';
import getYoutubeUrl from '../helpers/getYoutubeUrl';
import getBrowserPrefix from '../helpers/getBrowserPrefix';
import CSSMap from '../helpers/CSSMap';

function objToCSS(obj) {
  let style = '';
  
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      //Transform is the only special one.
      if (property === 'transform') {
        style += `${getBrowserPrefix()}${CSSMap[property]}: ${obj[property]};`;
      } else {
        style += `${CSSMap[property]}: ${obj[property]};`;
      }
    }
  }
  
  return style;
}

export default function renderV1(block, parent) {
  let blockClasses = '';
  let innerHtml = '';
  let onClick = '';
  
  switch (block._type) {
    case 'LayoutBlock':
      blockClasses = 'layout-block';
      break;
    case 'TextBlock':
      blockClasses = 'layout-text-block';
      innerHtml = localize(block.text);
      break;
    case 'ImageBlock':
      blockClasses = 'layout-image-block';
      innerHtml = `<img src="${getMediaUrl(block.image)}"/>`;
      break;
    case 'YoutubeBlock':
      blockClasses = 'layout-youtube-block';
      let height = block.height / 10 * getFontScale();
      let width = block.width / 10 * getFontScale();
      innerHtml = `<iframe sandbox="allow-scripts allow-same-origin" class="google-youtube" modestbranding="1" frameborder="0" allowfullscreen="1" title="${block.name}" width="100%" height="${height}" width="${width}" src=${getYoutubeUrl(block)}></iframe>`;
      break;
    case 'InputBlock':
      //Only available on mobile.
      blockClasses = 'layout-input-block';
      break;
  }

  let style = getBlockStyle(block, parent, 10, 'em');

  //If this block has a link.
  if (block.link && block.link.type && !['InApp', 'Channel', 'Content', 'Service', 'Media'].includes(block.link.type)) {
    style.cursor = 'pointer';
    
    let url = localize(block.link.url);

    //make sure the link has the required prefix.
    switch (block.link.type) {
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

    onClick = `onclick="window.open('${url}', '_blank'); event.stopPropagation(); return false;"`;
  }
  
  //Recursively build the rest of the layout.
  if (block.blocks) {
    innerHtml += block.blocks.map(child => renderV1(child, block)).join('');
  }
  
  return `<div class="build-block ${blockClasses}" style="${objToCSS(style)}" ${onClick}>${innerHtml}</div>`;
};