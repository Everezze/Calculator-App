const allButttons = document.getElementsByTagName('button');
console.log(allButttons);

const delAndResetButtons = document.getElementsByClassName('grid--bg');
// console.log(DelAndReset);

const equalButton= document.getElementById('equal');
// console.log(equal);

const toggle = document.querySelector('.toggle');
// console.log(toggle);

const toggleCircle= document.getElementById('toggle__circle');
// console.log(toggleCircle);

const grid= document.querySelector('.grid');
// console.log(grid);

let themeNumber = 1;

toggle.addEventListener('click', function(){

    // if(!toggleCircle.classList.contains('themeTwo') || !toggleCircle.classList.contains('themeThree')){}

    if(themeNumber == 1){

        document.documentElement.style.setProperty('--toggleAndKeypadBg', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--mainBg', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--inputBg', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--btn-bgcolor', 'hsl(30, 25%, 89%)');
        document.documentElement.style.setProperty('--btn-shadow', 'hsl(28, 16%, 65%)');
        document.documentElement.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        allButttons.style.setProperty('--PrimaryFg', 'hsl(221, 14%, 31%)');

        delAndResetButtons.style.setProperty('--btn-bgcolor', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--btn-shadow', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%);');
        
        
        equalButton.style.setProperty('--btn-bgcolor', 'hsl(6, 63%, 50%)');
        equalButton.style.setProperty('--btn-shadow', 'hsl(6, 70%, 34%)');
        equalButton.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        themeNumber += 1;
    }

    // toggle.classList.toggle('themeTwo');

    if(themeNumber == 2) {

        document.documentElement.style.setProperty('--mainBg', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--toggleAndKeypadBg', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--inputBg', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--btn-bgcolor', 'hsl(30, 25%, 89%)');
        document.documentElement.style.setProperty('--btn-shadow', 'hsl(28, 16%, 65%)');
        document.documentElement.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        allButttons.style.setProperty('--PrimaryFg', 'hsl(221, 14%, 31%)');

        delAndResetButtons.style.setProperty('--btn-bgcolor', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--btn-shadow', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%);');
        
        
        equalButton.style.setProperty('--btn-bgcolor', 'hsl(6, 63%, 50%)');
        equalButton.style.setProperty('--btn-shadow', 'hsl(6, 70%, 34%)');
        equalButton.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        themeNumber += 1;
    }

    if (themeNumber == 3) {
        
        document.documentElement.style.setProperty('--mainBg', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--toggleAndKeypadBg', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--inputBg', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--btn-bgcolor', 'hsl(30, 25%, 89%)');
        document.documentElement.style.setProperty('--btn-shadow', 'hsl(28, 16%, 65%)');
        document.documentElement.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        allButttons.style.setProperty('--PrimaryFg', 'hsl(221, 14%, 31%)');

        delAndResetButtons.style.setProperty('--btn-bgcolor', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--btn-shadow', 'hsl(225, 21%, 49%)');
        delAndResetButtons.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%);');
        
        
        equalButton.style.setProperty('--btn-bgcolor', 'hsl(6, 63%, 50%)');
        equalButton.style.setProperty('--btn-shadow', 'hsl(6, 70%, 34%)');
        equalButton.style.setProperty('--PrimaryFg', 'hsl(0, 0%, 100%)');

        themeNumber = 1;
    }
})

