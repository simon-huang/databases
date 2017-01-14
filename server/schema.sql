CREATE DATABASE chat;

USE chat;

CREATE TABLE usernames (
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY(username)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message text NOT NULL,
  username VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY(id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

/*
CREATE TABLE usernames (
  username VARCHAR(20) NOT NULL,
  PRIMARY KEY(username)
);

CREATE TABLE roomnames (
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY(roomname)
);

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT,
  message text NOT NULL,
  username VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY(username) REFERENCES usernames(username),
  FOREIGN KEY(roomname) REFERENCES roomnames(roomname)
);
/*