      // Path to your audio file
      var judgementFilePath = 'Audio/Mp_judgement.ogg'; // Replace 'audio-file.mp3' with your audio file path
      
      // Create an audio element
      var judgement = new Audio(judgementFilePath);
      
      // Get the play button element
      var judgementButton = document.getElementById('judgement');
      
      // Add a click event listener to the play button
      judgementButton.addEventListener('click', function() {
          // Play the audio

          judgement.play();
      });

//___________________________________________________________________________________//


function playJudgement() {
    var audio = document.getElementById("judgement");
    audio.play();
}

function playDruid() {
    var audio = document.getElementById("druid");
    audio.play();
}

function playGab1() {
    var audio = document.getElementById("gab1");
    audio.play();
}

function playCoin() {
    var audio = document.getElementById("coin");
    audio.play();
}

//__________________________________________//

function smoothScroll(targetId) {
    var target = document.getElementById(targetId);
    target.scrollIntoView({
        behavior: 'smooth'
    });
}