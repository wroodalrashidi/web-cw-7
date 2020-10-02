const counter = document.querySelector(".counterButton");

let count = 0;

counter.addEventListener("click", incrementCounter);

function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (count == 1) {
    document.getElementById("status").innerHTML = "جيد";
  } else if (count > 1 && count < 6) {
    document.getElementById("status").innerHTML = "جيد جداً";
  } else if (count >= 6) {
    document.getElementById("status").innerHTML = "رائع";
  }
}
