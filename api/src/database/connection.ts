import mongoose from "mongoose"

const mongoDBUrl = "mongodb://127.0.0.1:27017/TasksDB";

async function mainConnection() {
    await mongoose.connect(mongoDBUrl)
}

export function initConnection() {
    mainConnection().then(() => {
        console.log("DB Connected")
    }).catch(() => {
        console.log("ERROR DB not Connected")
    })
}

mongoose.connection.on('open', async function (ref) {
    console.log('Connected to mongo server.');
    const a = await mongoose.connection.db.listCollections()

})



