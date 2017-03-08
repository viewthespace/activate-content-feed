import renderV1 from './renderers/renderV1';

export default function goChannel(jQuery, el, url, id) {
  jQuery
    .getJSON(`${url}/api/v1/Channel/${id}/get`)
    .then(channel => el.innerHTML = renderV1(channel.profile.block, null))
  ;
}