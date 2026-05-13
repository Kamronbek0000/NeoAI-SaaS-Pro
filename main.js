function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


function selectFeature(name) {
  document.getElementById("featureText").innerText =
    "Selected feature: " + name;
}


function choosePlan(plan) {
  document.getElementById("planText").innerText =
    "You selected: " + plan + " plan 🚀";
}


function showEmail() {
  document.getElementById("emailText").innerText =
    "support@neoai.com";
}


function runAI() {
  let input = document.getElementById("input").value;

  if(input === "") {
    document.getElementById("output").innerText = "Write something!";
    return;
  }

  let result = "🤖 AI: " + input.split("").reverse().join("");
  document.getElementById("output").innerText = result;
}


window.onclick = function(e) {
  let modal = document.getElementById("modal");
  if(e.target === modal) {
    modal.style.display = "none";
  }
};