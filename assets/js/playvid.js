// var tag = document.createElement('script');
//   tag.id = 'iframe-demo';
//   tag.src = 'https://www.youtube.com/iframe_api';
//   var firstScriptTag = document.getElementsByTagName('script')[0];
//   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//   var player;
//   function onYouTubeIframeAPIReady() {
//     player = new YT.Player('player', {
//         events: {
//           'onReady': onPlayerReady,
//           'onStateChange': onPlayerStateChange
//         }
//     });
//   }


      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: '83Od9fAySvE',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.pauseVideo();
      }

      // 5. The API calls this function when the player's state changes.
     
      
      function onPlayerStateChange(event) {
       
      }

$(document).ready(function(){
    $('.modal').each(function(){
            var src = $(this).find('iframe').attr('src');

        $(this).on('click', function(){

            // $(this).find('iframe').attr('src', '');
            // $(this).find('iframe').attr('src', src);
            player.pauseVideo();

        });
    });
});