//CRUD Operations

const mongodb = require('mongodb');
//const MongoClient = mongodb.MongoClient;
//const ObjectID = mongodb.ObjectID;

const {MongoClient, ObjectID} = require('mongodb'); //this uses destrucing on above

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();
//console.log(id);
//console.log(id.getTimestamp());

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err,client) =>{
    if(err)
        return console.log("Unable to connect ot database");
    
    const db = client.db(databaseName);

    console.log('client is running');

    // method to insert documents

    // db.collection('users').insertOne({
    //     //_id: id        should avoid to use this
    //     name: 'Vikram',
    //     age: 27
    // }, (err,res) =>{
    //     if(err)
    //         return console.log('Unable to Insert user');
        
    //     console.log(res.ops);
    //     console.log(res.insertedCount);
    // });

    // db.collection('users').insertMany([
    //     {
    //         name: 'Mike',
    //         age: 30
    //     },
    //     {
    //         name: 'Jack',
    //         age: 25
    //     }
    // ], (err,res) =>{
    //     if(err)
    //         return console.log('Unable to Insert Documents');

    //     console.log(res.ops);
    //     console.log(res.insertedCount);
    // });

    // db.collection('tasks').insertMany([
    //     {
    //         desc: 'Go to Work',
    //         completed: true
    //     },
    //     {
    //         desc: 'Read TOI',
    //         completed: true
    //     },
    //     {
    //         desc: 'Go to Gym',
    //         completed: false
    //     }
    // ], (err,res) =>{
    //     if(err)
    //         return console.log('Unable to add the task');

    //     console.log(res.ops);
    //     console.log(res.insertedCount);
    // });

    //search by name using findOne

    // db.collection('users').findOne({ name: 'Shrenik' }, (err,user) =>{
    //     if(err)
    //         return console.log('Unable to fetch user');

    //         console.log(user);
    // });

    //search by ObjectID using findOne

    // db.collection('users').findOne({ _id: new ObjectID('602622dd38126e3ebc1687f3') }, (err,user) =>{
    //     if(err)
    //     return console.log('Unable to fetch user');
    
    //     console.log(user);
    // });

    //search using find and display using toArray

    // db.collection('users').find({ age: 23 }).toArray((err,user) =>{
    //     console.log(user);
    // });

    //search using find and display count of result using count

    // db.collection('users').find({ age: 23 }).count((err,count) =>{
    //     console.log(count);
    // });

    //Update using updateOne and Promise

    // db.collection('users').updateOne({
    //     _id: new ObjectID('60261ec84860230484b20a72')
    // },{
    //     // $set: {
    //     //     name: 'Mike'
    //     // }
    //     $inc:{
    //         age: 1
    //     }
    // }).then((res) =>{
    //     console.log(res);
    // }).catch((err) =>{
    //     console.log(err);
    // });

    //Update using updateMany and Promise

    // db.collection('tasks').updateMany({
    //     completed: true
    // },{
    //     $set: {
    //         completed: false
    //     }
    // }).then((res) =>{
    //     console.log(res);
    // }).catch(() =>{
    //     console.log(err);
    // });

    //Delete using deleteOne and Promise

    // db.collection('tasks').deleteOne({
    //     desc: "Go to Gym"
    // }).then((res) =>{
    //     console.log(res);
    // }).catch((err) =>{
    //     console.log(err);
    // });

    //Delete using deleteMany and Promise
    db.collection('users').deleteMany({
        age: 31
    }).then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    });
});