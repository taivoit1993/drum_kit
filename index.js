
// detect button press
document.querySelectorAll("button").forEach(function (currentBtn, idx) {
    currentBtn.addEventListener('click', function () {
        var buttuonInnerHtml = this.innerHTML;
        makeSound(buttuonInnerHtml);
        buttonAnimation(buttuonInnerHtml);
    });
})

// detect key press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

// choose sound depend on buttun or key press
function makeSound(key){
    switch (key){
        case "w":
            var drum = new Audio("./sounds/crash.mp3")
            drum.play();
            break;
        case "a":
            var drum = new Audio("./sounds/kick-bass.mp3")
            drum.play();
            break;
        case "s":
            var drum = new Audio("./sounds/snare.mp3")
            drum.play();
            break;
        case "d":
            var drum = new Audio("./sounds/tom-1.mp3")
            drum.play();
            break;
        case "j":
            var drum = new Audio("./sounds/tom-2.mp3")
            drum.play();
            break;
        case "k":
            var drum = new Audio("./sounds/tom-3.mp3")
            drum.play();
            break;
        case "l":
            var drum = new Audio("./sounds/tom-4.mp3")
            drum.play();
            break;

    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove('pressed');
    },100)
}