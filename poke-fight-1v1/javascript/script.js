var song = new Audio();
song.src = "music/bgmusic.mp3";
const playSong =()=>{
     song.play();

}
const pauseSong=()=>{
    song.pause();
}

function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "avinash" && password == "abc312") {
        alert("Logged in Successfuly!");
        window.open("game.html");
        
    }
    else if (username == "Anirudh" && password == "prasad") {
        alert("Logged in Successfuly!");
        window.open("game.html");

    }
    else if (username == "Ayush kumar" && password == "dubey") {
        alert("Logged in Successfuly!");
        window.open("game.html");

    }
    else if (username == "Ayush" && password == "sinha") {
        alert("Logged in Successfuly!");
        window.open("game.html");

    }
    
    else {
        alert("Login Failed! Wrong Username/Password Combination");
        window.open("login.html");

    }
}
