console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()





function numPointsScored(playerName) {
  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.name === playerName) {
        return player.points;
      }
    }
  }
  return null; // Player not found
}


function shoeSize(playerName) {
  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.name === playerName) {
        return player.shoe;
      }
    }
  }
  return null; // Player not found
}


function teamColors(teamName) {
  for (const team of game.teams) {
    if (team.name === teamName) {
      return team.colors;
    }
  }
  return null; // Team not found
}


function teamNames() {
  return game.teams.map((team) => team.name);
}



function playerNumbers(teamName) {
  for (const team of game.teams) {
    if (team.name === teamName) {
      return team.players.map((player) => player.number);
    }
  }
  return []; // Team not found
}


function playerStats(playerName) {
  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.name === playerName) {
        return {
          points: player.points,
          shoe: player.shoe,
          number: player.number,
        };
      }
    }
  }
  return null; // Player not found
}



// Function Building Work


function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;

  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = player;
      }
    }
  }

  return playerWithLargestShoe ? playerWithLargestShoe.rebounds : null;
}



console.log(bigShoeRebounds());




// Bonus Questions

function mostPointsScored() {
  let maxPoints = 0;
  let playerWithMostPoints = null;

  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.points > maxPoints) {
        maxPoints = player.points;
        playerWithMostPoints = player;
      }
    }
  }

  return playerWithMostPoints ? playerWithMostPoints.name : null;
}

console.log(mostPointsScored()); // Output should be the name of the player with the most points


function winningTeam() {
  let teamPoints = {};

  for (const team of game.teams) {
    let totalPoints = 0;
    for (const player of team.players) {
      totalPoints += player.points;
    }
    teamPoints[team.name] = totalPoints;
  }

  // maximum points
  let winningTeamName = null;
  let maxPoints = 0;

  for (const [teamName, points] of Object.entries(teamPoints)) {
    if (points > maxPoints) {
      maxPoints = points;
      winningTeamName = teamName;
    }
  }

  return winningTeamName;
}

console.log(winningTeam()); // Output should be the name of the team with the most total points


function playerWithLongestName() {
  let maxLength = 0;
  let playerWithLongestName = null;

  for (const team of game.teams) {
    for (const player of team.players) {
      if (player.name.length > maxLength) {
        maxLength = player.name.length;
        playerWithLongestName = player;
      }
    }
  }

  return playerWithLongestName ? playerWithLongestName.name : null;
}

console.log(playerWithLongestName()); // Output should be the name of the player with the longest name
