const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

//this is called as middleware
// app.use((req,res,next) =>{
//     if(req.method)
//         res.status(503).send('Server is under maintainance. Please try back after some time.');
// });

app.use(express.json());        //.json() this will parse the data
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () =>{
    console.log('Server is running on port ' + port);
});