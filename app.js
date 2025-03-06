let number = document.getElementById('number');

let increase_btn = document.getElementById('increase-btn');
let reset_btn = document.getElementById('reset-btn');
let decrease_btn = document.getElementById('decrease-btn');

let num = 0;

increase_btn.addEventListener('click', function(){

    function increase(){
        num += 1;
        return num;
    }

    number.innerHTML = increase();
    console.log();

})






reset_btn.addEventListener('click', function(){
    function increase(){
        num = 0;
        return num;
    }

    number.innerHTML = increase();
})






decrease_btn.addEventListener('click', function(){
    function increase(){
        num -= 1;
        return num;
    }

    number.innerHTML = increase();
})