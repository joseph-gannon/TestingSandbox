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
            var email = event.target.registrationEmail.value; //$('[name=email]').val();
            var password = event.target.registrationPassword.value; //$('[name=password]').val();


            //insert user into Meteor
            console.log("email: "+email+" || pw: "+password);
            var user =
            {
                email: email,
                password: password
            };
            Accounts.createUser(user,function(error)
            {
                if(error)
                {
                    console.log(error);
                }
                else
                {
                    toastr.info(email+" Successfully Registered!");
                }
            });
            //Accounts.createUser
            //({
            //    email: email,
            //    password: password
            //}, function(error)
            //    {
            //        console.log(error);
            //    }
            //
            //);

            Router.go('/');
        }
    });
}