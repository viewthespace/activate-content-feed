import getMediaUrl from '../helpers/getMediaUrl';
import localize from '../helpers/localize';

export default function renderChannel(channel) {
  let logoStyle = (channel.profile && channel.profile.logo) ? `background-image: url(${getMediaUrl(channel.profile.logo)});` : "";
  
  return `
    <div class="ChannelList" onclick="App.goChannel(event, '${channel._id}')">
        <div class="logo">
            <div class="img" style="${logoStyle}"></div>
        </div>
        <div class="text">
            <h1>${localize(channel.name)}</h1>
            <h2>${channel.address.street1}, ${channel.address.city}</h2>
        </div>
        <div class="buttons">
            <i class="icon icon-angle-right"></i>
        </div>
     </div>
   `;
}