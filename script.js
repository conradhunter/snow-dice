//Ski Tricks Arrays
const easySkiRail = [
  "Lip on",
  "FS",
  "BS",
  "F270 out",
  "B270 out",
  "Left 270 on",
  "Right 270 on",
  "Left 270 on",
  "Right 270 on",
  "5050",
  "Switch 5050",
];
const mediumSkiRail = [
  "270 pretz 270",
  "270 continuing 270",
  "Switch 270 pretz 270",
  "Switch 270 continuing 270",
  "Lip 270",
  "Switch Lip 270",
  "KFED",
  "Elusive",
  "Ray Charles",
  "Backslide",
  "Frontslide",
  "Back surface swap",
  "Front surface swap",
];
const hardSkiRail = [];

const easySkiJump = [
  "Left 180",
  "Right 180",
  "Switch Left 180",
  "Switch Right 180",
  "Left 360",
  "Right 360",
  "Switch Left 360",
  "Switch Right 360",
];
const mediumSkiJump = [
  "Left 540",
  "Right 540",
  "Switch Left 540",
  "Switch Right 540",
  "Left 720",
  "Right 720",
  "Switch Left 720",
  "Switch Right 720",
  "Left 900",
  "Right 900",
  "Switch Left 900",
  "Switch Right 900",
  "Left 1080",
  "Right 1080",
  "Switch Left 1080",
  "Switch Right 1080",
  "Cork 360",
  "Cork 540",
  "Cork 720",
  "Cork 900",
  "Cork 1080",
  "Switch Cork 360",
  "Switch Cork 540",
  "Switch Cork 720",
  "Switch Cork 900",
  "Switch Cork 1080",
  "Misty 540",
  "Misty 720",
  "Misty 900",
  "Misty 1080",
  "Switch Misty 540",
  "Switch Misty 720",
  "Switch Misty 900",
  "Switch Misty 1080",
  "Rodeo 540",
  "Rodeo 720",
  "Rodeo 900",
  "Rodeo 1080",
  "Switch Rodeo 540",
  "Switch Rodeo 720",
  "Switch Rodeo 900",
  "Switch Rodeo 1080",
];
const hardSkiJump = [];

const skiGrabs = [
    'Mute',
    'Lead Mute',
    'Trailing Mute',
    'Tail',
    'Lead Tail',
    'Trailing Tail',
    'Japan',
    'Lead Japan',
    'Trailing Japan',
    'Blunt',
    'Lead Blunt',
    'Trailing Blunt',
    'Opp Nose',
    'Same Nose',
    'Nose',
    'Dub Nose',
    'Cuban',
    'Lead Cuban',
    'Trailing Cuban',
    'Stalefish',
    'Lead Stalefish',
    'Trailing Stalefish',
    'Safety',
    'Lead Safety',
    'Trailing Safety',
    'Bow and Arrow',
    'Any Grab',
    'No Grab'
];

const easySkiGrabs = [
  'Mute',
  'Safety',
  'Tail',
  'Nose', 
  'Japan',
  'No Grab',
  'Any Grab'
];

//Snowboard Tricks Arrays
const easySnowboardRail = [];
const mediumSnowboardRail = [];
const hardSnowboardRail = [];

const easySnowboardJump = [];
const mediumSnowboardJump = [];
const hardSnowboardJump = [];

// Logic

const outputHeading = document.querySelector("#output");

const randomGrab = skiGrabs[Math.floor(Math.random() * skiGrabs.length)];

// Easy Tricks Logic
function generateEasySkiJumpTrick() {
  const randomEasyGrab = easySkiGrabs[Math.floor(Math.random() * easySkiGrabs.length)];
  const randomEasyJumpTrick = easySkiJump[Math.floor(Math.random() * easySkiJump.length)] + ' ' + randomEasyGrab;
  function appendTrick() {
    outputHeading.innerHTML = randomEasyJumpTrick;
  }
  appendTrick();
}

function generateEasySkiRailTrick() {
  const randomEasyRailTrick = easySkiRail[Math.floor(Math.random() * easySkiRail.length)];
  function appendTrick() {
    outputHeading.innerHTML = randomEasyRailTrick;
  }
  appendTrick();
}

// Medium Tricks Logic
function generateMediumSkiJumpTrick() {
  const randomGrab = skiGrabs[Math.floor(Math.random() * skiGrabs.length)];
  const randomMediumJumpTrick = mediumSkiJump[Math.floor(Math.random() * mediumSkiJump.length)] + ' ' + randomGrab;
  function appendTrick() {
    outputHeading.innerHTML = randomMediumJumpTrick;
  }
  appendTrick();
}

function generateMediumSkiRailTrick() {
  const randomMediumRailTrick = mediumSkiRail[Math.floor(Math.random() * mediumSkiRail.length)];
  function appendTrick() {
    outputHeading.innerHTML = randomMediumRailTrick;
  }
  appendTrick();
}
