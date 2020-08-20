let element = document.querySelector("kbd");
document.addEventListener("keypress", function(event) {

    if (event.code == "KeyA"  ) {
        let audioObject = new Audio("white_keys/A.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyS") {
        let audioObject = new Audio("white_keys/S.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyD") {
        let audioObject = new Audio("white_keys/D.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyF") {
        let audioObject = new Audio("white_keys/F.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyG") {
        let audioObject = new Audio("white_keys/G.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyH") {
        let audioObject = new Audio("white_keys/H.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyJ") {
        let audioObject = new Audio("white_keys/J.mp3");
        audioObject.play();
        console.log("The " + "'" +event.key+"'" + " key is pressed.");
    }else if (event.code == "KeyE") {
        let audioObject = new Audio("black_keys/E.mp3");
        audioObject.play();
    }else if (event.code == "KeyT") {
        let audioObject = new Audio("black_keys/T.mp3");
        audioObject.play();
    }else if (event.code == "KeyU") {
        let audioObject = new Audio("black_keys/U.mp3");
        audioObject.play();
    }else if (event.code == "KeyW") {
        let audioObject = new Audio("black_keys/W.mp3");
        audioObject.play();
    }else if (event.code == "KeyY") {
        let audioObject = new Audio("black_keys/Y.mp3");
        audioObject.play();
    }else{
        console.log("Please press a valid key.");
    }
    /*
        if (event.code){
            console.log("The " + "'" +event.key+"'" + " key is pressed.");
            let audioObject = new Audio("white_keys/A.mp3");
            audioObject.play();
        }else {
            console.log("Make sure you connect the external scripts to the HTML. Otherwise, the new functionality of the musical instrument will not be available.");
        }
    */
});



