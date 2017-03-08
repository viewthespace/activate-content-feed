import sortByName from './helpers/sortByName';
import renderChannel from './renderers/renderChannel';

export default function getDirectory(jQuery, el, url, id) {
  jQuery.ajax({
    type: 'POST',
    url: `${url}/api/v1/projection/ChannelsByGroup`,
    data: `{"group": "${id}", "type": ["Restaurant","Service","Entertainment","Retail"]}`,
    contentType: "application/json",
    dataType: 'json',
    success: directory => el.innerHTML = directory.channels.sort(sortByName).map(renderChannel).join('')
  });
}
