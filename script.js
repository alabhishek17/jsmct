// let firstName=document.getElementById("first_name");
let middleName=document.getElementById("middle_name");
let lastName=document.getElementById("last_name");
let display=document.getElementById("display-content");
let inputField=document.getElementById("input-detail")
// console.log(firstName.value);


const debounce=(fn, delay)=>{
    let timer; //closure variable is undefind
    return function (){
        timer && clearTimeout(timer);
        // if time is not defind set it run the function after delay
    
        timer=setTimeout(()=>{
            fn();
        },delay);
    }

};
    function display1(){
        console.log(document.getElementById("first_name").value);
    }


// firstName.addEventListener("input",debounce(display1,1000))
// middleName.addEventListener("input",second)
document.getElementById("first_name").addEventListener("input",debounce(display1,1000));