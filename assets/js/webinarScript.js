// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player = [], i = 1, videoIdHolder = [];
for (i = 0; i < 6; i++) {
  switch (i) {
    case 0:
      videoIdHolder.push('iOmHEbMexqI');
      break;
    case 1:
      videoIdHolder.push('U3Ewkyw9I5U');
      break;
    case 2:
      videoIdHolder.push('T76Pke4cJlw');
      break;
    case 3:
      videoIdHolder.push('MfK9u9y63xc');
      break;
    case 4:
      videoIdHolder.push('83Od9fAySvE');
      break;
    case 5:
      videoIdHolder.push('bD9qAFnA7K8');
      break;

  }
}
function onYouTubeIframeAPIReady() {
  for (i = 0; i < 6; i++) {
    player[i] = new YT.Player('player' + (i + 1), {
      height: '390',
      width: '640',
      videoId: videoIdHolder[i],
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
} //ith player is replaced by corresponding iframe 

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.pauseVideo();
}

// 5. The API calls this function when the player's state changes.


function onPlayerStateChange(event) {

}

// $(document).ready(function(){
//   for(i=1;i<=6;i++){
//     $(('#wb'+i)).each(function(){

//         $(this).on('click', function(){

//             // $(this).find('iframe').attr('src', '');
//             // $(this).find('iframe').attr('src', src);
//             player.pauseVideo();

//         });
//     });
//   }

// });

//attach event listeners for playing and pausing on closing modal to each button

for (i = 1; i <= 6; i++) {
  $("#m" + i).click(function () {
    player[i - 1].pauseVideo();
  });

  $('#wb' + i).on('hidden.bs.modal', function (e) {
    var $iframes = $(e.target).find('iframe');
    $iframes.each(function (index, iframe) {
      $(iframe).attr("src", $(iframe).attr('src'));
    });
  });
}

if (document.getElementById("overlay").style.display === "none") {
  document.getElementById("youtube-video").attr("src", document.getElementById("youtube-video").attr('src'));
}

console.clear();