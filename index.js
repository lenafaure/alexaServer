/**
 * Created by LEFAURE on 12/04/2017.
 */
module.change_code = 1;
'use strict';

var alexa = require( 'alexa-app' );
var app = new alexa.app( 'test-skill' );


app.launch( function( request, response ) {
    response.say( 'Welcome to your test skill' ).reprompt( 'Way to go. You got it to run. Bad ass.' ).shouldEndSession( false );
} );


app.error = function( exception, request, response ) {
    console.log(exception)
    console.log(request);
    console.log(response);
    response.say( 'Sorry an error occured ' + error.message);
};

app.intent('sayNumber',
    {
        "slots":{"number":"NUMBER"}
        ,"utterances":[
        "say the number {1-100|number}",
        "give me the number {1-100|number}",
        "tell me the number {1-100|number}",
        "I want to hear you say the number {1-100|number}"]
    },
    function(request,response) {
        var number = request.slot('number');
        response.say("You asked for the number "+number);
    }
);

app.intent('sayMedication',
    {
        "utterances":[
        "What time is my Medication",
        "give me the number {1-100|number}",
        "tell me the number {1-100|number}",
        "I want to hear you say the number {1-100|number}"]
    },
    function(request,response) {
        var number = request.slot('number');
        response.say("Your medication is due at 14h");
    }
);

module.exports = app;