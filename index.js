import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 
(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

// let HomeTeam = fifaData.filter((home) => {
//     if (home.Year === 2014 && home.Stage === "final") {
//         return home["Home Team Name"];
//     }
// });
// console.log(HomeTeam);

function findGame(games) {
    for (var i = 0; i < games.length; i++) {
        let game = games[i];
        if (game['Year'] === 2014 && game['Stage'] === 'Final') {
            return games.indexOf(game);
        }
    }
}

console.log(findGame(fifaData));

console.log(fifaData[828]['Home Team Name']);
console.log(fifaData[828]['Away Team Name']);
console.log(fifaData[828]['Home Team Goals']);
console.log(fifaData[828]['Away Team Goals']);
console.log(fifaData[828]['Win conditions']);
 

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(arr) {
        const finalsArr = arr.filter(obj => obj['Stage'] === 'Final')
        return finalsArr;
};
console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {

    const getYears = getFinals.map( obj => obj['Year']);
    return getYears;

};

console.log(getYears(fifaData));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(finalsArr) {

    const winners = finalsArr.map(obj => {
        if (obj['Home Team Goals'] > obj['Away Team Goals']) {
            return obj['Home Team Name'];
        } else {
            return obj['Away Team Name'];
        }
    });
    return winners;
};

console.log(getWinners(fifaData));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 
Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(/* code here */) {

};

getWinnersByYear();

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(/* code here */) {

    /* code here */

};

getAverageGoals();

