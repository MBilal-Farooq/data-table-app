[![Build Status](https://dev.azure.com/bilalfarooq112/React%20Components/_apis/build/status/MBilal-Farooq.data-table-app?branchName=master)](https://dev.azure.com/bilalfarooq112/React%20Components/_build/latest?definitionId=5&branchName=master)

# Data Table App

Data Table Component demo app

## Components

### **Table Component**

Typescript based generic component to show data in form of table

#### Features
    1. Customizable columns
    2. Adjustable column Widths
    3. Right Alignment of numeric cells
    4. Selectable rows with controlable state
    5. Row Click event
    6. Loader
    7. onScrollToEnd event for handling infinite scroll

### **Data Table Component**

DataTable is wrapper of Table component, which provides same functionality with a little different evets types for CheckBox selection changes.

### **Table Demo**

TableDemo component is demo component to show the DataTable component, Data fetching fro api is being done in this component. Handling of OnScrollEnd event to load more data is also handled in this component.

## Hooks

### **useFetch**

useFetch is custom hook to fetch data from api. It also provides pagination functionality for data.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
