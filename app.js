// get target
const input = document.querySelector('[name = display]');
const button = document.querySelectorAll('.button');

//fucntion
const inputDisplay = (event) => {
    const buttonClicked = event.target.value;
   
    if(buttonClicked == '='){
        display.value = eval(display.value);
    }else if(buttonClicked == 'del'){
        display.value = display.value.slice(0 , -1);
    }else if (buttonClicked == ' '){
        display.value = ' ';
    }else{
        display.value += buttonClicked;
    } 
};

//addEventListner;
button.forEach((buttons) => {
   buttons.addEventListener('click' , inputDisplay);
});

