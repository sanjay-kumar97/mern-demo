const PORT = "5000";

const dbUsername = "demoUser";
const dbPassword = "dbPassword";
const dbName = "mern-demo.3o05jpn.mongodb.net";
const params = "retryWrites=true&w=majority";

const mongoURL = `mongodb+srv://${dbUsername}:${dbPassword}@${dbName}/test?${params}`;

const allowedOrigins = [
  "http://localhost:3000",
  "https://mern-demo-frontend.vercel.app",
];

const allowedMethods = ["POST", "GET", "PUT", "DELETE"];

module.exports = { PORT, mongoURL, allowedOrigins, allowedMethods };
