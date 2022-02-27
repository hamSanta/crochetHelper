const stitchCount = document.querySelector(".stitches");
const error = document.getElementById("errors");

var stitches = 0;


function updateStitches(amount) {
    stitches += amount;
    if (stitches < 0) {
        stitches = 0;
    }
    stitchCount.textContent = stitches
}

document.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "ArrowUp":
            updateStitches(1);
            break;
        case "ArrowDown":
            updateStitches(-1);
            break;
    }
});