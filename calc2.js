// kintamieji susiejami su html

let clearButton = document.querySelector("#c-btn");
let screen = document.querySelector("#output");
let calcButton = document.querySelectorAll(".calc-btn");
let buttonResult = document.querySelector("#btn-result");

// clear mygtukui priskiriame funkcija ekrano isvalymui (ikeliant tuscia string'a)

clearButton.addEventListener("click", function() {
    screen.value = "";
});

for(var i = 0; i < calcButton.length; i++) {
    calcButton[i].addEventListener("click", function(event){
        screen.value = screen.value + event.target.value;
    })
}

buttonResult.addEventListener("click", function(){
    let output = eval(screen.value);
    screen.value = output;
})