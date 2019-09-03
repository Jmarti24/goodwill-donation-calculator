//seperate input values for each button category (would have its own value)

var currentButton = -1;
// To move to local/session storage, change the array into a stored object and use functions to get/set the values.
var inputValues = [0,0,0,0,0,0,0,0,0,0,0,0];
var assignedTaxValues = [3,3,3,4,8,1,2,8,20,3,2,0];
var calculation = [0,0,0,0,0,0,0,0,0,0,0,0];
var total = 0;

function goToButtonView(btnNumber) {
  $(".caculator").css("background-color:white");

  $("#btnview").removeClass("hidden");
  $("#mainview").addClass("hidden");
  $("#resultsview").addClass("hidden");

  currentButton = btnNumber;
  $("#buttonInput")[0].value = inputValues[currentButton];
}

function returnToMainView() {
  $("#mainview").removeClass("hidden");
  $("#btnview").addClass("hidden");
  $("#resultsview").addClass("hidden");
}

function updateCurrentValue() {
  let num = parseFloat($("#buttonInput")[0].value);
  //what does [0].value stand for
  if (num >= 0) {
  inputValues[currentButton] = num;
  }
}

function showResults() {
  $("#resultsview").removeClass("hidden");
  $("#mainview").addClass("hidden");
  $("#btnview").addClass("hidden");

  calculateReturns();

  for (var i = 0; i < inputValues.length; i++) {
    $("#result" + i).text("" + inputValues[i] + " items for $" + calculation[i]);
  }

  $("#resultTotal").text(total);
}

function calculateReturns() {
  total = 0;
  for (var i=0; i < inputValues.length; i++){
    calculation[i] = inputValues[i] * assignedTaxValues[i];
    total += calculation[i];
  }
};
