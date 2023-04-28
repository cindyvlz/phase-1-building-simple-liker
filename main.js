// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartGlyph = document.querySelector(".like").children[0];
heartGlyph.addEventListener("click", () => {
  if (heartGlyph.className === "like-glyph") {
    mimicServerCall()
      .then(() => {
        heartGlyph.setAttribute("class", "activated-heart");
      })
      .catch(() => {
        document.querySelector("#modal").setAttribute("class", "");
        setTimeout(() => {
          document.querySelector("#modal").setAttribute("class", "hidden");
        }, 3000);
      });
  } else {
    heartGlyph.setAttribute("class", "like-glyph");
  }
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
