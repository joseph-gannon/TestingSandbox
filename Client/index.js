PlayerList = new Mongo.Collection('players');

//UserAccounts = new Mongo.Collection('users');
Router.route('/register');
Router.route('/UserHome');
Router.route('/',{template: 'login'});
Router.configure({
    layoutTemplate: 'main'
});
if(Meteor.isClient){
//    PlayerList.insert({name: "Joe",gamesPlayed: 0});
//    PlayerList.insert({name: "Ben", gamesPlayed: 0});
   console.log("Hello client");



    Template.addPlayerForm.events
    ({
        'submit form' : function(event)
        {
            event.preventDefault();
            var playerName = event.target.playerNameTxt.value;
            var gamesPlayedVal = event.target.gamesPlayedTxt.value;
            var myObj = document.getElementById("playerNameTxt");
            toastr.options.positionClass = "toast-bottom-center";
            if(playerName.match(/\S/))
            {
                PlayerList.insert({name:playerName,gamesPlayed:gamesPlayedVal});
                event.target.playerNameTxt.setAttribute("text","");
                event.target.gamesPlayedTxt.setAttribute("text","");
                toastr.info(playerName+" Added Successfully!");
            }
            else
            {
                //document.getElementById("addPlayerError").innerHTML = "RAWR?";
//                toastr.options.positionClass = "toast-bottom-center";
                toastr.error("Invalid Player Name!");
            }
        }
    });


}

