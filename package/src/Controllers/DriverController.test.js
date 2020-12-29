import DriverController from './DriverController.js';

test('Should add a new driver with driver name as key', () => {
	let props = ['TestName'];
	let drivers = {};
	DriverController.createNewDriver(props, drivers);
	expect.objectContaining({ TestName: expect.any(Object) });
});
test('If driver name is not provided, drivers db object should not change', () => {
	let props = [''];
	let drivers = {};
	DriverController.createNewDriver(props, drivers);
	expect.not.objectContaining({ TestName: expect.any(Object) });
});
test('If Driver already exists, do not add another', () => {
	let props = ['TestName'];
	const constantObj = {
		TestName: {
			trips: [],
		},
	};
	let drivers = {
		TestName: {
			trips: [],
		},
	};
	DriverController.createNewDriver(props, drivers);
	expect(drivers).toMatchObject(constantObj);
});
