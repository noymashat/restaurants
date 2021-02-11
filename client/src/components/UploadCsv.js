import React, { useState } from "react";
import { Button } from "react-bootstrap";
import CSVReader from "react-csv-reader";

export default function UploadCsv(props) {
	const [data, setData] = useState([]);

	const addBulk = (data) => {
		setData(data);
	};

	const onSubmit = () => {
		props.addRestaurants(data);
	};

	return (
		<div className="upload-csv-div">
			<CSVReader
				parserOptions={{ header: "false", skipEmptyLines: "true" }}
				onFileLoaded={addBulk}
			/>
			<Button className="btn" style={{ margin: "20px" }} onClick={onSubmit}>
				Add From CSV
			</Button>
		</div>
	);
}
