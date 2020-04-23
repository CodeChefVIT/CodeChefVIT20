const port = 5000

const baseUrl=`http://localhost:${port}`

const keys = require('./client_secret.json')

module.exports= {
    JWTsecret: 'mysecret',

    baseUrl:baseUrl,

    port:port,

    oauth2Credentials:{
        client_id:keys.web.client_id,
        project_id:keys.web.project_id,
        auth_url:keys.web.auth_url,
        token_url:keys.web.token_uri,
        auth_provider_x509_cert_url:keys.web.auth_provider_x509_cert_url,
        client_secret:keys.web.client_secret,
        redirect_uris:[
            keys.web.redirect_uris[0]
        ],

        scopes:[
            'https://www.googleapis.com/auth/youtube.readonly'
        ]
        
    }
    

    
}
console.log(keys.web.client_id)


