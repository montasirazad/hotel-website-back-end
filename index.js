const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = 7000;

app.get('/',(req,res)=>{
    res.send('hello world ')
})

app.listen(port,()=>{
    console.log('listening to port',port);
})
