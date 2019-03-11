let jokeButton = document.getElementById("joke-on");
let jokePrep = document.getElementById("joke-prep");
let jokePunch = document.getElementById("joke-punch");
let jokeContent = document.getElementById("joke-content");
let punchline = false;
let jokeNum = 0;
const jokes = [];


init();

jokeButton.addEventListener("click", () => {
    if (!punchline) {
        givePunch();
    } else {
        setupPrep();
    }
});

function init() {
    fetch("https://api.sheety.co/5e56609e-2334-49c2-a374-7fcd0aefc3bd")
        .then(blob => blob.json())
        .then(data => jokes.push(...data))
        .then(() => {
            jokeNum = Math.floor(Math.random() * jokes.length);
            jokeContent.textContent = jokes[jokeNum].prep;
        });
    jokeButton.textContent = "JOKE ON";
    punchline = false;

}

function setupPrep() {
    jokeNum = Math.floor(Math.random() * jokes.length);
    jokeButton.textContent = "JOKE ON";
    jokeContent.textContent = jokes[jokeNum].prep;
    jokeContent.classList.add("f5");
    jokeContent.classList.remove("black", "f3");
    jokePunch.setAttribute("hidden", "");
    jokePrep.removeAttribute("hidden");
    punchline = false;
}

function givePunch() {
    jokeButton.textContent = "LAGI OM";
    jokeContent.textContent = jokes[jokeNum].punch;
    jokeContent.classList.remove("f5");
    jokeContent.classList.add("black", "f3");
    jokePrep.setAttribute("hidden", "");
    jokePunch.removeAttribute("hidden");
    punchline = true;
}