const body = document.querySelector('.body');
const btn = document.querySelector('.btn');

let bgColor = ["pink", "red", "blue", "purple", "orange", "lemon", "indigo", "brown", "aqua", "chocolate", "coral", "cyan", "deeppink", "fuchsia"];
// let i = 0;



btn.addEventListener("click", () => {
    let randomColors = bgColor[Math.floor(Math.random() * bgColor.length)];

        // if (i < bgColor.length) {
        //     i = ++i;
        // } else {
        //     i = 0;
        // }
        console.log(randomColors);

        body.style.background = randomColors;
    });