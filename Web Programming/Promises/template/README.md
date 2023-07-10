<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Tasks handler

### 1. Description

A simple project for reading tasks from a file and separating them by their status into multiple files.

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 14.0+**
- Core Packages: **ESLint**

<br>

### 3. Goals

The **goal** is to fully implement two methods in the `FileHandler` class - `read` and `write` that are responsible for reading and writing data to a file. Then you will need to use these methods to read data from one file and write new data to multiple other files, including some error handling.

<br>

### 4. The `FileHandler` class

This is the main functional unit of the project. Since file handling under ES6 modules is a bit more complicated you are provided with a few aids. Considering the project has multiple files, the path from one file to the other is always relative. If we need to use the `FileHandler` class outside its module we will need to compensate for this path relativity.

```js
const __dirname = dirname(fileURLToPath(import.meta.url));
```

`__dirname` will actually produce the directory where the `file-handler.js` service is located. This path is calculated manually for ES6 modules and comes natively (as a global module constant) for CommonJS modules. Since this has already been done for you, there is no need to handle it anymore.

You will also notice the `read` and `write` methods have this line `filename = join(__dirname, '..', filename);` which means the actual filename is calculated relative to the `src/services` directory, and it's a composite of the whole path to the `src/services` directory, the `'..'` string, which means going one directory up (the absolute path to the `src` directory). Having this in mind you will need to pass the `filename` parameter as a relative path where the root is the `src` folder. This means you will need to pass `logs/default.log` as a parameter value if you need to access the default log file.

Two methods need to be implemented:

- `read(filename: string): Promise<string>` - the `read` method should accept as one and only parameter a relative path to a file where the `src` folder is considered to be the root; it should return a promise which will (1) either resolve with the content of the file in the form of a string, or (2) will reject with a value that is an instance of the `Error` class with an adequate error message
- `write(filename: string, data: string): Promise<void>` - the `write` method should accept two parameters - the relative path to a file, and the content that needs to be written to the file as a string; it should return a promise which will (1) ether resolve with no value, or (2) if there was an error while writing reject with the error

A few notes:

- all reading and writing is done in `UTF8`
- you are only allowed to use `fs.readFile` and `fs.writeFile`, i.e. you will need to convert from callbacks to promises
- `read` and `write` are content agnostic - those methods work with strings, if any of the content is JSON, comma-separated text, or anything else, this will need to be handled elsewhere

<br>

### 5. The task

When you complete with the implementation of the `FileHandler` class you can make a few files and test if it works. I.e. if you create a `test` folder inside the `src` folder and a `test.txt` with any content (doesn't need to be JSON) you can test is with the following code piece:

```js
const reader = new FileHandler();

reader
  .read('test/test.txt')
  .then(data => console.log(data));
```

You will figure out a way to test the `write` method as well.

Once everything is working you will have to solve a simple problem (write your solution in `main.js`) - read all data from `data/tasks.all.json`, separate the tasks into two groups - **pending** tasks and **done** tasks and then write each group to the appropriate file in the same format as they are in `tasks.all.json`.

Your entire solution should be a written as a **single promise chain** (you are allowed to use nested promises and promise chains, but the entire flow should be contained into one encompassing promise chain).

Your promise chain solution should do the following:

- read the data from `data/tasks.all.json`
- convert the data to an useful format
- separate the data into *done* and *pending*
- write each group to its file (writing the data to the two files should happen in parallel, think of what is the correct way to handle this)
- handle errors and write them to `logs/default.log` (as plain text), considering error should add to the previous ones, i.e. you will need to add to the file and grow it in time and not overwrite it on each error logging
- handle all errors on reading and writing to files and log them to the console as well (in case logging to the file fails)

Make sure you use the appropriate promise methods for each situation.
