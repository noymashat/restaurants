import React, { useState, useEffect } from "react";
import { Card, Col, Button } from "react-bootstrap";
import EditRestaurant from "./EditRestaurant";
import axios from "axios";
import "../styles/RestaurantCard.css";

export default function RestaurantCard(props) {
	const [edit, setEdit] = useState(false);
	const [address, setAddress] = useState("");
	const [error, setError] = useState(null);
	const location = props.Location.split("/");

	const set_edit = (boolean) => {
		setEdit(boolean);
	};

	const set_address = (addr) => {
		setAddress(addr);
	};

	// send the server a request to get the address corresponding the location
	const getAddress = async () => {
		try {
			const res = await axios.post("http://localhost:3001/getAddress", {
				lat: location[0],
				lng: location[1],
			});
			if (res) {
				set_address(res.data);
			}
		} catch (err) {
			set_address("Location wasn't found");
		}
	};

	useEffect(() => {
		getAddress();
	}, [edit]);

	return (
		<div className="div-restaurant-card">
			{edit ? (
				<EditRestaurant
					id={props.id}
					Name={props.Name}
					Type={props.Type}
					Phone={props.Phone}
					Location={props.Location}
					editRestaurant={props.editRestaurant}
					setEdit={set_edit}
				/>
			) : (
				<Card className="restaurant-card">
					<Card.Body className="restaurant-card-body">
						<div className="div-text">
							<p style={{ fontWeight: "bold", fontSize: "20px" }}>
								{props.Name}
							</p>
							<p>{props.Type}</p>
							<p>{props.Phone}</p>
							<p>{address}</p>
						</div>
						<div className="div-buttons">
							<Button className="btn-card" onClick={() => set_edit(true)}>
								Edit
							</Button>
							<Button
								className="btn-card"
								onClick={() => props.deleteRestaurant(props.id)}
							>
								Delete
							</Button>
						</div>
					</Card.Body>
				</Card>
			)}
		</div>
	);
}

{
	/* <div className="div-restaurant-card"> */
}
{
	/* </div> */
}
