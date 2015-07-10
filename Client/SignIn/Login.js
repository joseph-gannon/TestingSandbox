/**
 * Created by joe on 7/10/2015.
 */

if(Meteor.isClient) {
    Template.login.events
    ({
        'submit form': function (event) {
            event.preventDefault();
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            Meteor.loginWithPassword(email, password, function(error){
                console.log("logging in!");
                console.log(error.reason);
            });

        }
    });
}