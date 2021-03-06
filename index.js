const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = 7000;
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.DB_PASS}@cluster0.k8hkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run() {


    try {
        await client.connect();
        const database = client.db("all-bookings");
        const hotelDb = database.collection("booking");

        app.post('/add-booking', async (req, res) => {
            const frontData = req.body;
            const result = await hotelDb.insertOne(frontData);
            console.log(result);
            res.json(result)
        })

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);






app.get('/', (req, res) => {
    res.send('hello world ')
})

app.listen(port, () => {
    console.log('listening to port', port);
})
