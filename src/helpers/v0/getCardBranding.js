import constants from './constants';
import getMediaUrl from '../getMediaUrl';

export default function getCardBranding(content) {
  if (!content) {
    return {
      padding: constants.DEFAULT_PADDING,
      color: constants.DEFAULT_COLOR,
      backgroundColor: constants.DEFAULT_BACKGROUND,
      backgroundImage: `none`,
      heroDisplay: 'none',
      heroImage: 'none'
    }
  }
  
  if (content.short) {
    return {
      padding: constants.DEFAULT_PADDING,
      color: content.color,
      backgroundColor: content.backgroundColor,
      backgroundImage: `none`,
      heroDisplay: 'none'
    };
  }
  
  if (content.layout === 'Hero') {
    return {
      padding: '12em 2em 2em 2em',
      color: constants.DEFAULT_BACKGROUND,
      backgroundColor: constants.DEFAULT_COLOR,
      backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.85) 100%), url(${getMediaUrl(content.backgroundImage)})`,
      heroDisplay: 'none'
    };
  }
  
  return {
    padding: constants.DEFAULT_PADDING,
    color: constants.DEFAULT_COLOR,
    backgroundColor: constants.DEFAULT_BACKGROUND,
    backgroundImage: 'none',
    heroDisplay:  content.backgroundImage ? 'block' : 'none',
    heroImage:  content.backgroundImage ? `url(${getMediaUrl(content.backgroundImage)})` : 'none'
  };
};