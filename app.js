// Elements
const feedbackForm = document.getElementById("feedback-form");
const feedbackBtn = document.getElementById("feedback-btn");

const rateSpan = document.querySelectorAll(".rate-value span");

const feedbackResponse = document.getElementById("feedback-response");
const ratedValue = document.getElementById("rated-value");

// Variables
let selectedRate = 0;

// Event Listeners
feedbackBtn.addEventListener("click", (e) => {
  cardTransition();

  ratedValue.innerText = selectedRate;
});

for (let i = 0; i < rateSpan.length; i++) {
  rateSpan[i].addEventListener("click", (e) => {
    e.target.classList.add("active");
    selectedRate = e.target.dataset.rate;

    const parentElement = e.target.parentElement;

    for (let j = 0; j < parentElement.children.length; j++) {
      if (parentElement.children[j].dataset.rate !== e.target.dataset.rate) {
        parentElement.children[j].classList.remove("active");
      }
    }
  });
}

// Functions
function cardTransition() {
  feedbackForm.classList.add("card-fade-out");
  feedbackForm.addEventListener("animationend", () => {
    feedbackForm.style.display = "none";

    feedbackResponse.classList.add("card-fade-in");

    feedbackResponse.style.display = "block";
  });
}

function isLoading() {
  const divParent = document.createElement("div");
  const divChild = document.createElement("div");
  const divChild1 = document.cloneNode(divChild);
  const divChild2 = document.cloneNode(divChild);
  const divChild3 = document.cloneNode(divChild);
}
