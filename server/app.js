'use strict';

let express = require('express');
let app = express();
let MongoClient = require('mongodb').MongoClient;

let arr = [];
MongoClient.connect('mongodb://localhost:27017/auditors', (error, db) => {
	console.log('Connected to Mongo');

	
	let querry = {};
	let cursor = db.collection('auditors').find(querry);
	
	cursor.forEach(function(doc){
		arr.push(doc);
	});

	
});

app.use( '/', express.static(__dirname + "/../client") );
app.use('/node_modules', express.static(__dirname + '/../node_modules'));

/*var arr = [
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
	];*/

app.get('/auditors', (req,res)=>{
	console.log(arr);
	res.json(arr);
});

let serverPort = 3000;
app.listen(serverPort, ()=> console.log('Server is running on ' + serverPort + ' port'));