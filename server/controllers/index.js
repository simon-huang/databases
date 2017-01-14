var models = require('../models');
var mysql = require('mysql');
var Promise = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      dbConnection = mysql.createConnection({
        user: 'root',
        password: '',
        database: 'chat'
      });
      dbConnection.connect();
      dbConnection.query('SELECT * from messages', function(err, result) {
        if (err) {
          console.log('error');
          throw err;
        }
        res.end(JSON.stringify(result));
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      dbConnection = mysql.createConnection({
        user: 'root',
        password: '',
        database: 'chat'
      });
      dbConnection.connect();
      console.log({message: req.body.message, username: req.body.username, roomname: req.body.roomname});
      dbConnection.query('INSERT INTO messages SET ?', {message: req.body.message, username: req.body.username, roomname: req.body.roomname}, function(err, result) {
        if (err) {
          console.log('error');
          throw err;
        }
        res.end();
      });
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      dbConnection = mysql.createConnection({
        user: 'root',
        password: '',
        database: 'chat'
      });
      dbConnection.connect();
      dbConnection.query('INSERT INTO usernames SET ?', {username: req.body.username}, function(err, result) {
        if (err) {
          console.log('error');
          throw err;
        }
        res.end();
      });
    }
  }
};

