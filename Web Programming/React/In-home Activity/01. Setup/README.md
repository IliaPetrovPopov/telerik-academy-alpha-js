<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

## React Movies Project - 01. Setup

### 1. Scaffold

1. Run `npm create vite movies` and scaffold the project
   1. Choose React
   2. Choose JavaScript with SWC - Speed up your Vite dev server with SWC

### 2. Start the Project

1. As explained in the CLI help do the following steps to review the generated project
  
```bash
  cd movies
  npm install
  npm run dev
```

### 3. Generated Files and Folder Structure

1. Review the generated project.

    The important files that you should take a look at are the **index.html**, **main.jsx** and **App.jsx**. 

   - **index.html** - The application’s page. Here is our element with id=“root” and the 
    
    ```html
    <script type="module" src="/src/main.js"></script>
    ```

    This means that when the request comes in, Vite sends the `main.js` file to the browser as a native ES module. No need to go deeper, just remember that during development Vite is a server, and `index.html` is the entry point to your application.

    The folder that holds `index.html` is referred as **root folder**.

   - **main.jsx** - The application’s startup script. Here we render the App component in the DOM with the ReactDOM library. 

   - **App.jsx** - The root component of the application. Here we will include all other components that will shape the application’s UI. 

    There are also the familiar files **package.json** and **package-lock.json** and **vite.config.js**, which we will not review now.
  
2. Let's change web page's title in the scaffolded **index.html**:
   
   ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        ...
        <title>Movies</title>
      </head>
      <body>
        ...
      </body>
    </html>
   ```
   
   

3. Change other files as follows:
   1. **App.jsx** - This is our main component. For now it will only render `div` element with text `Movies` in it.
   
   ```javascript
      import "./App.css";

      function App() {
        return <div>Movies</div>;
      }

      export default App;
   ```

   1.  **main.jsx** - Find the `root` element and see how `App component` is loaded.
   
   ```javascript
    import React from 'react'
    import ReactDOM from 'react-dom/client'
    import App from './App'
    import './index.css'

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
   ```
   
1. Start the project again. Does your main component load?
2. Install [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en#:~:text=Created%20from%20revision%20fed4ae024%20on,%22%20and%20%22%E2%9A%9B%EF%B8%8F%20Profiler%22.) and review html structure.

Congrats! You've created your very first react application!
