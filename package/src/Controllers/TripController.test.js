import TripController from './TripController.js';
import DriverController from './DriverController.js';

test('Trip command with fewer than 4 properties should not add trip to driver', () => {
	let props = [1, 2, 3];
	let drivers = {
		Joe: {
			trips: [],
		},
	};
	TripController.createNewTrip(props, drivers);
	expect(drivers.Joe.trips).toHaveLength(0);
});
test('createNewTrip should increase trips length for given driver', () => {
	let props = ['TestName', '00:00', '01:00', 99];
	let drivers = {};
	DriverController.createNewDriver(['TestName'], drivers);
	TripController.createNewTrip(props, drivers);
	expect(drivers.TestName.trips).toHaveLength(1);
});
test('createNewTrip should NOT increase trips length for given driver if speed above 100', () => {
	let props = ['TestName', '00:00', '01:00', 101];
	let drivers = {
		TestName: {
			trips: [],
		},
	};
	TripController.createNewTrip(props, drivers);
	expect(drivers.TestName.trips).toHaveLength(0);
});
