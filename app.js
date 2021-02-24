
//i target input display and put in in a variable
const display = document.discal.display;

//this function is how to display number on display input
function get_val (value){

     display.value+=value;
}
// this functon is how to clearscreen on display calculator using C on calculator button
function cls(){

    display.value = " " 
}
// this function is how to calculate 
function calculate(){

    display.value = eval(display.value);
    
}
//this function is how to delete a number on display
function Delete(){

    var Delete = display.value.slice(0 , -1);
    display.value = Delete;
}

//this function is how to type number and the number appear on display & also after we complete the number that we want , 
// hit enter and t will calculate 
// i want to make when we hit backspace , the number will delete but soon or later i will think
document.addEventListener('keypress' , function(event){

    
    

    if (event.key === 'Enter') {

        
        
        event.preventDefault();
        calculate();
          
    }
    else {

            document.discal.display.value += event.key;
     
    }
});


