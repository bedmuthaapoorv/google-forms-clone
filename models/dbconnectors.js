const Pool = require('pg').Pool
const accountDBconn=new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root',
    database: 'accountdb',
    port: '5432'
})

const responderDBconn=new Pool({
    user: 'postgres',
    host: 'db',
    password: 'root',
    database: 'responderdb',
    port: '5432'
})


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bedmuthaapoorv:apoorv@cluster0.kelbc2p.mongodb.net/?retryWrites=true&w=majority";

const mongoClient = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

exports.mongoClient=mongoClient;
exports.accountDBconn=accountDBconn;
exports.responderDBconn=responderDBconn;

