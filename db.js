var MongoClient = require('mongodb').MongoClient

//Private
var mongoDb;
var randName = 'student-' + randId.substr(2, 4);



exports.connect = function(url, done) {
  if(mongoDb) {
    console.log('DB is already connected');
    return done();
  }
  MongoClient.connect(url, function(error, db) {
    if(error) {
      return done(error);
    }
    mongoDb = db;
    done();
  });
};

exports.get = function() {
  console.log(randName);
  return mongoDb;
};

exports.close = function() {
  if(mongoDb) {
    mongoDb.close();
  }
};
