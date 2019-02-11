var enemy = {
  health: 100,
  name: "Chuck Norris",
  hits: 0,
  currentItems: []
}
let player = {
  health: 100,
  name: "You",
  hits: 0
}
var friends = {
  joePiscopo: { name: 'Joe Piscopo', modifier: 1, description: 'Sidekicks', move: 'looked at funny', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWYjjkC1AMAsrNhpNbpe14XcOVgD-S2gy-Ej3KK5OqFx4HnK2CBg' },
  randySavage: { name: 'Macho Man Randy Savage', modifier: 7, description: 'Walker, TR - Fight or Die', move: 'suplex slammed', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TxHmQ9TCxpvyoh8Ir9I1lVNlnghQcugZT4nFOSDTeUA3bCn2' },
  davidCarradine: { name: 'David Carradine', modifier: 10, description: 'Lone Wolf McQuade', move: 'hit with some nasty "Kung-Fu"', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AL-67f8knSmRtIPD6fWk67DJWYnLNOv6oNorzOWRuQW9Wp-Hqg' },
  bruceLee: { name: 'Tang Lung', modifier: 20, description: 'Way of the Dragon', move: 'kicked with a reverse roundhouse', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeSePtGaEjrLadaEm8qW5uAXGp1TJw8lIonFDP8cM8THmqV3_Q' }
};
var endQuotes = [
  "Did you know I was in Star Wars?... I played 'The Force'",
  "They say when I was born I drove Mom home from the hospital", "Don't feel so bad... when there's a meteor shower, I grab my soap", "Once I died, but I'm alright now", "Run? I don't even have an escape key on my computer", "When I cut Onions, they cry", "I can even eat just one Lay's potato chip", "When I play volleyball, I like to use bowling balls",
];
var vicQuotes = [
  "I lost - but No one man can beat Chuck Norris", "I give up - Wish I could say it's good to see you again Bruce", "You Win - Nice little All-Star band... let's see you do it alone"
]
function hits() {
  setTimeout(hurtPic, 1);
  enemy.hits++;
  enemy.health -= addMods();

};
function display() {
  let action = [];
  for (let i = 0; i < enemy.currentItems.length; i++) {
    document.getElementById("result").innerText = `Chuck was also ${enemy.currentItems[i].move} by ${enemy.currentItems[i].name}. He must remember that from ${enemy.currentItems[i].description}`
  }
}
function gameOver() {
  if (enemy.health <= 0) {
    document.getElementById("winPhrase").innerText = vicQuotes[Math.floor(Math.random() * 3)];
    document.getElementById("jab").disabled = true;
    document.getElementById("bodyShot").disabled = true;
    document.getElementById("roundhouse").disabled = true;
  } else if
    (player.health <= 0) {
    document.getElementById("winPhrase").innerText = `Game Over`;
    document.getElementById("jab").disabled = true;
    document.getElementById("bodyShot").disabled = true;
    document.getElementById("roundhouse").disabled = true;
  } else {
    document.getElementById("winPhrase").innerText = endQuotes[Math.floor(Math.random() * 8)]
  }
}
function slap() {
  hits();
  enemy.health--;
  attack();
  update()
};
function bodyShot() {
  hits();
  enemy.health -= 5;
  attack();
  update()
};
function roundhouse() {
  hits();
  enemy.health -= 10;
  attack();
  update()
};
function update() {
  display();
  gameOver();
  document.getElementById("health").innerText = enemy.health.toString();
  document.getElementById("opponent").innerText = enemy.name.toString();
  document.getElementById("hits").innerText = enemy.hits.toString();
  document.getElementById("damage").innerText = player.health.toString();
  document.getElementById("you").innerText = player.name.toString();
  document.getElementById("hurts").innerText = player.hits.toString();
  enemy.currentItems = [];
  document.getElementById('bruce').style.display = 'none';
  document.getElementById('dave').style.display = 'none';
  document.getElementById('macho').style.display = 'none';
  document.getElementById('joe').style.display = 'none';
};
function askJoePiscopo() {
  enemy.currentItems.push(friends.joePiscopo);
  setTimeout(joePic, 1)
};
function askMachoMan() {
  enemy.currentItems.push(friends.randySavage);
  setTimeout(machoPic, 1)
};
function askDavidCarradine() {
  enemy.currentItems.push(friends.davidCarradine);
  setTimeout(davePic, 1)
};
function askBruceLee() {
  enemy.currentItems.push(friends.bruceLee);
  setTimeout(brucePic, 1)
};
function addMods() {
  var modTotal = 0;
  for (let i = 0; i < enemy.currentItems.length; i++) {
    modTotal += enemy.currentItems[i].modifier;
  }
  return modTotal;
};

function hurtPic() {
  document.getElementById('hurt').style.display = 'block';
};
function joePic() {
  document.getElementById('joe').style.display = 'block';
};
function machoPic() {
  document.getElementById('macho').style.display = 'block';
};
function davePic() {
  document.getElementById('dave').style.display = 'block';
}
function brucePic() {
  document.getElementById('bruce').style.display = 'block';
}
function attack() {
  player.hits++;
  player.health -= (15 + Math.floor(Math.random() * 45));
}
function knockOut() {
  if (enemy.health <= 0) {
    document.getElementById('body').style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRS1VgXA6T2OPdwcSx2PPqL5CvZwvcL-x_MmlKmjoCHF1A3KSP"
  }
}
