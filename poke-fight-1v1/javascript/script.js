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
        alert("Login Failed! Wrong Username/Password Comination");
        window.open("login.html");

    }
}