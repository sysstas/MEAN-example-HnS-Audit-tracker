'use strict';

let express = require('express');
let app = express();

app.use( '/', express.static(__dirname + "/../client") );
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

var arr = [
		{
			name: "Iron Man",
			audits: [{month: "june", amount: 36}]
		},
		{
			name: "Thor",
			audits: [{month: "june", amount: 4}]
		},
		{
			name: "Spider Men",
			audits: [{month: "june", amount: 17}]
		}
	];

app.get('/auditors', (req,res)=>{
	res.json(arr);
});

let serverPort = 3000;
app.listen(serverPort, ()=> console.log('Server is running on ' + serverPort + ' port'));