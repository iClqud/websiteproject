// Event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let score = 0;
  let answer1 = +document.getElementById("ans-1").value; // Question 1
  let answer2 = document.getElementById("ans-2").value.toLowerCase(); // Question 2
  let answer3 = document.getElementById("ans-3").value.toLowerCase(); // Question 3
  let answer4 = document.getElementById("ans-4").value.toLowerCase(); // Question 4

  // Question 1 if statement
  if (answer1 === 5) {
    document.getElementById("feedback-1").innerHTML = `<p>Correct!</p>
    `;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-1"
    ).innerHTML = `<p class="red">Incorrect</p>`;
  }

  // Question 2 if statement
  if (answer2 === "nba" || answer2 === "national basketball association") {
    document.getElementById("feedback-2").innerHTML = `<p>Correct!</p>
    `;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-2"
    ).innerHTML = `<p class="red">Incorrect</p>`;
  }

  // Question 3 if statement
  if (
    answer3 === "luka doncic" ||
    answer3 === "luka" ||
    answer3 === "ja morant" ||
    answer3 === "ja"
  ) {
    document.getElementById("feedback-3").innerHTML = `<p>Correct!</p>
    `;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-3"
    ).innerHTML = `<p class="red">Incorrect</p>`;
  }

  // Question 4 if statement
  if (answer4 === "grizzlies" || answer4 === "memphis grizzlies") {
    document.getElementById("feedback-4").innerHTML = `<p>Correct!</p>
    `;
    score = score += 1;
    document.getElementById("output").innerHTML = score;
  } else {
    document.getElementById(
      "feedback-4"
    ).innerHTML = `<p class="red">Incorrect</p>`;
  }
  //   Celebration Output
  if (score === 0) {
    document.getElementById("output3").innerHTML =
      "You didn't solve any of the questions, try again.";
  } else if (score === 1) {
    document.getElementById("output3").innerHTML = "Better luck next time!";
  } else if (score === 2) {
    document.getElementById("output3").innerHTML = "You passed!";
  } else if (score === 3) {
    document.getElementById("output3").innerHTML = "Well done!";
  } else {
    document.getElementById("output3").innerHTML = "Excellent!";
  }

  //   Percentage score output
  if (score === 0) {
    document.getElementById("output2").innerHTML = "0%";
  } else if (score === 1) {
    document.getElementById("output2").innerHTML = "25%";
  } else if (score === 2) {
    document.getElementById("output2").innerHTML = "50%";
  } else if (score === 3) {
    document.getElementById("output2").innerHTML = "75%";
  } else {
    document.getElementById("output2").innerHTML = "100%";
  }
}
