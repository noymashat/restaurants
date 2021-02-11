import React, { useState, useEffect } from "react";
import { Card, Col, Button, Form } from "react-bootstrap";
import "../styles/RestaurantCard.css";

export default function EditRestaurant(props) {
	const [updated, setUpdated] = useState({
		Name: props.Name,
		Type: props.Type,
		Phone: props.Phone,
		Location: props.Location,
	});

	return (
		<div className="div-restaurant-card">
			<Card className="restaurant-card">
				<Card.Body className="restaurant-card">
					<div className="div-text">
						<Form className="edit-form">
							<Form.Group controlId="edit-restaurant">
								<Form.Control
									className="form-control-edit"
									type="text"
									defaultValue={props.Name}
									onChange={(e) =>
										setUpdated({ ...updated, Name: e.target.value })
									}
								/>
								<Form.Control
									className="form-control-edit"
									type="text"
									defaultValue={props.Type}
									onChange={(e) =>
										setUpdated({ ...updated, Type: e.target.value })
									}
								/>
								<Form.Control
									className="form-control-edit"
									type="text"
									defaultValue={props.Phone}
									onChange={(e) =>
										setUpdated({ ...updated, Phone: e.target.value })
									}
								/>
								<Form.Control
									className="form-control-edit"
									type="text"
									defaultValue={props.Location}
									onChange={(e) =>
										setUpdated({ ...updated, Location: e.target.value })
									}
								/>
							</Form.Group>
						</Form>
					</div>
					<div className="div-buttons">
						<Button
							className="btn-card"
							onClick={() => {
								props.setEdit(false);
								props.editRestaurant(props.id, updated);
							}}
						>
							Confirm
						</Button>
						<Button className="btn-card" onClick={() => props.setEdit(false)}>
							Cancel
						</Button>
					</div>
				</Card.Body>
			</Card>
		</div>
	);
}
