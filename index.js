const express = require('express');
const cors = require('cors')
const app = express();
app.use(cors());
app.use(express.json());
const port = 6000;

app.listen(port,()=>{
    console.log('listening to',port);
})
