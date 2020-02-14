(() => {

  // make reference to all the buttons
  const playButtons = document.querySelectorAll('.playButton'),
        pauseButtons = document.querySelectorAll('.pauseButton'),
        rwButtons = document.querySelectorAll('.rwButton'),
        audioElement = document.querySelector('audio');

  let globalPaused = false;

  // play the song associated with the button (its data-trackref attribute)
  function playTrack() {
    // try to fix pause play bug
    // a return statement kills your code execution here - don't go past this point
    if (globalPaused) {
      console.log('paused');
      // if our audio is paused, then just play the track and exit
      resumeTrack();
      return;
    }
    //debugger;
    let audioSource = this.dataset.trackref;

    audioElement.src = `audio/${audioSource}.mp3`;

    //load and play it
    audioElement.load();
    audioElement.play();
    //playTrack();
  }

  function resumeTrack() {
    globalPaused = false;
    audioElement.play();
  }

  function pauseTrack() {
    audioElement.pause();
    globalPaused = true;
  }

  function rwTrack() {
    audioElement.currentTime = 0;
  }

  //process the buttons and add some event handling
  playButtons.forEach(button => button.addEventListener("click",playTrack));
  pauseButtons.forEach(button => button.addEventListener("click",pauseTrack));
  rwButtons.forEach(button => button.addEventListener("click",rwTrack));

})();
