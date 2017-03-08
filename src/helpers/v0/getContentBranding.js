import chroma from 'chroma-js';
import constants from './constants';

export default function getContentBranding(content) {
  
  let ret = {
    padding: '3em 2em 2em 2em',
    offsetBackground: constants.DEFAULT_OFFSET_BACKGROUND,
    offsetColor: constants.DEFAULT_OFFSET_COLOR,
    color: constants.DEFAULT_COLOR,
    backgroundColor: constants.DEFAULT_BACKGROUND,
    backgroundImage: 'none'
  };
  
  if (!content) {
    return ret;
  }
  
  let newColor;
  let color = chroma(content.backgroundColor || constants.DEFAULT_BACKGROUND);
  
  //If it is a white background.  Use Lane colours as offsets.
  if (color.hex() === constants.DEFAULT_BACKGROUND) {
    ret.offsetBackground = constants.DEFAULT_OFFSET_BACKGROUND;
    ret.offsetColor = constants.DEFAULT_BACKGROUND;
  } else {
    
    //Otherwise check the luminance
    newColor = (color.luminance() > 0.4)
      ? color.darken().darken()
      : color.brighten().brighten()
    ;
    
    ret.offsetBackground = newColor.hex();
    ret.offsetColor = newColor.luminance() > 0.4 ? constants.DEFAULT_COLOR : constants.DEFAULT_BACKGROUND;
  }
  
  ret.color = chroma(content.color || constants.DEFAULT_COLOR).hex();
  ret.backgroundColor = content.backgroundColor || constants.DEFAULT_BACKGROUND;
  ret.backgroundImage = 'none';
  
  return ret;
}