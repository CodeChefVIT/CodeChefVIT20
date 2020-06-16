// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "http://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player=[],i=1,videoIdHolder=[];
      for(i=0;i<6;i++)
      {
        switch(i)
        {
          case 0:
          videoIdHolder.push('bD9qAFnA7K8');
          break;
          case 1:
          videoIdHolder.push('xOdNqz9VNhQ');
          break;
          case 2:
          videoIdHolder.push('kHXU4FiC2B0');
          break;
          case 3:
          videoIdHolder.push('t1HOY7Rp6xU');
          break;
          case 4:
          videoIdHolder.push('nJSqbUbE94k');
          break;
          case 5:
          videoIdHolder.push('m8adYJxkCqk');
          break;

        }
      }
      function onYouTubeIframeAPIReady() {
        for(i=0;i<6;i++){
           player[i] = new YT.Player('player'+(i+1), {
          height: '390',
          width: '640',
          videoId: videoIdHolder[i],
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
           console.log(player[i].videoId);
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

  for(i=1;i<=6;i++)
  {
    $("#m"+i).click(function(){
      player[i-1].pauseVideo();
    });

    $('#wb'+i).on('hidden.bs.modal', function (e) {
        var $iframes = $(e.target).find('iframe');
        $iframes.each(function(index, iframe){
       $(iframe).attr("src", $(iframe).attr('src'));
    });
  });
}