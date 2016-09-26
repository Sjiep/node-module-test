var MongoClient = require('mongodb').MongoClient

//Private
var mongoDb;
var randId = ''+Math.random();
var randName = 'student-' + randId.substr(2, 4);

function MongoDb() {}

MongoDb.prototype.connect = function(url) {
  if(mongoDb) {
    console.log('DB is already connected');
    return done();
  }
  MongoClient.connect(url, function(error, db) {
    if(error) {
      console.log('Unable to connect to MongoDB', error);
      process.exit(1);
    }
    console.log('MongoDB connected');
    messageCollection = db.collection('messages');
    messageCollection.insert({a: 1});
    mongoDb = db;
  });
};

MongoDb.prototype.get = function() {
  console.log(randName);
  return mongoDb;
};

MongoDb.prototype.close = function() {
  if(mongoDb) {
    mongoDb.close();
  }
};

module.exports = exports = new MongoDb();

// http://bites.goodeggs.com/posts/export-this/
// http://mongoosejs.com/