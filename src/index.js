import getFeed from './getFeed';
import getDirectory from './getDirectory';
import goContent from './goContent';
import goChannel from './goChannel';

const BASE_URL = 'https://app.mybrookfield.ca';
//const BASE_URL = 'http://lane.int:8080';

window.App = window.App || {};
  
let initialized = false;
let onInitialized = function() {};
  
let readyStateCheckInterval = setInterval(function() {
  if (initialized) {
    clearInterval(readyStateCheckInterval);
    return;
  }
  
  if ((document.readyState === "interactive" || document.readyState === 'complete')) {
    onInitialized();
    clearInterval(readyStateCheckInterval);
  }
}, 10);


function openOverlay() {
  let overlay = document.getElementById('overlay');
  overlay.classList.add('displayed');
  overlay.classList.remove('visible');
  
  document.body.style.overflow = 'hidden';
  
  setTimeout(function() {
    overlay.classList.add('visible');
  }, 10);
}

onInitialized = function() {
  let overlay = document.getElementById('overlay');
  let overlayClose = document.getElementById('overlayClose');
  let overlayCloseLabel = document.getElementById('overlayCloseLabel');
  
  overlay.onclick = function (e) {
    if (!(e.target === overlay || e.target === overlayClose || e.target === overlayCloseLabel)) return;
    
    document.body.style.overflow = 'auto';
    
    overlay.classList.remove('visible');
    
    setTimeout(function () {
      overlay.classList.remove('displayed');
    }, 250);
  };
  
  if (window.App.hasFeed) {
    getFeed(jQuery, document.getElementById('feedContainer'), BASE_URL, laneChannelId);
  }
  
  if (window.App.hasDirectory) {
    getDirectory(jQuery, document.getElementById('directoryContainer'), BASE_URL, laneChannelId);
  }
};

window.App.goContent = function(ev, id) {
  goContent(jQuery, document.getElementById('overlayInner'), BASE_URL, id);
  openOverlay();
};
  
window.App.goChannel = function(ev, id) {
  goChannel(jQuery, document.getElementById('overlayInner'), BASE_URL, id);
  openOverlay();
};