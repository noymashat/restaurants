import axios from "axios";

export const getGeo = (lat, long) => {
	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyB1ETHguQojrCIjd3OKiCAFVywuljh7TXc`
		)
		.then((res) => {
			// console.log(res.data.results[0].formatted_address);
			const addr = res.data.results[0].formatted_address;
			return addr;
		})
		.catch((err) => {
			console.log(err);
			return null;
		});
};
