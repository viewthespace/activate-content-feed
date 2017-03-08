import constants from './constants';
import getMediaUrl from '../getMediaUrl';

export default function getBlockStyle(block, parent, multiplier, units) {
  if (!block) {
    return;
  }
  
  let style = {};
  
  //TODO: refactor out to use common isAbsoluteLayout function
  let isAbsoluteLayout = block && block.position === 'relative';
  let hasFlowHeight = !isAbsoluteLayout && (block._type === 'LayoutBlock' || block._type === 'TextBlock');
  
  //Cast all props as integers.
  for (let prop of constants.INTEGER_PROPS) {
    block[prop] = (+block[prop]) || 0;
  }
  
  for (let prop of constants.NAKED_PROPS) {
    style[prop] = block[prop];
  }
  
  for (let prop of constants.UNIT_PROPS) {
    style[prop] = block[prop] / multiplier + units;
  }
  
  if (parent) {
    //Root block can't have margin set.
    for (let prop of constants.PARENT_PROPS) {
      style[prop] = block[prop] / multiplier + units;
    }
    
    //Set this blocks isAbsolutePositioned flag in-case it got lost.
    if (parent && parent.position === 'relative') {
      block.isAbsolutePositioned = true;
    }
  }
  
  style.transform = (block.scale !== 1 || block.rotate !== 0)
    ? `scale3d(${block.scale},${block.scale}, 1) rotate(${block.rotate}deg)`
    : ''
  ;
  
  let backgroundImage = '';
  
  if (block.gradient) {
    backgroundImage += block.gradient;
  }
  
  if (block.gradient && block.backgroundImage) {
    backgroundImage += ',';
  }
  
  if (block.backgroundImage) {
    backgroundImage += `url(${getMediaUrl(block.backgroundImage)})`;
  }
  
  style.backgroundImage = backgroundImage;
  style.backgroundPosition = `${block.backgroundPositionX || 0}% ${block.backgroundPositionY || 0}%`;
  
  if (block.isAbsolutePositioned) {
    style.position = 'absolute';
    
    for (let prop of ['top', 'left', 'width', 'height']) {
      style[prop] = (+block[prop] || 0) / multiplier + units;
    }
  } else if (isAbsoluteLayout) {
    style.position = 'relative';
    
    for (let prop of ['top', 'left']) {
      style[prop] = 'auto';
    }
    
    for (let prop of ['width', 'height']) {
      style[prop] = (+block[prop] || 0) / multiplier + units;
    }
  } else {
    style.top = 'auto';
    style.left = 'auto';
    style.position = parent ? 'initial' : 'relative';
    style.height = (hasFlowHeight || !block.height) ? 'auto' : (+block.height || 0) / multiplier + units;
    style.width = block.width ? ((+block.width || 0) / multiplier) + block.widthMode : '100%';
  }
  
  //Column mode
  if (block.columnMode) {
    style.display = 'table';
  } else if (block.isColumn) {
    style.display = 'table-cell';
  } else {
    style.display = parent ? 'inline-block' : 'block';
  }
  
  return style;
}