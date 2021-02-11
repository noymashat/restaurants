import React, { Component } from "react";
import AddRestaurant from "./AddRestaurant";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import "../styles/Restaurants.css";

export default class Restaurants extends Component {
	constructor() {
		super();
		this.state = {
			search: "",
			restaurants: [
				/** initial restaurants objects for testing */
				// 	{
				// 		Name: "Dominos",
				// 		Type: "Pizza",
				// 		Phone: "35848393",
				// 		Location: "32.109805/34.840232",
				// 	},
				// 	{
				// 		Name: "Japanika",
				// 		Type: "Asian",
				// 		Phone: "34564393",
				// 		Location: "32.109805/34.840232",
				// 	},
			],
		};
	}

	// add bulk of restrunts from csv of a restaurant from a form
	addRestaurants = (newRest) => {
		newRest.length !== undefined
			? this.setState({ restaurants: [...this.state.restaurants, ...newRest] })
			: this.setState({ restaurants: [...this.state.restaurants, newRest] });
		console.log(this.state.restaurants);
	};

	// edit an existing restaurant
	editRestaurant = (id, updated) => {
		console.log(updated);
		if (updated !== undefined) {
			let rests = this.state.restaurants.map((r, idx) => {
				if (r !== undefined && idx === id) {
					return (r = {
						Name: updated.Name,
						Type: updated.Type,
						Phone: updated.Phone,
						Location: updated.Location,
					});
				} else {
					return r;
				}
			});
			this.setState({ restaurants: rests });
			console.log(this.state.restaurants);
		}
	};

	// delete a restaurant
	deleteRestaurant = (id) => {
		let rests = [...this.state.restaurants];
		rests.splice(id, 1);
		console.log("check", id, rests);
		this.setState({ restaurants: rests });
		console.log(this.state.restaurants);
	};

	// get the search input and store it in the component's state
	submitSearch = (search) => {
		this.setState({ search });
		console.log(search);
	};

	render() {
		// if search input has a value, filter the restaurant list by that input. otherwise render thee complete list.
		let restaurants =
			this.state.search !== ""
				? this.state.restaurants.filter((r) => {
						return r.Name.toLowerCase().includes(
							this.state.search.toLowerCase()
						);
				  })
				: this.state.restaurants;
		console.log(restaurants);

		return (
			<div className="restaurants">
				<AddRestaurant
					className="add-restaurants"
					addRestaurants={this.addRestaurants}
				/>
				<Search submitSearch={this.submitSearch} />

				<div className="restaurants-cards">
					{restaurants.map((rest, index) => (
						<div className="restaurant-card-div" key={index}>
							<RestaurantCard
								id={index}
								Name={rest.Name}
								Type={rest.Type}
								Phone={rest.Phone}
								Location={rest.Location}
								setEdit={this.setEdit}
								editRestaurant={this.editRestaurant}
								deleteRestaurant={this.deleteRestaurant}
							/>
						</div>
					))}
				</div>
			</div>
		);
	}
}
