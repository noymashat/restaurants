import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function AddForm({ addRestaurants }) {
	const [name, setName] = useState("");
	const [type, setType] = useState("");
	const [phone, setPhone] = useState("");
	const [location, setLocation] = useState("");

	return (
		<div className="form-div">
			<Form className="form">
				<Form.Group>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Name"
						onChange={(e) => setName(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Type"
						onChange={(e) => setType(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Phone"
						onChange={(e) => setPhone(e.target.value)}
					/>
				</Form.Group>
				<Form.Group>
					<Form.Control
						size="sm"
						type="text"
						placeholder="Location (lat/lng)"
						onChange={(e) => setLocation(e.target.value)}
					/>
				</Form.Group>
				<Button
					className="btn"
					variant="primary"
					onClick={() => {
						addRestaurants({
							Name: name,
							Type: type,
							Phone: phone,
							Location: location,
						});
					}}
				>
					Add Restaurant
				</Button>
			</Form>
		</div>
	);
}
