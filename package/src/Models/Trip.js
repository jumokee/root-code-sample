import utils from '../utils/utils.js';
/** Class representing a single trip */
class Trip {
	start;
	end;
	distanceDriven;
	timeDriven;
	averageSpeed;
	/**
	 * Create a trip instance
	 * @param {string[]} props - An array of strings representing trip's properties
	 */
	constructor(props) {
		const [name, start, end, distanceDriven] = props;
		this.start = utils.timeToMinutes(start);
		this.end = utils.timeToMinutes(end);
		this.distanceDriven = +parseFloat(distanceDriven);
		this.hoursDriven = utils.minutesToHours(this.end - this.start);
		this.averageSpeed = this.hoursDriven ? this.distanceDriven / this.hoursDriven : 0;
	}
}
export default Trip;
