if(Meteor.isClient)
{
    Template.UserHome.helpers
    ({
      playerWins: function()
      {
        return Meteor.user().profile.playerWins;
      },
      playerLoses: function()
      {
        return Meteor.user().profile.playerLoses;
      },
      getPlayerProfile: function()
      {
        return Meteor.user().userId;
      }

    });

    Template.UserProfile.helpers
    ({
        userName: function()
        {
            return Meteor.user()
        }
    })

//    Template.UserHome.events
//    ({
//        'submit form' : function(event)
//        {
//            event.preventDefault();
//            var currentWins = Meteor.user().profile.playerWins;
//            Meteor.user().profile.playerWins = currentWins+1;
//            console.log("Adding Win! "+currentWins);
//        }
//    })
}
