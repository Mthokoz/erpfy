import app from "./server.js"
import mongodb from  "mongodb"
import TransDAO from "./dao/transDAO.js"

const MongoClient = mongodb.MongoClient
//const mongo_username = process.env['MONGO_USERNAME']
//const mongo_password = process.env['MONGO_PASSWORD']
const uri =`mongodb+srv://lushabams:LvL5vypTljwRoZK3@cluster0.jmhyhcy.mongodb.net/?retryWrites=true&w=majority`

const port = 3000

MongoClient.connect(
    uri,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await TransDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`listening on port ${port}`)
    })
})