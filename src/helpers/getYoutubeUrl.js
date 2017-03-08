export default function getYoutubeUrl(block) {
  return `https://www.youtube.com/embed/${block.videoid}?feature=player_embedded&playsinline=1&controls=0&autohide=1&autoplay=0&modestbranding=1&showinfo=0&iv_load_policy=3&rel=0&id=youtube&chromeless=true&class=google-youtube&enablejsapi=1`;
}