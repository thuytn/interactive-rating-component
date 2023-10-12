const scores = document.querySelectorAll(".rating-cart__score")
const submit = document.querySelector(".rating-card__submit")
const ratingCard = document.querySelector(".rating-card")
const thankCard = document.querySelector(".thank-card")
const ratingScore = document.querySelector(".thank-card__rating")

let selectedScore = null

scores.forEach(score => {
    score.addEventListener("click", () => {
        scores.forEach(score => score.classList.remove("active"))
        score.classList.add("active")
    })
})

submit.addEventListener("click", () => {
    let hasActive = false
    scores.forEach((score, index) => {
        if (score.classList.contains("active")) {
            hasActive = true
            selectedScore = score.textContent
        }
    })
    if (hasActive) {
        ratingCard.style.display = "none"
        thankCard.style.display = "flex"
        ratingScore.textContent = `You selected ${selectedScore} out of 5`
    }
})




