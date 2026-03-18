let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let hasWater = false;
let hasShoes = false;
//If you need, add any "helper" functions here


//Make one function for each location
function BunkPorch() {
    clear();
    print("\nYou are on the porch of your bunk!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tTheHill" +
        "\n\tInsideTheBunk" +
        "\n\tGetShoes");
    
    function processInput(input){
        if (input.toLowerCase() === "thehill") {
            TheHill();
        }
        else if (input.toLowerCase() === "insidethebunk") {
            InsideTheBunk();  
        }
        else if (input.toLowerCase() === "getshoes") {
            hasShoes = true;
            print("\nYou got Shoes! Do you have water?");
            waitThenCall(InsideTheBunk);      
        }else{
            stayHere();
            waitThenCall(BunkPorch);
        }
    }
    waitForInput(processInput);
}

function InsideTheBunk() {
    clear();
    print("\nYou are in Inside The Bunk!");
    print("\nWhat do you want to do? Say one of these choices:" +
        "\n\tBunkPorch" +
        "\n\tGetWater");
    
    function processInput(input){
          if (input.toLowerCase() === "bunkporch") {
            BunkPorch();
          }
          else if (input.toLowerCase() === "getwater") {
            hasWater = true;
            print("\nYou got water! Now you can go down the hill!");
            waitThenCall(InsideTheBunk);  
        } else {
            stayHere();
            waitThenCall(InsideTheBunk);
        }
    }
    waitForInput(processInput);
}

function TheHill() {
    clear();
    print("\nYou are on The Hill!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tCARestStop");
    
    function processInput(input){
          if (input.toLowerCase() === "careststop") {
            CARestStop();
        } else {
            stayHere();
            waitThenCall(TheHill);
        }
    }
    waitForInput(processInput);
}

function CARestStop() {
    clear();
    print("\nYou are in CA_Rest_Stop!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tFootballField" +
        "\n\tThePool");
    
    function processInput(input){
        if (input.toLowerCase() === "footballfield") {
            FootballField();
        }
        else if (input.toLowerCase() === "thepool") {
            ThePool();
        }
        /*
        else if (!hasShoes || !hasWater) {
            print("\nYou don't have both Shoes and Water! Go get them!");
            waitThenCall(BunkPorch);   
        }
        */
         else{
            stayHere();
            waitThenCall(CARestStop);
        }
    }
    waitForInput(processInput);

function FootballField() {
    clear();
    print("\nYou are in Football_Field!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tGym");
    
    function processInput(input){
        if (input.toLowerCase() === "gym") {
            Gym();
        } else {
            stayHere();
            waitThenCall(FootballField);
        }
    }
    waitForInput(processInput);
}

function ThePool() {
    clear();
    print("\nYou are at The Pool!");
    print("\nWhere do you want to go next? :" +
        "\n\tGym");
    
    function processInput(input){
          if (input.toLowerCase() === "gym") {
            Gym();
        } else {
            stayHere();
            waitThenCall(ThePool);
        }
    }
    waitForInput(processInput);
}

function Gym() {
    clear();
    print("\nYou are at the Gym!");
    print("\nYou made it to the gym on time! Now you can play some basketball!");
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to my game! Press any key to start");

    function processInput(input){
            BunkPorch();
    }
    waitForInput(processInput);
}
}