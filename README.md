># ROOT Code Sample

An application which reads an input, where each line consists of a command - creating Drivers and Trips, and ultimately logging statistics about drivers.

>## Getting Started

First run `npm install` from the root directory, then proceed.

*Default Method:*

`npm start` (will execute the application, processing the file located here: `./src/input/input.txt` )

*Alternatively:*

`npm start --file {file_path}` (will execute the application, processing the file as defined, for example: `./EXAMPLE_FILE.txt`)

*Tests*

`npm test` to run unit tests


>## Notes

My application follows an **MVC** pattern wherever possible.  I consider the main function (`app.js`) to be an avatar for the **view** layer of the application.  Additionally, I've used an object, called `drivers`, as a stand in for a persistent database.

There is a controller layer between the **view** and **model**.  Each controller validates<sup>[1]</sup> the properties being passed (parsed from the input), instantiates the model, then "persists" the data by adding it to the `drivers` object.

I have created 2 Data Model Types: `Driver` and `Trip`.  I chose to use javascript's Class convention to define the objects because I find it to be easy to understand and easily extendable.  

`Trips` are a defined model type, but the `Driver` model has an array of `Trips` as one of it's properties.  This makes it easy to keep trips associated with the driver.

I used a seperate file (`utils/utils.js`) for utilities pertaining to arithmetic or other jobs.  

Lastly, I utilized 1 dependency.  The **config** library for maintaining constants.

<sup>[1]</sup> Private (non exported) methods are denoted with an underscore (`_`)

>Thanks and Enjoy!







# root-code-sample
