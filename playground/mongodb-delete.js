// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server')
    } 
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    //delete many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })

    //delete one
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result)
    // })

    //find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result)
    // })

    //Problem
    // db.collection('Users').deleteMany({name: 'Lee Martin'}).then((result) => {
    //     console.log(result)
    // })

    // db.collection('Users').findOneAndDelete({_id : new ObjectID("5c085d7af396a2f7302a6ba6")}).then((result) => {
    //     console.log(result)
    // })


    // client.close()
})