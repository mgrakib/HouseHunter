/** @format */

const express = require("express");
const app = express();
var cors = require("cors");
const port = 5000;
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.nvffntx.mongodb.net/?retryWrites=true&w=majority`;

app.use(express.json());
app.use(cors());

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

async function run() {
	try {
		// Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const userCollection = client.db("houseRent").collection("users");
        const isActiveCollection = client.db("houseRent").collection("isActive");


        // create user 
        app.post('/generat-new-user', async (req, res) => {
            const { fullName, role, phone, email, password } = req.body;
            const query = { email };
            const isExistUser = await userCollection.findOne(query);
            if (isExistUser) {
                return res.send({})
            }
            const addNewUser = await userCollection.insertOne(req.body);

            res.send(addNewUser);
        })

        // isLogin 
        app.get('/active-user', async (req, res) => {
            const email = req.query.email;
            const query = {email}
             const options = {
					projection: {
						_id: 0,
						fullName: 1,
						role: 1,
						phone: 1,
						email:1
					},
				};
            const activeUser = await userCollection.findOne(query, options);
            res.send({ activeUser });
            
        })

        app.get("/login-user", async (req, res) => {
			const { email, password } = req.query;

            const isExistIser = await userCollection.findOne({ email });
            if (!isExistIser) {
                return res.send({message: 'user-not-found'})
            } else if (isExistIser?.password !== password) {
                return res.send({ message: "password-didn't match" });
            } 

            res.send({message: 'verify'})

			
		});

		// Send a ping to confirm a successful connection
		await client.db("admin").command({ ping: 1 });
		console.log(
			"Pinged your deployment. You successfully connected to MongoDB!"
		);
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get('/', async (req, res) => {
    res.send('this is home hunter server')
})
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
