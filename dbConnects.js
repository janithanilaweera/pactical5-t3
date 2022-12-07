
require('dotenv').config()

// mongoDB connection
const mongoClient = require("mongodb").MongoClient;


   //username: janitha
   //password: GVfy9OvEJ1yMbzfF

const uri =
  "mongodb+srv://janitha:GVfy9OvEJ1yMbzfF@cluster0.pxyaxvc.mongodb.net/?retryWrites=true&w=majority";
const client = new mongoClient(uri, { useNewUrlParser: true });

client.connect ((err,db)=>{if(!err)console.log("DB connected"); else {console.log("Db connection error", err); process.exit(1) }})

module.mongoClient=client 