const {ObjectID} = require('mongodb')

const {mongoose} = require('../server/db/mongoose')
const {Todo} = require('../server/models/todo')
const {User} = require('../server/models/user')

// Todo.deleteMany({}).then((result) => {
//     console.log(result)
// })

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({id: '5c119599ba29fc8a91de182b'})

Todo.findByIdAndRemove('5c119599ba29fc8a91de182b').then((todo) => {
    console.log(todo)
})