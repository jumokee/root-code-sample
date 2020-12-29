import config from 'config';
export default {
	/**
	 * Returns the time (24 hour clock) as a number of minutes
	 *
	 * @param {string} timeString
	 * @returns {number} time in minutes
	 */
	timeToMinutes: (timeString) => {
		let totalMinutes = 0;
		const split = timeString.split(':');
		const hour = +split[0],
			minutes = +split[1];
		totalMinutes += hour * 60 + minutes;
		return totalMinutes;
	},
	/**
	 * Returns hours from given minutes
	 * @param {number} minutes
	 * @returns {number}
	 */
	minutesToHours: (minutes) => minutes / 60,
	/**
	 * Returns the string representation of the driver's trips
	 * @param {Driver} driver
	 * @returns {string}
	 */
	buildLogString: (driver) => {
		const { name, totalDistanceDriven, averageSpeed } = driver;
		const distanceUnit = config.get('distanceUnit');
		const speedUnit = config.get('speedUnit');
		let output = `${name}: ${totalDistanceDriven.toFixed(0)} ${distanceUnit} `;
		if (totalDistanceDriven > 0) {
			output += `@ ${averageSpeed.toFixed(0)} ${speedUnit}`;
		}
		return output;
	},
};
