const express = require('express');
const dataconfig=require('./databse/dataconfig')
const app = express();
dataconfig();
app.use(express.json());

const patientRoute = require('./routers/patientRoute')
const srvice =require('./routers/serviceroute')

app.use(patientRoute)
app.use(srvice)






app.get('/', (req, res) => {
  res.send('Hello dental!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});