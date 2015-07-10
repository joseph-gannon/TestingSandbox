   if(Meteor.isClient)
   {
       Template.leaderBoard.helpers
       ({
            'user' : function()
            {
                return Meteor.users.find()
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
                  var selectedPlayerName = Meteor.users.findOne({_id: playerId});
                  console.log("PlayerID: "+selectedPlayer+" || PlayerName: "+this.name);
                  console.log("userId = "+userId);
              },
              'submit form' : function(event)
              {
                var youWin;

                event.preventDefault();
                var opponentName = $('[id=opponentNameTxt]').val();
                var yourScore = $('[id=yourScoreTxt').val();
                var theirScore = $('[id=theirScoreTxt]').val();
                var yourWins = Meteor.user().profile.playerWins;
                var yourLoses = Meteor.user().profile.playerLoses;
                var yourGamesPlayed = Meteor.user().profile.gamesPlayed;

                //Updating Metrics - Need to still add opponent info

                if(yourScore > theirScore)
                {
                    youWin = true;
                    var updateWins = yourWins+1;
                    Meteor.users.update({_id: Meteor.userId()},{ $set:{"profile.playerWins":yourWins+1, "profile.gamesPlayed": yourGamesPlayed+1}});
                    console.log("You Win!");
                    console.log("updated win record: "+Meteor.user().profile.playerWins);
                }
                else
                {
                    console.log("You Lose!");
                    Meteor.users.update({_id: Meteor.userId()},{ $set:{"profile.playerLoses":yourLoses+1, "profile.gamesPlayed": yourGamesPlayed+1}});
                }

                //clear fields
                $("#addResultForm")[0].reset();



              }
         });
   }