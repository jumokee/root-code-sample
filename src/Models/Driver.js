/** Class representing a driver */
class Driver {
	name;
	trips;
	totalDistanceDriven;
	totalHoursDriven;
	/**
	 * Create a driver instance
	 * @param {string[]} props - An array of strings representing driver's properties
	 */
	constructor(props) {
		const [name] = props;
		this.name = name;
		this.trips = [];
		this.totalDistanceDriven = 0;
		this.totalHoursDriven = 0;
	}
	/**
	 * Adds a new trip to the Driver's trips. Also increments the distance/hours driven
	 * @param {Trip} trip
	 */
	addTrip(trip) {
		this.totalDistanceDriven += trip.distanceDriven;
		this.totalHoursDriven += trip.hoursDriven;
		this.trips.push(trip);
	}
	// Return driver's average speed accross all trips
	get averageSpeed() {
		return this.trips.length ? this.totalDistanceDriven / this.totalHoursDriven : 0;
	}
}
export default Driver;
