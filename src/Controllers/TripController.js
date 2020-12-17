import Trip from '../Models/Trip.js';

const _isPropsValid = (props) => {
	return props.length && typeof props[0] === 'string' && props[0].length;
};
export default {
	/**
	 * Validates, creates, persists Trip object (attached to associated Driver)
	 * @param {any[]} props
	 * @param {Object} drivers
	 */
	createNewTrip: (props, drivers) => {
		if (_isPropsValid(props)) {
			const driverName = props[0];
			let trip = new Trip(props);
			if (trip.averageSpeed > 5 && trip.averageSpeed < 100) {
				drivers[driverName].addTrip(trip);
			}
		}
	},
};
