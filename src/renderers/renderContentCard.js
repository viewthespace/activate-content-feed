import getCardBranding from '../helpers/v0/getCardBranding';
import getFriendlyDate from '../helpers/getFriendlyDate';
import localize from '../helpers/localize';

export default function renderContentCard(live) {
  let content = live.content;
  let branding = getCardBranding(content);
  
  return `
    <div class="content-card ${content.short ? 'short' : 'long'}" onclick="App.goContent(event, '${live._id}')">
        <div class="hero" style='display: ${branding.heroDisplay}; background-image: ${branding.heroImage};'></div>
        <div class="card-text" style='color: ${branding.color}; padding: ${branding.padding}; background-image: ${branding.backgroundImage};'>
            <p class="header">${localize(content.name)}</p>
            <label class="date">${getFriendlyDate(content)}</label>
            <p class="text">${localize(content.description)}</p>
        </div>
    </div>
  `;
}
