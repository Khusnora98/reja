const http = require("http");
const mongodb = require('mongodb');
const yourModule = require('your-module');

let db;
const connectionString= "mongodb+srv://khusnorasobirova2:Uzbekgirl98@cluster0.4wynq.mongodb.net/Reja?";
mongodb.connect(
    connectionString,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err, client) => {
      if (err) console.log("ERROR on connection MongoDB");
      else {
        console.log("Mongodb conncetion succeed");
        // console.log(client);
        module.exports = client;
  
        const app = require("./app"); 
        const server = http.createServer(app); 
        let PORT = 5001;
        server.listen(PORT, function () {
          console.log(
            `The server is running successfully on port: ${PORT} http://localhost:${PORT}`
          );
        });
      }
    }
  );