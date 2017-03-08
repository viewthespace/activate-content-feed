import sortFeed from './helpers/sortFeed';
import renderContentCard from './renderers/renderContentCard';

export default function getFeed(jQuery, el, url, id) {
  jQuery
    .getJSON(`${url}/api/v1/lane/live-content/channel/${id}/feed`)
    .then(feed => el.innerHTML = feed.content.sort(sortFeed).map(renderContentCard).join(''))
  ;
}