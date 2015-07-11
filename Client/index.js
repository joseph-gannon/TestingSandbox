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


}

