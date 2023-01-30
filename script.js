const containerRate = document.querySelectorAll(".rate");
const submitBtn = document.querySelector(".submit-btn");
const ratingState = document.querySelector(".rate-state");
const voteForm = document.querySelector(".rating-form");
const thankForm = document.querySelector(".thank-form");

submitBtn.addEventListener('click', function () {
    thankForm.classList.remove("hidden");
    thankForm.style.display = "flex";
    voteForm.style.display = "none";
});

containerRate.forEach(function(rate){
    rate.addEventListener('click', function(){
        ratingState.innerHTML = `You selected ${rate.innerHTML} out of 5`;
    })
})