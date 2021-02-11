import React from "react";
import "../styles/Search.css";

export default function Search({ submitSearch }) {
	return (
		<div className="search-div">
			<input
				className="search-input"
				onChange={(e) => {
					submitSearch(e.target.value);
				}}
				type="search"
				placeholder="Search..."
			/>
		</div>
	);
}
