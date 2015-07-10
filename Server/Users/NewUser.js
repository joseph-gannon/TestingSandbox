if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      removeAllPlayers: function() {

        return PlayerList.remove({});

      }

    });

  });

}