import config from 'config';
import fs from 'fs';
import DriverController from './src/Controllers/DriverController.js';
import TripController from './src/Controllers/TripController.js';
import utils from './src/utils/utils.js';

//Initialize mock DB instance
let drivers = {};

// Check if file path is defined by run script, if not, get default value.
const filePath = process?.env?.npm_config_file
	? process?.argv[process.argv.length - 1] || config.get('defaultFilePath')
	: config.get('defaultFilePath');

console.log('Processing ' + filePath);

const fileContents = fs.readFileSync(filePath, { encoding: 'utf8' });

// Split the file contents into an array of command strings
const commands = fileContents.split('\n');

console.log('Reading Commands');

// Process each command and send to appropriate controller
commands.forEach((command) => {
	// Get the properties
	const props = command.split(' ');

	// Mutate the props Array - removing the first element (commandType)
	const commandType = props.shift();
	switch (commandType) {
		case 'Driver':
			DriverController.createNewDriver(props, drivers);
			break;
		case 'Trip':
			TripController.createNewTrip(props, drivers);
			break;
	}
});

const logsArray = Object.values(drivers)
	.sort((a, b) => {
		return b.totalDistanceDriven - a.totalDistanceDriven;
	})
	.map(utils.buildLogString);

console.log('\n********************************\n');
logsArray.forEach((log) => console.log(log));
console.log('\n********************************\n');
