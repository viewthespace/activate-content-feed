import getContentBranding from '../helpers/v0/getContentBranding';
import generateOffsetStyle from '../helpers/generateOffsetStyle';
import getBlockStyle from '../helpers/v0/getBlockStyle';
import getFriendlyDate from '../helpers/getFriendlyDate';
import localize from '../helpers/localize';
import getMediaUrl from '../helpers/getMediaUrl';
import getFontScale from '../helpers/getFontScale';
import getYoutubeUrl from '../helpers/getYoutubeUrl';

export default function(content) {
  let branding = getContentBranding(content);
  let offsetStyles = generateOffsetStyle(branding);
  
  function renderBlock(block) {
    let innerHtml = '';
    let blockClasses = '';
    
    switch (block._type) {
      case 'ActionBlock':
        innerHtml = `<button class="action" disabled style="${offsetStyles}">
          <label>Only available via mobile app</label>
        </button>`;
        break;
      case 'DateBlock':
        innerHtml = `<p class="date">${getFriendlyDate(content)}</p>`;
        break;
      case 'DescriptionBlock':
        innerHtml = `<p class="text">${localize(block.text)}</p>`;
        break;
      case 'HeaderBlock':
        blockClasses = `text header ${block.size}`;
        innerHtml = localize(block.text);
        break;
      case 'ImageBlock':
        innerHtml = `<div class="image" style="height: ${block.height}em; opacity: ${block.opacity}; background-size: ${block.sizing}; background-image: url(${getMediaUrl(block.image)});"></div>`;
        break;
      case 'LegalBlock':
        innerHtml = `<h1>Legal</h1><p style="legal text">${localize(block.text)}</p>`;
        break;
      case 'LinkBlock':
        innerHtml = `<a class="Link" style="color: ${branding.color}; border-color: ${branding.color}; background-color: transparent;" href="${localize(block.link.url)}" target='_blank'>
          <label>${localize(block.link.name) || 'Click Here'}</label>
        </a>`;
        break;
      case 'QuestionBlock':
        innerHtml = `<p class="text question">${localize(block.question)}</p><p class="text">Only available via mobile app.</p>`;
        break;
      case 'TextBlock':
        innerHtml = localize(block.text);
        break;
      case 'TitleBlock':
        innerHtml = `<p class="text header title">${localize(block.text)}</p>`;
        break;
      case 'YoutubeBlock':
        let height = block.height / 10 * getFontScale();
        innerHtml = `<iframe sandbox="allow-scripts allow-same-origin" class="google-youtube" style="height: ${block.height}em;" modestbranding="1" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height=${height} src=${getYoutubeUrl(block)}></iframe>`;
        break;
    }
    
    return `<div class="block ${block._type} ${blockClasses}" style="${getBlockStyle(block)}">${innerHtml}</div>`;
  }
  
  return `
    <div class="content-detail" style="background-color: ${branding.backgroundColor}; color: ${branding.color};">
        ${content.blocks.map(block => renderBlock(block)).join('')}
    </div>
  `;
};