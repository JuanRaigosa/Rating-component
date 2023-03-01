let numberContainer = document.querySelector(".rating-state__number-container");
let rateNumber = document.querySelector(".thank-you-state__result--number");
let submitBtn = document.querySelector(".rating-state__button");
let ratingState = document.querySelector(".rating-state");
let thankYouState = document.querySelector(".thank-you-state");

numberContainer.addEventListener("click", (event)=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if (numberSelected > 0 || numberSelected <=5){
        submitBtn.addEventListener("click", ()=>{
            ratingState.style.display = "none";
            thankYouState.style.display = "flex";
        })
    }
});

