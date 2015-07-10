PlayerList = new Mongo.Collection('players');
//UserAccounts = new Mongo.Collection('users');
Router.route('/register');
Router.route('/',{template: 'login'});
Router.configure({
    layoutTemplate: 'main'
});
if(Meteor.isClient){
//    PlayerList.insert({name: "Joe",gamesPlayed: 0});
//    PlayerList.insert({name: "Ben", gamesPlayed: 0});
   console.log("Hello client");
   Template.leaderBoard.helpers
   ({
        'player' : function()
        {
            return PlayerList.find()
        },
       'getPlayerName':function(playerId)
       {
            return PlayerList.find({_id: playerId}).fetch()
       },
        'otherHelperFunction' : function()
        {
            return "Yo, this is the other helper function "
        },
       'selectedClass' : function()
       {
           var selectedPlayer = Session.get('selectedPlayer');
           if(this._id==selectedPlayer)
           {
               console.log("yo it was selected")
               return "active";
           }

       }
   });
   Template.leaderBoard.events
      ({
           'click .playerName' : function()
           {
               var playerId = this._id;
               var userId = Meteor.userId;
               Session.set('selectedPlayer',playerId);
               var selectedPlayer = Session.get('selectedPlayer');
               var selectedPlayerName = PlayerList.findOne({_id: playerId});
               console.log("PlayerID: "+selectedPlayer+" || PlayerName: "+this.name);
               console.log("userId = "+userId);
           }
      });
    Template.addPlayerForm.events
    ({
        'submit form' : function(event)
        {
            event.preventDefault();
            var playerName = event.target.playerNameTxt.value;
            var gamesPlayedVal = event.target.gamesPlayedTxt.value;
            var myObj = document.getElementById("playerNameTxt");
            if(myObj.checkValidity() == false)
            {
                document.getElementById("addPlayerError").innerHTML = myObj.validationMessage;
            }
            if(typeof playerName === 'undefined')
            {
                PlayerList.insert({name:playerName,gamesPlayed:gamesPlayedVal});
                event.target.playerNameTxt.setAttribute("text","");
                event.target.gamesPlayedTxt.setAttribute("text","");
            }
            else
            {
                //document.getElementById("addPlayerError").innerHTML = "RAWR?";
                toastr.options.positionClass = "toast-bottom-center";
                toastr.error("Invalid Player Name!");
            }
        }
    });

    //Template.login.events
    //({
    //    'click input[type=submit]' : function (event)
    //    {
    //        event.preventDefault();
    //        var btnIdClicked = event.target.id;
    //        if(btnIdClicked == "loginBtn")
    //        {
    //            console.log("login btn clicked");
    //            toastr.info("Login Btn Clicked!");
    //        }
    //        else
    //        {
    //            console.log("register btn clicked");
    //
    //        }
    //    }
    //
    //
    //});
}

if (Meteor.isServer) {
    Accounts.onCreateUser(function(options,user)
    {
        user.rating = 2222;
    });

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllPlayers: function() {

        return PlayerList.remove({});

      }

    });

  });

}