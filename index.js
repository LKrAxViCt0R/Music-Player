
for( var i =0; i<document.querySelectorAll(".player").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick(){

    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

document.getElementById("reload").addEventListener("click", reloadHandler);

function reloadHandler(){
    location.reload();
}

function makeSound(key){
    switch (key) {
        case "1":
            var judge = new Audio("./songs/Judge - Mankirt Aulakh.mp3")
            judge.play();
            break;

        case "2":
            var insane = new Audio("./songs/Insane - AP Dhillon.mp3")
            insane.play();
            break;
        case "3":
            var mrperfect = new Audio("./songs/[iSongs.info] 01 - Mr. Perfect.mp3")
            mrperfect.play();
            break;
        case "4":
            var brownrang = new Audio("./songs/03 Brown Rang - Yo Yo Honey Singh (PagalWorld.com) -190Kbps.mp3")
            brownrang.play();
            break;
        case "5":
            var nanana = new Audio("./songs/Na Na Na Na - J Star.mp3")
            nanana.play();
            break;
        case "6":
            var sooiyan = new Audio("./songs/02 Sooiyan - Guddu Rangeela (Arijit Singh) 190kbps.mp3")
            sooiyan.play();
            break;
        case "7":
            var hulara = new Audio("./songs/Hulara - J Star (PagalWorld.com) - 320kbps.mp3")
            hulara.play();
            break;
        case "8":
            var haule = new Audio("./songs/02. Haule Haule.mp3")
            haule.play();
            break;   
        case " ":
            location.reload();
            break;
        default:
            console.log(key);
            break;
    }
}

function buttonAnimation(currentkey){

    var activeButton = document.querySelector("."+currentkey)
    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    },100);
}
