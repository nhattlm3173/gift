const firstShow = document.querySelector(".firstShow");
const closeGreetButton = document.querySelector(".closeGreetButton");
const closeTksButton = document.querySelector(".closeTksButton");
const closeHUHButton = document.querySelector(".closeHUHButton");
const closeByeButton = document.querySelector(".closeByeButton");
const container = document.querySelector(".container");
const YesBtn = document.querySelector("#BtnYES");
const NoBtn = document.querySelector("#BtnNO");
const TksShow = document.querySelector(".TksShow");
const HUHShow = document.querySelector(".HUHShow");
const ReasonShow = document.querySelector(".ReasonShow");
let count = 0;
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
    container.classList.remove('hide');
    ReasonShow.style.display = 'flex'

})
closeByeButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        ReasonShow.style.display = 'none';
    }, 500);

})
closeGreetButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        firstShow.style.display = 'none';
    }, 500);
})
closeHUHButton.addEventListener("click", () => {
    container.classList.add('hide');
    setTimeout(function () {
        HUHShow.style.display = 'none';
    }, 500);
})
NoBtn.addEventListener("click", () => {
    const randomNumberX = Math.floor(Math.random() * 15) - 10;
    const randomNumberY = Math.floor(Math.random() * 15) - 10;
    NoBtn.style.transform = `translate(${randomNumberX}rem, ${randomNumberY}rem)`
    count++;
    if (count >= 5) {
        container.classList.remove('hide');
        HUHShow.style.display = 'flex';
        count = 0;
    }
})
YesBtn.addEventListener("click", () => {
    container.classList.remove('hide');
    TksShow.style.display = 'flex';
})
// document.getElementById('fireworksButton').addEventListener('click', () => {
//     createFireworks();
// });

// const canvas = document.getElementById('fireworksCanvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// function createFireworks() {
//     const particles = [];
//     const numberOfParticles = 100;
//     const explosionCenter = {
//         x: canvas.width / 2,
//         y: canvas.height / 2
//     };

//     for (let i = 0; i < numberOfParticles; i++) {
//         particles.push(new Particle(explosionCenter.x, explosionCenter.y));
//     }

//     function animate() {
//         ctx.clearRect(0, 0, canvas.width, canvas.height);

//         particles.forEach((particle, index) => {
//             if (particle.alpha > 0) {
//                 particle.update();
//                 particle.draw();
//             } else {
//                 particles.splice(index, 1);
//             }
//         });

//         if (particles.length > 0) {
//             requestAnimationFrame(animate);
//         }
//     }

//     animate();
// }

// function Particle(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speed = Math.random() * 5 + 2;
//     this.angle = Math.random() * 2 * Math.PI;
//     this.size = Math.random() * 3 + 1;
//     this.alpha = 1;

//     this.update = function () {
//         this.x += Math.cos(this.angle) * this.speed;
//         this.y += Math.sin(this.angle) * this.speed;
//         this.alpha -= 0.01;
//     };

//     this.draw = function () {
//         ctx.save();
//         ctx.globalAlpha = this.alpha;
//         ctx.fillStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.closePath();
//         ctx.fill();
//         ctx.restore();
//     };
// }