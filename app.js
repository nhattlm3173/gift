const firstShow = document.querySelector(".firstShow");
const closeGreetButton = document.querySelector(".closeGreetButton");
const closeTksButton = document.querySelector(".closeTksButton");
const container = document.querySelector(".container");
const YesBtn = document.querySelector("#BtnYES");
const NoBtn = document.querySelector("#BtnNO");
const TksShow = document.querySelector(".TksShow");
closeGreetButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        firstShow.style.display = 'none';
    }, 500);
})
closeTksButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        TksShow.style.display = 'none';
    }, 500);
})
closeGreetButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        firstShow.style.display = 'none';
    }, 500);
})
NoBtn.addEventListener("click", () => {
    const randomNumberX = Math.floor(Math.random() * 11);
    const randomNumberY = Math.floor(Math.random() * 11);
    NoBtn.style.transform = `translate(${randomNumberX}rem, ${randomNumberY}rem)`
})
YesBtn.addEventListener("click", () => {
    container.classList.remove('hide');
    TksShow.style.display = 'flex';
})
