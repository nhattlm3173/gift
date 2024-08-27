const firstShow = document.querySelector(".firstShow");
const CloseBtn = document.querySelector(".closeButton");
const YesBtn = document.querySelector("#BtnYES");
const NoBtn = document.querySelector("#BtnNO");
CloseBtn.addEventListener("click", () => {
    firstShow.style.display = "none";
})
NoBtn.addEventListener("click", () => {
    const randomNumberX = Math.floor(Math.random() * 21);
    const randomNumberY = Math.floor(Math.random() * 21);
    NoBtn.style.transform = `translate(${randomNumberX}rem, ${randomNumberY}rem)`
})
YesBtn.addEventListener("click", () => {
    firstShow.style.display = "flex";
})
