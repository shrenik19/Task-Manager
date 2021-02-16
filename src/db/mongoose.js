const mongoose = require('mongoose');

//if dev runs correct then we should write instead of below this line
//mongoose.connect(process.env.MONGODB_URL, {...});
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});



// const me =new User({
//     name: 'Stanley',
//     password: 'stan123',
//     email: 'stanley@gmail.com',
//     age: 50
// });

// me.save().then(() =>{
//     console.log(me);
// }).catch((err) =>{
//     console.log('Error: ',err);
// });



// const list =new Task({
//         desc: 'Go to Work'
// });

// list.save().then(() =>{
//     console.log(list);
// }).catch((err) =>{
//     console.log('Error: ',err);
// });