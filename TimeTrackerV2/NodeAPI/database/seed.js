const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./main.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the main database.');
  });

db.run(`CREATE TABLE Users(userID INTEGER PRIMARY KEY, 
                            username TEXT NOT NULL,
                            password TEXT NOT NULL,
                            firstName TEXT NOT NULL,
                            lastName TEXT NOT NULL,
                            type TEXT NOT NULL,
                            isActive BOOL NOT NULL);`)