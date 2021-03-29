Game of S.K.A.T.E Scoreboard 

<p>Hi!, this is a refactored version of my Game of S.K.A.T.E (GOS) Scoreboard, prev version is running on http://chaosfingershop.com/gameofskate
</p>
<p>GOS is a popular game in the skateboarding and fingerboarding environment, it requires at least 2 players to be played</p>

<p>How to play a GOS?</p>

<p>Here are the rules and steps to start a traditional GOS:</p>

<p>1.- Choose the initial player (you can play paper, siccors, rock, but this score board selects a random odd(player2) or even (player1) to start the game</p>

<p>2.The initial player is set as "leader" (in this app the leader has a crown next to his name)and starts by saying a trick and doing it, if the player lands the <p>trick the other player must repeat it.</p>

<p>3.If the other player fails on repeating leader's trick it would recieve an letter until he completes the word SKATE</p>

<p>4.If the "leader" says a trick and fails it, he automatically losses the leader position and it's time for the other player to be the leader.</p>

<p>5.The player(wich is not leader) gets 2 attempts in the last letter ("S.K.A.T")</p>

<p>6.If the player fails in the two attempst lost the game, and if he saves it in the last attempt, he keeps in the game (and also gets one point in "last attemps saved" statistics.
</p>


<p>This app also recolects statistics of the game that are difficult to recolect by hand </p>


<p>Here is a detailed list of the statistics recolected by the game:</p>


<p>Prevalence: this key counts how many times the player has the domain of the game</p>

<p>Response: this key counts how many times the player responces a landed trick to the oppenent</p>

<p>LastAttempSaved: this key counts how many times the player responces a trick in the second

attempt on the last Letter</p>


<p>About the architecture of the code:</p>


<p>I've used no externa libraries for state management, instead of that I used the useContext and useReducer built in hooks (from ReactJS)
Main state and reducers are contained on App.js at the moment.</p>

<p> Scoreboard component gots the game's rules detailed above</p>

<p>This is all at this point!</p> 

<p>Styles and responsive behavior isn't done yet and it's gonna be ready on next releases</p>




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
