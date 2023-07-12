<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# Student Data

## Goal

You are provided with three files with partial student data which is located in the `data` folder. Your task is to combine all the student data and write it in the `data/student-data.json` file as *JSON*.

I.e. a single student record should look like this:

```json
{
  "id": 1,
  "name": "John",
  "city": "Bourgas",
  "grades": [4, 3, 5]
}
```

and the data written to `data/student-data.json` should be a collection of student records formatted as JSON.

You are allowed to use the `fs` library. This is a built-in library, you don't need to install it through **npm**.

```js
import fs from 'fs';
// or alternatively you could use the promise functions from 'fs/promises'
```

You are allowed to use any of the file **reading** and **writing** functionalities except for the synchronous functions (`fs.readFileSync` and `fs.writeFileSync`).

To achieve the desired result you should use the `async/await` syntax. You are also allowed to use **Promise** methods if and when necessary.

**Tips:** Try to read all the files together, and not one after another. You will also need to think of a way to apply the `async/await` syntax. Remember you can only `await` promises or `async` functions **inside** another `async` function. Don't forget to apply error handling.
