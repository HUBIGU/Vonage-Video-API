module.exports = {
    expressPort: 443,
    testMode: false, 
    appURI: 'https://localhost/',


    vonage: {
        apiKey: '48221537',
        apiSecret: 'OEheMUBWhas0sS6u'
    },

    genesysCloud: {
        // Genesys Cloud region
        // eg. 'mypurecloud.ie', 'euw2.pure.cloud', etc...
        region: 'mypurecloud.jp',

        // Implicit Grant Client ID
        // Used by the web app itself in authorizing the Genesys Cloud agent
        implicitGrantID: '',

        // Client Credentials OAuth
        // For authorizing the server app
        clientID: '953ed9e6-63ca-413d-ba40-322679bf9334',
        clientSecret: '8OqEGAjFj6aEaNFmjQN_KHJjLuCWV1V82uJTgPrJmIY',

        // Required when sending invitation through email, 
        // the outbound email will go through this ACD queue. 
        emailQueueID: '',

        // Required when sending invitation through SMS
        // This number should be purchased by the Genesys Cloud organization.
        smsFromAddress: '', // eg +13175550000
    }
}
