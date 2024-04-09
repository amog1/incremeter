// INCREMENTING VARIABLES & RANDOM VALUES
let counter = 0;
// 1. Saving elements as variables cleans up your code.
var displayEl = document.getElementById("display");
var plus1Btn = document.getElementById("plus1");
var minus10Btn = document.getElementById("minus10");
var minus50Btn = document.getElementById("minus50");
var minus1Btn = document.getElementById("minus1");
var plus10Btn = document.getElementById("plus10");
var plus50Btn = document.getElementById("plus50");
var stringInEl = document.getElementById("strIn");
var stringOutEl = document.getElementById("strOut");

// 2. Incrementing. The ++, --, +=, and -= operators are used to update variables without losing what was there before
// document.getElementById("plus1").addEventListener("click", add1);

plus1Btn.addEventListener("click", add1);
minus10Btn.addEventListener("click", sub10);
minus50Btn.addEventListener("click", sub50);
plus50Btn.addEventListener("click", add50);
plus10Btn.addEventListener("click", add10);
minus1Btn.addEventListener("click", sub1);

function sub1() {
  counter = counter - 1;
  displayEl.innerHTML = counter;
}

function add50() {
  counter = counter + 50;
  displayEl.innerHTML = counter;
}

function add10() {
  counter = counter + 10;
  displayEl.innerHTML = counter;
}

function sub50() {
  counter = counter - 50;
  displayEl.innerHTML = counter;
}

function add1() {
  counter = counter + 1;
  //   console.log(counter);
  displayEl.innerHTML = counter;
}

function sub10() {
  counter = counter - 10;
  displayEl.innerHTML = counter;
}
// 3. The += operator also works to update strings. Also, the "change" event can remove the need for buttons!
stringInEl.addEventListener("change", updateStory);
var story = "Once upon a time. ";
function updateStory() {
  var newWord = stringInEl.value;

  //   console.log(story);
  stringInEl.value = "";
  story += newWord + "";
  stringOutEl.innerHTML = story;
}
// 4. Math.random() is used to bring RNG (random number generator) to your applications.

// let rand = Math.random() * 100; // 0-99.9
// rand = Math.floor(rand); // 0-100
// rand -= 50;
// console.log(rand);
var rand1Btn = document.getElementById("rand1");
var rand2Btn = document.getElementById("rand2");
var rand3Btn = document.getElementById("rand3");
var rand1OutlEl = document.getElementById("rand1-out");
var rand2OutlEl = document.getElementById("rand2-out");
var rand3OutlEl = document.getElementById("rand3-out");
var rand4Btn = document.getElementById("rand4");
var rand4OutlEl = document.getElementById("rand4-out");
var randIn1 = document.getElementById("rand-in1");
var randIn2 = document.getElementById("rand-in2");

rand1Btn.addEventListener("click", showRand1);

function showRand1() {
  var rand = Math.random();
  // rand = Math.floor();

  rand1OutlEl.innerHTML = rand;
}

rand2Btn.addEventListener("click", showRand2);

function showRand2() {
  var rand2 = Math.random() * 100;
  rand2.toFixed(3);
  rand2OutlEl.innerHTML = rand2;
}

rand3Btn.addEventListener("click", showRand3);

function showRand3() {
  var rand3 = Math.random() * 11 + -5;
  rand3.toFixed(3);

  rand3OutlEl.innerHTML = rand3;
}
//

rand4Btn.addEventListener("click", showRand4);

function showRand4() {
  let smallNum = +document.getElementById("rand-in1").value;
  let largenum = +document.getElementById("rand-in2").value;
  let randomnum = Math.random() * (largenum - smallNum + 1) + smallNum;

  document.getElementById("rand4-out").innerHTML = randomnum;
}

// windows reload
var reload = document.getElementById("reset");
reload.addEventListener("click", rload);
function rload() {
  location.reload();
}

// random colour
var recolour = document.getElementById("random-rgb");
recolour.addEventListener("click", rgbcolour);

function rgbcolour() {
  let n1 = Math.random() * 255 + 0;
  let n2 = Math.random() * 255 + 0;
  let n3 = Math.random() * 255 + 0;

  var rgbString = `rgb(${n1}, ${n2}, ${n3})`;

  document.getElementById("HTML").style.background = rgbString;
}

// Random size button

var changefb1 = document.getElementById("random-size");
var changef = document.getElementById("changefont1");
changefb1.addEventListener("click", buttonchange);

function buttonchange() {
  let random = Math.random() * 20 + 5;

  document.getElementById("changefont1").style.fontSize = `${random}px`;
}

// function changeSize() {
//   // let random =
//   //  ..... .style.fontSize = `${random}px`;
// }
