let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here


//If you need, add any "helper" functions here


//Make one function for each location
function locationA() {
    clear();
    print("\nYou are in location A!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationB");
    
    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationC" +
        "\n\tlocationD");
    
    function processInput(input){
          if (input.toLowerCase() === "locationc") {
            locationC();
        } else if (input.toLowerCase() === "locationd") {
            locationD();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

function locationC() {
    clear();
    print("\nYou are in location C!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationD");
    
    function processInput(input){
        if (input.toLowerCase() === "locationd") {
            locationD();
        } else {
            stayHere();
            waitThenCall(locationC);
        }
    }
    waitForInput(processInput);
}

function locationD() {
    clear();
    print("\nYou are in location D!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationE");
    
    function processInput(input){
        if (input.toLowerCase() === "locatione") {
            locationE();
        } else {
            stayHere();
            waitThenCall(locationD);
        }
    }
    waitForInput(processInput);
}
//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            locationA();
    }
    waitForInput(processInput);
}