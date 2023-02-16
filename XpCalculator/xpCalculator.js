// const lvlFifty = 156,000,000 XP;
// GET / api / v1 / player_xp_requirements.json
// let userXp = window.prompt('How much XP do you currently have');
// let lvlFifty = 156000000 - userXp;
// document.write('You have ' + userXp + ' XP. You need ' + lvlFifty + ' xp reach level fifty ')

let levelCheck;

document.getElementById('submit').onclick = function () {

 //to round things up/down
 function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
 }
 levelCheck = document.getElementById('userXpInput').value;
 console.log(levelCheck);
 // Xp needed to reach level 50
 lvlNeeded = round(176000000 - levelCheck)
 console.log('you need ' + lvlNeeded + ' XP to reach level 50');
 // complete this many raids to reach level 50 (no luckyegg no friends)
 lvlRaid = round(lvlNeeded / 10000);
 console.log(lvlRaid + ': 5 star raids need to be done with no lucky egg or friends');
 // complete this many raids with lucky egg active but no friends to reach level 50
 lvlRaidEgg = round(lvlNeeded / 20000);
 console.log(lvlRaidEgg + ': 5 star raids need to be done with lucky egg and no friends');
 // complete this many raids with lucky egg active and 10 new friends to reach level 50
 lvlRaidEggFriends = round(lvlNeeded / 80000, 2);
 console.log(lvlRaidEggFriends + ': 5 star raids need to be done with lucky egg and 10 new friends');
 // how many hours/coins it would take being the most efficient possible by yourself
 hoursRaiding = round(lvlNeeded / 2160000);
 coinsSpentPHour = round(2825 * hoursRaiding);
 console.log('it will take you ' + hoursRaiding + ' hours' + ' or ' + (hoursRaiding / 24) + ' days ' + 'to get to level 50. A total of ' + coinsSpentPHour + ' coins');
 // how many dollars it took
 oneHD = round(coinsSpentPHour / 14500)
 console.log('it took $' + oneHD * 100);

 // personal stats display on page
 document.getElementById('pRaid').innerHTML = 'you have done a total of ' + (17600 - lvlRaid) + ' raids with no egg or friends... or'
 document.getElementById('pRaidEgg').innerHTML = 'you have done a total of ' + (8800 - lvlRaidEgg) + ' raids with a lucky egg... or'
 document.getElementById('pRaidEggFriends').innerHTML = 'you have done a total of ' + (2200 - lvlRaidEggFriends) + ' raids with a lucky egg and 10 new friends or some mix of all three of these'
 document.getElementById('pHoursRaiding').innerHTML = 'you have done a total of ' + (81 - hoursRaiding) + ' hours raiding'
 document.getElementById('pOneHD').innerHTML = 'you have/wouldve spent a total of $' + (1600 - (oneHD * 100))

 // to reach level 50 display on page
 document.getElementById('dLvlNeeded').innerHTML = 'you need ' + lvlNeeded + ' XP to reach level 50'
 document.getElementById('dLvlRaid').innerHTML = lvlRaid + ': 5 star raids need to be done with no lucky egg or friends'
 document.getElementById('dLvlRaidEgg').innerHTML = lvlRaidEgg + ': 5 star raids need to be done with lucky egg and no friends'
 document.getElementById('dLvlRaidEggFriends').innerHTML = lvlRaidEggFriends + ': 5 star raids need to be done with lucky egg and 10 new friends'
 document.getElementById('dhoursRaiding').innerHTML = 'it will take you ' + hoursRaiding + ' hours' + ' or ' + (hoursRaiding / 24) + ' days ' + 'to get to level 50. A total of ' + coinsSpentPHour + ' coins'
 document.getElementById('doneHD').innerHTML = 'it will cost you $' + oneHD * 100
}


// you need 176000000 XP to reach level 50

// 17600: 5 star raids need to be done with no lucky egg or friends

// 8800: 5 star raids need to be done with lucky egg and no friends

// 2200: 5 star raids need to be done with lucky egg and 10 new friends

// it will take you 81 hours or 3.375 days to get to level 50. A total of 228825 coins

// it will cost you $1600











// lvlraidcost =

// how to check how many times 8 fits into a number
// rules :
//  max amount of raids per hour is 27
// 13.5 per hour 2 lucky eggs
// 500/8= 62.5 coins 
// 125 coins per hour 
// plus 2700 coins for the raids
// 2825 coins per hour spent doing 27 raids which equals a total xp of 80000*27= 2,160,000









const eggCost = {
 1: "80 coins",
 8: "500 coins"
};
const coin_cost = {
 1: "100 coins",
 5: "550 coins",
 10: "1,200 coins",
 20: "2,500 coins",
 40: "5,200 coins",
 100: "14,500 coins"
};
const raidCost = coin_cost[1];

// alert(userXp = input("Please enter your xp"))

// 1400 = 1950 raids
// 3 raids per 1 egg = 240, 000 xp
// 800 eggs

// 156, 000, 000xp
// 20, 000, 000


