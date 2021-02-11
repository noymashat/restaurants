const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
	res.send("hello world");
});

// send an api request to get the address of the coordinates
app.post("/getAddress", (req, res) => {
	const lat = req.body.lat;
	const lng = req.body.lng;
	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyB1ETHguQojrCIjd3OKiCAFVywuljh7TXc`
		)
		.then((result) => {
			console.log(result.data.results[0].formatted_address);
			res.send(result.data.results[0].formatted_address);
		})
		.catch((err) => {
			console.log(err);
			res.send(err);
		});
});

app.listen(3001, () => {
	console.log("running");
});
