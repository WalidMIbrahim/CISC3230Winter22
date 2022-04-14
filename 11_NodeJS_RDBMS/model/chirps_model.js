const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data/chirps.db', (err) => {
    if (err){
        console.error('Error failed connecting to sqlite3 databas: ', err);
    }else{
        console.log('Database Created or connected successfully');
    }
});

db.serialize(() =>{
    db.run('DROP TABLE chirps', (err)=> {
        if (err){
            console.error('Error failed drop table chirps: ', err);
        }else{
            console.log('Table chirps dropped successfully');
        }   
    })
      .run(`CREATE TABLE chirps(chirpId     INTEGER     PRIMARY KEY,
                                sender      INTEGER,
                                sentTime    DATETIME    DEFAULT CURRENT_TIMESTAMP,
                                message     TEXT)`, (err)=> {
        if (err){
            console.error('Error failed creating table chirps: ', err);
        }else{
            console.log('Table chirps created successfully');
        }   
    })
      .each('SELECT * FROM chirps', (err,chripsData) =>{
        console.log("After Create");
        console.log("===========");
        if (err){
            console.error('Error failed drop table chirps: ', err);
        }else{
            console.log("After Create");
            console.log(chripsData);
        } 
      });
});

db.parallelize(() => {
 
    db.run("INSERT INTO chirps(sender, sentTime, message) VALUES(1, DATETIME('now'), 'fred was here!')")
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [2,'sally was also here!'])
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [1,'Really!'])
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [2,'oh That is great'])
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(1, DATETIME('now'), 'fred arrived first!')")
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [2,'sally was late'])
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [1,'oh boy!'])
      .run("INSERT INTO chirps(sender, sentTime, message) VALUES(?, DATETIME('now'), ?)", [2,'oh darn it']);
      
});

db.serialize(() =>{
    db.each('SELECT * FROM chirps', (err,chripsData) =>{
        console.log("After Insert");
        console.log("===========");
        if (err){
            console.error('Error query database chirps: ', err);
        }else{
            console.log("After Insert");
            console.log(chripsData);
        } 
      });
});


function getAllChirps(callback){
    db.all('SELECT * FROM chirps', (err,chripsData) =>{
        if (err){
            console.error('Error query database  chirps: ', err);
        }else{
            console.log(chripsData);
        } 
    });
}

function deleteChirp(callback){
    db.run('DELETE FROM chrips WHERE chripId = ?', id, (err)=>{
        if (err){
            console.error(`Error failed delete for Id ${id}: `, err);
        }else{
            console.log(chripsData);
        } 
    });
}

function addChirp(sender, message, callback) {
    db.run('INSERT INTO chirps(sender, message) VALUES(?, ?)', [sender, message], (err) => {
        if (err) {
            console.error('Error inserting into database: ', err);
        } else {
            callback();
        }
    });
}

function updateChirp(id, sentTime, sender, message, callback) {
    db.run('UPDATE chirps SET sentTime = ?, sender = ?, message = ? WHERE chirpId = ?', 
           [sentTime, sender, message, id], (err) => {
        if (err) {
            console.error('Error updating database: ', err);
        } else {
            callback();
        }
    });
}

module.exports.getAllChirps = getAllChirps;
module.exports.deleteChirp = deleteChirp;
module.exports.addChirp = addChirp;
module.exports.updateChirp = updateChirp; 
