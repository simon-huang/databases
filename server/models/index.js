var db = require('../db');

module.exports = {
  messages: {
    get: function (responseEnder) {
      console.log('trying to get messages');
      db.query('SELECT * from messages', function(err, result) {
        if (err) {
          throw err;
        }

        responseEnder(JSON.stringify(result));
      });
    }, // a function which produces all the messages
    post: function (message, responseEnder) {
      console.log('trying to post message');

      db.query('INSERT INTO messages SET ?', {message: message.message, username: message.username, roomname: message.roomname}, function(err, result) {
        if (err) {
          throw err;
        }
        responseEnder();
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (user, responseEnder) {
      console.log('trying to post users');
      // console.log('stringified', JSON.stringify(result));
      db.query('INSERT INTO usernames SET ?', {username: user.username}, function(err, result) {
        if (err) {
          throw err;
        }
        responseEnder();
      });
    }
  }
};

