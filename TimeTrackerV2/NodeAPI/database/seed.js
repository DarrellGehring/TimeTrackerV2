const { Database } = require('sqlite3');

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./database/main.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the main database.');
  });

db.run(`CREATE TABLE IF NOT EXISTS Users(userID INTEGER PRIMARY KEY, 
                            username TEXT NOT NULL,
                            password TEXT NOT NULL,
                            firstName TEXT NOT NULL,
                            lastName TEXT NOT NULL,
                            type TEXT NOT NULL,
                            isActive BOOL NOT NULL,
                            salt TEXT NOT NULL);`)

db.run(`CREATE TABLE IF NOT EXISTS TimeCard(timeslotID INTEGER PRIMARY KEY, 
                            timeIn TEXT NOT NULL,
                            timeOut TEXT,
                            isEdited bool NOT NULL,
                            createdOn TEXT NOT NULL,
                            userID INTEGER NOT NULL,
                            description TEXT);`)