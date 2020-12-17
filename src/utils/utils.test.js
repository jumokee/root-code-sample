import utils from './utils.js';
import DriverController from '../Controllers/DriverController.js';
import Driver from '../Models/Driver.js';
import Trip from '../Models/Trip.js';

test('time string should output correct minutes', () => {
	expect(utils.timeToMinutes('11:55')).toBe(715);
	expect(utils.timeToMinutes('01:01')).toBe(61);
});

test('minutesToHours should return number', () => {
	expect(utils.minutesToHours(120)).toBe(2);
	expect(utils.minutesToHours('120')).toBe(2);
});

test('build log string should return base string if no trips', () => {
	let Joe = new Driver(['Joe']);
	expect(utils.buildLogString(Joe)).toBe('Joe: 0 miles ');
});
test('build log string should return full string if trips exist', () => {
	let Joe = new Driver(['Joe']);
	let trip1 = new Trip(['Joe', '07:15', '07:45', 17.3]);
	let trip2 = new Trip(['Joe', '07:15', '07:45', 19.3]);
	Joe.addTrip(trip1);
	Joe.addTrip(trip2);
	expect(utils.buildLogString(Joe)).toBe('Joe: 37 miles @ 37 mph');
});
