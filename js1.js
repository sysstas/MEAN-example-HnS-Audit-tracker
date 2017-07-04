'use strict';

let express = require('express');
let app = express();



let serverPort = 3000;
app.listen(serverPort, ()=> console.log('Server is running on ' + serverPort + ' port'));