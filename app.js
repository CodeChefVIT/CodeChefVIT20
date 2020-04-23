const express= require('express')
const CONFIG = require('./config')
const google = require('googleapis').google

const OAuth2 = google.auth.OAuth2
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')



app =express();
app.set('view engine','ejs');
app.use(express.static("assert"));

app.use(cookieParser())


//routing
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/home', (req, res) => {
  res.render('index')
})

app.get('/events', (req, res) => {
  res.render('events')
})
app.get('/team', (req, res) => {
  res.send('hello')
})
app.get('/sponsers', (req, res) => {
  res.send('hello')
})

app.get('/webinars',(req,res)=>{
    const oauth2client = new OAuth2(

        CONFIG.oauth2Credentials.client_id,
        CONFIG.oauth2Credentials.client_secret,
         CONFIG.oauth2Credentials.redirect_uris[0]
        
    )

    const loginLink = oauth2client.generateAuthUrl({
        access_type: 'offline',
        scope:CONFIG.oauth2Credentials.scopes
    })

    return res.render('webinar',{loginLink:loginLink})
})

app.get('/playlist',function(req,res){
    const oauth2client = new OAuth2(
        CONFIG.oauth2Credentials.client_id,
        CONFIG.oauth2Credentials.client_secret,
         CONFIG.oauth2Credentials.redirect_uris[0]
    )
    if(req.query.error){
        //user didnt grant permission
        return res.redirect('/')
    }else{
        oauth2client.getToken(req.query.code, function(err,token){
            if(err) return res.redirect('/')

            res.cookie("jwt",jwt.sign(token,CONFIG.JWTsecret))

            return res.redirect('/video_list')
        })
    }
})

app.get("/video_list",function(req,res){
    if(req.query.error){
        return res.redirect("/")
    }
    const oauth2client = new OAuth2(

        CONFIG.oauth2Credentials.client_id,
        CONFIG.oauth2Credentials.client_secret,
         CONFIG.oauth2Credentials.redirect_uris[0]
        
    )

    oauth2client.credentials = jwt.verify(req.cookies.jwt,CONFIG.JWTsecret)

    //call the youtube api
    const service = google.youtube("v3")
    service.channels.list({
        auth: oauth2client,
        part: 'snippet,contentDetails,statistics',
        id: 'UCzFltCrQSB1CKmX440yqTKw'
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        var channels = response.data.items;
        console.log(channels);
        if (channels.length == 0) {
          console.log('No channel found.');
        } else {
          console.log('This channel\'s ID is %s. Its title is \'%s\', and ' +
                      'it has %s views.',
                      channels[0].id,
                      channels[0].snippet.title,
                      channels[0].statistics.viewCount);

                      

                      const playlistId= channels[0].contentDetails.relatedPlaylists.uploads;
                      requestVideoPlaylist(playlistId);
    }
      });
    })
    

    

function requestVideoPlaylist(playlistId) {

    console.log(playlistId)
    const service = google.youtube("v3")
    service.playlistItems.list({
        playlistId: 'UUzFltCrQSB1CKmX440yqTKw',
       part: 'snippet contentDetails',
       maxResults: 10,
      }, function(err, response) {
        if (err) {
          console.log('The API returned an error: ' + err);
          return;
        }
        var playListItems = response.data.items;
        console.log(playListItems);
         if (playListItems.length == 0) {
           console.log('No videos found.');
         } else {
    
             return res.render('data',{playListItems});    
         }

    });
  }
 
    
app.listen(5000,console.log('Server started on port 5000.'));

