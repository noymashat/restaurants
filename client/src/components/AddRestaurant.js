import React from "react";
import AddForm from "./AddForm";
import { Accordion, Card } from "react-bootstrap";
import UploadCsv from "./UploadCsv";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/AddRestaurant.css";

export default function AddRestaurant({ addRestaurants }) {
	return (
		<div className="add-div">
			<Accordion className="accordion" eventKey="0">
				<Card className="card">
					<Accordion.Toggle
						className="accordion-toggle"
						as={Card.Header}
						eventKey="0"
					>
						Add Restaurants
					</Accordion.Toggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body className="card-body">
							<AddForm addRestaurants={addRestaurants} />
							<div className="vl"></div>
							<UploadCsv addRestaurants={addRestaurants} />
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
	);
}
