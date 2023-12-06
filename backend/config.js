const PORT = "5000";

const dbUsername = "demoUser";
const dbPassword = "dbPassword";
const dbName = "mern-demo.3o05jpn.mongodb.net";
const params = "retryWrites=true&w=majority";

const mongoURL = `mongodb+srv://${dbUsername}:${dbPassword}@${dbName}/?${params}`;

module.exports = { PORT, mongoURL };
