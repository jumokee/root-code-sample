import Driver from '../Models/Driver.js';

// private function
const _isPropsValid = (props, drivers) => {
	return props.length && typeof props[0] === 'string' && props[0].length && !drivers[props[0]];
};

export default {
	/**
	 * Validates, creates, persists Driver object
	 * @param {any[]} props
	 * @param {Object} drivers instance of 'drivers' database
	 */
	createNewDriver: (props, drivers) => {
		if (_isPropsValid(props, drivers)) {
			const [name] = props;
			let driver = new Driver(props);
			drivers[name] = driver;
		}
	},
};
