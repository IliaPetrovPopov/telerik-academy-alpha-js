<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

### 1. Description
With this activity, we will establish the basics of unit testing. 
- This type of testing usually tests small pieces of software, such as functions and objects.
- Some code is difficult to be unit tested, especially when it depends on the environment (e.g. uses `new Date()`, network or file access, etc)
  - There are techniques to **decouple** from the environment, which we will discuss later in the program

### 2. Project information
We will use `jest` - this is a framework that can discover and run unit tests. It requires some initial setup (`package.json`, `jest.config.js` and `.babelrc`), which is already done. Just run `npm install`. After that, run `npm test` - you should see the only (so far) unit test passing.

- `jest` requires that all test files be put in the `tests` folder and end with `.spec.js` - this way the framework knows where to look for them and what to look for.

### 3. Testing remove(str, start, end?)
1. Open `./src/remove.js` and study the exported function. This is a low level implementation (hence the `for` loops) that removes a range of characters from a string.
2. **Do not modify** anything inside the function!
3. Your task is **to understand how it works** and write appropriate tests that **cover all possible cases**.
4. The first test is already done for you.
    ```js
    describe('remove', () => {
      it('should produce correct string', () => {
        // Arrange
        const test = 'telerik academy';
        const expected = 'tele academy';

        // Act
        const actual = remove(test, 4, 7);

        // Assert
        expect(actual).toBe(expected);
      });
    });
    ```
    Let's study it:
    1. `describe('name', () => {})` - this is used mainly for organization. We group similar tests (defined with `it()`) inside the callback.
    2. `it('name', () => {})` - this creates a testing function. You write the test code in the callback. `'name'` is just name for the console.
    3. There are three main parts inside each test:
        - *Arrange* - here we declare test data,
        - *Act* - here we execute the tested piece of code (*also known as SuT - System under Test*),
        - *Assert* - here we test if the result is what we expect it to be,
    4. `expect()` - this is a jest function for comparing expected result versus actual result.  

  5. Open the `remove.spec.js` file and write the next unit test - it is already defined for you:  
      ```js
        it('should produce correct string (only start index given)', () => {
          // Arrange
          // Act
          // Assert
        });
      ```
      Taking the name into account, try to guess what you need to test inside the callback.
  6. Add more unit tests for the remove function. They should cover all possible scenarios with all possible input.
      - There are *at least* 9 distinct scenarios.
      - Think how to test if an Error is thrown (you can consult with some of the BoardR tests)
      - Think about edge cases (when start and end are close to the boundaries of the string - that why it's called an edge case.)
      - Think about what happens with empty strings.
      - The implementation of `remove` **may not be correct**, it's your job as tester to find errors and **PROVE IT**.

### 4. Testing Account class
1. It's time to test a class. This usually involves a lot of code, because **all public members** must be put to the test!
2. Create a new file `account.spec.js` and don't forget to import the tested class!
3. Create some testing structure with `describe` - you can consult with one of the previous workshops.
4. You need to test the constructor - think how to verify that the expectations are correct.
    1. Usually, when testing the constructor, the getters are also covered. 
5. Test the `withdraw()` and `deposit()` - you will need to setup test data (a valid account) in the *Arrange* phase) and to **verify against getters** in the *Assert* phase.
6. Again, do not forget about testing possible Errors!
7. **Do not modify** anything inside the Account class!

### 5. Conclusion
1. Try to be critical of the provided code and your unit tests.
2. Try to come up with as many **distinct** scenarios as possible.
3. You will compare your test to the solution in several days and see how well you have done.
4. Good luck :)