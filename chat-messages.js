var mongodb = require('./db');

function ChatMessage() {
    mongodb.connect('mongodb://localhost:27017/chat-messages');
}

module.exports = ChatMessage;

// Promises??