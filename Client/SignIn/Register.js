/**
 * Created by joe on 7/9/2015.
 */
if(Meteor.isClient)
{
    Template.register.events
    ({
        'submit form' : function(event)
        {
            event.preventDefault();
//            var email = event.target.registrationEmail.value; //$('[name=email]').val();
//            var password = event.target.registrationPassword.value; //$('[name=password]').val();

            var regEmail = $('[name=registrationEmail]').val();
            var regPassword = $('[name=registrationPassword]').val();
            var regUserName = $('[name=registrationUserName]').val();

            //insert user into Meteor
            console.log("email: "+regEmail+" || pw: "+regPassword);
            var user = {
                email: regEmail,
                password: regPassword,
                username: regUserName,
                profile:
                {
                    rating: 0,
                    playerWins: 0,
                    playerLoses: 0,
                    gamesPlayed: 0
                }
               };


            Accounts.createUser(user, function(error)
            {
                if(error)
                {
                    toastr.error(error.reason);
                }
                else
                {
                    toastr.info("Welcome Ponger "+regEmail+"!");
                }
            });

            Router.go('/UserHome');
        }



    });


}