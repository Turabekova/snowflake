setInterval(createsnoww, 5);

function createsnoww() {
    const snow = document.createElement("i");
    snow.classList.add("fa");
    snow.classList.add("fa-snowflake-o");


    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.animationDuration = Math.random() * 5 + 5 + "s";
    snow.style.opacity = Math.random();
    snow.style.fontSize = Math.random() + 10 + 7 + "px";

    document.body.append(snow);
    setTimeout(() => {
        snow.remove();
    }, 19000);
}