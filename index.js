const penguin = document.getElementById("penguin");


setInterval(() => {
    const ice1 = Math.min(Math.floor(Math.random() * 10) + 30, 100);  // Limit ice1 height to stay within frame
    const ice2 = Math.min(Math.floor(Math.random() * 20) + 20 + ice1Height, 100 - 20);  // Limit ice2 top position to stay within frame

    document.getElementById("ice1").style.height = ice1 + "%";
    document.getElementById("ice2").style.top = ice2 + "%";
    document.getElementById("ice2").style.height = (100 - ice2) + "%";
}, 4000);

setInterval(() => {
    const x = parseInt(window.getComputedStyle(penguin).getPropertyValue("top"));
    if (x <= 510) {
        penguin.style.top = (x + 3) + "px";
    } else {
        alert("You Lost !! your time is: " + score + "minute");
        penguin.style.top = 100 + "px";
        window.location.reload();
    }
}, 30);

function jump() {
    const fly = parseInt(window.getComputedStyle(penguin).getPropertyValue("top"));
    if (fly >= 14) {
        penguin.style.top = (fly - 40) + "px";
    }
}

document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        jump();
    }
});

let score = 0;
setInterval(() => {

    score++;
    document.getElementById("scr").innerHTML = score;
}, 500);


function checkCollision(element1, element2) {
    const element1Rect = element1.getBoundingClientRect();
    const element2Rect = element2.getBoundingClientRect();

    return (
        element1Rect.right >= element2Rect.left &&
        element1Rect.left <= element2Rect.right &&
        element1Rect.bottom >= element2Rect.top &&
        element1Rect.top <= element2Rect.bottom
    );
}

setInterval(() => {
    if (checkCollision(document.getElementById("penguin"), document.getElementById("ice1"))) {
        penguin.style.top = 513 + "px";
        setTimeout(() => {
            alert("You Lost !! your time is: " + score + "minute");
            return;
        }, 10);

    } else if (checkCollision(document.getElementById("penguin"), document.getElementById("ice2"))) {
        penguin.style.top = 513 + "px";
        setTimeout(() => {
            alert("You Lost !! your time is: " + score + "minute");
            return;
        }, 10);

    }
}, 100);
