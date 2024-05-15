const express = require('express');
const dataconfig=require('./databse/dataconfig')
const cors=require('cors');
const app = express();
dataconfig();
app.use(express.json());
app.use(cors())
const patientRoute = require('./routers/patientRoute')
const srvice =require('./routers/serviceroute')
const peymentRoute = require('./routers/peymentroute')
const userRoute = require('./routers/userRoute')
const loginRoute = require('./routers/loginRoutes')
const authenticationRoute = require('./routers/Authentication');
const reportRoute = require('./routers/reportroutes')
app.use(patientRoute)
app.use(srvice)
app.use(peymentRoute)
app.use(userRoute );
//authenticationRoute('user')
// app.use(loginRoute)
app.use(reportRoute)






app.get('/',async (req, res) => {
  res.send('Hello dental!');
});

app.listen(3000, () => {
  console.log('app listening on port 3000!');
});