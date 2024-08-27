const firstShow = document.querySelector(".firstShow");
const CloseBtn = document.querySelector(".closeButton");
const container = document.querySelector(".container");
const YesBtn = document.querySelector("#BtnYES");
const NoBtn = document.querySelector("#BtnNO");
CloseBtn.addEventListener("click", () => {

    container.classList.add('hide');
    setTimeout(function () {
        firstShow.style.display = 'none';
    }, 500);
})
NoBtn.addEventListener("click", () => {
    const randomNumberX = Math.floor(Math.random() * 21);
    const randomNumberY = Math.floor(Math.random() * 21);
    NoBtn.style.transform = `translate(${randomNumberX}rem, ${randomNumberY}rem)`
})
YesBtn.addEventListener("click", () => {
    container.classList.remove('hide');
    firstShow.style.display = 'flex';
})
