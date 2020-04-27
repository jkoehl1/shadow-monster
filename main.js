function backHome () {
  window.location = 'page15.html'
  let video = document.querySelector('videos/ShadowPt13.mp4')
  video.addEventListener('ended', backHome )
}
