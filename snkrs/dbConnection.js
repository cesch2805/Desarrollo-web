let MongoClient = require('mongodb').MongoClient;

async function readDB(){
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
   const uri = "mongodb://localhost:27017/shoes";


  const client = new MongoClient(uri);

  try {
      // Connect to the MongoDB cluster
      await client.connect();

      // Make the appropriate DB calls
       record = await shoeList(client);
       return record;

  } catch (e) {
      console.error(e);
  } finally {
      await client.close();
  }
}

async function shoeList(client){
  let query = { }
  list = await client.db("shoes").collection("shoes").find(query).toArray();
  return list;
};

module.exports = readDB();
// readDB().catch(console.error).then(val => {
//   console.log(val)
// });