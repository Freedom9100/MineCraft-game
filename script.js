const slime = document.getElementById("slime");
const cactus = document.getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
})

function jump () {
    if (slime.classList != "jump") {
        slime.classList.add("jump")
    }
    setTimeout (function() {
        slime.classList.remove("jump")
    }, 900)
}

let isAlive = setInterval(function () {
    let slimeTop = parseInt(window.getComputedStyle(slime).getPropertyValue("top"))
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"))

    if (cactusLeft < 455 && cactusLeft > 415 && slimeTop >= 400) {
        alert("Game Over!")
    }
}, 10)
