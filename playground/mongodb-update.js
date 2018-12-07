// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if(err) {
        console.log('Unable to connect to MongoDB server')
    } 
    console.log('Connected to MongoDB server')
    const db = client.db('TodoApp')

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c0aa4f8b753d72346054372')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // })

    db.collection('Users').findOneAndUpdate({
        name: 'Jen'
    }, {
        $set: {
            name: 'Lee Martin'
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })

    // client.close()
})