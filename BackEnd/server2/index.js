const { MongoClient } = require("mongoose");
const mongoURL =
  "mongodb+srv://fynii:Mongo123@cluster0.6ofh0.mongodb.net/Fynii?retryWrites=true&w=majority";
async function main() {
  const client = new MongoClient(mongoURL);

  try {
    await client.connect(e);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

main().catch(console.error);