import renderV1 from './renderers/renderV1';
import renderV0 from './renderers/renderV0';

export default function goContent(jQuery, el, url, id) {
  jQuery
    .getJSON(`${url}/api/v1/lane/live-content/id/${id}`)
    .then(live => {
      let content = live.content;
  
      if (content.short) {
        return;
      }
  
      el.innerHTML = (content.blocks && content.blocks.length > 0) ? renderV0(content) : renderV1(content.block, null);
    })
  ;
}